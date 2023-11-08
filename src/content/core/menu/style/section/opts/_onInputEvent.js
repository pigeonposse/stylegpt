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

			if ( v.btnType == 'reset' ) await this._onClickResetBtn( k )

			if ( v.btnType == 'toggle' ) {

				await this._onClickToggleBtn( k, v.defaultValue ? v.defaultValue : false )
			
			}

		} )

	}

	async onInputUrlOpt( sel, k ){

		sel.addEventListener( 'change', async ( e ) => {
			
			let existsURL, inputValue, correctProtocol

			inputValue = e.target.value
			
			if( inputValue === '' || inputValue.trim() === '' ){

				if( sel.classList.contains( 'success' ) ) sel.classList.remove( 'success' )
				if( sel.classList.contains( 'error' ) ) sel.classList.remove( 'error' )			
				
				inputValue = ''
			
			}else {

				correctProtocol = this.utils.url.isHttpOrHttps( inputValue )
				
				if ( correctProtocol ) {

					existsURL = await this.utils.url.exists( inputValue )
				
					if ( existsURL ) {

						if( !sel.classList.contains( 'success' ) ) sel.classList.add( 'success' )
						if( sel.classList.contains( 'error' ) ) sel.classList.remove( 'error' )
				
					}else {

						if( sel.classList.contains( 'success' ) ) sel.classList.remove( 'success' )
						if( !sel.classList.contains( 'error' ) ) sel.classList.add( 'error' )
				
					}
				
				}else {

					if( sel.classList.contains( 'success' ) ) sel.classList.remove( 'success' )
					if( !sel.classList.contains( 'error' ) ) sel.classList.add( 'error' )	
					
				}

			}
			
			// console.log( correctProtocol, existsURL, inputValue )

			await this._changeData( k, inputValue )

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
