/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Menu } from './menu/main'
import { Chat } from './chat/main'
import { Svg }  from './svg/main'
import { data } from './_shared/main'
import imgUrl   from '../../assets/img/logo.png'

export class Core {

	constructor( utils ) {

		this.utils = utils
		this.svg   = new Svg( this.utils, data.menuSection )
		this.menu  = new Menu( this.utils )
		this.chat  = new Chat( this.utils, imgUrl )
	
	}

	async menuSection(){

		let selector, waitMain, div1, div2
		
		selector = document.querySelector( 'body' ) 
		waitMain = await this.utils.waitForSelector( 'main' )
		
		if ( !waitMain ) throw 'No main HTML displayed'

		div1 = document.createElement( 'div' )
		div1.setAttribute( 'id', data.menuSection )
		div1.setAttribute( 'class', data.menuSection )

		div2 = document.createElement( 'div' )
		div2.setAttribute( 'id', data.menuBtnSection )

		div1.appendChild( div2 )

		selector.appendChild( div1 )
	
	}

	async init(){

		await this.menuSection()
		await this.chat.init()
		await this.menu.init()
		await this.svg.init()
	
	}

}
