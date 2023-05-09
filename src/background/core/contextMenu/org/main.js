
/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { ContextMenuSuper } from '../_super'

export class ContextMenuOrg extends ContextMenuSuper {

	id = 'pigeonposse'
	
	_values(){

		let id, contexts

		id       = this.id
		contexts = [ this.contextTypeAction ]
		
		return [
			{
				id       : id,
				title    : 'PigeonPosse Collective 🐦🌈',
				contexts : contexts,
			},
			/**
			 * PIGEONPOSSE COLLECTIVE MENUS.
			 */
			{
				parentId : id,
				id       : id + '_description',
				title    : this.brwsr.i18n.getMessage( 'orgMenuDesc' ),
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
				id       : id + '_donate',
				title    : '💜 ' + this.brwsr.i18n.getMessage( 'donate' ),
				contexts : contexts,
			}, 
			{
				parentId : id,
				id       : id + '_web',
				title    : '🌐 ' + this.brwsr.i18n.getMessage( 'web' ),
				contexts : contexts,
			}, 
			// {
			// 	parentId : id,
			// 	id       : id + '_blog',
			// 	title    : '🗒 Blog',
			// 	contexts : [ 'action' ],
			// }, 
			{
				parentId : id,
				id       : id + '_about',
				title    : '🐦 ' + this.brwsr.i18n.getMessage( 'about' ),
				contexts : contexts,
			}, {
				parentId : id,
				id       : id + '_more',
				title    : '🚀 ' + this.brwsr.i18n.getMessage( 'moreProjects' ),
				contexts : contexts,
			}, 
		]
	
	}

	_functions(){

		this.brwsrMenu.onClicked.addListener( ( info, tab ) => {

			const createTabs = this.brwsr.tabs.create
			
			if ( info.menuItemId === this.id + '_more' )createTabs( { url: this.utils.pkg.extra.collective.gh } )
			if ( info.menuItemId === this.id + '_about' )createTabs( { url: this.utils.pkg.extra.collective.about } )
			// if ( info.menuItemId === this.id + '_blog' )createTabs( { url: this.utils.pkg.extra.collective.blog } )

			if ( info.menuItemId === this.id + '_donate' )createTabs( { url: this.utils.pkg.funding.url } )
			if ( info.menuItemId === this.id + '_web' )createTabs( { url: this.utils.pkg.extra.collective.web } )

		} )
	
	}
	
	setMenu(){

		this.createMenus( this._values() )
	
	}

	init(){

		this._functions()
	
	}

}
