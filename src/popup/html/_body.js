/**
 * Html.
 *
 * @description Todo.
 */
import { HtmlSuper } from './_super'

export class HtmlBody extends HtmlSuper {

	_createFooterChild( ){

		let desc, links

		desc             = document.createElement( 'span' )
		links            = document.createElement( 'div' )
		desc.textContent = this.version
		desc.setAttribute( 'class', 'version' )
		this.links.forEach( link => links.appendChild( this.createLink( link.href, link.name, link.icon ) ) )

		return [
			links,
			desc,
		]
	
	}

	_createHeaderChild( ){

		let desc, title, img

		desc             = document.createElement( 'span' )
		desc.textContent = this.headerSection.desc
		title            = document.createElement( 'h2' )

		img = document.createElement( 'img' )
		img.setAttribute( 'src', this.headerSection.title.img )
		img.setAttribute( 'width', this.headerSection.title.imgWidth )
		img.setAttribute( 'title', this.headerSection.title.name )

		title.appendChild( img )
		
		return [
			title,
			desc,
			this.createLink( this.headerSection.link.href, this.headerSection.link.name ),
		]
	
	}

	/**
	 * Creates the meta tags.
	 */
	createMetaTags() {

		this.meta.forEach( meta => {
			
			let el

			el = document.createElement( 'meta' )
			el.setAttribute( 'name', meta.name )
			el.setAttribute( 'content', meta.content )
			
			document.head.appendChild( el )
		
		} )
	
	}

	/**
	 * Creates the body sections.
	 */
	createBodySections() {

		const bodySections = [
			{ 
				className : this.sectionID.header, 
				children  : this._createHeaderChild( ), 
			},
			{ 
				className : this.sectionID.not, 
				children  : '',
			},
			{ 
				className : this.sectionID.footer, 
				children  : this._createFooterChild(), 
			},
		]

		bodySections.forEach( section => {

			let el

			el = document.createElement( 'div' )
			el.setAttribute( 'class', section.className )
			
			if ( section.children ) 
				section.children.forEach( child => el.appendChild( child ) )

			document.body.appendChild( el )
		
		} )
		
		// const toggle = this.createToggle( 'activate', () => console.log( 'hola' ) )
		// document.querySelector( '.header' ).appendChild( toggle )
	
	}

}

