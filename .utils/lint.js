/**
 * Lint.
 *
 * @description Todo.
 */

import inquirer                     from 'inquirer'
import { awaitExec, pkg, joinPath } from './_core.js'

const exec
 = async ( flag = '' ) => {

	await awaitExec( `eslint ${joinPath( pkg.dir, 'src' )} --ext .js ${flag}` )

}

const questions = () => {

	inquirer
		.prompt( [
			{
				type    : 'list',
				name    : 'lint',
				message : 'Select lint type',
				default : 'check',
				choices : [
					{
						name : 'Check', value : 'check',
					},
					{
						name : 'Fix', value : 'fix',
					},
				],
			},
		] )
		.then( async ( answers ) => {

			if ( answers && answers.lint === 'check' ) await execLint()
			if ( answers && answers.lint === 'fix' ) await execLint( '--fix' )
	
		} )
		.catch( error => {

			throw `❌ LINT Error: ${error}` 
	
		} )

}

try{

	if ( process.argv.includes( '--fix' ) ) {

		execLint( '--fix' )
	
	}else if ( process.argv.includes( '--check' ) ) {

		execLint( )
	
	}else {

		questions()
	
	}

}catch( e ){

	console.error( e )

}

