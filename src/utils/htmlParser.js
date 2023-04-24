/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

export class HtmlParser {

	static getTagName( htmlString, index ) {

		let tagName = '',
			i = index + 1,
			char = htmlString[i]

		while ( char !== ' ' && char !== '>' ) {

			tagName += char
			i++
			char = htmlString[i]

		}

		return tagName

	}

	static parse( htmlString ) {

		const nodes = []
		
		let current, tagStack 
		
		current  = { tag: false, content: '' }
		tagStack = []

		for ( let i = 0; i < htmlString.length; i++ ) {

			const char = htmlString[i]

			if ( char === '<' ) {

				const nextChar     = htmlString[i + 1]
				const isClosingTag = nextChar === '/'
				const closingIndex = htmlString.indexOf( '>', i )
				const tagName      = isClosingTag
					? tagStack.pop()
					: this.getTagName( htmlString, i )

				if ( closingIndex === -1 || !tagName ) {

					current.content += char
					continue
        
				}

				const node = { tag: tagName, content: [] }

				if ( !isClosingTag ) {

					tagStack.push( tagName )
					nodes.push( current )
					current = node
        
				} else {

					while ( current.tag !== tagName && tagStack.length ) {

						current = nodes.pop()
          
					}

					if ( current.tag === tagName ) {

						nodes.push( current )
						current = { tag: false, content: '' }
          
					} else {

						nodes.push( current )
						current = node
          
					}
        
				}

				i = closingIndex

			} else {

				current.content += char

			}
    
		}

		if ( current.content ) {

			nodes.push( current )

		}

		return nodes

	}

	static createElement( node ) {

		if ( node.tag === false ) {

			return document.createTextNode( node.content )
    
		}

		const element = document.createElement( node.tag )
    
		if ( Array.isArray( node.content ) ) {

			for ( const childNode of node.content ) {

				const childElement = this.createElement( childNode )
				element.appendChild( childElement )
      
			}
    
		} else {

			element.textContent = node.content
    
		}

		return element

	}

	static parseAndCreate( htmlString ) {

		const nodes = this.parse( htmlString )

		const fragment = document.createElement( 'div' )
		
		for ( const node of nodes ) {

			const element = this.createElement( node )
			fragment.appendChild( element )
		
		}

		return fragment

	}

}

