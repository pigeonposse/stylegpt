/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Section } from './_parent'

export class DefaultSection extends Section {

	async add(){

		let styles = await this.getStorageStyles( )

		// console.log( 'Defaults',styles )

		this.addDataObjToBody( styles )

	}

}
