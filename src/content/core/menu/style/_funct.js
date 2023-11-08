/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Section }   from './section/main'
import { StyleHtml } from './_html'

export class StyleFunct extends StyleHtml {

	linkTagId = 'pp-stylegpt-code-styles'
	
	_sectionInit(){

		return new Section( this.html, this.data, this.utils ).init()
	
	}
	
	_addClassForCode(){

		const addClass = ( preElement ) => {

			if ( !preElement.classList.contains( 'hljs' ) ) preElement.classList.add( 'hljs' )
		
		}
		const rmClass  = ( preElement ) => {

			if ( preElement.classList.contains( 'hljs' ) ) preElement.classList.remove( 'hljs' )
		
		}
		
		const addClasses = () => {

			const body        = document.body
			const linkTag     = document.getElementById( this.linkTagId )
			const preElements = document.querySelectorAll( 'pre' )

			if ( !body.classList.contains( 'pigeon-styles' ) || !linkTag ) {

				preElements.forEach( preElement => rmClass( preElement ) )
			
			} else {

				preElements.forEach( preElement => addClass( preElement ) )
			
			}
		
		}

		const observePreElements = ( ) => addClasses()

		addClasses()

		const observer = new MutationObserver( observePreElements )
		observer.observe( document.body, { childList: true, attributeFilter: [ 'class' ], subtree: true } )
	
	}

	_addStylesForCodeByName( themeName ){

		const id         = this.linkTagId
		const url        = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/${themeName}.min.css`
		const existStyle = document.getElementById( id )
		
		if( themeName === 'none' ) {

			if( existStyle ) existStyle.remove()
			return
		
		}

		if( existStyle ) {

			existStyle.href = url
		
		}else {

			const link = document.createElement( 'link' )
			link.id    = id
			link.rel   = 'stylesheet'
			link.href  = url

			const body = document.querySelector( 'body' )
			if( body ) body.appendChild( link )
		
		}
	
	}

	_stylesForCodeObserver(){

		const selectElement = document.getElementById( 'pigeon-code-editor' )

		if( selectElement ) selectElement.addEventListener( 'change', () => {

			console.log( 'El valor del select ha cambiado:', selectElement.value )
			this._addStylesForCodeByName( selectElement.value )
		
		} )
		const resetEl = document.getElementById( 'pigeon-styles-reset' )
		if( resetEl ) resetEl.addEventListener( 'click', () => {

			this._addStylesForCodeByName( 'none' )

		} )
	
	}

	async _addStylesForCode(){

		const storage   = await this.utils.storage.get( this.data.bodyClass )
		const themeName = storage['codeStyle']
	
		if( themeName ) this._addStylesForCodeByName( themeName )
		this._stylesForCodeObserver()
	
	}

	init() {

		try {

			this.addHtml()
		
			this._sectionInit()
			this._addStylesForCode()
			this._addClassForCode()	
		
		} catch ( e ) {

			throw Error( e )
		
		}
	
	}

}

