/**
 * Core for .Utils folder.
 *
 * @description Functions for .Utils folder.
 */
import { spawnSync }     from 'child_process'
import { fileURLToPath } from 'url'
import fs                from 'fs'
import path              from 'path'

export const exec = ( cmd ) => {
	
	console.log()

	console.group( `🐢 CMD: ${cmd}` )
	
	spawnSync( cmd, {
		shell : true,
		stdio : 'inherit',
	} )
	
	console.groupEnd()

}

export const pkgFunct = ( fileName ) => {

	const json = ( projectPath ) => JSON.parse( fs.readFileSync( projectPath ) )

	let projectPath = path.join(
		path.dirname( fileURLToPath( import.meta.url ) ),
		'..', 
	)

	// when is used in the compilated files of 'dist' folder
	if ( projectPath.includes( 'dist' ) ) projectPath = path.join( projectPath, '..' )

	const pkgPath = path.join( projectPath, fileName + '.json' )
	const pkgData = json( pkgPath )

	return {
		path : pkgPath,
		dir  : projectPath,
		data : pkgData,
	}

}

export const pkg = pkgFunct( 'package' )

export const writeSync = ( projectPath, txt ) => {

	const filePath = path.join( pkg.dir, projectPath )

	console.log()

	console.group( `🐢 writeFileSync: ${filePath}` )
		
	fs.writeFileSync( filePath, txt )

	console.log( '✅ File overwritten!' )

	console.groupEnd()

}

export const addTextBetweenAMark = async ( projectPath, startMarker, endMarker, textToAdd ) =>{

	const filePath       = path.join( pkg.dir, projectPath )
	const fileContent    = fs.readFileSync( filePath, 'utf-8' )
	const startIndex     = fileContent.indexOf( startMarker ) + startMarker.length
	const endIndex       = fileContent.indexOf( endMarker )
	const newTextContent = `${fileContent.substring( 0, startIndex )}\n${textToAdd}\n${fileContent.substring( endIndex )}`

	writeSync( projectPath, newTextContent )

}
