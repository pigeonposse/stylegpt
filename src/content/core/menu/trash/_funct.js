/**
 * Todo.
 *
 * @description Todo.
 */

import { TrashHtml } from './_html'

export class TrashFunct extends TrashHtml {

	_setFunct( ) {

		let btn = document.getElementById( this.data.btnID )

		if ( !btn ) return

		btn.addEventListener( 'click', async () => {
	
			let navLink 

			navLink = 'button.p-1.hover\\:text-token-text-primary:last-child'
			navLink = document.querySelector( navLink )
			
			if ( !navLink ) return

			await navLink.click()

		} )

	}

	init( ) {

		this.addHtml()

		this._setFunct( )

	}

}

