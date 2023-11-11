/**
 * Url functions.
 *
 * @description Url functions.
 */

const exists = async ( url ) => {

	try {
		
		if ( !is( url ) ) return false
		
		const res = await fetch( url )

		if ( res.status >= 200 && res.status < 300 ) return true
		
		return false
	
	}catch( e ){

		return false
	
	}

}

const is = ( value ) => {

	try {

		new URL( value )
		
		return true
			
	} catch ( error ) {

		return false
			
	}

}

const isProtocol = ( value, protocol = 'https' ) => {

	if ( is( value ) && value.startsWith( protocol + '://' ) ) return true

	return false

}

const isHttp = ( value ) => {

	return isProtocol( value, 'http' )

}

const isHttps = ( value ) => {

	return isProtocol( value, 'https' )

}

const isHttpOrHttps = ( value ) => {

	return isProtocol( value, 'https' ) || isProtocol( value, 'http' )

}

export const url = {
	exists,
	is,
	isHttp,
	isHttps,
	isProtocol,
	isHttpOrHttps,
}
