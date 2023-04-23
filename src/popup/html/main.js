/**
 * Html.
 *
 * @description Todo.
 */
import imgUrl from '../../assets/img/logo.png'

export class Html {

	constructor( utils ) {

		this.utils   = utils
		this.pkg     = utils.pkg
		this.version = 'v' + this.pkg.version
		this.meta    = [
			{ 
				name    : 'title', 
				content : this.pkg.name + ' PopPup | 🤖🐦', 
			},
			{ 
				name    : 'description', 
				content : this.pkg.name + ' PopPup By PigeonPosse 🤖🐦', 
			},
		]

		this.headerSection = { 
			title : {
				name     : this.pkg.name + ' logo',
				img      : imgUrl, 
				imgWidth : '90px',
			},
			desc : this.utils.brwsr.i18n.getMessage( 'description' ) || this.pkg.description,
			link : {
				href : this.pkg.extra.chatPage,
				name : this.utils.brwsr.i18n.getMessage( 'newChatLink' ), 
			},
		}

		this.links = [
			{ 
				href : this.pkg.funding.url,
				name : '💜 ' + this.utils.brwsr.i18n.getMessage( 'donate' ), 
			},
			{ 
				href : this.pkg.repository.url, 
				name : '🐦 ' + this.utils.brwsr.i18n.getMessage( 'contribute' ), 
			},
			{ 
				href : utils.isChromium() ? this.pkg.extra.store.chrome : this.pkg.extra.store.firefox, 
				name : '⭐️ ' + this.utils.brwsr.i18n.getMessage( 'review' ), 
			},
		]

		this.notification = {
			active : {
				type : 'success',
				text : this.utils.brwsr.i18n.getMessage( 'notificationActivated' ),
			},
			generalErr : {
				type : 'error',
				text : this.getGneralErrorTxt(),
			},
			notMatch : {
				type : 'info',
				text : this.utils.brwsr.i18n.getMessage( 'notificationNotMatch' ) + ' ' + this.createLink( this.headerSection.link.href,this.headerSection.link.name ).outerHTML, 
			},
		}
		
		this.bodySections = [
			{ 
				type      : 'div', 
				className : 'header', 
				children  : this.createHeaderChild( ), 
			},
			{ 
				type      : 'div', 
				className : 'notification', 
				children  : this.createNotChildren( this.notification.active.text, this.notification.active.type ),
			},
			{ 
				type      : 'div', 
				className : 'footer', 
				children  : this.createFooterChild(), 
			},
		]
	
	}

	/**
	 * Initializes the popup.
	 */
	init() {

		this.createMetaTags()
		this.createBodySections()
	
	}

	getGneralErrorTxt(){

		let res 
		res  = ''
		res += '<span class="error-title"> ' + this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_title' ) + '</span> '
		res += '<b>' + this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_subtitle' ) + '</b> '
		res += this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_text' ) + '</br>'
		res += '<ul>'
		res += '<li>'
		res += this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_reason1' )
		res += '</li>'
		res += '<li>'
		res += this.utils.brwsr.i18n.getMessage( 'notificationGeneralError_reason2' )
		res += '</li>'
		res += '</ul>'

		return res
	
	}
	
	/**
	 * Creates the meta tags.
	 */
	createMetaTags() {

		this.meta.forEach( meta => {
			
			let el

			el = document.createElement( 'meta' )
			el.setAttribute( 'name', meta.name )
			el.setAttribute( 'content', meta.content )
			document.head.appendChild( el )
		
		} )
	
	}

	createFooterChild( ){

		let desc, array

		desc = document.createElement( 'span' )
		
		desc.textContent = this.version
		desc.setAttribute( 'class', 'version' )
		array = this.links.map( link => this.createLink( link.href, link.name ) )
		
		array.push( desc )

		return array
	
	}

	createHeaderChild( ){

		let desc, title, img

		desc             = document.createElement( 'span' )
		desc.textContent = this.headerSection.desc
		title            = document.createElement( 'h2' )

		img = document.createElement( 'img' )
		img.setAttribute( 'src', this.headerSection.title.img )
		img.setAttribute( 'width', this.headerSection.title.imgWidth )
		img.setAttribute( 'title', this.headerSection.title.name )

		title.appendChild( img )
		
		return [
			title,
			desc,
			this.createLink( this.headerSection.link.href, this.headerSection.link.name ),
		]
	
	}

	createNotChildren( txt, type = 'info' ){

		let el

		el = document.createElement( 'div' )
		el.setAttribute( 'class', type )
		el.innerHTML = txt
		
		return [
			el,
		]
	
	}

	/**
	 * Creates a link element.
	 *
	 * @param   {string}      href - The link href.
	 * @param   {string}      name - The link text.
	 * @returns {HTMLElement}      - The link element.
	 */
	createLink( href, name ) {

		let el

		el = document.createElement( 'a' )
		el.setAttribute( 'href', href )
		el.setAttribute( 'target', '_blank' )
		el.textContent = name

		return el
	
	}

	/**
	 * Creates the body sections.
	 */
	createBodySections() {

		this.bodySections.forEach( section => {

			let el

			el = document.createElement( section.type )
			el.setAttribute( 'class', section.className )
			
			if ( section.children ) {

				section.children.forEach( child => {

					el.appendChild( child )
				
				} )
			
			}

			document.body.appendChild( el )
		
		} )
	
	}

	async addNotError() {

		return this.addNot( 
			this.notification.generalErr.text, 
			this.notification.generalErr.type,
		)

	}

	async addNotMatch() {

		return this.addNot( 
			this.notification.notMatch.text, 
			this.notification.notMatch.type,
		)

	}

	async addNot ( msg, type ) {

		let newNot, notSel
		
		newNot = this.createNotChildren( msg, type )

		notSel = await this.utils.waitForSelector( '.notification' )

		notSel.innerHTML = newNot[0].outerHTML

	}

}

