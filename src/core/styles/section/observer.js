/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { Section } from './_parent'

export class ObserverBodySection extends Section {

	async userText( value ){

		let select

		select = '#' + this.data.section.user.textID
		select = document.querySelector( select )

		if ( !value && !select ) return 

		select.value = value

	}

	async userColor( value ){

		let select
		
		select = '#' + this.data.section.user.colorID
		select = document.querySelector( select )

		if ( !value && !select ) return 

		select.value = value

	}

	async chatText( value ){

		let select
		
		select = '#' + this.data.section.chat.textID
		select = document.querySelector( select )

		if ( !value && !select ) return 
		
		select.value = value

	}

	async chatColor( value ){

		let select 
		
		select = '#' + this.data.section.chat.colorID
		select = document.querySelector( select )

		if ( !value && !select ) return 

		select.value = value
	
	}
	
	changeStyles( value ) {

		let chatGPT, user

		user    = this.data.chatSelector.user
		user    = document.querySelectorAll( user )
		chatGPT = this.data.chatSelector.chat
		chatGPT = document.querySelectorAll( chatGPT )

		user.forEach( ( section ) => {

			section.style.color      = value['user']['color']
			section.style.fontFamily = value['user']['text']
		
		} )

		chatGPT.forEach( ( section ) => {

			section.style.color      = value['chat']['color']
			section.style.fontFamily = value['chat']['text']
		
		} )

	}	

	async add(){

		this.utils.observer.bodyAttr( 
			[ this.datasetAttr ], 
			async ( mutation ) => {

				let styles

				styles =  mutation[0].target.getAttribute( this.datasetAttr )
				styles = JSON.parse( styles )
				
				await this.userText( styles['user']['text'] )
				await this.userColor( styles['user']['color'] )
				await this.chatText( styles['chat']['text'] )
				await this.chatColor( styles['chat']['color'] )

			},
		)

		setInterval( async () => {

			let styles

			styles = document.body.getAttribute( this.datasetAttr )
			styles = JSON.parse( styles )
				
			this.changeStyles( styles )

		}, 500 ) 

	}

}
