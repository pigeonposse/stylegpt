/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

export class ContextMenuSuper {

	constructor( utils ) {

		this.utils             = utils
		this.brwsr             = this.utils.brwsr
		this.brwsrMenu         = this.brwsr.menus || this.brwsr.contextMenus
		this.manifest          = this.brwsr.runtime.getManifest()
		this.isMan3            = this.manifest.manifest_version == 3 || this.manifest.manifest_version == '3'
		this.contextTypeAction = this.utils.isChromium() && this.isMan3 ? 'action' : 'browser_action'
	
	}

	createMenus( array ){

		for ( let i = 0; i < array.length; i++ ) {

			this.brwsrMenu.create( array[i] )
		
		}
	
	}

	createMenuSeparator( id, content = [ this.contextTypeAction ] ){
		
		this.brwsrMenu.create( {
			id       : id,
			type     : 'separator',
			contexts : content,
		} )
	
	}

}
