
/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */
/* eslint-disable no-unused-vars */
import { ContextMenuSuper } from '../_super'

export class ContextMenuExt extends ContextMenuSuper {

	id = 'stylegpt'

	_values(){

		let id, contexts

		id       = this.id
		contexts = [ this.contextTypeAction ]
		
		return [
			{
				id       : id,
				title    : this.brwsr.i18n.getMessage( 'productName' ),
				contexts : contexts,
			}, 
			/**
			 * EXTENSION MENUS.
			 */
			{
				parentId : id,
				id       : id + '_description',
				title    : this.brwsr.i18n.getMessage( 'extMenuDesc' ),
				enabled  : false,
				contexts : contexts,
			}, 
			{
				parentId : id,
				id       : id + '_separator',
				type     : 'separator',
				contexts : contexts,
			}, 
			{
				parentId : id,
				id       : id + '_reviews',
				title    : '⭐️ ' + this.brwsr.i18n.getMessage( 'review' ),
				contexts : contexts,
			}, 
			{
				parentId : id,
				id       : id + '_contribute',
				title    : '👩‍💻 ' + this.brwsr.i18n.getMessage( 'contribute' ),
				contexts : contexts,
			}, 
			{
				parentId : id,
				id       : id + '_issues',
				title    : '🐞 ' + this.brwsr.i18n.getMessage( 'issues' ),
				contexts : contexts,
			}, 
			{
				parentId : id,
				id       : id + '_version',
				title    : 'v' + this.manifest.version,
				enabled  : false,
				contexts : contexts,
			}, 
		]
	
	}

	_functions(){

		this.brwsrMenu.onClicked.addListener( ( info, tab ) => {

			const createTabs = this.brwsr.tabs.create
			
			if ( info.menuItemId === this.id + '_issues' )createTabs( { url: this.utils.pkg.bugs.url } )
			if ( info.menuItemId === this.id + '_contribute' )createTabs( { url: this.utils.pkg.repository.url } )
			if ( info.menuItemId === this.id + '_reviews' )createTabs( { url: this.utils.isChromium() ? this.utils.pkg.extra.store.chrome.url : this.utils.pkg.extra.store.mozilla.url } )

		} )
	
	}
	
	setMenu(){

		this.createMenus( this._values() )
	
	}

	init(){

		this._functions()
	
	}

}

