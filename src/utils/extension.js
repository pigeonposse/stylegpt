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

	if( isBrowser( chrome ) ) return true

	return false

}

export const isFirefox = () => {

	if( isBrowser( browser ) ) return true

	return false

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