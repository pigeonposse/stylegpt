/**
 * Todo.
 *
 * @param utils
 * @description Todo.
 *
 * @version     1.0.0
 */

import { data } from './_data'

export const html = ( utils ) => {

	utils.html.mainBtn( {
		id      : data.btnID,
		path    : data.svg.path,
		viewBox : data.svg.viewBox,
	} )

}
