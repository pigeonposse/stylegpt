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
				icon : '💜',
				name : this.utils.brwsr.i18n.getMessage( 'donate' ), 
			},
			{ 
				href : this.pkg.repository.url, 
				icon : '🐦',
				name : this.utils.brwsr.i18n.getMessage( 'contribute' ), 
			},
			{ 
				href : this.utils.isChromium() ? this.pkg.extra.store.chrome.url : this.pkg.extra.store.mozilla.url, 
				icon : '⭐️',
				name : this.utils.brwsr.i18n.getMessage( 'review' ), 
			},
		]
	
	}

	createLink( href, name, icon = false ) {

		const el = document.createElement( 'a' )
		el.setAttribute( 'href', href )
		el.setAttribute( 'target', '_blank' )
		
		if( !icon )
			el.textContent = name
		else {

			el.textContent = icon
			el.classList.add( 'icon' )
			const popover       = document.createElement( 'span' )
			popover.textContent = name
			el.appendChild( popover )
		
		}

		return el
	
	}
	
	createToggle( title, onClickMethod ) {

		const divToggle = document.createElement( 'div' )
		divToggle.classList.add( 'toogle' )

		const divTitle       = document.createElement( 'div' )
		divTitle.textContent = title

		const labelSwitch = document.createElement( 'label' )
		labelSwitch.classList.add( 'switch' )

		const inputCheckbox = document.createElement( 'input' )
		inputCheckbox.setAttribute( 'type', 'checkbox' )

		const spanSlider = document.createElement( 'span' )
		spanSlider.classList.add( 'slider', 'round' )

		labelSwitch.appendChild( inputCheckbox )
		labelSwitch.appendChild( spanSlider )

		divToggle.appendChild( divTitle )
		divToggle.appendChild( labelSwitch )

		inputCheckbox.onclick = onClickMethod

		return divToggle

	}

}

