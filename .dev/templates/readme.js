/**
 * Todo.
 *
 * @description Todo.
 */

import { mark } from './mark.js'

const org = ( pkg ) => {

	return `
## 👨‍💻 Development

You can contribute via **_Github_**.

[![Issues](https://img.shields.io/badge/Issues-grey?style=for-the-badge)](${pkg.data.repository.url}/issues)
[![Pull requests](https://img.shields.io/badge/Pulls-grey?style=for-the-badge)](${pkg.data.repository.url}/pulls)

## ☕ Donate

Help us to develop more interesting things.

[![Donate](https://img.shields.io/badge/Donate-grey?style=for-the-badge)](${pkg.data.funding.url})

## 📜 License

This software is licensed with **[GPLv3](/LICENSE)**.

[![Read more](https://img.shields.io/badge/Read-more-grey?style=for-the-badge)](/LICENSE)

## 🐦 About us

_PigeonPosse_ is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=for-the-badge)](https://github.com/PigeonPosse/PigeonPosse)

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="${pkg.data.author.url}.png?size=72" style="border-radius:100%"/> | ${pkg.data.author.name} |   Author & Development   | [@${pkg.data.author.name}](${pkg.data.author.url}) |
| <img src="${pkg.data.contributors[0].url}.png?size=72" style="border-radius:100%"/> | ${pkg.data.contributors[0].name} |   Author & Design   | [@${pkg.data.contributors[0].name}](${pkg.data.contributors[0].url}) |
| <img src="https://github.com/${pkg.data.extra.collective.name}.png?size=72" style="border-radius:100%"/> | ${pkg.data.extra.collective.name} | Collective | [@${pkg.data.extra.collective.name}](https://github.com/${pkg.data.extra.collective.name}) |

</br>

<p align="center">

${webLinks(pkg)}

</p>`

}
const webLinks = (pkg) => {

	return `${imgUrl({name:'Web', color: 'grey', url: pkg.data.extra.collective.web })}
${imgUrl({name:'About Us', color: 'grey', url: `${pkg.data.extra.collective.web}/?popup=about`})}
${imgUrl({name:'Donate', color: 'pink', url: pkg.data.funding.url})}

${imgUrl({name:'Github', logo: 'github', url: 'https://github.com/pigeonposse'})}
${imgUrl({name:'Twitter', logo: 'twitter', url: 'https://twitter.com/pigeonposse_'})}
${imgUrl({name:'Instagram', logo: 'instagram', url: 'https://www.instagram.com/pigeon.posse/'})}
${imgUrl({name:'Medium', logo: 'medium', url: 'https://medium.com/@pigeonposse'})}`

}

const imgUrl = ( {name, color = 'black', url, logo = false, type = false} ) => {
	
	if(!type) type = `badge/${encodeURIComponent(name)}-${color}?`
	else type = `${type}?color=${color}&`
	
	const img = `https://img.shields.io/${type}style=for-the-badge${logo? '&logo='+encodeURIComponent(logo.toLowerCase()) : ''}&logoColor=white`

	return `[![${name}](${img})](${url})`
}

