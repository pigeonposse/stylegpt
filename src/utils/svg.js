/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */
import { observer } from './observer'

const icon = ( pathTag, viewBoxAttr ) => {

	const htmlClass = document.querySelector( 'html' ).className
	const color     = htmlClass == 'dark' ? 'white' : 'black'
	const attr      = 'stroke="currentColor" fill="' + color + '" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" viewBox="' + viewBoxAttr + '" xmlns="http://www.w3.org/2000/svg"'
	const icon      = '<svg ' + attr + '>' + pathTag + '</svg>'

	return icon 

}

const dinamicColor = ( ) => {

	let htmlTag, elements

	elements = document.querySelectorAll( '#pigeon-btn-section svg' )
	htmlTag  = document.querySelector( 'html' )
	
	observer.class( htmlTag, ( v ) => {

		let color

		color = v[0].target.className == 'dark' ? 'white' : 'black'

		elements.forEach( el => {

			el.setAttribute( 'fill', color )
		
		} )
	
	} )

	return icon 

}

export const svg = {
	icon,
	dinamicColor,
}
