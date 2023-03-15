/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { DefaultSection }      from './defaults'
import { OnChangeSection }     from './onChange'
import { ObserverBodySection } from './observer'

export const section = async ( data, utils ) => {

	// await utils.storage.clearAll()

	await new DefaultSection( data, utils ).add()
	await new OnChangeSection( data, utils ).add()
	await new ObserverBodySection( data, utils ).add()

	// utils.storage.onChange( ( key, oldValue, newValue ) => {

	// 	console.log( 'storage onChange', key, oldValue, newValue )
	
	// } )

}

