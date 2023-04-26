/**
 * EXTENSION FUNCTION.
 *
 * @description Returns the extension object & if it is not an extension returns false.
 */
/*eslint-disable */
const isBrowser = ( object ) => {
	
	if( object && object.storage && object.storage.sync ) return true

	return false

}

export const isChromium = () => {

	// chrome object is also valid in firefox, 
	// therefore we make it verify that it is not in firefox to do a better validation
	
	try{

		return isBrowser( chrome ) && !isFirefox()
	
	}catch( e ){

		return false
	
	}
}

export const isFirefox = () => {

	try{

		return isBrowser( browser )
	
	}catch( e ){

		return false
	
	}

}

export const extension = () => {

	if( chrome ) {
		
		if( isBrowser( chrome ) ) return chrome

		return false
		
	}
	
	if ( browser ){

		if( isBrowser( browser ) ) return browser
		
		return false
		
	}

	return false
	
}

export const brwsr = extension()
