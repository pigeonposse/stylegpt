/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */
/*eslint-disable */

const brwsr = chrome || browser

brwsr.runtime.onMessage.addListener( ( request, sender, sendResponse ) => {

	if ( request.error ) console.error( request.error )

} )
