/**
 * Section class.
 *
 * @description A class for managing styles for a given section.
 *
 * @version 1.0.0
 */

import { SectionSuper } from '../_super/main'

export class OptsSectionSuper extends SectionSuper {

	async getStorage( ) {

		return await this.utils.storage.get( this.data.bodyClass )
	
	}

	async setStorage( value ) {

		await this.utils.storage.set( this.data.bodyClass, value )
	
	}

	getDefaulStyles(){

		return Object.keys( this.data.section ).reduce( ( obj, key ) => {

			obj[key] = this.data.section[key].defaultValue || this.data.section[key].defaultValue == '' ? this.data.section[key].defaultValue : false
			return obj
			
		}, {} )
	
	}

	async getStorageStyles() {
		
		let storageValue, value

		storageValue = await this.getStorage()
		
		value = {}

		if ( storageValue ) value = storageValue 

		return {
			...this.getDefaulStyles(), 
			...value, 
		}

	}
	
	async getUpdateStorageStyles( obj ){

		let storageObj, res
		storageObj = await this.getStorageStyles( )
		res        = this.utils.object.merge( storageObj, obj )
		return res
	
	}

	async changeStorageStyles( obj ){

		let objMerged

		objMerged = await this.getUpdateStorageStyles( obj )
		
		await this.setStorage( objMerged )
	
	}

	async changeStorageStylesToDefault( ){
		
		await this.changeStorageStyles( this.getDefaulStyles() )
	
	}

	toggleBodyClass( value ){

		if( value ) {

			if ( !document.body.classList.contains( this.data.bodyClass ) ) document.body.classList.add( this.data.bodyClass )
		
		} else{

			document.body.classList.remove( this.data.bodyClass )
		
		}

	}

}

