/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

import { Core }   from './core/main'
import * as utils from '../utils/_main'

try{

	const run = async () => {

		const core = new Core( utils )
		
		await core.init()

	}

	run()

}catch( e ){

	console.error( e )

}

