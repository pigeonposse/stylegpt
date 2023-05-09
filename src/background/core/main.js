/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { ContextMenu } from './contextMenu/main'

export class Core {

	constructor( utils ) {

		this.utils       = utils
		this.brwsr       = this.utils.brwsr
		this.contextMenu = new ContextMenu( this.utils )
	
	}
	
	setErrors(){

		this.brwsr.runtime.onMessage.addListener( ( request, sender, sendResponse ) => {

			if ( request.error ) console.error( request.error )

		} )
	
	}

	async init(){
		
		this.contextMenu.init()

		await this.setErrors()
	
	}

}

