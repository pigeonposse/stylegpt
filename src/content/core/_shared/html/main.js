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

		return this.section( '', 'line' )
	
	}

	svgIcon( pathTag, viewBoxAttr ) {

		let htmlClass, color, attr, icon
		
		htmlClass = document.querySelector( 'html' ).className
		color     = htmlClass == 'dark' ? 'white' : 'black'
		attr      = 'stroke="currentColor" fill="' + color + '" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" viewBox="' + viewBoxAttr + '" xmlns="http://www.w3.org/2000/svg"'
		icon      = '<svg ' + attr + '>' + pathTag + '</svg>'

		return icon 

	}

	btn( args ) {
	
		let html, icon, title, value, toggle, content

		title  = args.title ? '<h4>' + args.title + '</h4>' : ''
		icon   = args.text ? args.text : false
		icon   = !icon && args.path && args.viewBox ? this.svgIcon( args.path, args.viewBox ) : ''
		value  = args.defaultValue ? args.defaultValue : false
		toggle = args.btnType && args.btnType == 'toggle' ? 'toggle ' : ''
		
		if( args.toggleData && args.toggleData.path && args.toggleData.viewBox && args.toggleData.title ){

			content  = '<div class="first">' + title + icon + '</div>'
			content += `<div class="second"><h4>${args.toggleData.title}</h4>${this.svgIcon( args.toggleData.path, args.toggleData.viewBox )}</div>`

		}else {

			content = title + icon
		
		}

		html = `<button id="${args.id}" class="pigeon-menu-btn ${toggle}${this.classes.btn}" value="${value}">${content}</button>`

		return html

	}
	
	changeBtn( id, args ){

		let sel, title, icon

		sel = document.getElementById( id )
		
		if ( !sel ) return

		title = args.title ? '<h4>' + args.title + '</h4>' : ''
		icon  = args.text ? args.text : false
		icon  = !icon && args.path && args.viewBox ? this.svgIcon( args.path, args.viewBox ) : ''
		
		sel.innerHTML = title + icon
	
	}
	
	title( txt ){

		return this.group( `<h2 class="${this.classes.title}">${txt}</h2>`, 'title' )
	
	}

	select( args ){
		
		let opts, select

		opts = ''

		args.opts.forEach( v => {

			opts += `<option value="${v.value}" ${v.selected ? 'selected ' : ''}${v.disabled ? 'disabled ' : ''}${v.hidden ? 'hidden' : ''}>${v.name}</option>`	
		
		} )

		select = `<select id="${args.id}" class="pigeon-select ${this.classes.select} ${this.classes.shadow}">
			${opts}
		</select>`
		
		return this.group(
			select,
			`select ${this.classes.border}`,
		)
	
	}

	inputUrl( args ){

		let title, input, value

		title = this.title( args.title )
		value = args.defaultValue ? args.defaultValue : ''
		input = this.group( `<input placeholder="${args.placeholder}" type="url" id="${args.id}" title="${args.title}" class="pigeon-url ${this.classes.input}" value="${value}">` )
		
		return title + input
	
	}

	inputColor( args ){

		let title, input, value
		
		title = ''

		if ( !args.noTitle ) title = this.title( args.title )
		value = args.defaultValue ? args.defaultValue : ''
		input = this.group( `<input type="color" id="${args.id}" title="${args.title}" class="pigeon-picker-color ${this.classes.inputColor}" value="${value}">` )	
		
		return title + input
	
	}
	
	menuIcon( args ){

		let icon, title

		icon = args.path && args.viewBox ? this.svgIcon( args.path, args.viewBox ) : ''

		title = args.title ? ' title="' + args.title + '"' : ''
	
		return `<button id="${args.id}" class="pigeon-form-btn ${this.classes.menuIcon}" ${title}>${( args.text ) ? args.text : icon}</button>`
	
	}

	menu( args ){

		let res
	
		res = `<div id="${args.id}" class="${args.id} ${this.classes.menu}">${args.content}</div>`

		return res

	}

}
