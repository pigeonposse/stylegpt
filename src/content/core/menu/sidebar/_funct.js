/**
 * Todo.
 *
 * @description Todo.
 */

import { SidebarHtml } from './_html'

export class SidebarFunct extends SidebarHtml{

	// Old version 
	// async _funct( ) {

	// 	let btn, storageValue, newValue

	// 	btn = document.getElementById( this.data.btnID )

	// 	storageValue = await this.utils.storage.get( this.data.bodyClass )
	// 	newValue     = storageValue ? storageValue : false

	// 	this.utils.storage.set( this.data.bodyClass, newValue )
	
	// 	if ( newValue ) document.body.classList.add( this.data.bodyClass )
	// 	if ( !newValue ) document.body.classList.remove( this.data.bodyClass )

	// 	this.utils.observer.windowWidth( ( width ) => {

	// 		if ( width > this.data.minWidth ) return

	// 		let body = document.body

	// 		if ( body.classList.contains( this.data.bodyClass ) ) {

	// 			body.classList.remove( this.data.bodyClass )
	// 			this.utils.storage.set( this.data.bodyClass, false )
		
	// 		}
	
	// 	} )

	// 	btn.addEventListener( 'click', async () => {
		
	// 		if ( window.innerWidth < this.data.minWidth ) return
		
	// 		let storageValue, newValue

	// 		storageValue = await this.utils.storage.get( this.data.bodyClass )
	// 		newValue     = storageValue ? !storageValue : true

	// 		if ( newValue ) document.body.classList.add( this.data.bodyClass )
	// 		if ( !newValue ) document.body.classList.remove( this.data.bodyClass )

	// 		this.utils.storage.set( this.data.bodyClass, newValue )
	
	// 	} )
	
	// 	// this.utils.storage.onChange( ( key, oldValue, newValue, namespace ) => {

	// 	// 	console.log( key, oldValue, newValue )
	
	// 	// } )

	// }

	_getLink() {

		const btnID = 'a.flex.px-3.min-h-\\[44px\\].py-1.gap-3.dark\\:text-white.cursor-pointer.text-sm.rounded-md.border.dark\\:border-white\\/20.gizmo\\:min-h-0.hover\\:bg-gray-500\\/10.h-11.gizmo\\:h-10.gizmo\\:rounded-lg.gizmo\\:border-\\[rgba\\(0\\,0\\,0\\,0\\.1\\)\\].w-11.flex-shrink-0.items-center.justify-center.bg-white.dark\\:bg-transparent'
		return document.querySelector( btnID )

	}

	_funct(){

		let btn 

		btn = document.getElementById( this.data.btnID )

		btn.addEventListener( 'click', () => {
		
			let navLink

			navLink = this._getLink( )

			if ( !navLink ) return 
		
			navLink.click()
	
		} )

	}
	
	init(){

		this.addHtml()
		this._funct()
	
	}

}
