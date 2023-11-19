/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

export class Svg {

	constructor( utils, svgSelector ) {

		this.utils       = utils
		this.svgSelector = svgSelector
	
	}

	_dynamicColor(){

		const section  = document.querySelector( '#' + this.svgSelector )
		const elements = section.querySelectorAll( 'svg' )
		const html     = document.querySelector( 'html' )
		const funct    = ( target ) => {
	
			const color = target.className.includes( 'dark' ) ? 'white' : 'black'

			elements.forEach( el => el.setAttribute( 'fill', color ) )
	
		}
		
		funct( document.querySelector( 'html' ) )
		this.utils.observer.class( html, ( v ) => funct( v[0].target ) )
	
	}
	
	async init(){

		this._dynamicColor( )
	
	}

}

