/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { InitSection } from './_init'

export class OptsSection extends InitSection {

	async init(){

		// await this.utils.storage.clearAll()
		
		await this.setStylesInMenu()

		await this.setStyles()

		await this.eventListeners()
		
		this.onChangeStorage()
	
	}

}
