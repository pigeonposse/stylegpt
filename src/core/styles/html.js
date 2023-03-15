/**
 * Todo.
 *
 * @description Todo.
 *
 * @version 1.0.0
 */

import { data } from './_data'

const btn = ( utils ) => {

	utils.html.mainBtn( {
		id      : data.btnID,
		path    : data.svg.path,
		viewBox : data.svg.viewBox,
	} )

}

const section = ( utils ) => {

	let id, content, classes, textOpts

	classes = {
		shadow   : 'shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]',
		radius   : 'rounded-full',
		selectId : 'pigeon-select',
		title    : 'flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2',
		select   : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-200 dark:focus:outline-none dark:focus:ring-0 dark:focus:border-gray-200',
	}

	id       = data.sectionID
	textOpts = ` 
		<option value="Arial">Arial</option>
		<option value="Helvetica">Helvetica</option>
		<option value="Verdana">Verdana</option>
		<option value="Georgia">Georgia</option>
		<option value="Times New Roman">Times New Roman</option>
	`
	content = `
	<div class="pigeon-styles-container-section">
		<div class="pigeon-styles-container-group title">
			<h2 class="${classes.title}">User</h2>
		</div>
		<div class="pigeon-styles-container-group">

			<input type="color" id="${data.section.user.colorID}" class="pigeon-picker-color ${classes.shadow} ${classes.radius}">
		</div>
		<div class="pigeon-styles-container-group">
			<select id="${data.section.user.textID}" class="${classes.selectId} ${classes.select} ${classes.shadow}">
				${textOpts}
			</select>
		</div>
	</div>
	<div class="pigeon-styles-container-section line">
	</div>
	<div class="pigeon-styles-container-section">
		<div class="pigeon-styles-container-group title">
			<h2 class="${classes.title}">ChatGPT</h2>
		</div>
		<div class="pigeon-styles-container-group">
			<input type="color" id="${data.section.chat.colorID}" class="pigeon-picker-color ${classes.shadow} ${classes.radius}">
		</div>
		<div class="pigeon-styles-container-group">
			<select id="${data.section.chat.textID}" class="${classes.selectId} ${classes.select} ${classes.shadow}">
				${textOpts}
			</select>
		</div>
	</div>
	`
	
	utils.html.menu( {
		id      : id,
		content : content,
	} )

}

export const html = ( utils ) => {

	btn( utils )
	section( utils )

}
