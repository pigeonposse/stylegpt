/**
 * Todo.
 *
 * @description Todo.
 */

import { Sidebar }  from './sidebar/main'
import { Style }    from './style/main'
import { Darkmode } from './darkmode/main'
import { Trash }    from './trash/main'
import { NewChat }  from './newChat/main'
import { UserMenu } from './user-menu/main'

export class Menu {

	constructor( utils ) {

		this.utils    = utils
		this.sidebar  = new Sidebar( utils )
		this.style    = new Style( utils )
		this.trash    = new Trash( utils )
		this.newChat  = new NewChat( utils )
		this.darkmode = new Darkmode( utils )
		this.userMenu = new UserMenu( utils )
	
	}
	
	init(){

		this.userMenu.init()
		this.sidebar.init()
		this.darkmode.init()
		this.newChat.init()
		this.trash.init()
		this.style.init()

	}

}
