/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { data } from './_data'

export const html = ( utils ) => {

	let id 
	
	id = data.btnID

	utils.html.mainBtn( {
		id   : id,
		text : 'darkmode',
	} )

}
