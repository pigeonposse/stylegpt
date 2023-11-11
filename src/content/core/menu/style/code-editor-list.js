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
	const name = value.replaceAll( '-', ' ' )
	const nameCap = name.charAt(0).toUpperCase() + name.slice(1);
	
	optionTextArray.push( {
	value : value.replace( 'base16-', 'base16/' ),	
	name  : nameCap,
	} )
  
   }
  
   }
  
   console.log( optionTextArray )
*/

export const codeEditorList = [
	{
		'value' : 'a11y-dark',
		'name'  : 'A11y dark',
	},
	{
		'value' : 'a11y-light',
		'name'  : 'A11y light',
	},
	{
		'value' : 'agate',
		'name'  : 'Agate',
	},
	{
		'value' : 'an-old-hope',
		'name'  : 'An old hope',
	},
	{
		'value' : 'androidstudio',
		'name'  : 'Androidstudio',
	},
	{
		'value' : 'arduino-light',
		'name'  : 'Arduino light',
	},
	{
		'value' : 'arta',
		'name'  : 'Arta',
	},
	{
		'value' : 'ascetic',
		'name'  : 'Ascetic',
	},
	{
		'value' : 'atom-one-dark-reasonable',
		'name'  : 'Atom one dark reasonable',
	},
	{
		'value' : 'atom-one-dark',
		'name'  : 'Atom one dark',
	},
	{
		'value' : 'atom-one-light',
		'name'  : 'Atom one light',
	},
	{
		'value' : 'base16/3024',
		'name'  : 'Base16 3024',
	},
	{
		'value' : 'base16/apathy',
		'name'  : 'Base16 apathy',
	},
	{
		'value' : 'base16/apprentice',
		'name'  : 'Base16 apprentice',
	},
	{
		'value' : 'base16/ashes',
		'name'  : 'Base16 ashes',
	},
	{
		'value' : 'base16/atelier-cave-light',
		'name'  : 'Base16 atelier cave light',
	},
	{
		'value' : 'base16/atelier-cave',
		'name'  : 'Base16 atelier cave',
	},
	{
		'value' : 'base16/atelier-dune-light',
		'name'  : 'Base16 atelier dune light',
	},
	{
		'value' : 'base16/atelier-dune',
		'name'  : 'Base16 atelier dune',
	},
	{
		'value' : 'base16/atelier-estuary-light',
		'name'  : 'Base16 atelier estuary light',
	},
	{
		'value' : 'base16/atelier-estuary',
		'name'  : 'Base16 atelier estuary',
	},
	{
		'value' : 'base16/atelier-forest-light',
		'name'  : 'Base16 atelier forest light',
	},
	{
		'value' : 'base16/atelier-forest',
		'name'  : 'Base16 atelier forest',
	},
	{
		'value' : 'base16/atelier-heath-light',
		'name'  : 'Base16 atelier heath light',
	},
	{
		'value' : 'base16/atelier-heath',
		'name'  : 'Base16 atelier heath',
	},
	{
		'value' : 'base16/atelier-lakeside-light',
		'name'  : 'Base16 atelier lakeside light',
	},
	{
		'value' : 'base16/atelier-lakeside',
		'name'  : 'Base16 atelier lakeside',
	},
	{
		'value' : 'base16/atelier-plateau-light',
		'name'  : 'Base16 atelier plateau light',
	},
	{
		'value' : 'base16/atelier-plateau',
		'name'  : 'Base16 atelier plateau',
	},
	{
		'value' : 'base16/atelier-savanna-light',
		'name'  : 'Base16 atelier savanna light',
	},
	{
		'value' : 'base16/atelier-savanna',
		'name'  : 'Base16 atelier savanna',
	},
	{
		'value' : 'base16/atelier-seaside-light',
		'name'  : 'Base16 atelier seaside light',
	},
	{
		'value' : 'base16/atelier-seaside',
		'name'  : 'Base16 atelier seaside',
	},
	{
		'value' : 'base16/atelier-sulphurpool-light',
		'name'  : 'Base16 atelier sulphurpool light',
	},
	{
		'value' : 'base16/atelier-sulphurpool',
		'name'  : 'Base16 atelier sulphurpool',
	},
	{
		'value' : 'base16/atlas',
		'name'  : 'Base16 atlas',
	},
	{
		'value' : 'base16/bespin',
		'name'  : 'Base16 bespin',
	},
	{
		'value' : 'base16/black-metal-bathory',
		'name'  : 'Base16 black metal bathory',
	},
	{
		'value' : 'base16/black-metal-burzum',
		'name'  : 'Base16 black metal burzum',
	},
	{
		'value' : 'base16/black-metal-dark-funeral',
		'name'  : 'Base16 black metal dark funeral',
	},
	{
		'value' : 'base16/black-metal-gorgoroth',
		'name'  : 'Base16 black metal gorgoroth',
	},
	{
		'value' : 'base16/black-metal-immortal',
		'name'  : 'Base16 black metal immortal',
	},
	{
		'value' : 'base16/black-metal-khold',
		'name'  : 'Base16 black metal khold',
	},
	{
		'value' : 'base16/black-metal-marduk',
		'name'  : 'Base16 black metal marduk',
	},
	{
		'value' : 'base16/black-metal-mayhem',
		'name'  : 'Base16 black metal mayhem',
	},
	{
		'value' : 'base16/black-metal-nile',
		'name'  : 'Base16 black metal nile',
	},
	{
		'value' : 'base16/black-metal-venom',
		'name'  : 'Base16 black metal venom',
	},
	{
		'value' : 'base16/black-metal',
		'name'  : 'Base16 black metal',
	},
	{
		'value' : 'base16/brewer',
		'name'  : 'Base16 brewer',
	},
	{
		'value' : 'base16/bright',
		'name'  : 'Base16 bright',
	},
	{
		'value' : 'base16/brogrammer',
		'name'  : 'Base16 brogrammer',
	},
	{
		'value' : 'base16/brush-trees-dark',
		'name'  : 'Base16 brush trees dark',
	},
	{
		'value' : 'base16/brush-trees',
		'name'  : 'Base16 brush trees',
	},
	{
		'value' : 'base16/chalk',
		'name'  : 'Base16 chalk',
	},
	{
		'value' : 'base16/circus',
		'name'  : 'Base16 circus',
	},
	{
		'value' : 'base16/classic-dark',
		'name'  : 'Base16 classic dark',
	},
	{
		'value' : 'base16/classic-light',
		'name'  : 'Base16 classic light',
	},
	{
		'value' : 'base16/codeschool',
		'name'  : 'Base16 codeschool',
	},
	{
		'value' : 'base16/colors',
		'name'  : 'Base16 colors',
	},
	{
		'value' : 'base16/cupcake',
		'name'  : 'Base16 cupcake',
	},
	{
		'value' : 'base16/cupertino',
		'name'  : 'Base16 cupertino',
	},
	{
		'value' : 'base16/danqing',
		'name'  : 'Base16 danqing',
	},
	{
		'value' : 'base16/darcula',
		'name'  : 'Base16 darcula',
	},
	{
		'value' : 'base16/dark-violet',
		'name'  : 'Base16 dark violet',
	},
	{
		'value' : 'base16/darkmoss',
		'name'  : 'Base16 darkmoss',
	},
	{
		'value' : 'base16/darktooth',
		'name'  : 'Base16 darktooth',
	},
	{
		'value' : 'base16/decaf',
		'name'  : 'Base16 decaf',
	},
	{
		'value' : 'base16/default-dark',
		'name'  : 'Base16 default dark',
	},
	{
		'value' : 'base16/default-light',
		'name'  : 'Base16 default light',
	},
	{
		'value' : 'base16/dirtysea',
		'name'  : 'Base16 dirtysea',
	},
	{
		'value' : 'base16/dracula',
		'name'  : 'Base16 dracula',
	},
	{
		'value' : 'base16/edge-dark',
		'name'  : 'Base16 edge dark',
	},
	{
		'value' : 'base16/edge-light',
		'name'  : 'Base16 edge light',
	},
	{
		'value' : 'base16/eighties',
		'name'  : 'Base16 eighties',
	},
	{
		'value' : 'base16/embers',
		'name'  : 'Base16 embers',
	},
	{
		'value' : 'base16/equilibrium-dark',
		'name'  : 'Base16 equilibrium dark',
	},
	{
		'value' : 'base16/equilibrium-gray-dark',
		'name'  : 'Base16 equilibrium gray dark',
	},
	{
		'value' : 'base16/equilibrium-gray-light',
		'name'  : 'Base16 equilibrium gray light',
	},
	{
		'value' : 'base16/equilibrium-light',
		'name'  : 'Base16 equilibrium light',
	},
	{
		'value' : 'base16/espresso',
		'name'  : 'Base16 espresso',
	},
	{
		'value' : 'base16/eva-dim',
		'name'  : 'Base16 eva dim',
	},
	{
		'value' : 'base16/eva',
		'name'  : 'Base16 eva',
	},
	{
		'value' : 'base16/flat',
		'name'  : 'Base16 flat',
	},
	{
		'value' : 'base16/framer',
		'name'  : 'Base16 framer',
	},
	{
		'value' : 'base16/fruit-soda',
		'name'  : 'Base16 fruit soda',
	},
	{
		'value' : 'base16/gigavolt',
		'name'  : 'Base16 gigavolt',
	},
	{
		'value' : 'base16/github',
		'name'  : 'Base16 github',
	},
	{
		'value' : 'base16/google-dark',
		'name'  : 'Base16 google dark',
	},
	{
		'value' : 'base16/google-light',
		'name'  : 'Base16 google light',
	},
	{
		'value' : 'base16/grayscale-dark',
		'name'  : 'Base16 grayscale dark',
	},
	{
		'value' : 'base16/grayscale-light',
		'name'  : 'Base16 grayscale light',
	},
	{
		'value' : 'base16/green-screen',
		'name'  : 'Base16 green screen',
	},
	{
		'value' : 'base16/gruvbox-dark-hard',
		'name'  : 'Base16 gruvbox dark hard',
	},
	{
		'value' : 'base16/gruvbox-dark-medium',
		'name'  : 'Base16 gruvbox dark medium',
	},
	{
		'value' : 'base16/gruvbox-dark-pale',
		'name'  : 'Base16 gruvbox dark pale',
	},
	{
		'value' : 'base16/gruvbox-dark-soft',
		'name'  : 'Base16 gruvbox dark soft',
	},
	{
		'value' : 'base16/gruvbox-light-hard',
		'name'  : 'Base16 gruvbox light hard',
	},
	{
		'value' : 'base16/gruvbox-light-medium',
		'name'  : 'Base16 gruvbox light medium',
	},
	{
		'value' : 'base16/gruvbox-light-soft',
		'name'  : 'Base16 gruvbox light soft',
	},
	{
		'value' : 'base16/hardcore',
		'name'  : 'Base16 hardcore',
	},
	{
		'value' : 'base16/harmonic16-dark',
		'name'  : 'Base16 harmonic16 dark',
	},
	{
		'value' : 'base16/harmonic16-light',
		'name'  : 'Base16 harmonic16 light',
	},
	{
		'value' : 'base16/heetch-dark',
		'name'  : 'Base16 heetch dark',
	},
	{
		'value' : 'base16/heetch-light',
		'name'  : 'Base16 heetch light',
	},
	{
		'value' : 'base16/helios',
		'name'  : 'Base16 helios',
	},
	{
		'value' : 'base16/hopscotch',
		'name'  : 'Base16 hopscotch',
	},
	{
		'value' : 'base16/horizon-dark',
		'name'  : 'Base16 horizon dark',
	},
	{
		'value' : 'base16/horizon-light',
		'name'  : 'Base16 horizon light',
	},
	{
		'value' : 'base16/humanoid-dark',
		'name'  : 'Base16 humanoid dark',
	},
	{
		'value' : 'base16/humanoid-light',
		'name'  : 'Base16 humanoid light',
	},
	{
		'value' : 'base16/ia-dark',
		'name'  : 'Base16 ia dark',
	},
	{
		'value' : 'base16/ia-light',
		'name'  : 'Base16 ia light',
	},
	{
		'value' : 'base16/icy-dark',
		'name'  : 'Base16 icy dark',
	},
	{
		'value' : 'base16/ir-black',
		'name'  : 'Base16 ir black',
	},
	{
		'value' : 'base16/isotope',
		'name'  : 'Base16 isotope',
	},
	{
		'value' : 'base16/kimber',
		'name'  : 'Base16 kimber',
	},
	{
		'value' : 'base16/london-tube',
		'name'  : 'Base16 london tube',
	},
	{
		'value' : 'base16/macintosh',
		'name'  : 'Base16 macintosh',
	},
	{
		'value' : 'base16/marrakesh',
		'name'  : 'Base16 marrakesh',
	},
	{
		'value' : 'base16/materia',
		'name'  : 'Base16 materia',
	},
	{
		'value' : 'base16/material-darker',
		'name'  : 'Base16 material darker',
	},
	{
		'value' : 'base16/material-lighter',
		'name'  : 'Base16 material lighter',
	},
	{
		'value' : 'base16/material-palenight',
		'name'  : 'Base16 material palenight',
	},
	{
		'value' : 'base16/material-vivid',
		'name'  : 'Base16 material vivid',
	},
	{
		'value' : 'base16/material',
		'name'  : 'Base16 material',
	},
	{
		'value' : 'base16/mellow-purple',
		'name'  : 'Base16 mellow purple',
	},
	{
		'value' : 'base16/mexico-light',
		'name'  : 'Base16 mexico light',
	},
	{
		'value' : 'base16/mocha',
		'name'  : 'Base16 mocha',
	},
	{
		'value' : 'base16/monokai',
		'name'  : 'Base16 monokai',
	},
	{
		'value' : 'base16/nebula',
		'name'  : 'Base16 nebula',
	},
	{
		'value' : 'base16/nord',
		'name'  : 'Base16 nord',
	},
	{
		'value' : 'base16/nova',
		'name'  : 'Base16 nova',
	},
	{
		'value' : 'base16/ocean',
		'name'  : 'Base16 ocean',
	},
	{
		'value' : 'base16/oceanicnext',
		'name'  : 'Base16 oceanicnext',
	},
	{
		'value' : 'base16/one-light',
		'name'  : 'Base16 one light',
	},
	{
		'value' : 'base16/onedark',
		'name'  : 'Base16 onedark',
	},
	{
		'value' : 'base16/outrun-dark',
		'name'  : 'Base16 outrun dark',
	},
	{
		'value' : 'base16/papercolor-dark',
		'name'  : 'Base16 papercolor dark',
	},
	{
		'value' : 'base16/papercolor-light',
		'name'  : 'Base16 papercolor light',
	},
	{
		'value' : 'base16/paraiso',
		'name'  : 'Base16 paraiso',
	},
	{
		'value' : 'base16/pasque',
		'name'  : 'Base16 pasque',
	},
	{
		'value' : 'base16/phd',
		'name'  : 'Base16 phd',
	},
	{
		'value' : 'base16/pico',
		'name'  : 'Base16 pico',
	},
	{
		'value' : 'base16/pop',
		'name'  : 'Base16 pop',
	},
	{
		'value' : 'base16/porple',
		'name'  : 'Base16 porple',
	},
	{
		'value' : 'base16/qualia',
		'name'  : 'Base16 qualia',
	},
	{
		'value' : 'base16/railscasts',
		'name'  : 'Base16 railscasts',
	},
	{
		'value' : 'base16/rebecca',
		'name'  : 'Base16 rebecca',
	},
	{
		'value' : 'base16/ros-pine-dawn',
		'name'  : 'Base16 ros pine dawn',
	},
	{
		'value' : 'base16/ros-pine-moon',
		'name'  : 'Base16 ros pine moon',
	},
	{
		'value' : 'base16/ros-pine',
		'name'  : 'Base16 ros pine',
	},
	{
		'value' : 'base16/sagelight',
		'name'  : 'Base16 sagelight',
	},
	{
		'value' : 'base16/sandcastle',
		'name'  : 'Base16 sandcastle',
	},
	{
		'value' : 'base16/seti-ui',
		'name'  : 'Base16 seti ui',
	},
	{
		'value' : 'base16/shapeshifter',
		'name'  : 'Base16 shapeshifter',
	},
	{
		'value' : 'base16/silk-dark',
		'name'  : 'Base16 silk dark',
	},
	{
		'value' : 'base16/silk-light',
		'name'  : 'Base16 silk light',
	},
	{
		'value' : 'base16/snazzy',
		'name'  : 'Base16 snazzy',
	},
	{
		'value' : 'base16/solar-flare-light',
		'name'  : 'Base16 solar flare light',
	},
	{
		'value' : 'base16/solar-flare',
		'name'  : 'Base16 solar flare',
	},
	{
		'value' : 'base16/solarized-dark',
		'name'  : 'Base16 solarized dark',
	},
	{
		'value' : 'base16/solarized-light',
		'name'  : 'Base16 solarized light',
	},
	{
		'value' : 'base16/spacemacs',
		'name'  : 'Base16 spacemacs',
	},
	{
		'value' : 'base16/summercamp',
		'name'  : 'Base16 summercamp',
	},
	{
		'value' : 'base16/summerfruit-dark',
		'name'  : 'Base16 summerfruit dark',
	},
	{
		'value' : 'base16/summerfruit-light',
		'name'  : 'Base16 summerfruit light',
	},
	{
		'value' : 'base16/synth-midnight-terminal-dark',
		'name'  : 'Base16 synth midnight terminal dark',
	},
	{
		'value' : 'base16/synth-midnight-terminal-light',
		'name'  : 'Base16 synth midnight terminal light',
	},
	{
		'value' : 'base16/tango',
		'name'  : 'Base16 tango',
	},
	{
		'value' : 'base16/tender',
		'name'  : 'Base16 tender',
	},
	{
		'value' : 'base16/tomorrow-night',
		'name'  : 'Base16 tomorrow night',
	},
	{
		'value' : 'base16/tomorrow',
		'name'  : 'Base16 tomorrow',
	},
	{
		'value' : 'base16/twilight',
		'name'  : 'Base16 twilight',
	},
	{
		'value' : 'base16/unikitty-dark',
		'name'  : 'Base16 unikitty dark',
	},
	{
		'value' : 'base16/unikitty-light',
		'name'  : 'Base16 unikitty light',
	},
	{
		'value' : 'base16/vulcan',
		'name'  : 'Base16 vulcan',
	},
	{
		'value' : 'base16/windows-10-light',
		'name'  : 'Base16 windows 10 light',
	},
	{
		'value' : 'base16/windows-10',
		'name'  : 'Base16 windows 10',
	},
	{
		'value' : 'base16/windows-95-light',
		'name'  : 'Base16 windows 95 light',
	},
	{
		'value' : 'base16/windows-95',
		'name'  : 'Base16 windows 95',
	},
	{
		'value' : 'base16/windows-high-contrast-light',
		'name'  : 'Base16 windows high contrast light',
	},
	{
		'value' : 'base16/windows-high-contrast',
		'name'  : 'Base16 windows high contrast',
	},
	{
		'value' : 'base16/windows-nt-light',
		'name'  : 'Base16 windows nt light',
	},
	{
		'value' : 'base16/windows-nt',
		'name'  : 'Base16 windows nt',
	},
	{
		'value' : 'base16/woodland',
		'name'  : 'Base16 woodland',
	},
	{
		'value' : 'base16/xcode-dusk',
		'name'  : 'Base16 xcode dusk',
	},
	{
		'value' : 'base16/zenburn',
		'name'  : 'Base16 zenburn',
	},
	{
		'value' : 'brown-paper',
		'name'  : 'Brown paper',
	},
	{
		'value' : 'codepen-embed',
		'name'  : 'Codepen embed',
	},
	{
		'value' : 'color-brewer',
		'name'  : 'Color brewer',
	},
	{
		'value' : 'dark',
		'name'  : 'Dark',
	},
	{
		'value' : 'default',
		'name'  : 'Default',
	},
	{
		'value' : 'devibeans',
		'name'  : 'Devibeans',
	},
	{
		'value' : 'docco',
		'name'  : 'Docco',
	},
	{
		'value' : 'far',
		'name'  : 'Far',
	},
	{
		'value' : 'felipec',
		'name'  : 'Felipec',
	},
	{
		'value' : 'foundation',
		'name'  : 'Foundation',
	},
	{
		'value' : 'github-dark-dimmed',
		'name'  : 'Github dark dimmed',
	},
	{
		'value' : 'github-dark',
		'name'  : 'Github dark',
	},
	{
		'value' : 'github',
		'name'  : 'Github',
	},
	{
		'value' : 'gml',
		'name'  : 'Gml',
	},
	{
		'value' : 'googlecode',
		'name'  : 'Googlecode',
	},
	{
		'value' : 'gradient-dark',
		'name'  : 'Gradient dark',
	},
	{
		'value' : 'gradient-light',
		'name'  : 'Gradient light',
	},
	{
		'value' : 'grayscale',
		'name'  : 'Grayscale',
	},
	{
		'value' : 'hybrid',
		'name'  : 'Hybrid',
	},
	{
		'value' : 'idea',
		'name'  : 'Idea',
	},
	{
		'value' : 'intellij-light',
		'name'  : 'Intellij light',
	},
	{
		'value' : 'ir-black',
		'name'  : 'Ir black',
	},
	{
		'value' : 'isbl-editor-dark',
		'name'  : 'Isbl editor dark',
	},
	{
		'value' : 'isbl-editor-light',
		'name'  : 'Isbl editor light',
	},
	{
		'value' : 'kimbie-dark',
		'name'  : 'Kimbie dark',
	},
	{
		'value' : 'kimbie-light',
		'name'  : 'Kimbie light',
	},
	{
		'value' : 'lightfair',
		'name'  : 'Lightfair',
	},
	{
		'value' : 'lioshi',
		'name'  : 'Lioshi',
	},
	{
		'value' : 'magula',
		'name'  : 'Magula',
	},
	{
		'value' : 'mono-blue',
		'name'  : 'Mono blue',
	},
	{
		'value' : 'monokai-sublime',
		'name'  : 'Monokai sublime',
	},
	{
		'value' : 'monokai',
		'name'  : 'Monokai',
	},
	{
		'value' : 'night-owl',
		'name'  : 'Night owl',
	},
	{
		'value' : 'nnfx-dark',
		'name'  : 'Nnfx dark',
	},
	{
		'value' : 'nnfx-light',
		'name'  : 'Nnfx light',
	},
	{
		'value' : 'nord',
		'name'  : 'Nord',
	},
	{
		'value' : 'obsidian',
		'name'  : 'Obsidian',
	},
	{
		'value' : 'panda-syntax-dark',
		'name'  : 'Panda syntax dark',
	},
	{
		'value' : 'panda-syntax-light',
		'name'  : 'Panda syntax light',
	},
	{
		'value' : 'paraiso-dark',
		'name'  : 'Paraiso dark',
	},
	{
		'value' : 'paraiso-light',
		'name'  : 'Paraiso light',
	},
	{
		'value' : 'pojoaque',
		'name'  : 'Pojoaque',
	},
	{
		'value' : 'purebasic',
		'name'  : 'Purebasic',
	},
	{
		'value' : 'qtcreator-dark',
		'name'  : 'Qtcreator dark',
	},
	{
		'value' : 'qtcreator-light',
		'name'  : 'Qtcreator light',
	},
	{
		'value' : 'rainbow',
		'name'  : 'Rainbow',
	},
	{
		'value' : 'routeros',
		'name'  : 'Routeros',
	},
	{
		'value' : 'school-book',
		'name'  : 'School book',
	},
	{
		'value' : 'shades-of-purple',
		'name'  : 'Shades of purple',
	},
	{
		'value' : 'srcery',
		'name'  : 'Srcery',
	},
	{
		'value' : 'stackoverflow-dark',
		'name'  : 'Stackoverflow dark',
	},
	{
		'value' : 'stackoverflow-light',
		'name'  : 'Stackoverflow light',
	},
	{
		'value' : 'sunburst',
		'name'  : 'Sunburst',
	},
	{
		'value' : 'tokyo-night-dark',
		'name'  : 'Tokyo night dark',
	},
	{
		'value' : 'tokyo-night-light',
		'name'  : 'Tokyo night light',
	},
	{
		'value' : 'tomorrow-night-blue',
		'name'  : 'Tomorrow night blue',
	},
	{
		'value' : 'tomorrow-night-bright',
		'name'  : 'Tomorrow night bright',
	},
	{
		'value' : 'vs',
		'name'  : 'Vs',
	},
	{
		'value' : 'vs2015',
		'name'  : 'Vs2015',
	},
	{
		'value' : 'xcode',
		'name'  : 'Xcode',
	},
	{
		'value' : 'xt256',
		'name'  : 'Xt256',
	},
]