// const webImg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDI1NmMwIDIyLjItMS4yIDQzLjYtMy4zIDY0SDE2My4zYy0yLjItMjAuNC0zLjMtNDEuOC0zLjMtNjRzMS4yLTQzLjYgMy4zLTY0SDM0OC43YzIuMiAyMC40IDMuMyA0MS44IDMuMyA2NHptMjguOC02NEg1MDMuOWM1LjMgMjAuNSA4LjEgNDEuOSA4LjEgNjRzLTIuOCA0My41LTguMSA2NEgzODAuOGMyLjEtMjAuNiAzLjItNDIgMy4yLTY0cy0xLjEtNDMuNC0zLjItNjR6bTExMi42LTMySDM3Ni43Yy0xMC02My45LTI5LjgtMTE3LjQtNTUuMy0xNTEuNmM3OC4zIDIwLjcgMTQyIDc3LjUgMTcxLjkgMTUxLjZ6bS0xNDkuMSAwSDE2Ny43YzYuMS0zNi40IDE1LjUtNjguNiAyNy05NC43YzEwLjUtMjMuNiAyMi4yLTQwLjcgMzMuNS01MS41QzIzOS40IDMuMiAyNDguNyAwIDI1NiAwczE2LjYgMy4yIDI3LjggMTMuOGMxMS4zIDEwLjggMjMgMjcuOSAzMy41IDUxLjVjMTEuNiAyNiAyMC45IDU4LjIgMjcgOTQuN3ptLTIwOSAwSDE4LjZDNDguNiA4NS45IDExMi4yIDI5LjEgMTkwLjYgOC40QzE2NS4xIDQyLjYgMTQ1LjMgOTYuMSAxMzUuMyAxNjB6TTguMSAxOTJIMTMxLjJjLTIuMSAyMC42LTMuMiA0Mi0zLjIgNjRzMS4xIDQzLjQgMy4yIDY0SDguMUMyLjggMjk5LjUgMCAyNzguMSAwIDI1NnMyLjgtNDMuNSA4LjEtNjR6TTE5NC43IDQ0Ni42Yy0xMS42LTI2LTIwLjktNTguMi0yNy05NC42SDM0NC4zYy02LjEgMzYuNC0xNS41IDY4LjYtMjcgOTQuNmMtMTAuNSAyMy42LTIyLjIgNDAuNy0zMy41IDUxLjVDMjcyLjYgNTA4LjggMjYzLjMgNTEyIDI1NiA1MTJzLTE2LjYtMy4yLTI3LjgtMTMuOGMtMTEuMy0xMC44LTIzLTI3LjktMzMuNS01MS41ek0xMzUuMyAzNTJjMTAgNjMuOSAyOS44IDExNy40IDU1LjMgMTUxLjZDMTEyLjIgNDgyLjkgNDguNiA0MjYuMSAxOC42IDM1MkgxMzUuM3ptMzU4LjEgMGMtMzAgNzQuMS05My42IDEzMC45LTE3MS45IDE1MS42YzI1LjUtMzQuMiA0NS4yLTg3LjcgNTUuMy0xNTEuNkg0OTMuNHoiLz48L3N2Zz4='

const header = ( pkg ) => {

	const collective = pkg.data.extra.collective
	const fundingUrl = pkg.data.funding.url
	return `
[![HEADER](docs/banner.png)](${pkg.data.extra.demoUrl})

<p align="center">

${webLinks(pkg)}

</p>

${imgUrl({name:'License', color: 'green', type: `github/license/pigeonposse/stylegpt`,url: `/LICENSE`})}
${imgUrl({name:'Github Releases', color: 'blue', type: `github/package-json/v/${collective.name.toLowerCase()}/${pkg.data.name.toLowerCase()}`,url: `${pkg.data.repository.url}/releases`})}
${imgUrl({name:'Mozilla', logo: 'firefox-browser', color: 'blue', type: `amo/v/${pkg.data.extra.store.mozilla.id}`,url: pkg.data.extra.store.mozilla.url})}
${imgUrl({name:'Chrome', logo: 'google-chrome', color: 'blue', type: `chrome-web-store/v/${pkg.data.extra.store.chrome.id}`,url: pkg.data.extra.store.chrome.url})}

StyleGPT is an extension that modifies the appearance of ChatGPT, providing a more beautiful and novel interface for users. Thanks to this extension, you can hide the menu of options and history to give more priority to the conversation, and have quick access to the options and new tools that we have implemented in order to improve the experience.

[View demo](${pkg.data.extra.demoUrl})

## 🧩 Download links

- [![Chrome Extension](https://img.shields.io/badge/Chrome-grey?style=for-the-badge)](${pkg.data.extra.store.chrome.url})
- [![Firefox Extension](https://img.shields.io/badge/Firefox-grey?style=for-the-badge)](${pkg.data.extra.store.mozilla.url})
`

}

const markFunct = ( pkg ) => {

	return `<!--\n${mark( pkg )}\n-->`

}

export const readme = ( pkg ) => {

	return {
		org    : org( pkg ),
		header : header( pkg ),
		mark   : markFunct( pkg ),
	}

}
