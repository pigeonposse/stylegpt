/**
 * Html.
 *
 * @description Todo.
 */
import { HtmlBody } from './_body'

export class HtmlNots extends HtmlBody{

	_getGeneralErrorTxt(){

		const container = document.createElement( 'div' )

		const errorTitle = document.createElement( 'span' )
		errorTitle.setAttribute( 'class', 'error-title' )

		errorTitle.textContent = this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_title' ) 

		const errorSubtitle       = document.createElement( 'b' )
		errorSubtitle.textContent = this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_subtitle' ) 

		const errorText = document.createTextNode( ' ' + this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_text' ) )

		const errorReason1 = document.createElement( 'li' )
		errorReason1.appendChild( this.utils.HtmlParser.parseAndCreate( this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_reason1' ) ) )

		const errorReason2 = document.createElement( 'li' )
		errorReason2.appendChild( this.utils.HtmlParser.parseAndCreate( this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_reason2' ) ) )
		const errorList = document.createElement( 'ul' )
		
		errorList.appendChild( errorReason1 )
		errorList.appendChild( errorReason2 )
		container.appendChild( errorTitle )
		container.appendChild( errorSubtitle )
		container.appendChild( errorText )
		container.appendChild( errorList )

		return container
	
	}

	_createNotChildren( msg, type = 'info' ){

		msg.setAttribute( 'class', type )

		return [ msg ]
	
	}

	async addNot ( msg, type ) {

		let newNot, container

		newNot    = this._createNotChildren( msg, type )
		container = await this.utils.waitForSelector( '.notification' )

		while ( container.firstChild ) container.removeChild( container.firstChild )

		container.appendChild( newNot[0] )

	}

	async addNotError() {

		return this.addNot( 
			this._getGeneralErrorTxt(), 
			'error',
		)

	}

	async addNotActivated() {

		// return this.addNot( 
		// 	this.utils.HtmlParser.parseAndCreate( this.utils.brwsr.i18n.getMessage( 'notificationActivated' ) ), 
		// 	'success',
		// )

		return this.addNot( 
			this.utils.HtmlParser.parseAndCreate( this.utils.brwsr.i18n.getMessage( 'notificationArchived' ) ), 
			'info',
		)

	}

	async addNotMatch() {

		let element 
		
		// element = this.utils.HtmlParser.parseAndCreate( this.utils.brwsr.i18n.getMessage( 'notificationNotMatch' ) )
		element = this.utils.HtmlParser.parseAndCreate( this.utils.brwsr.i18n.getMessage( 'notificationArchived' ) )
		// element.appendChild( this.createLink( this.headerSection.link.href,this.headerSection.link.name ) )
		
		return this.addNot( 
			element, 
			'info',
		)

	}

}
