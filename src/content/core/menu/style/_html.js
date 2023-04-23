/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { StyleSuper } from './_super'

export class StyleHtml extends StyleSuper {

	_sectionText( titleName, argsSel, argsColor ) {

		let select, inputColor, title, group

		select = this.html.select( {
			id    : argsSel.id,
			title : argsSel.title,
			opts  : argsSel.opts,
		} )
		
		inputColor = this.html.inputColor( {
			id      : argsColor.id,
			title   : argsColor.title,
			noTitle : true,
		} )

		title = this.html.title( titleName )
		group = this.html.group( select + inputColor, 'options' )

		return this.html.section( title + group )
	
	}

	_sectionBtns( args ) {

		let res

		res = ''
		
		Object.values( args ).forEach( v => {

			if ( !v.type || v.type !== 'btn' ) return

			res += this.html.group( this.html.btn( v ) )
		
		} )
		
		return this.html.section( res, 'reset' )

	}

	_sectionImgBg( dataUrl, dataSelect, dataColor ) {

		let inputUrl, select, titleSelect, inputColor
		
		titleSelect = this.html.title( dataSelect.title )
		
		select = this.html.select( {
			id    : dataSelect.id,
			title : dataSelect.title,
			opts  : dataSelect.opts,
		} )
		
		inputUrl = this.html.inputUrl( {
			id          : dataUrl.id,
			placeholder : dataUrl.placeholder,
			title       : dataUrl.title,
		} )

		inputColor = this.html.inputColor( {
			id    : dataColor.id,
			title : dataColor.title,
		} )

		return this.html.section( inputUrl ) + this.html.section( titleSelect + select ) + this.html.section( inputColor )

	}

	_sectionBgColor( dataUser, dataAi ){

		let inputAiColor, inputColor

		inputColor = this.html.inputColor( {
			id    : dataUser.id,
			title : dataUser.title,
		} )

		inputAiColor = this.html.inputColor( {
			id    : dataAi.id,
			title : dataAi.title,
		} )

		return this.html.section( inputColor ) + this.html.section( inputAiColor )
	
	}
	
	_setMenu( ) {

		let id, content, txtContent, bgContent

		id = this.data.sectionID

		txtContent  = this._sectionText( 
			this.data.group.user.title,
			this.data.section.userFont,
			this.data.section.userColor,
		)
		txtContent += this._sectionText( 
			this.data.group.ai.title,
			this.data.section.aiFont,
			this.data.section.aiColor,
		)

		txtContent += this.html.line()

		txtContent += this._sectionBgColor(
			this.data.section.userBgColor,
			this.data.section.aiBgColor,
		)

		txtContent += this.html.line()

		txtContent += this._sectionImgBg(
			this.data.section.chatBgImg,
			this.data.section.chatBgImgPosition,
			this.data.section.chatBgColor,
		)

		bgContent = this._sectionBtns( this.data.section )

		content  = this.html.parentGroup( txtContent )
		content += this.html.parentGroup( bgContent )
		
		this._menu( {
			id      : id,
			content : content,
		} )

	}

	addHtml(){

		this._btn( this.data )
		this._setMenu( )
	
	}

}
