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

This software is licensed with ***[GPLv3](/LICENSE)***.

[![Read more](https://img.shields.io/badge/Read-more-grey?style=flat-square)](/LICENSE)

## 🐦 About us

_PigeonPosse_ is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=flat-square)](https://github.com/PigeonPosse/PigeonPosse)

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="${pkg.data.author.url}.png?size=72" style="border-radius:100%"/> | ${pkg.data.author.name} |   Author & Development   | [@${pkg.data.author.name}](${pkg.data.author.url}) |
| <img src="${pkg.data.contributors[0].url}.png?size=72" style="border-radius:100%"/> | ${pkg.data.contributors[0].name} |   Author & Design   | [@${pkg.data.contributors[0].name}](${pkg.data.contributors[0].url}) |
| <img src="https://github.com/${pkg.data.extra.collective.name}.png?size=72" style="border-radius:100%"/> | ${pkg.data.extra.collective.name} | Collective	  | [@${pkg.data.extra.collective.name}](https://github.com/${pkg.data.extra.collective.name}) |


<br> 
`

}

const markFunct = ( pkg ) => {

	return `<!--\n${mark( pkg )}\n-->`

}

export const readme = ( pkg ) => {

	return {
		org  : org( pkg ),
		mark : markFunct( pkg ),
	}

}
