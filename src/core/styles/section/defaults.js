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

		console.log( 'Defaults',styles )

		this.addDataObjToBody( styles )

		// this.userText( styles['user']['text'] ? styles['user']['text'] : false )
		// this.userColor( styles['user']['color'] ? styles['user']['color'] : false )
		// this.chatText( styles['chat']['text'] ? styles['chat']['text'] : false )
		// this.chatColor( styles['chat']['color'] ? styles['chat']['color'] : false )

	}

}
