/**
 * Builder.
 *
 * @description Todo.
 */

import inquirer                         from 'inquirer'
import { exec, pkg, joinPath, copyDir } from './_core.js'

const getDistPath       = ( type ) => joinPath( pkg.dir, 'dist', type )
const getManPath        = ( type ) => joinPath( pkg.dir, 'src', 'man', type )
const getManifestPath   = ( type ) => joinPath( getManPath( type ), 'manifest.json' )
const getManLocalesPath = ( type ) => joinPath( getManPath( type ), '_locales' )
const compressPath      = joinPath( pkg.dir, 'dist', 'comp' )
const lintPath          = joinPath( pkg.dir, '.utils', 'lint.js' )
const localesPath       = joinPath( pkg.dir, 'src', '_locales' )

const execBuild = async ( type, compress = true ) => {

	try{

		let buildPath, manPath

		buildPath = getDistPath( type )
		manPath   = getManifestPath( type )

		// remove direcotry in dist
		await exec( `rimraf ${buildPath}` )

		// copy locales in src/man/${type}
		await copyDir( localesPath, getManLocalesPath( type ) )

		// execute build with/without compression
		await exec( `parcel build ${manPath} --dist-dir ${buildPath} --no-content-hash --no-source-maps --no-cache --detailed-report 0` )
		
		if ( compress ) await exec( `web-ext build --source-dir=${buildPath} --artifacts-dir=${compressPath} --filename=${type}-stylegpt-{version}.zip  --overwrite-dest` )

	}catch( e ){

		throw '🏗 ' + e

	}

}

const execDev = async ( type ) => {

	try{

		let buildPath, manPath, target

		buildPath = getDistPath( type )
		manPath   = getManifestPath( type )
		target    = type == 'firefox' ? '-t firefox-desktop' : '-t chromium'
		
		return Promise.all( [
			exec( `parcel watch ${manPath} --dist-dir ${buildPath} --no-cache --no-hmr --no-content-hash` ),
			exec( `web-ext run ${target} --source-dir ${buildPath}` ),
		] )
			.catch( e => console.error( e ) )

	}catch( e ){

		throw '🏗⚙️ ' + e

	}

}

const executeBuild = async( typeValue, type = 'build', compress = true ) => {
	
	const funct = type == 'build' ? execBuild : execDev

	// execute build if is dev mode
	if ( type === 'dev' ) await executeBuild( typeValue, 'build', compress )

	if ( typeValue == 'chrome' || typeValue == 'firefox' || typeValue == 'chrome-mv2' ) {

		await funct( typeValue, compress )
		
	}else if ( typeValue == 'all' ) {

		await funct( 'chrome-mv2', compress )
		await funct( 'chrome', compress ) 
		await funct( 'firefox', compress )
		
	}else {

		console.log( '⚠️ You need a set type argument value' )
		
	}

}

const questions = ( type = 'build' ) => {

	let choices 

	choices = [
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
				choices : choices,
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

