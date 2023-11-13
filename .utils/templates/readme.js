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

[![Issues](https://img.shields.io/badge/Issues-grey?style=flat-square)](${pkg.data.repository.url}/issues)
[![Pull requests](https://img.shields.io/badge/Pulls-grey?style=flat-square)](${pkg.data.repository.url}/pulls)

## ☕ Donate

Help us to develop more interesting things.

[![Donate](https://img.shields.io/badge/Donate-grey?style=flat-square)](${pkg.data.funding.url})

## 📜 License

This software is licensed with **[GPLv3](/LICENSE)**.

[![Read more](https://img.shields.io/badge/Read-more-grey?style=flat-square)](/LICENSE)

## 🐦 About us

_PigeonPosse_ is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=flat-square)](https://github.com/PigeonPosse/PigeonPosse)

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="${pkg.data.author.url}.png?size=72" style="border-radius:100%"/> | ${pkg.data.author.name} |   Author & Development   | [@${pkg.data.author.name}](${pkg.data.author.url}) |
| <img src="${pkg.data.contributors[0].url}.png?size=72" style="border-radius:100%"/> | ${pkg.data.contributors[0].name} |   Author & Design   | [@${pkg.data.contributors[0].name}](${pkg.data.contributors[0].url}) |
| <img src="https://github.com/${pkg.data.extra.collective.name}.png?size=72" style="border-radius:100%"/> | ${pkg.data.extra.collective.name} | Collective | [@${pkg.data.extra.collective.name}](https://github.com/${pkg.data.extra.collective.name}) |

</br>
`

}

const header = ( pkg ) => {

	const collective = pkg.data.extra.collective
	const fundingUrl = pkg.data.funding.url
	return `
[![HEADER](docs/banner.png)](${pkg.data.extra.demoUrl})

[![Web](https://img.shields.io/badge/Web-grey?style=flat-square)](${collective.web})
[![About us](https://img.shields.io/badge/About%20us-grey?style=flat-square)](${collective.web}/?popup=about)
[![Github](https://img.shields.io/badge/Github-grey?style=flat-square)](https://github.com/pigeon-posse)
[![Donate](https://img.shields.io/badge/Donate-pink?style=flat-square)](${fundingUrl})

[![LICENSE](https://img.shields.io/badge/License-grey?style=flat-square)](/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/${collective.name.toLowerCase()}/${pkg.data.name.toLowerCase()}?color=a1b858&label=GitHub%20Releases&style=flat-square)](${pkg.data.repository.url}/releases)
[![CHROME](https://img.shields.io/chrome-web-store/v/${pkg.data.extra.store.chrome.id}?color=blue&style=flat-square)](${pkg.data.extra.store.chrome.url})
[![MOZILLA](https://img.shields.io/amo/v/${pkg.data.extra.store.mozilla.id}?color=blue&style=flat-square)](${pkg.data.extra.store.mozilla.url})

StyleGPT is an extension that modifies the appearance of ChatGPT, providing a more beautiful and novel interface for users. Thanks to this extension, you can hide the menu of options and history to give more priority to the conversation, and have quick access to the options and new tools that we have implemented in order to improve the experience.

[View demo](${pkg.data.extra.demoUrl})

## 🧩 Download links

- [![Chrome Extension](https://img.shields.io/badge/Chrome-grey?style=flat-square)](${pkg.data.extra.store.chrome.url})
- [![Firefox Extension](https://img.shields.io/badge/Firefox-grey?style=flat-square)](${pkg.data.extra.store.mozilla.url})
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
