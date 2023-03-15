/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { data }    from './_data'
import { section } from './section/_main'

// eslint-disable-next-line no-unused-vars
const btn = ( utils ) => {

	let btn 

	btn = document.getElementById( data.btnID )

	btn.addEventListener( 'click', () => {

		let div

		div = document.getElementById( data.sectionID )
		div.classList.toggle( 'active' )
	
	} )

}

export const funct = ( utils ) => {

	btn( utils )
	section( data, utils )

}
