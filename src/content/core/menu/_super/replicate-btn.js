/**
 * Todo.
 *
 * @description Todo.
 */

import { MenuCore } from './main'

export class MenuCoreReplicate extends MenuCore {

	addHtml(){

		this._btn( this.data )

	}

	clickOnSel( query = false ) {

		if( !query ) return
		const btn = document.querySelector( query )
		if ( !btn ) return 
		
		btn.click()
	
	}

	_funct( ){

		const btn = document.getElementById( this.data.btnID )

		btn.addEventListener( 'click', () => {
		
			this.clickOnSel( this.data.clickBtn )
		
		} )

	}
    
	// this is for use when init is overrided
	initFunct( ){

		this.addHtml()
		this._funct()
	
	}

	init( ){

		this.initFunct()
	
	}

}
