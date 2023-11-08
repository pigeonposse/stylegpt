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

		select     = this.html.select( {
			id    : argsSel.id,
			title : argsSel.title,
			opts  : argsSel.opts,
		} )
		inputColor = this.html.inputColor( {
			id    : argsColor.id,
			title : argsColor.title,
		} )
		
		title = this.html.title( titleName )
		group = this.html.group( [ select, inputColor ], 'options' )

		return this.html.section( [ title, group ] )
	
	}

	_sectionBtns( args ) {

		let res

		res = []
		
		Object.values( args ).forEach( v => {

			if ( !v.type || v.type !== 'btn' ) return

			res.push( this.html.group( this.html.btn( v ) ) )
		
		} )
		
		return this.html.section( res, 'reset' )

	}

	_sectionImgBg( dataUrl, dataSelect, dataColor ) {

		let inputUrl, select, inputColor
		
		select = [
			this.html.title( dataSelect.title ),
			this.html.select( {
				id    : dataSelect.id,
				title : dataSelect.title,
				opts  : dataSelect.opts,
			} ),
		]
		
		inputUrl = [
			this.html.title( dataUrl.title ),
			this.html.inputUrl( {
				id          : dataUrl.id,
				placeholder : dataUrl.placeholder,
				title       : dataUrl.title,
			} ),
		]

		inputColor = [
			this.html.title( dataColor.title ),
			this.html.inputColor( {
				id    : dataColor.id,
				title : dataColor.title,
			} ),
		]

		return [
			this.html.section( inputUrl ), 
			this.html.section( select ), 
			this.html.section( inputColor ),
		]

	}

	_sectionBgColor( dataUser, dataAi ){

		let inputAiColor, inputColor

		inputColor = [
			this.html.title( dataUser.title ),
			this.html.inputColor( {
				id    : dataUser.id,
				title : dataUser.title,
			} ),
		]

		inputAiColor = [
			this.html.title( dataAi.title ),
			this.html.inputColor( {
				id    : dataAi.id,
				title : dataAi.title,
			} ),
		]

		return [
			this.html.section( inputColor ),
			this.html.section( inputAiColor ),
		]
	
	}
	
	_setMenu( ) {

		let id, content, txtContent, bgContent

		id = this.data.sectionID

		txtContent = [
			this._sectionText( 
				this.data.group.user.title,
				this.data.section.userFont,
				this.data.section.userColor,
			),
			this._sectionText( 
				this.data.group.ai.title,
				this.data.section.aiFont,
				this.data.section.aiColor,
			),
			this.html.line(),
			this._sectionBgColor(
				this.data.section.userBgColor,
				this.data.section.aiBgColor,
			),
			this.html.line(),
			this._sectionImgBg(
				this.data.section.chatBgImg,
				this.data.section.chatBgImgPosition,
				this.data.section.chatBgColor,
			),
			this.html.line(),
			this.html.section( [
				this.html.title( this.data.section.codeStyle.title ),
				this.html.select( {
					id    : this.data.section.codeStyle.id,
					title : this.data.section.codeStyle.title,
					opts  : this.data.section.codeStyle.opts,
				} ),
			] ), 
		]

		bgContent = this._sectionBtns( this.data.section )

		content = [
			this.html.parentGroup( txtContent.flat() ),
			this.html.parentGroup( bgContent ),
		]

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
