/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */
async function init() {

	var links, container, btn, div, title, content, i

	content = document.querySelector( '#bodyContent' )

	if ( !content ) return

	links = content.querySelectorAll( 'p > a' )

	if ( !links ) return

	container = document.createElement( 'div' )
	container.classList.add( 'pigeon-w-container' )
	container.classList.add( 'slides' )
	container.classList.add( 'vector-body' )

	if ( content.previousElementSibling.id == 'firstHeading' ) {

		container.setAttribute( 'style', 'padding-top:0' )

	}

	for ( i = 0; i < links.length; i++ ) {

		div = document.createElement( 'div' )
		div.setAttribute( 'class', 'slides-' + 1 )

		btn = document.createElement( 'a' )
		btn.setAttribute( 'href', links[i].href )

		if ( links[i].href != '' && links[i].innerText != '' ) {

			btn.setAttribute( 'title', links[i].innerText )
			btn.innerHTML = links[i].innerText

			div.appendChild( btn )
			container.appendChild( div )

		}

	}

	title = document.querySelector( 'h1' )

	if ( title && title.innerText != '' ) content.before( container )

}

init()
