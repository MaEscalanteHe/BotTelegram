import bot from '../settings/app';
import { welcome, faq, rules, commands, getDateTime } from './functions';
import { mainOpts, webDisable } from './opts';

// START
bot.onText(/^\/start$/, msg => {
	bot.getChatMember(msg.chat.id, msg.from.id).then(() => {
		//Verifica si el comando ha sido enviado en el chat privado del bot.
		if (msg.chat.type == 'private') {
			//Mensaje de opciones en formato de teclado.
			bot.sendMessage(msg.chat.id, `✨ *¡Hola ${msg.from.first_name}!* ✨\n\n${welcome()}`, mainOpts);
		}
		//En caso contrario avisa al usuario y el bot le escribe al usuario automaticamente.
		else {
			bot.sendMessage(
				msg.chat.id,
				`Lo siento ${msg.from.first_name} este comando solo está disponible en el chat personal.`
			);
			bot.sendMessage(
				msg.from.id,
				`✨ *¡Hola ${msg.from.first_name}!* ✨\n\nLa opción para anotarte en una lista solo puede ser en este chat.\n\n${welcome()}`,
				mainOpts
			);
		}
	});
});

// FAQ.
bot.onText(/^\/faq$/, msg => {
	bot.sendMessage(msg.chat.id, faq(), webDisable);
});

// Reglas.
bot.onText(/^\/reglas$/, msg => {
	bot.sendMessage(msg.chat.id, rules(), webDisable);
});

// Comandos.
bot.onText(/^\/comandos$/, msg => {
	bot.sendMessage(msg.chat.id, commands(), webDisable);
});

// Hora.
bot.onText(/^\/hora$/, msg => {
	bot.sendMessage(msg.chat.id, `La hora es: *${getDateTime()}*`, webDisable);
});

// ID del chat.
bot.onText(/^\/chatid$/, msg => {
	bot.sendMessage(msg.chat.id, `El ID de este chat es: _${msg.chat.id}_`, webDisable);
});

// Ver ID.
bot.onText(/^\/myid$/, msg => {
	bot.sendMessage(msg.chat.id, `Tu id es: _${msg.from.id}_`, webDisable);
});

// Juego Ping Pong.
bot.onText(/^\/ping$/, msg => {
	bot.sendMessage(msg.chat.id, '¡Pong!');
});

bot.onText(/^\/pong$/, msg => {
	bot.sendMessage(msg.chat.id, '¡Ping!');
});

// Repositorio
bot.onText(/^\/repositorio/, msg => {
	bot.sendMessage(msg.chat.id, 'https://github.com/MaEscalanteHe/BotTelegram');
});
