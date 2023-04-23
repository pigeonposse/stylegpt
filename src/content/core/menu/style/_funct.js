/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Section }   from './section/main'
import { StyleHtml } from './_html'

export class StyleFunct extends StyleHtml {

	_sectionInit(){

		return new Section( this.html, this.data, this.utils ).init()
	
	}

	init() {

		this.addHtml()
		
		this._sectionInit()
	
	}

}

