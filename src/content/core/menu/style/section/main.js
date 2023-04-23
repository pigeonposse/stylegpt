/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { OptsSection } from './opts/main'
import { MenuSection } from './menu/main'

export class Section {

	constructor( html, data, utils ) {

		this.html  = html
		this.data  = data
		this.utils = utils
	
	}

	async init() {

		await new MenuSection( this.html, this.data, this.utils ).init()
		await new OptsSection( this.html, this.data, this.utils ).init()
	
	}

}
