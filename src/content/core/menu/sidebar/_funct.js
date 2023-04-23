/**
 * Todo.
 *
 * @description Todo.
 */

import { SidebarHtml } from './_html'

export class SidebarFunct extends SidebarHtml{

	async _funct( ) {

		let btn, storageValue, newValue

		btn = document.getElementById( this.data.btnID )

		storageValue = await this.utils.storage.get( this.data.bodyClass )
		newValue     = storageValue ? storageValue : false

		this.utils.storage.set( this.data.bodyClass, newValue )
	
		if ( newValue ) document.body.classList.add( this.data.bodyClass )
		if ( !newValue ) document.body.classList.remove( this.data.bodyClass )

		this.utils.observer.windowWidth( ( width ) => {

			if ( width > this.data.minWidth ) return

			let body = document.body

			if ( body.classList.contains( this.data.bodyClass ) ) {

				body.classList.remove( this.data.bodyClass )
				this.utils.storage.set( this.data.bodyClass, false )
		
			}
	
		} )

		btn.addEventListener( 'click', async () => {
		
			if ( window.innerWidth < this.data.minWidth ) return
		
			let storageValue, newValue

			storageValue = await this.utils.storage.get( this.data.bodyClass )
			newValue     = storageValue ? !storageValue : true

			if ( newValue ) document.body.classList.add( this.data.bodyClass )
			if ( !newValue ) document.body.classList.remove( this.data.bodyClass )

			this.utils.storage.set( this.data.bodyClass, newValue )
	
		} )
	
		// this.utils.storage.onChange( ( key, oldValue, newValue, namespace ) => {

		// 	console.log( key, oldValue, newValue )
	
		// } )

	}

	init(){

		this.addHtml()
		this._funct()
	
	}

}
