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

		let htmlTag, elements

		elements = document.querySelectorAll( '#' + this.svgSelector + ' svg' )
		htmlTag  = document.querySelector( 'html' )
	
		this.utils.observer.class( htmlTag, ( v ) => {

			let color

			color = v[0].target.className == 'dark' ? 'white' : 'black'

			elements.forEach( el => {

				el.setAttribute( 'fill', color )
		
			} )
	
		} )

	}
	
	async init(){

		this._dynamicColor( )
	
	}

}

