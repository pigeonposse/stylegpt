/**
 * EXTENSION FUNCTION.
 *
 * @description Returns the extension object & if it is not an extension returns false.
 */

const isBrowser = ( object ) => {
	
	if( object && object.storage && object.storage.sync ) return true

	return false

}

/*eslint-disable */
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
