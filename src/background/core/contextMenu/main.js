/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */
import { ContextMenuOrg } from './org/main'
import { ContextMenuExt } from './ext/main'

export class ContextMenu {

	constructor( utils ) {

		this.utils   = utils
		this.brwsr   = this.utils.brwsr
		this.menuExt = new ContextMenuExt( this.utils )
		this.menuOrg = new ContextMenuOrg( this.utils )
	
	}
	
	_menus(){
		
		this.brwsr.runtime.onInstalled.addListener( () => {

			this.menuExt.setMenu()
			this.menuExt.createMenuSeparator( 'separator_id' )
			this.menuOrg.setMenu()
		
		} )
	
	}

	init(){
		
		this._menus()

		this.menuExt.init()
		this.menuOrg.init()
	
	}

}

