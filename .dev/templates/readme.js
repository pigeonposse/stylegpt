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
| <img src="${pkg.data.author.url}.png?size=72" alt="${pkg.data.author.name}" style="border-radius:100%"/> | ${pkg.data.author.name} |   Author & Development   | [@${pkg.data.author.name}](${pkg.data.author.url}) |
| <img src="${pkg.data.contributors[0].url}.png?size=72" alt="${pkg.data.contributors[0].name}" style="border-radius:100%"/> | ${pkg.data.contributors[0].name} |   Author & Design   | [@${pkg.data.contributors[0].name}](${pkg.data.contributors[0].url}) |
| <img src="https://github.com/${pkg.data.extra.collective.name}.png?size=72" alt="${pkg.data.extra.collective.name}" style="border-radius:100%"/> | ${pkg.data.extra.collective.name} | Collective | [@${pkg.data.extra.collective.name}](https://github.com/${pkg.data.extra.collective.name}) |

</br>

<p align="center">

${webImgLinks(pkg)}

</p>`

}
const dataWebLinks = (pkg) => {
	return [
		{name:'Web', color: 'grey', url: pkg.data.extra.collective.web },
		{name:'About Us', color: 'grey', url: `${pkg.data.extra.collective.web}/?popup=about`},
		{name:'Donate', color: 'pink', url: pkg.data.funding.url},
		{name:'Github', logo: 'github', url: 'https://github.com/pigeonposse'},
		{name:'Twitter', logo: 'twitter', url: 'https://twitter.com/pigeonposse_'},
		{name:'Instagram', logo: 'instagram', url: 'https://www.instagram.com/pigeon.posse/'},
		{name:'Medium', logo: 'medium', url: 'https://medium.com/@pigeonposse'}
	]
}

const dataStoreLinks = (pkg) => {
	let res = []
	for (const storesKey in pkg.data.extra.store) {
		const store = pkg.data.extra.store[storesKey]
		res.push({ color: 'grey', ...store})
	}
	return res
}

const dataReleasesLinks = (pkg) => {
	const downloadUrl = (id) => `${pkg.data.extra.releaseUrl}/download/${pkg.data.version}/${id}-${pkg.data.name}-${pkg.data.version}.zip`
	let res = []
	for (const key in pkg.data.extra.download) {
		const download = pkg.data.extra.download[key]
		res.push({
			color: 'grey', 
			url: downloadUrl(download.id), 
			...download
		})
	}
	return res
}
const dataRepoLinks = (pkg) => {
	return [
		{name:'Demo', color: 'grey', url: pkg.data.extra.demoUrl },
		{name:'Repo', color: 'grey', url: pkg.data.repository.url },
		{name:'Issues', color: 'grey', url: pkg.data.bugs.url},
		{name:'License', color: 'grey', url: pkg.data.extra.licenseUrl},
		{name:'Funding', color: 'grey', url: pkg.data.funding.url},
	]
}

export const constructorLinks = (links, type="link") => {
	
	let res = "";
	links.forEach((link, index) => {
	  
		res += type === 'img' ? imgUrl(link) : `[${link.name}](${link.url})`;
	  	if (index !== links.length - 1) res += "\n"

	});
	return res;

}

export const webImgLinks = (pkg) => constructorLinks(dataWebLinks(pkg), 'img')
export const collectiveLinks = (pkg) => constructorLinks(dataWebLinks(pkg) )
export const repoLinks = (pkg) => constructorLinks(dataRepoLinks(pkg) )
export const storeLinks = (pkg) => constructorLinks(dataStoreLinks(pkg) )
export const storeImgLinks = (pkg) => constructorLinks(dataStoreLinks(pkg), 'img' )
export const releaseImgLinks = (pkg) => constructorLinks(dataReleasesLinks(pkg), 'img' )
export const storeVersionImgLinks = (pkg) => {
	return `${imgUrl({ ...pkg.data.extra.store.mozilla, color: 'blue', type: `amo/v/${pkg.data.extra.store.mozilla.id}` })}
${imgUrl({ ...pkg.data.extra.store.chrome, color: 'blue', type: `chrome-web-store/v/${pkg.data.extra.store.chrome.id}` })}`
}
const imgUrl = ( {name, color = 'black', url, logo = false, type = false} ) => {
	
	if(!type) type = `badge/${encodeURIComponent(name)}-${color}?`
	else type = `${type}?color=${color}&`
	
	const img = `https://img.shields.io/${type}style=for-the-badge${logo? '&logo='+encodeURIComponent(logo.toLowerCase()) : ''}&logoColor=white`

	return `[![${name}](${img})](${url})`
}

const header = ( pkg ) => {

	const collective = pkg.data.extra.collective

	return `
[![HEADER](docs/banner.png)](${pkg.data.extra.demoUrl})

${webImgLinks(pkg)}

${imgUrl({name:'License', color: 'green', type: `github/license/pigeonposse/stylegpt`,url: `/LICENSE`})}
${imgUrl({name:'Github Releases', color: 'blue', type: `github/package-json/v/${collective.name.toLowerCase()}/${pkg.data.name.toLowerCase()}`,url: pkg.data.extra.releaseUrl})}
${storeVersionImgLinks(pkg)}

${pkg.data.description}

Discover the aesthetic evolution with styleGPT, the extension that redefines the appearance of ChatGPT. 🚀 Immerse yourself in a unique experience by blending elegance and functionality in every interaction. Explore the magic of artificial intelligence through an interface that transcends the ordinary. Illuminate your conversations and elevate your interaction with ChatGPT to a new aesthetic level. ✨💬 Join the revolution of the user experience with styleGPT and experience an unparalleled visual standard.✨💻🌈

[View demo](${pkg.data.extra.demoUrl})

![HEADER](docs/demo/preview.png)

Updated functions:
✅ Improved interface.
✅ Interactive menu.
✅ Hide/show menu button.
✅ Dark mode button.
✅ New chat button.
✅ Customize chat menu.
✅ Color, text and background choice options for user or AI.
✅ Change styles to the code editor
✅ Change styles to sidebar

## 🧩 Download links

${storeImgLinks(pkg)}

### Manual

${releaseImgLinks(pkg)}

${imgUrl({name:'All', color: 'black', url: pkg.data.extra.releaseUrl},)}
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
