/**
 * Builder.
 *
 * @description Todo.
 */

import inquirer                         from 'inquirer'
import { exec, pkg, joinPath, copyDir } from './core/main.js'
import { buildSafari } from './safari-build/main.js'

const distPath      = joinPath( pkg.dir, 'dist' )
const getDistPath       = ( type ) => joinPath( distPath, type )
const getManPath        = ( type ) => joinPath( pkg.dir, 'src', 'man', type )
const getManifestPath   = ( type ) => joinPath( getManPath( type ), 'manifest.json' )
const getManLocalesPath = ( type ) => joinPath( getManPath( type ), '_locales' )
const compressPath      = joinPath( distPath, 'comp' )
const lintPath          = joinPath( pkg.dir, '.dev', 'lint.js' )
const localesPath       = joinPath( pkg.dir, 'src', '_locales' )

const compressBuild = async (type, name) => {
	const buildPath = getDistPath( type )
	await exec( `web-ext build --source-dir=${buildPath} --artifacts-dir=${compressPath} --filename=${name}-stylegpt-{version}.zip --overwrite-dest` )
}

const execBuild = async ( type, compress = true, name =false ) => {

	try{

		const buildPath = getDistPath( type )
		const manPath   = getManifestPath( type )
		
		if(!name) name = type

		// remove direcotry in dist
		await exec( `rimraf ${buildPath}` )

		// copy locales in src/man/${type}
		await copyDir( localesPath, getManLocalesPath( type ) )

		// execute build with/without compression
		await exec( `parcel build ${manPath} --dist-dir ${buildPath} --no-content-hash --no-source-maps --no-cache --detailed-report 0` )
		
		if ( compress ) await compressBuild(type, name)

	}catch( e ){

		throw '🏗 ' + e

	}

}

const execDev = async ( type ) => {

	try{

		const buildPath = getDistPath( type )
		const manPath   = getManifestPath( type )
		const target    = type == 'firefox' ? '-t firefox-desktop' : '-t chromium'
		
		return Promise.all( [
			exec( `parcel watch ${manPath} --dist-dir ${buildPath} --no-cache --no-hmr --no-content-hash` ),
			exec( `web-ext run ${target} --source-dir ${buildPath}` ),
		] )
			.catch( e => console.error( e ) )

	}catch( e ){

		throw '🏗⚙️ ' + e

	}

}

const executeBuild = async ( typeValue, type = 'build', compress = true ) => {
	const download = pkg.data.extra.download
	const funct = type == 'build' ? execBuild : execDev

	// execute build if is dev mode
	if ( type === 'dev' ) await executeBuild( typeValue, 'build', compress )

	if ( typeValue === 'chrome' || typeValue === 'firefox' || typeValue === 'chrome-mv2' ) {

		await funct( typeValue, compress )
		
	}else if ( typeValue === 'safari' ) {
		
		if(type === 'dev') throw Error('Dev for safari is not enable')
		await funct( 'chrome', compress ) 
		await buildSafari('macOS')

	}else if ( typeValue === 'all' ) {


		if(type !== 'dev') {
			
			await exec( `rimraf ${distPath}` )
			await funct( 'chrome', compress, download.chromium.id)
			await funct( 'chrome-mv2', compress, download.chromiumMv2.id)
			await funct( 'firefox', compress )
			
			await buildSafari('macOS')

			await compressBuild( 'chrome', download.chrome.id ) 
			await compressBuild( 'chrome', download.edge.id )
			await compressBuild( 'chrome-mv2', download.opera.id )
			await compressBuild( 'chrome', download.operaGX.id )
			await compressBuild( 'chrome', download.brave.id )
			

		}else {

			await funct( 'chrome', compress ) 
			await funct( 'firefox', compress )
			await funct( 'chrome-mv2', compress )
		}
		
	}else {

		console.log( '⚠️ You need a set type argument value' )
		
	}

}

const questions = ( type = 'build' ) => {

	const choices = [
		{ name: 'Chrome', value: 'chrome' },
		{ name: 'Chrome Manifest version 2', value: 'chrome-mv2' },
		{ name: 'Firefox', value: 'firefox' },
	]
	if ( type == 'build' ) choices.push( { name: 'All', value: 'all' } )
	
	inquirer
		.prompt( [
			{
				type    : 'list',
				name    : 'build',
				message : `Select the ${type} type:`,
				default : ( type == 'build' ) ? 'all' : 'chrome',
				choices,
			},
		] )
		.then( async ( answers ) => {

			if ( !answers ) throw 'Error in inquirer'
			
			if ( type == 'build' ) {

				await exec( `node ${ lintPath } --fix` )
				await executeBuild( answers.build, type, true )
			
			}else if ( type == 'dev' ){

				await executeBuild( answers.build, type, false )
			
			}
	
		} )
		.catch( error => {

			throw `Inquirer error: ${error}`
	
		} )

}

try{

	const typeIndex = process.argv.findIndex( arg => arg === '--type' )
	
	if ( typeIndex !== -1 ) {
		
		if ( process.argv.includes( '--watch' ) ) {

			execDev( process.argv[typeIndex + 1] )
		
		}else {

			executeBuild( process.argv[typeIndex + 1] )
		
		}
	
	}else {

		if ( process.argv.includes( '--watch' ) ) {

			questions( 'dev' )
		
		}else {

			questions( )
		
		}
	
	}

}catch( e ){

	console.error( '❌ ' + e )
	process.exit( 1 )

}

