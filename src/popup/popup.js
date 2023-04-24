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

	contentErr = await utils.storage.get( 'pigeon-error' )

	if ( contentErr ) await html.addNotError()

	const isInChat = await matchUrl()

	if ( !isInChat ) await html.addNotMatch()

} )

const matchUrl = async () => {

	return new Promise( ( resolve ) => {

		utils.brwsr.tabs.query( { active: true, currentWindow: true }, ( tabs ) => {

			const url = tabs[0].url

			resolve( url.match( utils.pkg.extra.chatWebMatch ) !== null )
		
		} )
	
	} )

}

