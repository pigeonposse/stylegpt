/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { OptsSectionSuper } from './_super'

export class StylesTagSection extends OptsSectionSuper{
	
	stylesTag = null

	async _createStylesTagElement(){

		this.stylesTag    = document.createElement( 'style' )
		this.stylesTag.id = this.data.bodyClass + '-css'

		document.head.appendChild( this.stylesTag )
	
	}

	_convertStylesToCSS( selector, styles, newValue ) {

		let value, superClass, css, property
		
		superClass = this.data.bodyClass ? ` .${this.data.bodyClass} ` : ''
		css        = superClass + selector + ' {\n'
		
		for ( property in styles ) {

			value    = styles[property].replace( '{{value}}', newValue )
			property = this.utils.string.convertCamelToKebab( property )
			css     += '  ' + property + ': ' + value + ';\n'
		
		}

		css += '}\n'

		return css

	}

	async _changeStyles( storageObj ) {

		let res
		
		res = ''

		Object.entries( this.data.section ).forEach( async ( [ k, v ] ) => {

			if ( !storageObj[k] || !v.stylizedSel || !v.changedStyles ) return

			res += this._convertStylesToCSS( 
				v.stylizedSel,
				v.changedStyles, 
				storageObj[k], 
			)
				
		} )
		// console.log( res )
		return res

	}	

	async setStylesTag( storageObj ) {
		
		let styles 
		// console.log( storageObj )

		if ( !this.stylesTag ) await this._createStylesTagElement()

		styles = await this._changeStyles( storageObj )
		
		this.stylesTag.textContent = styles
	
	}

}
