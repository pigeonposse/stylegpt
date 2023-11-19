/**
 * Todo.
 *
 * @description Todo.
 */

import { MenuCoreReplicate } from '../_super/replicate-btn'

export class NewChat extends MenuCoreReplicate {

	// a.group.flex.h-10.items-center.gap-2.rounded-lg.px-2.font-medium.hover\:bg-token-surface-primary

	data = {
		btnID     : 'pigeon-new-chat',
		bodyClass : 'pigeon-new-chat',
		svg       : {
			path    : '<path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/>',
			viewBox : '0 0 448 512',
		},
		clickBtn : 'a.group.flex.h-10.items-center.gap-2.rounded-lg.px-2.font-medium.hover\\:bg-token-surface-primary',
	}

}
