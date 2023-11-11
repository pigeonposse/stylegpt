/**
 * Todo.
 *
 * @description Todo.
 */

import { UserMenuSuper } from './_super'

export class UserMenuHtml extends UserMenuSuper {

	async addHtml( cb ){

		const image = await this.utils.waitForSelector( 'img[alt="User"]' )
		if( !image ) return

		const clonedEl = image.cloneNode( true )
			
		this._btnCustom( 
			this.data, 
			clonedEl, 
		)
		cb()
		
	}

}
