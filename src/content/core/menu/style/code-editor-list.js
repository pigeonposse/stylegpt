/**
 * Code editor Themes.
 *
 * @description List of code editor Themes.
 *
 * @see https://highlightjs.org/examples
 */

/*
   // FUNCTION FOR GET LIST
   // Copy and execute via console in https://highlightjs.org/examples for get list
   const themeSelector   = document.getElementById( 'theme-selector' )
   const options         = themeSelector.options
   const optionTextArray = []
  
   for ( let i = 0; i < options.length; i++ ) {
  
   const v = options[i].textContent
   if ( v.endsWith( '-min' ) ){
  
   const value = v.replace( '-min', '' )
   optionTextArray.push( {
   value : value.replace( 'base16-', 'base16/' ),	
   name  : value.replaceAll( '-', ' ' ),
   } )
  
   }
  
   }
  
   console.log( optionTextArray )
*/

export const codeEditorList = [
	{
		'value' : 'a11y-dark',
		'name'  : 'a11y dark',
	},
	{
		'value' : 'a11y-light',
		'name'  : 'a11y light',
	},
	{
		'value' : 'agate',
		'name'  : 'agate',
	},
	{
		'value' : 'an-old-hope',
		'name'  : 'an old hope',
	},
	{
		'value' : 'androidstudio',
		'name'  : 'androidstudio',
	},
	{
		'value' : 'arduino-light',
		'name'  : 'arduino light',
	},
	{
		'value' : 'arta',
		'name'  : 'arta',
	},
	{
		'value' : 'ascetic',
		'name'  : 'ascetic',
	},
	{
		'value' : 'atom-one-dark-reasonable',
		'name'  : 'atom one dark reasonable',
	},
	{
		'value' : 'atom-one-dark',
		'name'  : 'atom one dark',
	},
	{
		'value' : 'atom-one-light',
		'name'  : 'atom one light',
	},
	{
		'value' : 'base16/3024',
		'name'  : 'base16 3024',
	},
	{
		'value' : 'base16/apathy',
		'name'  : 'base16 apathy',
	},
	{
		'value' : 'base16/apprentice',
		'name'  : 'base16 apprentice',
	},
	{
		'value' : 'base16/ashes',
		'name'  : 'base16 ashes',
	},
	{
		'value' : 'base16/atelier-cave-light',
		'name'  : 'base16 atelier cave light',
	},
	{
		'value' : 'base16/atelier-cave',
		'name'  : 'base16 atelier cave',
	},
	{
		'value' : 'base16/atelier-dune-light',
		'name'  : 'base16 atelier dune light',
	},
	{
		'value' : 'base16/atelier-dune',
		'name'  : 'base16 atelier dune',
	},
	{
		'value' : 'base16/atelier-estuary-light',
		'name'  : 'base16 atelier estuary light',
	},
	{
		'value' : 'base16/atelier-estuary',
		'name'  : 'base16 atelier estuary',
	},
	{
		'value' : 'base16/atelier-forest-light',
		'name'  : 'base16 atelier forest light',
	},
	{
		'value' : 'base16/atelier-forest',
		'name'  : 'base16 atelier forest',
	},
	{
		'value' : 'base16/atelier-heath-light',
		'name'  : 'base16 atelier heath light',
	},
	{
		'value' : 'base16/atelier-heath',
		'name'  : 'base16 atelier heath',
	},
	{
		'value' : 'base16/atelier-lakeside-light',
		'name'  : 'base16 atelier lakeside light',
	},
	{
		'value' : 'base16/atelier-lakeside',
		'name'  : 'base16 atelier lakeside',
	},
	{
		'value' : 'base16/atelier-plateau-light',
		'name'  : 'base16 atelier plateau light',
	},
	{
		'value' : 'base16/atelier-plateau',
		'name'  : 'base16 atelier plateau',
	},
	{
		'value' : 'base16/atelier-savanna-light',
		'name'  : 'base16 atelier savanna light',
	},
	{
		'value' : 'base16/atelier-savanna',
		'name'  : 'base16 atelier savanna',
	},
	{
		'value' : 'base16/atelier-seaside-light',
		'name'  : 'base16 atelier seaside light',
	},
	{
		'value' : 'base16/atelier-seaside',
		'name'  : 'base16 atelier seaside',
	},
	{
		'value' : 'base16/atelier-sulphurpool-light',
		'name'  : 'base16 atelier sulphurpool light',
	},
	{
		'value' : 'base16/atelier-sulphurpool',
		'name'  : 'base16 atelier sulphurpool',
	},
	{
		'value' : 'base16/atlas',
		'name'  : 'base16 atlas',
	},
	{
		'value' : 'base16/bespin',
		'name'  : 'base16 bespin',
	},
	{
		'value' : 'base16/black-metal-bathory',
		'name'  : 'base16 black metal bathory',
	},
	{
		'value' : 'base16/black-metal-burzum',
		'name'  : 'base16 black metal burzum',
	},
	{
		'value' : 'base16/black-metal-dark-funeral',
		'name'  : 'base16 black metal dark funeral',
	},
	{
		'value' : 'base16/black-metal-gorgoroth',
		'name'  : 'base16 black metal gorgoroth',
	},
	{
		'value' : 'base16/black-metal-immortal',
		'name'  : 'base16 black metal immortal',
	},
	{
		'value' : 'base16/black-metal-khold',
		'name'  : 'base16 black metal khold',
	},
	{
		'value' : 'base16/black-metal-marduk',
		'name'  : 'base16 black metal marduk',
	},
	{
		'value' : 'base16/black-metal-mayhem',
		'name'  : 'base16 black metal mayhem',
	},
	{
		'value' : 'base16/black-metal-nile',
		'name'  : 'base16 black metal nile',
	},
	{
		'value' : 'base16/black-metal-venom',
		'name'  : 'base16 black metal venom',
	},
	{
		'value' : 'base16/black-metal',
		'name'  : 'base16 black metal',
	},
	{
		'value' : 'base16/brewer',
		'name'  : 'base16 brewer',
	},
	{
		'value' : 'base16/bright',
		'name'  : 'base16 bright',
	},
	{
		'value' : 'base16/brogrammer',
		'name'  : 'base16 brogrammer',
	},
	{
		'value' : 'base16/brush-trees-dark',
		'name'  : 'base16 brush trees dark',
	},
	{
		'value' : 'base16/brush-trees',
		'name'  : 'base16 brush trees',
	},
	{
		'value' : 'base16/chalk',
		'name'  : 'base16 chalk',
	},
	{
		'value' : 'base16/circus',
		'name'  : 'base16 circus',
	},
	{
		'value' : 'base16/classic-dark',
		'name'  : 'base16 classic dark',
	},
	{
		'value' : 'base16/classic-light',
		'name'  : 'base16 classic light',
	},
	{
		'value' : 'base16/codeschool',
		'name'  : 'base16 codeschool',
	},
	{
		'value' : 'base16/colors',
		'name'  : 'base16 colors',
	},
	{
		'value' : 'base16/cupcake',
		'name'  : 'base16 cupcake',
	},
	{
		'value' : 'base16/cupertino',
		'name'  : 'base16 cupertino',
	},
	{
		'value' : 'base16/danqing',
		'name'  : 'base16 danqing',
	},
	{
		'value' : 'base16/darcula',
		'name'  : 'base16 darcula',
	},
	{
		'value' : 'base16/dark-violet',
		'name'  : 'base16 dark violet',
	},
	{
		'value' : 'base16/darkmoss',
		'name'  : 'base16 darkmoss',
	},
	{
		'value' : 'base16/darktooth',
		'name'  : 'base16 darktooth',
	},
	{
		'value' : 'base16/decaf',
		'name'  : 'base16 decaf',
	},
	{
		'value' : 'base16/default-dark',
		'name'  : 'base16 default dark',
	},
	{
		'value' : 'base16/default-light',
		'name'  : 'base16 default light',
	},
	{
		'value' : 'base16/dirtysea',
		'name'  : 'base16 dirtysea',
	},
	{
		'value' : 'base16/dracula',
		'name'  : 'base16 dracula',
	},
	{
		'value' : 'base16/edge-dark',
		'name'  : 'base16 edge dark',
	},
	{
		'value' : 'base16/edge-light',
		'name'  : 'base16 edge light',
	},
	{
		'value' : 'base16/eighties',
		'name'  : 'base16 eighties',
	},
	{
		'value' : 'base16/embers',
		'name'  : 'base16 embers',
	},
	{
		'value' : 'base16/equilibrium-dark',
		'name'  : 'base16 equilibrium dark',
	},
	{
		'value' : 'base16/equilibrium-gray-dark',
		'name'  : 'base16 equilibrium gray dark',
	},
	{
		'value' : 'base16/equilibrium-gray-light',
		'name'  : 'base16 equilibrium gray light',
	},
	{
		'value' : 'base16/equilibrium-light',
		'name'  : 'base16 equilibrium light',
	},
	{
		'value' : 'base16/espresso',
		'name'  : 'base16 espresso',
	},
	{
		'value' : 'base16/eva-dim',
		'name'  : 'base16 eva dim',
	},
	{
		'value' : 'base16/eva',
		'name'  : 'base16 eva',
	},
	{
		'value' : 'base16/flat',
		'name'  : 'base16 flat',
	},
	{
		'value' : 'base16/framer',
		'name'  : 'base16 framer',
	},
	{
		'value' : 'base16/fruit-soda',
		'name'  : 'base16 fruit soda',
	},
	{
		'value' : 'base16/gigavolt',
		'name'  : 'base16 gigavolt',
	},
	{
		'value' : 'base16/github',
		'name'  : 'base16 github',
	},
	{
		'value' : 'base16/google-dark',
		'name'  : 'base16 google dark',
	},
	{
		'value' : 'base16/google-light',
		'name'  : 'base16 google light',
	},
	{
		'value' : 'base16/grayscale-dark',
		'name'  : 'base16 grayscale dark',
	},
	{
		'value' : 'base16/grayscale-light',
		'name'  : 'base16 grayscale light',
	},
	{
		'value' : 'base16/green-screen',
		'name'  : 'base16 green screen',
	},
	{
		'value' : 'base16/gruvbox-dark-hard',
		'name'  : 'base16 gruvbox dark hard',
	},
	{
		'value' : 'base16/gruvbox-dark-medium',
		'name'  : 'base16 gruvbox dark medium',
	},
	{
		'value' : 'base16/gruvbox-dark-pale',
		'name'  : 'base16 gruvbox dark pale',
	},
	{
		'value' : 'base16/gruvbox-dark-soft',
		'name'  : 'base16 gruvbox dark soft',
	},
	{
		'value' : 'base16/gruvbox-light-hard',
		'name'  : 'base16 gruvbox light hard',
	},
	{
		'value' : 'base16/gruvbox-light-medium',
		'name'  : 'base16 gruvbox light medium',
	},
	{
		'value' : 'base16/gruvbox-light-soft',
		'name'  : 'base16 gruvbox light soft',
	},
	{
		'value' : 'base16/hardcore',
		'name'  : 'base16 hardcore',
	},
	{
		'value' : 'base16/harmonic16-dark',
		'name'  : 'base16 harmonic16 dark',
	},
	{
		'value' : 'base16/harmonic16-light',
		'name'  : 'base16 harmonic16 light',
	},
	{
		'value' : 'base16/heetch-dark',
		'name'  : 'base16 heetch dark',
	},
	{
		'value' : 'base16/heetch-light',
		'name'  : 'base16 heetch light',
	},
	{
		'value' : 'base16/helios',
		'name'  : 'base16 helios',
	},
	{
		'value' : 'base16/hopscotch',
		'name'  : 'base16 hopscotch',
	},
	{
		'value' : 'base16/horizon-dark',
		'name'  : 'base16 horizon dark',
	},
	{
		'value' : 'base16/horizon-light',
		'name'  : 'base16 horizon light',
	},
	{
		'value' : 'base16/humanoid-dark',
		'name'  : 'base16 humanoid dark',
	},
	{
		'value' : 'base16/humanoid-light',
		'name'  : 'base16 humanoid light',
	},
	{
		'value' : 'base16/ia-dark',
		'name'  : 'base16 ia dark',
	},
	{
		'value' : 'base16/ia-light',
		'name'  : 'base16 ia light',
	},
	{
		'value' : 'base16/icy-dark',
		'name'  : 'base16 icy dark',
	},
	{
		'value' : 'base16/ir-black',
		'name'  : 'base16 ir black',
	},
	{
		'value' : 'base16/isotope',
		'name'  : 'base16 isotope',
	},
	{
		'value' : 'base16/kimber',
		'name'  : 'base16 kimber',
	},
	{
		'value' : 'base16/london-tube',
		'name'  : 'base16 london tube',
	},
	{
		'value' : 'base16/macintosh',
		'name'  : 'base16 macintosh',
	},
	{
		'value' : 'base16/marrakesh',
		'name'  : 'base16 marrakesh',
	},
	{
		'value' : 'base16/materia',
		'name'  : 'base16 materia',
	},
	{
		'value' : 'base16/material-darker',
		'name'  : 'base16 material darker',
	},
	{
		'value' : 'base16/material-lighter',
		'name'  : 'base16 material lighter',
	},
	{
		'value' : 'base16/material-palenight',
		'name'  : 'base16 material palenight',
	},
	{
		'value' : 'base16/material-vivid',
		'name'  : 'base16 material vivid',
	},
	{
		'value' : 'base16/material',
		'name'  : 'base16 material',
	},
	{
		'value' : 'base16/mellow-purple',
		'name'  : 'base16 mellow purple',
	},
	{
		'value' : 'base16/mexico-light',
		'name'  : 'base16 mexico light',
	},
	{
		'value' : 'base16/mocha',
		'name'  : 'base16 mocha',
	},
	{
		'value' : 'base16/monokai',
		'name'  : 'base16 monokai',
	},
	{
		'value' : 'base16/nebula',
		'name'  : 'base16 nebula',
	},
	{
		'value' : 'base16/nord',
		'name'  : 'base16 nord',
	},
	{
		'value' : 'base16/nova',
		'name'  : 'base16 nova',
	},
	{
		'value' : 'base16/ocean',
		'name'  : 'base16 ocean',
	},
	{
		'value' : 'base16/oceanicnext',
		'name'  : 'base16 oceanicnext',
	},
	{
		'value' : 'base16/one-light',
		'name'  : 'base16 one light',
	},
	{
		'value' : 'base16/onedark',
		'name'  : 'base16 onedark',
	},
	{
		'value' : 'base16/outrun-dark',
		'name'  : 'base16 outrun dark',
	},
	{
		'value' : 'base16/papercolor-dark',
		'name'  : 'base16 papercolor dark',
	},
	{
		'value' : 'base16/papercolor-light',
		'name'  : 'base16 papercolor light',
	},
	{
		'value' : 'base16/paraiso',
		'name'  : 'base16 paraiso',
	},
	{
		'value' : 'base16/pasque',
		'name'  : 'base16 pasque',
	},
	{
		'value' : 'base16/phd',
		'name'  : 'base16 phd',
	},
	{
		'value' : 'base16/pico',
		'name'  : 'base16 pico',
	},
	{
		'value' : 'base16/pop',
		'name'  : 'base16 pop',
	},
	{
		'value' : 'base16/porple',
		'name'  : 'base16 porple',
	},
	{
		'value' : 'base16/qualia',
		'name'  : 'base16 qualia',
	},
	{
		'value' : 'base16/railscasts',
		'name'  : 'base16 railscasts',
	},
	{
		'value' : 'base16/rebecca',
		'name'  : 'base16 rebecca',
	},
	{
		'value' : 'base16/ros-pine-dawn',
		'name'  : 'base16 ros pine dawn',
	},
	{
		'value' : 'base16/ros-pine-moon',
		'name'  : 'base16 ros pine moon',
	},
	{
		'value' : 'base16/ros-pine',
		'name'  : 'base16 ros pine',
	},
	{
		'value' : 'base16/sagelight',
		'name'  : 'base16 sagelight',
	},
	{
		'value' : 'base16/sandcastle',
		'name'  : 'base16 sandcastle',
	},
	{
		'value' : 'base16/seti-ui',
		'name'  : 'base16 seti ui',
	},
	{
		'value' : 'base16/shapeshifter',
		'name'  : 'base16 shapeshifter',
	},
	{
		'value' : 'base16/silk-dark',
		'name'  : 'base16 silk dark',
	},
	{
		'value' : 'base16/silk-light',
		'name'  : 'base16 silk light',
	},
	{
		'value' : 'base16/snazzy',
		'name'  : 'base16 snazzy',
	},
	{
		'value' : 'base16/solar-flare-light',
		'name'  : 'base16 solar flare light',
	},
	{
		'value' : 'base16/solar-flare',
		'name'  : 'base16 solar flare',
	},
	{
		'value' : 'base16/solarized-dark',
		'name'  : 'base16 solarized dark',
	},
	{
		'value' : 'base16/solarized-light',
		'name'  : 'base16 solarized light',
	},
	{
		'value' : 'base16/spacemacs',
		'name'  : 'base16 spacemacs',
	},
	{
		'value' : 'base16/summercamp',
		'name'  : 'base16 summercamp',
	},
	{
		'value' : 'base16/summerfruit-dark',
		'name'  : 'base16 summerfruit dark',
	},
	{
		'value' : 'base16/summerfruit-light',
		'name'  : 'base16 summerfruit light',
	},
	{
		'value' : 'base16/synth-midnight-terminal-dark',
		'name'  : 'base16 synth midnight terminal dark',
	},
	{
		'value' : 'base16/synth-midnight-terminal-light',
		'name'  : 'base16 synth midnight terminal light',
	},
	{
		'value' : 'base16/tango',
		'name'  : 'base16 tango',
	},
	{
		'value' : 'base16/tender',
		'name'  : 'base16 tender',
	},
	{
		'value' : 'base16/tomorrow-night',
		'name'  : 'base16 tomorrow night',
	},
	{
		'value' : 'base16/tomorrow',
		'name'  : 'base16 tomorrow',
	},
	{
		'value' : 'base16/twilight',
		'name'  : 'base16 twilight',
	},
	{
		'value' : 'base16/unikitty-dark',
		'name'  : 'base16 unikitty dark',
	},
	{
		'value' : 'base16/unikitty-light',
		'name'  : 'base16 unikitty light',
	},
	{
		'value' : 'base16/vulcan',
		'name'  : 'base16 vulcan',
	},
	{
		'value' : 'base16/windows-10-light',
		'name'  : 'base16 windows 10 light',
	},
	{
		'value' : 'base16/windows-10',
		'name'  : 'base16 windows 10',
	},
	{
		'value' : 'base16/windows-95-light',
		'name'  : 'base16 windows 95 light',
	},
	{
		'value' : 'base16/windows-95',
		'name'  : 'base16 windows 95',
	},
	{
		'value' : 'base16/windows-high-contrast-light',
		'name'  : 'base16 windows high contrast light',
	},
	{
		'value' : 'base16/windows-high-contrast',
		'name'  : 'base16 windows high contrast',
	},
	{
		'value' : 'base16/windows-nt-light',
		'name'  : 'base16 windows nt light',
	},
	{
		'value' : 'base16/windows-nt',
		'name'  : 'base16 windows nt',
	},
	{
		'value' : 'base16/woodland',
		'name'  : 'base16 woodland',
	},
	{
		'value' : 'base16/xcode-dusk',
		'name'  : 'base16 xcode dusk',
	},
	{
		'value' : 'base16/zenburn',
		'name'  : 'base16 zenburn',
	},
	{
		'value' : 'brown-paper',
		'name'  : 'brown paper',
	},
	{
		'value' : 'codepen-embed',
		'name'  : 'codepen embed',
	},
	{
		'value' : 'color-brewer',
		'name'  : 'color brewer',
	},
	{
		'value' : 'dark',
		'name'  : 'dark',
	},
	{
		'value' : 'default',
		'name'  : 'default',
	},
	{
		'value' : 'devibeans',
		'name'  : 'devibeans',
	},
	{
		'value' : 'docco',
		'name'  : 'docco',
	},
	{
		'value' : 'far',
		'name'  : 'far',
	},
	{
		'value' : 'felipec',
		'name'  : 'felipec',
	},
	{
		'value' : 'foundation',
		'name'  : 'foundation',
	},
	{
		'value' : 'github-dark-dimmed',
		'name'  : 'github dark dimmed',
	},
	{
		'value' : 'github-dark',
		'name'  : 'github dark',
	},
	{
		'value' : 'github',
		'name'  : 'github',
	},
	{
		'value' : 'gml',
		'name'  : 'gml',
	},
	{
		'value' : 'googlecode',
		'name'  : 'googlecode',
	},
	{
		'value' : 'gradient-dark',
		'name'  : 'gradient dark',
	},
	{
		'value' : 'gradient-light',
		'name'  : 'gradient light',
	},
	{
		'value' : 'grayscale',
		'name'  : 'grayscale',
	},
	{
		'value' : 'hybrid',
		'name'  : 'hybrid',
	},
	{
		'value' : 'idea',
		'name'  : 'idea',
	},
	{
		'value' : 'intellij-light',
		'name'  : 'intellij light',
	},
	{
		'value' : 'ir-black',
		'name'  : 'ir black',
	},
	{
		'value' : 'isbl-editor-dark',
		'name'  : 'isbl editor dark',
	},
	{
		'value' : 'isbl-editor-light',
		'name'  : 'isbl editor light',
	},
	{
		'value' : 'kimbie-dark',
		'name'  : 'kimbie dark',
	},
	{
		'value' : 'kimbie-light',
		'name'  : 'kimbie light',
	},
	{
		'value' : 'lightfair',
		'name'  : 'lightfair',
	},
	{
		'value' : 'lioshi',
		'name'  : 'lioshi',
	},
	{
		'value' : 'magula',
		'name'  : 'magula',
	},
	{
		'value' : 'mono-blue',
		'name'  : 'mono blue',
	},
	{
		'value' : 'monokai-sublime',
		'name'  : 'monokai sublime',
	},
	{
		'value' : 'monokai',
		'name'  : 'monokai',
	},
	{
		'value' : 'night-owl',
		'name'  : 'night owl',
	},
	{
		'value' : 'nnfx-dark',
		'name'  : 'nnfx dark',
	},
	{
		'value' : 'nnfx-light',
		'name'  : 'nnfx light',
	},
	{
		'value' : 'nord',
		'name'  : 'nord',
	},
	{
		'value' : 'obsidian',
		'name'  : 'obsidian',
	},
	{
		'value' : 'panda-syntax-dark',
		'name'  : 'panda syntax dark',
	},
	{
		'value' : 'panda-syntax-light',
		'name'  : 'panda syntax light',
	},
	{
		'value' : 'paraiso-dark',
		'name'  : 'paraiso dark',
	},
	{
		'value' : 'paraiso-light',
		'name'  : 'paraiso light',
	},
	{
		'value' : 'pojoaque',
		'name'  : 'pojoaque',
	},
	{
		'value' : 'purebasic',
		'name'  : 'purebasic',
	},
	{
		'value' : 'qtcreator-dark',
		'name'  : 'qtcreator dark',
	},
	{
		'value' : 'qtcreator-light',
		'name'  : 'qtcreator light',
	},
	{
		'value' : 'rainbow',
		'name'  : 'rainbow',
	},
	{
		'value' : 'routeros',
		'name'  : 'routeros',
	},
	{
		'value' : 'school-book',
		'name'  : 'school book',
	},
	{
		'value' : 'shades-of-purple',
		'name'  : 'shades of purple',
	},
	{
		'value' : 'srcery',
		'name'  : 'srcery',
	},
	{
		'value' : 'stackoverflow-dark',
		'name'  : 'stackoverflow dark',
	},
	{
		'value' : 'stackoverflow-light',
		'name'  : 'stackoverflow light',
	},
	{
		'value' : 'sunburst',
		'name'  : 'sunburst',
	},
	{
		'value' : 'tokyo-night-dark',
		'name'  : 'tokyo night dark',
	},
	{
		'value' : 'tokyo-night-light',
		'name'  : 'tokyo night light',
	},
	{
		'value' : 'tomorrow-night-blue',
		'name'  : 'tomorrow night blue',
	},
	{
		'value' : 'tomorrow-night-bright',
		'name'  : 'tomorrow night bright',
	},
	{
		'value' : 'vs',
		'name'  : 'vs',
	},
	{
		'value' : 'vs2015',
		'name'  : 'vs2015',
	},
	{
		'value' : 'xcode',
		'name'  : 'xcode',
	},
	{
		'value' : 'xt256',
		'name'  : 'xt256',
	},
]
