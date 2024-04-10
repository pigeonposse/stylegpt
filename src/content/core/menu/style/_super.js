/**
 * Todo.
 *
 * @param utils
 * @description Todo.
 *
 * @version     1.0.0
 */

import { MenuCore }       from '../_super/main'
import { codeEditorList } from './code-editor-list'
export class StyleSuper extends MenuCore {

	_getCodeStyle(){

		return {
			title : this.utils.brwsr.i18n.getMessage( 'stylesSection_codeEditor' ),
			id    : 'pigeon-code-editor',
			// stylizedSel   : 'main:first-of-type',
			// changedStyles : {
			// 	backgroundSize : '{{value}}',
			// },
			opts  : [
				{
					value : 'none',
					name  : 'Default',
				},
				...codeEditorList,
			],
			defaultValue : 'none',
		}
	
	}

	fontOpts = [
		{
			name  : this.utils.brwsr.i18n.getMessage( 'stylesSection_fontDefault' ),
			value : 'var(--pigeon-font-family)',
		},
		{
			name  : 'Arial',
			value : 'Arial',
		},
		{
			name  : 'Helvetica',
			value : 'Helvetica',
		},
		{
			name  : 'Verdana',
			value : 'Verdana',
		},
		{
			name  : 'Georgia',
			value : 'Georgia',
		},
		{
			name  : 'Times New Roman',
			value : 'Times New Roman',
		},
	]
	
	// impares
	userSectionQuery = '.flex-1.overflow-hidden > div > div > div > div:nth-child(even) > div[dir="auto"] > div:not([type="button"])'
	// par
	aiSectionQuery = '.flex-1.overflow-hidden > div > div > div > div:nth-child(odd) > div[dir="auto"] > div:not([type="button"])'
	// bg
	bgSectionQuery = '#__next'

	data = {
		btnID     : 'pigeon-styles',
		bodyClass : 'pigeon-styles',
		sectionID : 'pigeon-styles-menu',
		group     : {
			user : {
				title : this.utils.brwsr.i18n.getMessage( 'stylesSection_userText' ),
			},
			ai : {
				title : this.utils.brwsr.i18n.getMessage( 'stylesSection_aiText' ),
			},
		},
		section : {
			sidebarBgColor : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_sidebarBgColor' ),
				id            : 'pigeon-styles-sidebar-color',
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-sidebar-bg-color' : '{{value}}',
				},
			},
			userColor : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_userColor' ),
				id            : 'pigeon-styles-menu-user-color',
				// stylizedSel   : this.userSectionQuery,
				// changedStyles : {
				// 	color : '{{value}}',
				// },
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-user-color' : '{{value}}',
				},
			},
			userFont : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_userFont' ),
				id            : 'pigeon-styles-menu-user-text',
				// stylizedSel   : this.userSectionQuery,
				// changedStyles : {
				// 	fontFamily : '{{value}}',
				// },
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-user-font' : '{{value}}',
				},
				defaultValue : 'var(--pigeon-font-family)',
				opts         : this.fontOpts,
			},
			userBgColor : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_userBgColor' ),
				id            : 'pigeon-user-color-bg-input',
				// stylizedSel   : this.userSectionQuery,
				// changedStyles : {
				// 	backgroundColor : '{{value}}',
				// },
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-user-bg-color' : '{{value}}',
				},
			},
			aiFont : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_aiFont' ),
				id            : 'pigeon-styles-menu-chat-text',
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-ai-font' : '{{value}}',
				},
				defaultValue : 'var(--pigeon-font-family)',
				opts         : this.fontOpts,
			},
			aiColor : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_aiColor' ),
				id            : 'pigeon-styles-menu-chat-color',
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-ai-color' : '{{value}}',
				},
			},
			aiBgColor : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_aiBgColor' ),
				id            : 'pigeon-color-bg-input',
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-ai-bg-color' : '{{value}}',
				},
			},
			chatBgColor : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_chatBgColor' ),
				id            : 'pigeon-chat-color-bg-input',
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-bg-color' : '{{value}}',
				},
			},
			chatBgImg : {
				type          : 'url',
				defaultValue  : null,
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_chatBgImg' ),
				id            : 'pigeon-img-bg-input',
				placeholder   : this.utils.brwsr.i18n.getMessage( 'stylesSection_chatBgImg_placeholder' ),
				// stylizedSel   : this.bgSectionQuery,
				// changedStyles : {
				// 	backgroundImage    : 'url("{{value}}")',
				// 	backgroundRepeat   : 'no-repeat',
				// 	backgroundPosition : 'center',
				// },
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-bg-img' : 'url("{{value}}")',
				},
			},
			chatBgImgPosition : {
				title         : this.utils.brwsr.i18n.getMessage( 'stylesSection_chatBgImgPosition' ),
				id            : 'pigeon-img-bg-position-input',
				// stylizedSel   : this.bgSectionQuery,
				// changedStyles : {
				// 	backgroundSize : '{{value}}',
				// },
				stylizedSel   : '',
				changedStyles : {
					'--pigeon-conversation-bg-img-size' : '{{value}}',
				},
				opts : [
					{
						name  : this.utils.brwsr.i18n.getMessage( 'stylesSection_chatBgImgPosition_cover' ),
						value : 'cover',
					},
					{
						name  : this.utils.brwsr.i18n.getMessage( 'stylesSection_chatBgImgPosition_contain' ),
						value : 'contain',
					},
					{
						name  : '100 Pixels',
						value : '100px',
					},
					{
						name  : '300 Pixels',
						value : '300px',
					},
					{
						name  : '500 Pixels',
						value : '500px',
					},
					{
						name  : '1000 Pixels',
						value : '1000px',
					},
				],
				defaultValue : 'cover',
			},
			codeStyle  : this._getCodeStyle(),
			showStyles : {
				type         : 'btn',
				btnType      : 'toggle',
				id           : 'pigeon-styles-hide',
				title        : this.utils.brwsr.i18n.getMessage( 'stylesSection_showStyles_hide' ),
				viewBox      : '0 0 640 512',
				path         : '<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/>',
				defaultValue : true,
				toggleData   : {
					title   : this.utils.brwsr.i18n.getMessage( 'stylesSection_showStyles_show' ),
					viewBox : '0 0 576 512',
					path    : '<path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>',
				},
			},
			reset : {
				type    : 'btn',
				btnType : 'reset',
				id      : 'pigeon-styles-reset',
				title   : this.utils.brwsr.i18n.getMessage( 'stylesSection_reset' ),
				viewBox : '0 0 448 512',
				path    : '<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>',
			},
		},
		svg : {
			viewBox : '0 0 512 512',
			path    : '<path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>',
		},
	}

}

