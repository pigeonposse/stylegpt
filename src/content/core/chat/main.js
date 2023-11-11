/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { AiIcon } from './aiIcon/main'
// import { Time }   from './time/main'

export class Chat {

	constructor( utils, url ) {

		this.url   = url
		this.utils = utils
		// this.time   = new Time( this.utils )
		this.aiIcon = new AiIcon( this.url )
	
	}

	async init(){

		// await this.time.init()
		await this.aiIcon.init()
	
	}

}
