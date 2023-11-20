/**
 * Test files.
 *
 * @description Test files.
 *
 * @see https://playwright.dev/docs/api/class-test
 */
import { test, expect } from './fixtures.js'

// test( 'Content is loaded', async ( { page } ) => {

// 	await page.goto( 'https://chat.openai.com/' )
// 	// do something

// } )

test( 'Popup has success notification', async ( { page, extensionId, manifest } ) => {

	const popupHtml = manifest.manifest_version == 3 ? manifest.action.default_popup : manifest.browser_action.default_popup
	await page.goto( `chrome-extension://${extensionId}/${popupHtml}` )

	const notification = await page.waitForSelector( 'body div.notification > div' )
	const classes      = await notification.getAttribute( 'class' )

	const hasInfoClass    = classes.includes( 'info' )
	const hasSuccessClass = classes.includes( 'success' )

	expect( hasInfoClass || hasSuccessClass ).toBeTruthy()

} )
