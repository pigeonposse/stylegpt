/**
 * Readme.
 *
 * @description Readme.
 */

import { readme }                   from './templates/readme.js'
import { releaseBody } from './templates/release-body.js'
import { pkg, addTextBetweenAMark, writeSync, joinPath } from './core/main.js'

const dynamicReadme = () => {

	try{

		const readmeTemp = readme( pkg )

		addTextBetweenAMark( 'README.md', '<!-- PIGEONPOSSE START MARK -->', '<!-- PIGEONPOSSE END MARK -->', readmeTemp.mark )
		addTextBetweenAMark( 'README.md', '<!-- PIGEONPOSSE START ORG -->', '<!-- PIGEONPOSSE END ORG -->', readmeTemp.org )
		addTextBetweenAMark( 'README.md', '<!-- PIGEONPOSSE START HEADER -->', '<!-- PIGEONPOSSE END HEADER -->', readmeTemp.header )
		
		writeSync( 
			joinPath( 'docs',"release-body.md"), 
			releaseBody( pkg ) 
		)

	}catch( e ){

		throw '📝 ' + e

	}

}

try {
	
	dynamicReadme()

}catch( e ){

	console.log( '❌ ' + e )

}

