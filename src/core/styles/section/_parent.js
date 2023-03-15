/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

export class Section {

	constructor( data, utils ) {

		this.data        = data
		this.utils       = utils
		this.datasetAttr = 'data-' + this.data.bodyDataset
	
	}

	async getStorageStyles() {
		
		let storageValue, value

		storageValue = await this.utils.storage.get( this.data.bodyClass )
		
		if ( storageValue ) {

			value = storageValue 
		
		}else {

			value = {
				user : {
					text  : false,
					color : false,
				},
				chat : {
					text  : false,
					color : false,
				},
			}
		
		}

		return value

	}

	async addDataObjToBody( classObj ) {
		
		let defaultObj, obj, body
		
		body = document.body

		defaultObj = await this.getStorageStyles( )
		
		obj = this.utils.object.merge( defaultObj, classObj )
		
		await this.utils.storage.set( this.data.bodyClass, obj )
		
		obj = JSON.stringify( obj )
		
		body.setAttribute( this.datasetAttr, obj )

	}

}

