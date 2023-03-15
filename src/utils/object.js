/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

export const isObject = ( item ) => {

	return ( item && typeof item === 'object' && !Array.isArray( item ) )

}

export const objMerge = ( target, ...sources ) => {

	if ( !sources.length ) return target
	const source = sources.shift()

	if ( isObject( target ) && isObject( source ) ) {

		for ( const key in source ) {

			if ( isObject( source[key] ) ) {

				if ( !target[key] ) Object.assign( target, { [key]: {} } )
				objMerge( target[key], source[key] )
			
			} else {

				Object.assign( target, { [key]: source[key] } )
			
			}
		
		}
	
	}

	return objMerge( target, ...sources )

}

export const object = {
	merge : objMerge,
}
