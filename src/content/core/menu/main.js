/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Sidebar }  from './sidebar/main'
import { Style }    from './style/main'
import { Darkmode } from './darkmode/main'
import { Trash }    from './trash/main'
import { NewChat }  from './newChat/main'

export class Menu {

	constructor( utils ) {

		this.utils    = utils
		this.sidebar  = new Sidebar( utils )
		this.style    = new Style( utils )
		this.trash    = new Trash( utils )
		this.newChat  = new NewChat( utils )
		this.darkmode = new Darkmode( utils )
	
	}
	
	init(){

		this.sidebar.init()
		this.darkmode.init()
		this.newChat.init()
		this.trash.init()
		this.style.init()

	}

}
