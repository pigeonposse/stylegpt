/**
 * OnInputEventSection class.
 *
 * @description Cambia el storage en cada iteraccion.
 */

import { StylesTagSection } from './_stylesTag'

export class OnInputEventSection extends StylesTagSection {
	
	toggle = {}

	async _changeData( type, value ){
		
		let args

		args       = {}
		args[type] = value

		await this.changeStorageStyles( args )

	}

	_getToggleValue( k, defaultValue ){

		let getToggle 

		if ( k in this.toggle && typeof this.toggle[k] === 'boolean' ) {

			if ( this.toggle[k] === true ) {

				getToggle = false
			
			} else {

				getToggle = true
			
			}

		} else {

			getToggle = !defaultValue
		
		}

		return getToggle	

	}

	async _onClickToggleBtn( k, defaultValue = false ){

		// change toogle
		this.toggle[k] = this._getToggleValue( k, defaultValue )

		// add/remove class to body
		this.toggleBodyClass( this.toggle[k] )

		// change data
		await this._changeData( k, this.toggle[k] )
	
	}
	
	async _onClickResetBtn( k ){

		await this._changeData( k, true )
		await this.utils.delay( 5000 )
		await this._changeData( k, false )
	
	}

	async onClickOpt( sel, k, v ){

		sel.addEventListener( 'click', async ( ) => {

			if ( v.btnType == 'reset' ) {

				await this._onClickResetBtn( k )
			
			}

			if ( v.btnType == 'toggle' ) {

				await this._onClickToggleBtn( k, v.defaultValue ? v.defaultValue : false )
			
			}

		} )

	}

	async onInputUrlOpt( sel, k ){

		sel.addEventListener( 'change', async ( e ) => {
			
			const existsURL = await this.utils.url.exists( e.target.value )

			if ( e.target.value != '' && !existsURL ) {

				sel.classList.remove( 'success' )
				sel.classList.add( 'error' )
			
			}else if( e.target.value != '' ){

				sel.classList.add( 'success' )
				sel.classList.remove( 'error' )			
			
			}else {

				sel.classList.remove( 'success' )
				sel.classList.remove( 'error' )	
			
			}

			await this._changeData( k, e.target.value )

		} )

	}

	async onInputOpt( sel, k ){

		sel.addEventListener( 'change', async ( e ) => {

			await this._changeData( k, e.target.value )

		} )
	
	}

	async eventListeners() {

		Object.entries( this.data.section ).forEach( async ( [ k, v ] ) => {

			let sel
			
			sel = document.getElementById( v.id )
			
			if ( !sel ) return 

			if ( v.type == 'btn' ) {
				
				await this.onClickOpt( sel, k, v )
			
			}else if ( v.type == 'url' ) {

				await this.onInputUrlOpt( sel, k )

			}else {

				await this.onInputOpt( sel, k )
			
			}

		} )

	}

}
