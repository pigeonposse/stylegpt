/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */
import { TimeSuper } from './_super'

export class Time extends TimeSuper {

	textareaValue = undefined
	textarea = undefined
    
	async initStorage( ){

		const store = await this.utils.storage.get( this.stoargeID )
		if( !store ) {

			this.stoarge = []
			await this.utils.storage.set( this.stoargeID, this.stoarge )
		
		}else{

			this.stoarge = store
		
		}
	
	}

	async getFilteredStorage( { path, id = undefined } ){

		if( !this.stoarge ) return false
		
		if( id )
			return this.stoarge.filter( v => v[path] && v[id] )
		else
			return this.stoarge.filter( v => v[path] )
	
	}
	
	async setStorage( { path, id, value } ){

		const resValue = { path, id, value }
		this.stoarge   = this.stoarge && this.stoarge.legnth > 0 ? 
			[ ...this.stoarge, resValue ] : 
			[ resValue ]
		
		await this.utils.storage.set( 
			this.stoargeID, 
			this.stoarge, 
		)
	
	}

	getSelectorAttrs( sel ){

		const id = sel.getAttribute( 'data-testid' )

		if( !id ) return undefined

		return { 
			path : this.getUrlId(),
			id   : id,
		} 
	
	}

	eventTextarea ( e ) {

		e.preventDefault()
		this.textareaValue = e.target.value 
		console.log( this.textareaValue,e.target.value )
    
	}

	async observer( cb ){

		let type = 'chat-first'

		this.navigationEvent( async () => {

			const selParent = await this.utils.waitForSelector( this.classes.presentation + ' > div > div > div > div' )
			if( !selParent ) return
	
			if( type === 'chat-nav' && this.textarea ) this.textarea.removeEventListener( 'input', this.eventTextarea )
			
			this.textarea = await this.utils.waitForSelector( this.classes.textarea )
			this.textarea.addEventListener( 'input', this.eventTextarea )
			
			cb( { type, data: undefined } )
            
			if( type === 'chat-first' ) type = 'chat-nav'
		
		} )

		this.utils.observeQuery( this.classes.container ).every( async ( sel ) => {

			const txtTag = sel.querySelector( this.classes.containerText )
			if( !txtTag ) return

			const txt  = txtTag.textContent
			const type = txt && txt === this.textareaValue ? 'new' : 'old'

			cb( { type, data: sel } )
		
		} )
	
	}

	async init(){

		if( !this.utils.isChromium() ) return 

		this.observer( ( args ) => {

			console.log( args )
		
		} )

		// await this.initStorage()

		// this.utils.observeQuery( this.classes.container ).every( async ( sel ) => {

		// 	console.log( sel )
		// 	// const attrs = this.getSelectorAttrs( sel )
		// 	// const exist = await this.getFilteredStorage( attrs )
		// 	// const value = exist[0] ? exist[0].value : { 
		// 	// 	hour : this.getHour(), 
		// 	// 	time : this.getDate(), 
		// 	// 	tz   : this.getTimeZone(),
		// 	// }

		// 	// await this.setStorage( {
		// 	// 	...attrs, 
		// 	// 	value,
		// 	// } )

		// 	// await this.addTimeHTML( { 
		// 	// 	sel, 
		// 	// 	...value,
		// 	// } )
		
		// } )
	
	}

}

