import bot from '../settings/app.js';
import { welcome, time } from './functions';
import { mainOpts, webDisable, viewOpts } from './opts';

bot.on('message', msg => {
	// Botón del menú de ver listas con protocolo verde.
	if (msg.text.indexOf('👁 Ver listas') === 0) {
		bot.sendMessage(msg.chat.id, 'Por favor selecciona que lista quieres ver.', viewOpts);
	}

	// Botón del menú principal con protocolo verde.
	if (msg.text.indexOf('⏪ Atrás') === 0) {
		bot.sendMessage(msg.chat.id, welcome(), mainOpts);
	}

	// Botón de Hora.
	if (msg.text.indexOf('🕞 Hora') === 0) {
		bot.sendMessage(msg.chat.id, time(), webDisable);
	}
});
