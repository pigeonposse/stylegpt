/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

import { svg } from './svg'

const data = {
	btnSection    : 'pigeon-btn-section',
	appendSection : '#pigeon-btn-section > div',
	chatBtnAppend : '.text-gray-400.flex.self-end.lg\\:self-center.justify-center.mt-2.gap-3.md\\:gap-4.lg\\:gap-1.lg\\:absolute.lg\\:top-0.lg\\:translate-x-full.lg\\:right-0.lg\\:mt-0.lg\\:pl-2.visible',
}

const mainBtn = ( args ) => {

	if ( document.getElementById( args.id ) ) return
	
	let selector, html, icon, classes

	icon = svg.icon( args.path, args.viewBox )

	selector = document.querySelector( data.appendSection )
	classes  = 'shadow-lg border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'

	html = `<button id="${args.id}" class="pigeon-form-btn ${classes}">
		${( args.text ) ? args.text : icon}
		</button>`

	selector.insertAdjacentHTML( 'beforeend', html )

}

const chatBtn = ( args ) => {

	if ( document.getElementById( args.id ) ) return
	
	let html, icon

	icon = svg.icon( args.path, args.viewBox )

	html = `<button id="${args.id}" class="pigeon-chat-btn ${args.id}">
		${( args.text ) ? args.text : icon}
		</button>`

	data.selector.insertAdjacentHTML( 'beforeend', html )

}

const btnSection = () => {
	
	let selector, html
	
	selector = document.body 

	html = `<div id="${data.btnSection}" class="${data.btnSection}"><div style="position:relative;"></div></div>`

	selector.insertAdjacentHTML( 'beforeend', html )

}

const msg = ( args ) => {

	if ( document.getElementById( args.id ) ) return

	let selector, classes, container
	
	selector = document.querySelector( data.appendSection )
	classes  = 'px-3 py-2 rounded-md text-white inline-flex flex-row border pointer-events-auto gap-2 border-orange-500 bg-orange-500 '
	classes += 'shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'
	
	container = `<div id="${args.id}" class="${args.id} ${classes}">
		${args.content}
	</div>`

	selector.insertAdjacentHTML( 'beforeend', container )

}

const menu = ( args ) => {

	if ( document.getElementById( args.id ) ) return

	let selector, classes, container
	
	selector = document.querySelector( data.appendSection )
	classes  = 'stretch mx-2 flex flex-row gap-3 lg:mx-auto lg:max-w-3xl '
	classes += 'border border-black/10 dark:border-gray-900/50 bg-white dark:text-white dark:bg-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'
	
	container = `<div id="${args.id}" class="${args.id} ${classes}">
		${args.content}
	</div>`

	selector.insertAdjacentHTML( 'beforeend', container )

}

export const html = {
	chatBtn,
	mainBtn,
	menu,
	btnSection,
	msg,
}
