/**
 * Do function.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

const exists = async ( url ) => {

	try {

		if ( typeof url !== 'string' ) return false
		if ( !url.startsWith( 'https://' ) && !url.startsWith( 'http://' ) ) return false
		
		const res = await fetch( url )
		if ( res.ok ) return true
		return false
	
	}catch( e ){

		return false
	
	}

}
export const url = {
	exists,
}
