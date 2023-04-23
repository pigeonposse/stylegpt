/**
 * Todo.
 *
 * @description Todo.
 */

import { DarkModeHtml } from './_html'

export class DarkModeFunct extends DarkModeHtml {

	changeTheme() {

		const html = document.getElementsByTagName( 'html' )[0]
		if ( html.classList.contains( 'dark' ) ) {

			// cambiar de dark a light
			html.classList.remove( 'dark' )
			html.classList.add( 'light' )
			html.style.colorScheme = 'light'
		
		} else {

			// cambiar de light a dark
			html.classList.remove( 'light' )
			html.classList.add( 'dark' )
			html.style.colorScheme = 'dark'
		
		}

	}

	_setFunct( ) {

		let btn = document.getElementById( this.data.btnID )

		if ( !btn ) return

		btn.addEventListener( 'click', async () => {
			
			// if ( !localStorage ) return
			// console.log( await this.utils.storage.get( 'theme' ) )

			let theme = localStorage.getItem( 'theme' )
			
			if ( theme && theme !== null ) {

				theme = theme == 'dark' ? 'light' : 'dark'

				localStorage.setItem( 'theme', theme )
				
				this.changeTheme()
			
			}else if( theme === null ) {
				
				const html = document.getElementsByTagName( 'html' )[0]
				
				theme = html.classList.contains( 'dark' ) ? 'light' : 'dark'

				localStorage.setItem( 'theme', theme )
			
			}

		} )

	}

	init( ) {

		this.addHtml()

		this._setFunct( )

	}

}

