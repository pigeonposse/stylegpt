/**
 * Do function.
 *
 * @description Kddk.
 *
 * @version 1.0.0
 */

import * as core  from './core/main'
import * as utils from './utils/_main'

const init = async () => {

	/**
	 * BTN.
	 *
	 * @todo - Hacer que no se vean los btns en el preload
	 * 		 - crear observer que observe "form > div", ya que los btns se ocultan cuando entras a un chat con info.
	 */
	utils.html.btnSection()

	/**
	 * SETTINGS.
	 *
	 */
	core.settings.html( utils )
	core.settings.funct( utils )

	/**
	 * DARKMODE.
	 *
	 * @todo - Cambiar icono de manera más organica.
	 *  	 - Organizar el código de "functs".
	 */
	core.darkMode.html( utils )
	core.darkMode.funct( utils )

	/**
	 * NEW CHAT.
	 *
	 * @todo - Crear boton para añadir nuevo chat. Misma funcionalidad que darkmode.
	 */
	core.newChat.html( utils )
	core.newChat.funct( utils )

	/**
	 * STYLES.
	 *
	 * @todo - Piquito en container (?).
	 */
	core.styles.html( utils )
	core.styles.funct( utils )

	/**
	 * COPY RES (?).
	 *
	 * @todo - Tal vez no se implemente, motivo: complicado
	 * 		 - crear observer que observe cambios reales.
	 */
	// core.copyRes.funct( utils )

	utils.svg.dinamicColor()

}

init()
