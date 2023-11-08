/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

import { Core }   from './core/main'
import * as utils from '../utils/_main'

const init = async () => {
	
	let error

	try {

		const core = new Core( utils )
	
		await core.menuSection()
		await core.chat()
		await core.menu()
		await core.svg()
		
		error = false

	}catch( e ){

		console.error( e )
		
		utils.brwsr.runtime.sendMessage( { error: 'StyleGPT Error: ' + e } )

		error = true

	}finally{

		await utils.storage.set( utils.pkg.extra.errorId, error )

	}

}

document.addEventListener( 'readystatechange', async () => {
	
	if ( document.readyState === 'complete' ) init()

} )
