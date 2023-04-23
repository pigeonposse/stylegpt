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
	
	let keyStorage, error
	
	keyStorage = 'pigeon-error'

	try {

		const core = new Core( utils )
	
		await core.menuSection()
		await core.chat()
		await core.menu()
		await core.svg()
		
		error = false

	}catch( e ){

		console.log( e )
		error = true

	}finally{

		await utils.storage.set( keyStorage, error )
		
		// let getStorage
		// getStorage = await utils.storage.get( keyStorage )
		// console.log( error, getStorage )

	}

}

init()
