/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { HtmlSuper } from './_super'

export class Html extends HtmlSuper {

	constructor(){

		super()
	
	}
	
	line(){

		return this.section( false, 'line' )
	
	}

	svgIcon( pathTag, viewBoxAttr ) {

		let color
	
		color = document.querySelector( 'html' ).className == 'dark' ? 'white' : 'black'
		
		const path = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' )
		const svg  = document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' )

		svg.setAttributeNS( null, 'stroke', 'currentColor' )
		svg.setAttributeNS( null, 'fill', color )
		svg.setAttributeNS( null, 'stroke-width', '2' )
		svg.setAttributeNS( null, 'stroke-linecap', 'round' )
		svg.setAttributeNS( null, 'stroke-linejoin', 'round' )
		svg.setAttributeNS( null, 'class', 'h-4 w-4' )
		svg.setAttributeNS( null, 'height', '1em' )
		svg.setAttributeNS( null, 'width', '1em' )
		svg.setAttributeNS( null, 'viewBox', viewBoxAttr )
		path.setAttributeNS( null, 'd', this.getPathDValue( pathTag ) )
		svg.appendChild( path )

		return svg

	}

	menu( args ){

		let div, data

		div = document.createElement( 'div' )
		div.setAttribute( 'id', args.id )
		div.setAttribute( 'class', `${args.id} ${this.classes.menu}` )
		
		data = args.content

		if ( Array.isArray( data ) ) {

			for ( let i = 0; i < data.length; i++ ) {

				if ( data[i] ) {

					div.appendChild( data[i] )
				
				}
			
			}
		
		} else if ( data ) {

			div.appendChild( data )
		
		}
		
		return div

	}

	menuBtnCustom( args, html ){

		const btn = document.createElement( 'button' )

		btn.id = args.id
		btn.setAttribute( 'class', `pigeon-form-btn ${this.classes.menuIcon}` )
		
		if ( args.title ) btn.title = args.title

		btn.appendChild( html )
		
		return btn
	
	}

	menuBtn( args ){

		const btn = document.createElement( 'button' )

		btn.id = args.id
		btn.setAttribute( 'class', `pigeon-form-btn ${this.classes.menuIcon}` )
		
		if ( args.title ) btn.title = args.title

		if( args.path && args.viewBox ) btn.appendChild( this.svgIcon( args.path, args.viewBox ) )
		
		return btn
	
	}

	btn( args ) {

		let btn, icon, title, value, toggle
		
		btn    = document.createElement( 'button' )
		value  = args.defaultValue ? args.defaultValue : false
		toggle = args.btnType && args.btnType == 'toggle' ? 'toggle ' : ''
		title  = args.title ? document.createElement( 'h4' ) : false
		icon   = args.text ? args.text : false

		btn.id    = args.id
		btn.value = value
		btn.setAttribute( 'class', 'pigeon-menu-btn ' + this.classes.btn + ' ' + toggle )

		if ( title ) title.textContent = args.title

		if ( !icon && args.path && args.viewBox ) {

			icon = this.svgIcon( args.path, args.viewBox )

		}

		if ( args.toggleData && args.toggleData.path && args.toggleData.viewBox && args.toggleData.title ) {

			const firstDiv = document.createElement( 'div' )
			firstDiv.setAttribute( 'class', 'first' )
			firstDiv.appendChild( title )
			firstDiv.appendChild( icon )

			const secondDiv = document.createElement( 'div' )
			secondDiv.setAttribute( 'class', 'second' )
			const secondTitle       = document.createElement( 'h4' )
			secondTitle.textContent = args.toggleData.title
			secondDiv.appendChild( secondTitle )
			const secondIconSvg = this.svgIcon( args.toggleData.path, args.toggleData.viewBox )
			const secondIcon    = document.createElement( 'div' )
			secondIcon.appendChild( secondIconSvg )
			secondDiv.appendChild( secondIcon )

			btn.appendChild( firstDiv )
			btn.appendChild( secondDiv )
		
		} else {

			btn.appendChild( title )
			btn.appendChild( icon )
		
		}

		return btn

	}

	title( txt ){

		const h2 = document.createElement( 'h2' )
		
		h2.setAttribute( 'class', this.classes.title )
		h2.textContent = txt

		return this.group( h2, 'title' )

	}

	select( args ){
		
		let select = document.createElement( 'select' )
		select.id  = args.id
		select.setAttribute( 'class', `pigeon-select ${this.classes.select} ${this.classes.shadow}` )
  
		args.opts.forEach( v => {

			let option         = document.createElement( 'option' )
			option.value       = v.value
			option.textContent = v.name
			option.selected    = v.selected
			option.disabled    = v.disabled
			option.hidden      = v.hidden
			select.appendChild( option )
		
		} )

		return this.group( 
			select, 
			`select ${this.classes.border}`, 
		)

	}

	inputUrl( args ){

		const input = document.createElement( 'input' )

		input.type        = 'url'
		input.id          = args.id
		input.title       = args.title
		input.placeholder = args.placeholder
		input.setAttribute( 'class', `pigeon-url ${this.classes.input}` )
		input.value = args.defaultValue ? args.defaultValue : ''

		return input
	
	}

	inputColor( args ) {

		const input = document.createElement( 'input' )

		input.setAttribute( 'type', 'color' )
		input.setAttribute( 'id', args.id )
		input.setAttribute( 'title', args.title )
		input.setAttribute( 'class', `pigeon-picker-color ${this.classes.inputColor}` )
		input.setAttribute( 'value', args.defaultValue || '' )

		return input

	}

}
