/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { AiIcon } from './aiIcon/main'

export class Chat {

	constructor( utils, url ) {

		this.url   = url
		this.utils = utils
	
	}

	init(){

		return new AiIcon( this.url ).init()
	
	}

}
