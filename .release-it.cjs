
const pkg = require( './package.json' )

const topics = pkg.keywords.join( ',' )

module.exports = {
	'plugins' : {
		'@release-it/bumper' : {
			'in' : [
				'src/chrome/manifest.json',
				'src/firefox/manifest.json',
			],
			'out' : [
				'src/chrome/manifest.json',
				'src/firefox/manifest.json',
			],
		},
	},
	'git' : {
		'requireBranch' : 'main',
		'commitMessage' : 'Release v${version}',
	},
	'hooks' : {
		'before:init'       : [ 'git push', 'pnpm lint-fix' ],
	    'after:bump'        : 'pnpm auto-changelog -p',
	    'after:git:release' : 'echo \'After git push, before github release\'',
	    'after:release'     : [
	    	`gh repo edit ${pkg.repository.url} -d \"${pkg.description}\"`,
	    	`gh repo edit ${pkg.repository.url} --add-topic ${topics}`,
	    	'echo \'Github action is now releasing: ${name} v${version} to ${repo.repository}.\n Check if all is ok 🌈🤖\n https://github.com/${repo.repository}/actions\'',
	    ],
	},

	'github' : {
		'release' : false,
	},
	'npm' : {
		'release' : false,
	},
}
