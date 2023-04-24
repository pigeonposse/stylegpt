/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

export class HtmlSuper {

	constructor(){

		this.classes = {
			shadow     : 'shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]',
			radius     : 'rounded-full',
			inputColor : 'shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] rounded-full',
			input      : 'border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md rounded-full',
			border     : 'dark:border-gray-900/50',
			title      : 'flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2',
			select     : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-200 dark:focus:outline-none dark:focus:ring-0 dark:focus:border-gray-200',
			btn        : 'shadow-lg border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]',
			menu       : 'stretch mx-2 flex flex-row gap-3 lg:mx-auto lg:max-w-3xl border border-black/10 dark:border-gray-900/50 bg-white dark:text-white dark:bg-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]',
			menuIcon   : 'shadow-lg border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]',
		}
	
		this.menuClases = {
			section     : 'pigeon-menu-container-section',
			group       : 'pigeon-menu-container-group',
			parentGroup : 'pigeon-menu-container-section-group',
		}
	
	}

	getPathDValue( pathTag ) {

		const pattern = /d="(.+?)"/
		const matches = pathTag.match( pattern )
		if ( matches ) {

			return matches[1]
		
		} else {

			return ''
		
		}

	}

	createSection( id, data, customClass = '' ){

		let div 

		div = document.createElement( 'div' )
		div.setAttribute( 'class', `${id} ${customClass}` )
		
		if ( Array.isArray( data ) ) {

			for ( let i = 0; i < data.length; i++ ) {

				if ( data[i] ) {

					div.appendChild( data[i] )
				
				}
			
			}
		
		} else if ( data ) {

			div.appendChild( data )
		
		}
		
		return div

	}

	section( data = false, customClass = '' ){

		return this.createSection(
			this.menuClases.section,
			data,
			customClass,
		)
	
	}

	parentGroup( data = false, customClass = '' ){

		return this.createSection(
			this.menuClases.parentGroup,
			data,
			customClass,
		)
	
	}

	group( data = false, customClass = '' ){

		return this.createSection(
			this.menuClases.group,
			data,
			customClass,
		)
	
	}

}
