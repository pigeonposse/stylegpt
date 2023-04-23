/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { OnInputEventSection } from './_onInputEvent'

export class OnChangeStorageSection extends OnInputEventSection {

	async _addValueToDiv( id, value ){

		let sel, key
		key = this.data.section[id]
		sel = document.getElementById( key && key.id ? key.id : false )

		if ( value && sel ) sel.value = value

	}

	async _changeValueToDiv( id, value ){

		let sel, key
		key = this.data.section[id]
		sel = document.getElementById( key && key.id ? key.id : false )

		if ( sel ) {

			if ( sel.tagName === 'SELECT' ) {

				sel.value = value
			
			} else if ( sel.type === 'color' ) {

				sel.value                 = value
				sel.style.backgroundColor = value
			
			} else if ( sel.type === 'url' ) {

				sel.value = value ? value : null
			
			} else {

				sel.value = value
			
			}
		
		}

	}

	async setStylesInMenu( storageObj = false ){

		let storage = storageObj ? storageObj : await this.getStorageStyles()
		
		Object.entries( storage ).forEach( async ( [ k, v ] ) => {

			storageObj ? await this._changeValueToDiv( k, v ) : await this._addValueToDiv( k, v )
		
		} )
	
	}

	async setStyles(){
		
		let storage = await this.getStorageStyles()
		
		if ( storage['showStyles'] ) this.toggleBodyClass( storage['showStyles'] )
		
		await this.setStylesTag( storage )
	
	}

	onChangeStorage(){
		
		this.utils.storage.onChange( async ( key, oldValue, newValue ) => {

			if ( newValue['reset'] && ( newValue['reset'] == 'true' || newValue['reset'] == true ) ) {

				// console.log( 'yes' )
				await this.changeStorageStylesToDefault()
				await this.setStylesInMenu( this.getDefaulStyles() )
			
			}else {

				await this.setStyles()
			
			}
	
		} )

	}

}
