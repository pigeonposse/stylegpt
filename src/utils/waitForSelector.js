/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

export const waitForSelector = ( selector ) =>{
    
	return new Promise( resolve => {

		if ( document.querySelector( selector ) ) {

			return resolve( document.querySelector( selector ) )
		
		}
		
		// eslint-disable-next-line no-unused-vars
		const observer = new MutationObserver( mutations => {

			if ( document.querySelector( selector ) ) {

				resolve( document.querySelector( selector ) )
				observer.disconnect()
			
			}
		
		} )

		observer.observe( document.body, {
			childList : true,
			subtree   : true,
		} )
	
	} )

}
