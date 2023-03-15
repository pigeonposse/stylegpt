/**
 * Types GLOBAL FUNCTION.
 *
 * @description File to set and export types global function.
 *
 */

class Type {
	
	of( value ){

		if ( this.isString( value ) ) {

			return 'string'
		
		}else if( this.isDate( value ) ) {

			return 'date'
		
		}else if( this.isNumber( value ) ) {

			return 'number'
		
		}else if( this.isObject( value ) ){

			return 'object'
		
		}else if ( this.isArray( value ) ) {

			return 'array'
		
		}else if ( this.isJson( value ) ) {

			return 'json'
		
		}else if ( this.isFunction( value ) ) {

			return 'function'
		
		}

		return false

	}

	isEmpty ( value ) {

		if ( 
			this.isString( value ) ||
			this.isNumber( value )
		) {

			return value == '' ? true : false
		
		}else if( 
			this.isObject( value ) ||
			this.isJson( value )
		){

			return !Object.keys( value ).length ? true : false
		
		}else if ( this.isArray( value ) ) {

			return !value.length ? true : false
		
		}else if ( this.isFunction( value ) ) {

			return false
		
		}

	}

	copy( value ){

		let result

		switch ( type.of( value ) ) {

			case 'date' :
				result = new Date()
				result.setTime( value.getTime() )
				break
			case 'object' :
			case 'array' :
				result = JSON.parse( JSON.stringify( value ) )
				break
			default :
				result = value
		
		}

		return result
	
	}

	toString( value ){

		return value.toString()
	
	}

	toJson( value ) {

		if ( this.isString( value ) ) {

			value = JSON.stringify( value, undefined, 2 )
		
		}

		return JSON.parse( value )
	
	}

	isString( value ){

		return ( typeof value === 'string' )

	}

	isDate( value ){

		return ( value instanceof Date )

	}

	isNumber( value ){

		return ( typeof value === 'number' )

	}

	isObject( value ){

		return ( typeof value === 'object' && !Array.isArray( value ) )

	}

	isArray( value ){

		return ( Array.isArray( value ) )

	}
	
	isFunction( value ){

		return ( typeof value === 'function' )
	
	}

	isJson( value ){

		let json

		if( typeof value !== 'string' ){

			return false
		
		}

		try{

			json = JSON.parse( value )
			return ( typeof json === 'object' )

		}catch ( e ){

			return false
		
		}
	
	}

}

export const type = new Type()
