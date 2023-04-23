/**
 * Todo.
 *
 * @description Todo.
 */

import { MenuCore } from '../_super/main'

export class DarkModeSuper extends MenuCore {
	
	data = {
		btnID       : 'pigeon-dark-mode',
		bodyClass   : 'pigeon-dark-mode',
		bodyDataset : 'pigeon-dark-mode',
		sectionID   : 'pigeon-dark-mode-menu',
		svg         : {
			viewBox : '0 0 512 512',
			path    : '<path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>',
		},
	}

}
