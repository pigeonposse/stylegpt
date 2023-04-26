/**
 * Release inquirer.
 *
 * @description Inquirer for release versions in github.
 */

import inquirer                 from 'inquirer'
import { releaseIt }            from './templates/releaseIt.js'
import { exec, pkg, writeSync } from './_core.js'

const questions = [
	{
		type    : 'input',
		name    : 'git_add',
		message : 'Add files for git',
		default() {

			return '.'
		
		},
	},
	{
		type    : 'input',
		name    : 'git_commit',
		message : 'Set release commit',
		default() {

			return 'Release commit 🌈⚡️'
		
		},
	},
]

const release = async () => {

	writeSync( pkg.data.extra.path.releaseIt, releaseIt )
	
	console.log( '' )

	await inquirer.prompt( questions ).then( async ( answers ) => {

		if ( !answers || !answers.git_add || ! answers.git_commit ) return

		const cmd = {
			gitAdd    : 'git add ' + answers.git_add,
			gitCommit : 'git commit -m "' + answers.git_commit + '"',
			releaseIt : 'pnpm release-it',
		}
		
	 	await exec( cmd.gitAdd )
	 	await exec( cmd.gitCommit )
	 	await exec( cmd.releaseIt )

	} )

}

try {
	
	release()

}catch( e ){

	console.log( '❌ ' + e )

}

