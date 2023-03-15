/**
 * Todo.
 *
 * @param utils
 * @description Todo.
 *
 * @version     1.0.0
 */
import { data } from './_data'

export const funct = async ( utils ) => {

	let btn, storageValue, newValue

	btn = document.getElementById( data.btnID )

	storageValue = await utils.storage.get( data.bodyClass )
	newValue     = storageValue ? storageValue : false

	utils.storage.set( data.bodyClass, newValue )
	
	if ( newValue ) document.body.classList.add( data.bodyClass )
	if ( !newValue ) document.body.classList.remove( data.bodyClass )

	utils.observer.windowWidth( ( width ) => {

		if ( width > data.minWidth ) return

		let body = document.body

		if ( body.classList.contains( data.bodyClass ) ) {

			body.classList.remove( data.bodyClass )
			utils.storage.set( data.bodyClass, false )
		
		}
	
	} )

	btn.addEventListener( 'click', async () => {
		
		if ( window.innerWidth < data.minWidth ) return
		
		let storageValue, newValue

		storageValue = await utils.storage.get( data.bodyClass )
		newValue     = storageValue ? !storageValue : true

		if ( newValue ) document.body.classList.add( data.bodyClass )
		if ( !newValue ) document.body.classList.remove( data.bodyClass )

		utils.storage.set( data.bodyClass, newValue )
	
	} )
	
	// utils.storage.onChange( ( key, oldValue, newValue, namespace ) => {

	// 	console.log( key, oldValue, newValue )
	
	// } )

}
