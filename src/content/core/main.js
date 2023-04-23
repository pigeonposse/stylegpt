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
import imgUrl   from '../../assets/img/logo.png'
import { data } from './_shared/main'

export class Core {

	constructor( utils ) {

		this.utils = utils
	
	}

	svg(){

		new Svg( this.utils, data.menuSection ).init()

	}

	async menuSection(){

		let selector, content, waitMain
		
		selector = document.body 
		waitMain = await this.utils.waitForSelector( 'main' )
		
		if ( !waitMain ) throw 'No main HTML displayed'

		content = `<div id="${data.menuSection}" class="${data.menuSection}"><div id="${data.menuBtnSection}"></div></div>`

		selector.insertAdjacentHTML( 'beforeend', content )
	
	}

	menu(){

		new Menu( this.utils ).init()

	}

	chat(){

		new Chat( this.utils, imgUrl ).init()

	}

}
