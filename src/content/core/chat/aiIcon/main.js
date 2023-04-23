/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

export class AiIcon {

	constructor( url ) {

		this.url = url
	
	}
	
	styles(){

		return `
	.relative.h-\\[30px\\].w-\\[30px\\].p-1.rounded-sm.text-white.flex.items-center.justify-center {
	    background-image: var( --pigeon-gradient-2 ) !important;
	}
	.relative.h-\\[30px\\].w-\\[30px\\].p-1.rounded-sm.text-white.flex.items-center.justify-center > svg {
	    background-image: url("${this.url}");
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: center;
	}
	.relative.h-\\[30px\\].w-\\[30px\\].p-1.rounded-sm.text-white.flex.items-center.justify-center > svg > path {
		display:none;
	}`
	
	}

	init(){

		const styleElement       = document.createElement( 'style' )
		styleElement.textContent = this.styles()

		if ( this.url && document.head ) {

			document.head.appendChild( styleElement )
		
		}
	
	}

}

