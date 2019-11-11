import bot from '../settings/app';
import { commands, getDateTime, faq, rules, time, welcome } from './functions';
import { mainOpts, webDisable, replyOpts, viewOpts } from './opts';

// Horarios de apertura de listas
let hora1400 = process.env.HORA_1400;
let hora1600 = process.env.HORA_1600;
let minutosOclock = process.env.MINUTOS;

// Arrays de listas básicas.
let lista1400 = [];
let lista1600 = [];

// Arrays de listas extendidas.
let ext_lista1400 = [];
let ext_lista1600 = [];

bot.on('message', msg => {
	// Botón lista 2:00 PM
	if (msg.text.indexOf('📝 2:00 PM') === 0) {
		let fecha = new Date();
		let hora = fecha.getHours();
		let minutos = fecha.getMinutes();
		if (hora >= hora1400 && minutos >= minutosOclock) {
			// Mensaje de solicitud de nombre para la lista de las 2:00 PM.
			bot.sendMessage(
				msg.from.id,
				'Has elegido la lista de las *2:00 PM*.\nPor favor introduce tu nombre.',
				replyOpts
			).then(sended => {
				// Escucha la solicitud del nombre.
				bot.onReplyToMessage(sended.chat.id, sended.message_id, msg => {
					// Función que introduce el nombre introducido en el array de "lista1400".
					lista1400.push(msg.text.toString() + ' - (*' + getDateTime() + '*).');
					// Función que introduce el nombre introducido en el array de "ext_lista1400".
					ext_lista1400.push(
						msg.text.toString() +
							' - (Fue anotado por: *' +
							msg.from.first_name +
							'* (_' +
							msg.from.id +
							'_) a las: *' +
							getDateTime() +
							'*).'
					);

					// Retorno del carro con mensaje de opciones.
					bot.sendMessage(msg.chat.id, 'Ha sido anotad@ en la lista de las *2:00 PM*.\n\n', mainOpts);
				});
			});
		} else {
			bot.sendMessage(
				msg.from.id,
				'Lo siento ' +
					msg.from.first_name +
					`, debes esperar hasta las ${hora1400}:${minutosOclock} para poder anotarte.\n\nHora del servidor: *` +
					getDateTime() +
					'*.',
				webDisable
			);
		}
	}
	// Botón lista 4:00 PM
	if (msg.text.indexOf('📝 4:00 PM') === 0) {
		let fecha = new Date();
		let hora = fecha.getHours();
		let minutos = fecha.getMinutes();
		if (hora >= hora1600 && minutos >= minutosOclock) {
			// Mensaje de solicitud de nombre para la lista de las 4:00 PM.
			bot.sendMessage(
				msg.from.id,
				'Has elegido la lista de las *4:00 PM*.\nPor favor introduce tu nombre.',
				replyOpts
			).then(sended => {
				// Escucha la solicitud del nombre.
				bot.onReplyToMessage(sended.chat.id, sended.message_id, msg => {
					// Función que introduce el nombre introducido en el array de "lista1600".
					lista1600.push(msg.text.toString() + ' - (*' + getDateTime() + '*).');
					// Función que introduce el nombre introducido en el array de "ext_lista1600".
					ext_lista1600.push(
						msg.text.toString() +
							' - (Fue anotado por: *' +
							msg.from.first_name +
							'* (_' +
							msg.from.id +
							'_) a las: *' +
							getDateTime() +
							'*).'
					);

					// Retorno del carro con mensaje de opciones.
					bot.sendMessage(msg.chat.id, 'Ha sido anotad@ en la lista de las *4:00 PM*.\n\n', mainOpts);
				});
			});
		} else {
			bot.sendMessage(
				msg.from.id,
				'Lo siento ' +
					msg.from.first_name +
					`, debes esperar hasta las ${hora1600}:${minutosOclock} para poder anotarte.\n\nHora del servidor: *` +
					getDateTime() +
					'*.',
				webDisable
			);
		}
	}

	// Botones de Ver Listas.
	// Ver Listas 2:00 PM.
	if (msg.text.indexOf('👁 2:00 PM') === 0) {
		let for_lista1400 = '';
		for (let i = 0; i < lista1400.length; i++) {
			for_lista1400 += '*' + (i + 1) + '.-* ' + lista1400[i] + '\n';
		}
		bot.sendMessage(msg.chat.id, '*Lista 2:00 PM:*\n' + for_lista1400, webDisable);
	}

	// Ver Listas 4:00 PM.
	if (msg.text.indexOf('👁 4:00 PM') === 0) {
		let for_lista1600 = '';
		for (let i = 0; i < lista1600.length; i++) {
			for_lista1600 += '*' + (i + 1) + '.-* ' + lista1600[i] + '\n';
		}
		bot.sendMessage(msg.chat.id, '*Lista 4:00 PM:*\n' + for_lista1600, webDisable);
	}
});
