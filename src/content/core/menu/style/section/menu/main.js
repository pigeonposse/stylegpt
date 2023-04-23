/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { SectionSuper } from '../_super/main'

export class MenuSection extends SectionSuper {

	_toggleMenu() {

		let btn, section 

		section = this.data.sectionID

		btn     = this.data.btnID
		section = document.getElementById( section )
		btn     = document.getElementById( btn )
		
		if ( !btn || !section ) {

			return

		}

		const showSection = () => {

			if ( !section.classList.contains( 'active' ) ) section.classList.add( 'active' )

		}
		
		const hideSection = () => {

			section.classList.remove( 'active' )

		}

		btn.addEventListener( 'click', ( event ) =>{

			event.stopPropagation() 
			showSection()

		} )

		document.addEventListener( 'click', ( event ) => {

			if ( !section.contains( event.target ) ) {

				hideSection()
			
			}

		} )
	
	}

	init() {
		
		this._toggleMenu()
	
	}

}

