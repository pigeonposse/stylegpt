/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

const convertCamelToKebab = ( str ) => {

	return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()

}
export const string = {
	convertCamelToKebab,
}
