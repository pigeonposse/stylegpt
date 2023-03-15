/**
 * STORAGE FUNCTION.
 *
 * @description Class for storage regardless if you are in brwoser or windows.
 *
 */

import { extension } from './extension'
import { type }      from './type'

const brwsr = extension()

export const storage = {

	clearAll : async () => {

		try {

			// For browsers
			if( brwsr ){

				return await new Promise( ( resolve, reject ) => {

					brwsr.storage.sync.clear( () => {

						if ( brwsr.runtime.lastError ) {

							return reject( brwsr.runtime.lastError )

						}
						resolve( )

					} ) 
				
				} )
				
			}else {

				return await localStorage.clear( )
				
			}

		} catch ( e ) {

			console.log( e )

		}

	},

	getAll : async () => {

		let values, keys, i

		if( brwsr ){

			return await storage.get( null )
		
		}else {

			values = []
			keys   = Object.keys( localStorage )
			i      = keys.length

			while ( i-- ) {

				values.push( localStorage.getItem( keys[i] ) )
			
			}

			return values

		}

	},

	get : async ( key ) => {

		try {

			// For browsers
			if( brwsr ){

				return new Promise( ( resolve, reject ) => {

					brwsr.storage.sync.get( key, ( items ) => {

						if ( brwsr.runtime.lastError ) {

							return reject( brwsr.runtime.lastError )

						}

						resolve( items )

					} )
					
				} ).then( result => {

					if ( key == null ) return result
					else return result[key]
					
				} )
				
			}else {

				return await localStorage.getItem( key )
				
			}

		} catch ( e ) {

			console.log( e )

		}

	},
		
	set : async ( key, value, timeout = 1000 ) => {

		return await setTimeout( 
			async () => {

				try {

					if( brwsr ){
							
						let result = {}
						
						result[key] = value

						return await brwsr.storage.sync.set( result )

					}else {

						return await localStorage.setItem( key, value )
						
					}
						
				} catch ( error ) {

					console.log( error )
					
				}

			},
			timeout, 
		)

	},

	onChange : ( cb = false ) => {

		return brwsr.storage.onChanged.addListener( ( changes, namespace ) => {

			for ( let [ key, { oldValue, newValue } ] of Object.entries( changes ) ) {
				
				if( cb && type.isFunction( cb ) ){

					cb( key, oldValue, newValue, namespace )
				
				}else {

					console.log(
						`Storage key "${key}" in namespace "${namespace}" changed.`,
						`Old value was "${oldValue}", new value is "${newValue}".`,
					)
				
				}
				
			}

		} )

	},
	
}
