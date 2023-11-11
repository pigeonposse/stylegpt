/**
 * Todo.
 *
 * @description Todo.
 */

import { UserMenuHtml } from './_html'

export class UserMenuFunct extends UserMenuHtml {

	async _setFunctMenu(){

		const el = await this.utils.waitForSelector( 'div[role="menu"][data-headlessui-state="open"]' )
		if( !el ) return
		
		let section         = document.getElementById( this.data.btnID + '-section' )
		const orignalEl     = el.querySelector( 'nav' )
		const cloneEl       = orignalEl.cloneNode( true )
		const existCloneEl  = section.querySelector( 'nav' )
		el.style.visibility = 'hidden'
		if ( existCloneEl ) return
		const menuClasses = this.html.classes.menu.split( ' ' )

		// Add each class to the 'section' element
		menuClasses.forEach( className => cloneEl.classList.add( className ) )

		section.appendChild( cloneEl )

		const originalBtns = orignalEl.querySelectorAll( 'a[as="button"]' )
		const cloneBtns    = cloneEl.querySelectorAll( 'a[as="button"]' )

		const mimicOriginalEvent = ( event ) => {

			event.preventDefault() 
			const index = Array.from( cloneBtns ).indexOf( event.target ) 
			if ( index !== -1 && originalBtns[index] ) {

				originalBtns[index].click()
				
			}

		}

		cloneBtns.forEach( cloneBtn => {

			cloneBtn.addEventListener( 'click', mimicOriginalEvent )
	
		} )

		const removeCloneIfOriginalRemoved = () => {

			if ( !document.contains( orignalEl ) ) {

				cloneEl.remove()
				observer.disconnect()
				
			}

		}
			
		// Create a MutationObserver to watch for changes in the DOM
		const observer = new MutationObserver( removeCloneIfOriginalRemoved )
			
		// Start observing changes on the document
		observer.observe( document, { childList: true, subtree: true } )

		// console.log( el )
	
	}

	_setFunct( ) {

		let btn = document.getElementById( this.data.btnID )
		
		const section = document.createElement( 'div' )
		section.id    = this.data.btnID + '-section'

		btn.appendChild( section )

		if ( !btn ) return

		btn.addEventListener( 'click', async () => {
	
			let navLink 
			// console.log( 'clicked' )
			btn     = 'button[data-headlessui-state]'
			navLink = document.querySelector( btn )
			
			if ( !navLink ) return

			await navLink.click()
			this._setFunctMenu()
		
		} )

	}

	init( ) {

		this.addHtml( () => this._setFunct( ) )

	}

}

