/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Section } from './_parent'

export class OnChangeSection extends Section {
	
	addDataObjToBodyFunct( type, opt, value ){
		
		let args

		args            = {}
		args[type]      = {}
		args[type][opt] = value

		this.addDataObjToBody( args )

	}

	async add() {

		let userFontSelect, userColorSelect, chatFontSelect, chatColorSelect

		userFontSelect  = document.getElementById( this.data.section.user.textID )
		userColorSelect = document.getElementById( this.data.section.user.colorID )
		chatFontSelect  = document.getElementById( this.data.section.chat.textID )
		chatColorSelect = document.getElementById( this.data.section.chat.colorID )

		userFontSelect.addEventListener( 'change', ( e ) => {

			this.addDataObjToBodyFunct( 'user', 'text', e.target.value )

		} )

		userColorSelect.addEventListener( 'change', ( e ) => {

			this.addDataObjToBodyFunct( 'user', 'color', e.target.value )

		} )

		chatFontSelect.addEventListener( 'change', ( e ) => {

			this.addDataObjToBodyFunct( 'chat', 'text', e.target.value )
	
		} )

		chatColorSelect.addEventListener( 'change', ( e ) => {

			this.addDataObjToBodyFunct( 'chat', 'color', e.target.value )
	
		} )

	}

}
