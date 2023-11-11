/**
 * ObserveQuery.
 *
 * @description ObserveQuery.
 *
 * @see https://github.com/naugtur/insertionQuery/tree/master
 */

/* eslint-disable no-inline-comments */
/* eslint-disable vars-on-top */
/* eslint-disable one-var */
/* eslint-disable jsdoc/require-jsdoc */

export const observeQuery = ( () => {

	var sequence = 100,
		isAnimationSupported = false,
		animationstring = 'animationName',
		keyframeprefix = '',
		domPrefixes = 'Webkit Moz O ms Khtml'.split( ' ' ),
		pfx = '',
		elm = document.createElement( 'div' ),
		options = {
			strictlyNew  : true,
			timeout      : 20,
			addImportant : false,
		}

	if ( elm.style.animationName ) {

		isAnimationSupported = true
	
	}

	if ( isAnimationSupported === false ) {

		for ( var i = 0; i < domPrefixes.length; i++ ) {

			if ( elm.style[domPrefixes[i] + 'AnimationName'] !== undefined ) {

				pfx                  = domPrefixes[i]
				animationstring      = pfx + 'AnimationName'
				keyframeprefix       = '-' + pfx.toLowerCase() + '-'
				isAnimationSupported = true
				break
			
			}
		
		}
	
	}

	function isTagged( el ) {

		return ( options.strictlyNew && ( el.QinsQ === true ) )
	
	}

	function listen( selector, callback ) {

		var styleAnimation,
			animationName = 'insQ_' + ( sequence++ ),
			importantRule = options.addImportant ? ' !important' : '',

			eventHandler = function ( event ) {

				if ( event.animationName === animationName || event[animationstring] === animationName ) {

					if ( !isTagged( event.target ) ) {

						callback( event.target )
					
					}
			
				}
		
			}

		styleAnimation           = document.createElement( 'style' )
		styleAnimation.innerHTML = '@' + keyframeprefix + 'keyframes ' + animationName + ' {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }' +
            '\n' + selector + ' { animation-duration: 0.001s' + importantRule + '; animation-name: ' + animationName + importantRule + '; ' +
            keyframeprefix + 'animation-duration: 0.001s' + importantRule + '; ' + keyframeprefix + 'animation-name: ' + animationName + importantRule + '; ' +
            ' } '

		document.head.appendChild( styleAnimation )

		var bindAnimationLater = setTimeout( function () {

			document.addEventListener( 'animationstart', eventHandler, false )
			document.addEventListener( 'MSAnimationStart', eventHandler, false )
			document.addEventListener( 'webkitAnimationStart', eventHandler, false )
			//event support is not consistent with DOM prefixes
		
		}, options.timeout ) //starts listening later to skip elements found on startup. this might need tweaking

		return {
			destroy : function () {

				clearTimeout( bindAnimationLater )
				if ( styleAnimation ) {

					document.head.removeChild( styleAnimation )
					styleAnimation = null
				
				}
				document.removeEventListener( 'animationstart', eventHandler )
				document.removeEventListener( 'MSAnimationStart', eventHandler )
				document.removeEventListener( 'webkitAnimationStart', eventHandler )
			
			},
		}
	
	}

	function tag( el ) {

		el.QinsQ = true //bug in V8 causes memory leaks when weird characters are used as field names. I don't want to risk leaking DOM trees so the key is not '-+-' anymore
	
	}

	function topmostUntaggedParent( el ) {

		if ( isTagged( el.parentNode ) || el.nodeName === 'BODY' ) {

			return el
		
		} else {

			return topmostUntaggedParent( el.parentNode )
		
		}
	
	}

	function tagAll( e ) {

		if ( !e ) {

			return 

		}
		tag( e )
		e = e.firstChild
		for ( ; e; e = e.nextSibling ) {

			if ( e !== undefined && e.nodeType === 1 ) {

				tagAll( e )
			
			}
		
		}
	
	}

	//aggregates multiple insertion events into a common parent
	function catchInsertions( selector, callback ) {

		var insertions = []
		let sumUp      = ( () => {

			var to
			return function () {

				clearTimeout( to )
				to = setTimeout( function () {

					insertions.forEach( tagAll )
					callback( insertions )
					insertions = []
					
				}, 10 )
				
			}
		
		} )()

		return listen( selector, function ( el ) {

			if ( isTagged( el ) ) {

				return
			
			}
			
			tag( el )

			const myparent = topmostUntaggedParent( el )
			if ( insertions.indexOf( myparent ) < 0 ) insertions.push( myparent )
	
			sumUp()
		
		} )
	
	}

	//insQ function
	var exports = function ( selector ) {

		if ( isAnimationSupported && selector.match( /[^{}]/ ) ) {

			if ( options.strictlyNew ) {

				tagAll( document.body ) //prevents from catching things on show
			
			}

			return {
				every : function ( callback ) {

					return listen( selector, callback )
				
				},
				summary : function ( callback ) {

					return catchInsertions( selector, callback )
				
				},
			}
		
		} else {

			return false
		
		}
	
	}

	//allows overriding defaults
	exports.config = function ( opt ) {

		for ( var o in opt ) {

			if ( opt.hasOwnProperty( o ) ) {

				options[o] = opt[o]
			
			}
		
		}
	
	}

	return exports

} )()
