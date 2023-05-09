/**
 * Html.
 *
 * @description Todo.
 */
import imgUrl from '../../assets/img/logo.png'

export class HtmlSuper {

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

		this.sectionID = {
			footer : 'footer',
			header : 'header',
			not    : 'notification',
		}

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
				href : this.utils.isChromium() ? this.pkg.extra.store.chrome.url : this.pkg.extra.store.mozilla.url, 
				name : '⭐️ ' + this.utils.brwsr.i18n.getMessage( 'review' ), 
			},
		]
	
	}

	createLink( href, name ) {

		let el

		el = document.createElement( 'a' )
		el.setAttribute( 'href', href )
		el.setAttribute( 'target', '_blank' )
		el.textContent = name

		return el
	
	}

}

