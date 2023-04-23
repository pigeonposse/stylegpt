/**
 * Section class.
 *
 * @description A class for managing styles for a given section.
 *
 * @version 1.0.0
 */

export class SectionSuper {

	/**
	 * Creates an instance of the Section class.
	 *
	 * @param {object} html  - The HTML object.
	 * @param {object} data  - The data object.
	 * @param {object} utils - The utils object.
	 */
	constructor( html, data, utils ) {

		this.html              = html
		this.data              = data
		this.utils             = utils
		this.datasetAttr       = 'data-' + this.data.bodyDataset
		this.elementForData    = document.body
		this.hiddenStylesClass = 'pigeon-styles-hidden'
	
	}

}

