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

	if ( links[0] && links[0].innerText.includes( 'New chat' ) ) res = links[0]

	return res

}

export const funct = ( utils ) => {

	let btn = document.getElementById( data.btnID )

	btn.addEventListener( 'click', () => {
		
		let navLink

		navLink = getLink( utils )

		if ( !navLink ) console.log( 'nav link [new chat] does not exist' )
		if ( !navLink ) return 
		
		navLink.click()
	
	} )

}

