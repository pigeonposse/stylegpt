/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */
import { Html }   from './html/main'
import * as utils from '../utils/_main'

const html = new Html( utils )

document.addEventListener( 'DOMContentLoaded', async () => {

	let contentErr 

	await html.init()

	await html.addNotActivated()

	contentErr = await utils.storage.get( utils.pkg.extra.errorId )

	if ( contentErr ) await html.addNotError()

	const isInChat = await matchUrl()

	if ( !isInChat ) await html.addNotMatch()

} )

const matchUrl = async () => {

	return new Promise( ( resolve ) => {

		utils.brwsr.tabs.query( { active: true, currentWindow: true }, ( tabs ) => {

			const url   = tabs[0].url
			const match = utils.pkg.extra.chatWebMatch.some( pattern => {

				const exp = new RegExp( pattern )
				return exp.test( url )
			
			} )
			resolve( match )
		
		} )
	
	} )

}

