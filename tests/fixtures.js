/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/**
 * Chrome ext config.
 *
 * @description For chrome exts.
 *
 * @see https://playwright.dev/docs/chrome-extensions
 */

import { test as base, chromium, firefox } from '@playwright/test'
import path                                from 'node:path'
import { readFileSync }                    from 'node:fs'
import { channel }                         from 'node:diagnostics_channel'

const currentFileUrl = import.meta.url
const currentDir     = path.dirname( new URL( currentFileUrl ).pathname )
const extensionPath  = name => path.join( currentDir, '..', 'dist', name )

export const test =  base.extend( {
	extensionPath : async ( { channel }, use ) => {

		const name = channel === 'msedge' ? 'chrome-mv2' : channel === 'firefox' ? 'firefox' : 'chrome'

		await use( extensionPath( name ) )
	
	},
	context : async ( { extensionPath }, use ) => {

		let context

		if( channel !== 'firefox' ) {

			context = await chromium.launchPersistentContext( '', {
				headless : false,
				args     : [
					'--headless=new',
					`--disable-extensions-except=${extensionPath}`,
					`--load-extension=${extensionPath}`,
				],
			} )
		
		}else {

			context = await firefox.launchPersistentContext( '', {
				headless : false,
				args     : [
					'-new-instance',
					`--extension=${extensionPath}`,
				],
			} )
		
		}

		await use( context )
		await context.close()
	
	},
	extensionId : async ( { context, extensionPath }, use ) => {

		// Detecting manifest version
		// const isManifestV2 = extensionPath.endsWith( 'mv2' )

		// if ( isManifestV2 ) {

		// 	// For manifest v2:
		// 	let [ backgroundPage ] = context.backgroundPages()
		// 	if ( !backgroundPage ) 
		// 		backgroundPage = await context.waitForEvent( 'backgroundpage' )

		// } else {

		// 	// For manifest v3:
		// 	let [ backgroundPage ] = context.serviceWorkers()
		// 	if ( !backgroundPage ) backgroundPage = await context.waitForEvent( 'serviceworker' )

		// }
		
		let [ backgroundPage ] = context.serviceWorkers()
		if ( !backgroundPage ) backgroundPage = await context.waitForEvent( 'serviceworker' )

		// Obtaining extension ID based on the background page URL
		const extensionId = backgroundPage ? backgroundPage.url().split( '/' )[2] : null
		if ( !extensionId ) throw new Error( 'Extension ID not found' )
		await use( extensionId )
	
	},
	manifest : async ( { extensionPath }, use ) => {

		const pathManifest = path.join( extensionPath,'manifest.json' )
		const manifest     = JSON.parse( readFileSync( pathManifest, 'utf8' ) )
		await use( manifest )
	
	},
} )

export const expect = test.expect
