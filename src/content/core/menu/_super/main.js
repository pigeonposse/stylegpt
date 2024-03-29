/**
 * Todo.
 *
 * @description Todo.
 */

import { html, data } from '../../_shared/main'

export class MenuCore {

	constructor( utils ) {

		this.utils      = utils
		this.html       = html
		this.sharedData = data
	
	}

	_btn( data ) {

		let selector, args, html
	
		if ( !data ) return

		args = {
			id      : data.btnID ? data.btnID : false,
			path    : data.svg && data.svg.path ? data.svg.path : false,
			viewBox : data.svg && data.svg.viewBox ? data.svg.viewBox : false,
			title   : data.btnTitle ? data.btnTitle : false,
		}

		if ( document.getElementById( args.id ) ) return

		selector = document.getElementById( this.sharedData.menuBtnSection )
		
		if ( !selector ) return

		html = this.html.menuBtn( args )

		selector.appendChild( html )

	}

	_btnCustom( data, htmlElement ) {

		let selector, args, html
	
		if ( !data ) return

		args = {
			id    : data.btnID ? data.btnID : false,
			title : data.btnTitle ? data.btnTitle : false,
		}

		if ( document.getElementById( args.id ) ) return

		selector = document.getElementById( this.sharedData.menuBtnSection )
		
		if ( !selector ) return

		html = this.html.menuBtnCustom( args, htmlElement )

		selector.appendChild( html )

	}

	_menu( data ) {

		let selector, html

		if ( !data ) return

		if ( document.getElementById( data.id ) ) return

		selector = document.getElementById( this.sharedData.menuSection )
		
		if ( !selector ) return

		html = this.html.menu( data )
		
		selector.appendChild( html )
	
	}

}
