/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

const classObs = ( div, cb ) => {

	const observer = new MutationObserver( cb )

	const config = { attributes: true, attributeFilter: [ 'class' ] }

	observer.observe( div, config )

}

const childObjs = ( div, cb ) => {

	const observer = new MutationObserver( cb )

	const config = { subtree: true, childList: true }

	observer.observe( div, config )

}

const htmlClass = ( cb ) => {

	classObs( document.querySelector( 'html' ), cb )

}

const bodyAttr = ( attrs, cb ) => {

	const div      = document.querySelector( 'body' )
	const observer = new MutationObserver( cb )
	const config   = { attributes: true, attributeFilter: attrs }

	observer.observe( div, config )

}

const chatObjs = ( cb ) => {

	childObjs( document.querySelector( '.flex.flex-col.items-center' ), cb )

}

const rootObs = ( cb ) => {

	let div 
	
	div = document.querySelector( '#__next' )

	const observer = new MutationObserver( cb )

	const config = { subtree: true, attributes: true, attributeFilter: [ 'class' ] }

	observer.observe( div, config )

}

const windowWidthObs = ( cb ) => {

	const observer = new ResizeObserver( entries => {

		// iterate through the entries and log the new innerWidth value
		for ( let entry of entries ) {

			cb( entry.contentRect.width )

		}
	
	} )

	// observe the window object
	observer.observe( document.body )

}

export const observer = {
	htmlClass   : htmlClass,
	child       : childObjs,
	class       : classObs,
	windowWidth : windowWidthObs,
	root        : rootObs,
	bodyAttr    : bodyAttr,
	chat        : chatObjs,
}
