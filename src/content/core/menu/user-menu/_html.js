/**
 * Todo.
 *
 * @description Todo.
 */

import { UserMenuSuper } from './_super'

export class UserMenuHtml extends UserMenuSuper {

	_waitForElm( targetSelector, callback ) {

		const element = document.querySelector( targetSelector )

		if ( element ) {

			callback( element )
		
		} else {

			const observer = new MutationObserver( ( mutations, obs ) => {

				const element = document.querySelector( targetSelector )

				if ( element ) {

					callback( element )
					obs.disconnect()
				
				}
	
			} )

			observer.observe( document.body, {
				childList : true,
				subtree   : true,
			} )
		
		}

	}

	async addHtml( cb ){

		// console.log( 'waitfor', 'img[alt="User"]' )
		this._waitForElm( 'img[alt="User"]', ( el ) => {

			const clonedEl = el.cloneNode( true )
			
			this._btnCustom( 
				this.data, 
				clonedEl, 
			)
			cb()	
		
		} )
		
	}

}
