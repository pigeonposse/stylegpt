/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

// import { data } from './_data'

// const addHtml = ( utils, sel ) => {

// 	let selector
	
// 	selector = '.text-gray-400.flex.self-end.lg\\:self-center.justify-center.mt-2.gap-3.md\\:gap-4.lg\\:gap-1.lg\\:absolute.lg\\:top-0.lg\\:translate-x-full.lg\\:right-0.lg\\:mt-0.lg\\:pl-2.visible'
// 	selector = sel.querySelector( selector )

// 	utils.html.chatBtn( {
// 		id       : data.btnID,
// 		path     : data.svg.path,
// 		viewBox  : data.svg.viewBow,
// 		selector : selector,
// 	} )

// }

// const copy = ( utils, sel ) => {

// 	addHtml( utils, sel )

// 	const replyBtn = sel.querySelector( '#' + data.btnID )

// 	replyBtn.addEventListener( 'click', () => {

// 		const msg         = replyBtn.parentElement.parentElement.querySelector( '.markdown' )
// 		const messageText = msg.innerHTML
// 		const textarea    = document.querySelector( 'textarea' )
// 		textarea.value    = messageText

// 		textarea.focus()
	
// 	} )

// }

// const observer = ( utils ) => {

// 	console.log( 'hola estoy en observer()' )

// 	// const targetNode = document.documentElement
// 	// const targetNode = document.querySelector( '.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\]' )
// 	// const targetNode = document.querySelector( '.flex.flex-col.items-center.text-sm.dark\\:bg-gray-800' )
	
// 	// Crear una instancia de MutationObserver
// 	const observer = new MutationObserver( function( mutationsList ) {

// 		// Buscar todas las mutaciones que agregan la clase .text-base
// 		for( let mutation of mutationsList ) {

// 			console.log( mutation )

// 			if ( mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.classList.contains( 'group' ) ) {

// 				// La clase .text-base se ha agregado
// 				console.log( 'Se agregó la clase .group' )
// 				// copy( utils, mutation.target )

// 			}
		
// 		}

// 	} )

// 	// Configurar las opciones del MutationObserver
// 	const config = { attributes: true, childList: true, subtree: true }

// 	// Comenzar a observar el nodo de destino con las opciones configuradas
// 	observer.observe( targetNode, config )

// }

// export const html = ( utils ) => {

// 	// observer( utils )

// }

