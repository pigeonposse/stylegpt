/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { data } from './_data'

// eslint-disable-next-line no-unused-vars
const getLink = ( utils ) => {

	let nav, links, res

	nav   = document.querySelector( 'nav' )
	links = nav.querySelectorAll( 'a' )
	res   = false

	links.forEach( link => {
		
		if ( 
			link.innerText.includes( 'Light mode' ) || 
			link.innerText.includes( 'Dark mode' ) 
		) {

			res = link
		
		}

	} )

	return res

}

const setStyle = ( utils ) => {
	
	let btn, svg, navLink

	navLink = getLink( utils )

	if ( !navLink ) console.log( 'error' )

	btn = document.getElementById( data.btnID )
	svg = navLink.querySelector( 'svg' )
	
	btn.innerHTML         = svg.outerHTML
	navLink.style.display = 'none'

}

const setFunct = ( utils ) => {

	let btn = document.getElementById( data.btnID )

	btn.addEventListener( 'click', () => {
	
		let navLink = getLink( utils )
		
		navLink.click()
		
		// document.body.classList.toggle( data.bodyClass )

	} )

}

export const funct = ( utils ) => {

	setStyle( utils )

	// eslint-disable-next-line no-unused-vars
	utils.observer.htmlClass( ( mutation ) => {

		// console.log( mutation[0].target.className )
		setStyle( utils )

	} )

	setFunct( utils )

}

