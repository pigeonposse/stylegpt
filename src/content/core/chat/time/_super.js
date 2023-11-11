/**
 * Todo.
 *
 * @description Todo.
 */

export class TimeSuper {

	constructor( utils ) {
		
		this.classes   = {
			presentation  : 'main > [role="presentation"]',
			container     : 'main > [role="presentation"] > div > div > div > div > div:nth-child(even)',
			textarea      : 'main [role="presentation"] form textarea#prompt-textarea',
			textareaBtn   : 'main [role="presentation"] form button[data-state]',
			containerText : '[data-message-author-role="user"] > div',
		}
		this.classTime = 'pp-stylegpt-time'
		this.utils     = utils
		this.stoarge   = undefined
		this.stoargeID = 'chatTime'
	
	}
    
	getDate() {

		const date = new Date()

		return date.toLocaleDateString( undefined, { 
			year  : 'numeric', 
			month : 'long', 
			day   : 'numeric', 
		} )
	
	}

	getTimeZone(){

		const now                     = new Date()
		const timezoneOffsetMinutes   = now.getTimezoneOffset()
		const timezoneOffsetHours     = Math.abs( timezoneOffsetMinutes / 60 )
		const timezoneOffsetSign      = timezoneOffsetMinutes < 0 ? '+' : '-'
		const timezoneOffsetFormatted = `${timezoneOffsetSign}${timezoneOffsetHours.toString().padStart( 2, '0' )}:${Math.abs( timezoneOffsetMinutes % 60 ).toString().padStart( 2, '0' )}`

		return `UTC${timezoneOffsetFormatted}`
	
	}

	getHour(){

		const now  = new Date()
		const hour = now.getHours()
		const mins = now.getMinutes()

		const hourFormat = hour < 10 ? `0${hour}` : hour
		const minFormat  = mins < 10 ? `0${mins}` : mins
      
		return `${hourFormat}:${minFormat}`
	
	}

	getUrlId(){

		const urlPath = window.location.pathname
		const parts   = urlPath.split( '/' )
		return parts[parts.length - 1]
	
	}
	
	async addTimeHTML( { sel, hour, time, tz } ){

		const existClass = sel.querySelector( this.classTime )
		if( existClass ) return

		const appendedSel = sel.querySelector( 'div' )
		const divParent   = document.createElement( 'div' )
		const div         = document.createElement( 'div' )
		const span        = document.createElement( 'span' )

		div.appendChild( document.createTextNode( `${hour}` ) )
		span.appendChild( document.createTextNode( `${time} | ${tz} - ${hour} ` ) )
		div.appendChild( span )
		divParent.appendChild( div )
		divParent.classList.add( this.classTime )
		appendedSel.appendChild( divParent )
	
	}
	
	navigationEvent( cb ){

		if( window.navigation ) {

			cb( undefined )
			window.navigation.addEventListener( 'navigate', ( e ) => cb( e ) )
		
		}
	
	}

}

