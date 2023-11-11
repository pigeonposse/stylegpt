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
	.relative.p-1.rounded-sm.h-9.w-9.text-white.flex.items-center.justify-center {
		background-color: #96969633 !important;
	}
	.relative.p-1.rounded-sm.h-9.w-9.text-white.flex.items-center.justify-center svg {
	    background-image: url("${this.url}");
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: center;
	}
	.relative.p-1.rounded-sm.h-9.w-9.text-white.flex.items-center.justify-center svg > path {
		display:none;
	}`
	
	}

	async init(){

		const styleElement       = document.createElement( 'style' )
		styleElement.id          = 'pp-stylegpt-icon-styles-css'
		styleElement.textContent = this.styles()

		if ( this.url && document.head ) document.head.appendChild( styleElement )
	
	}

}

