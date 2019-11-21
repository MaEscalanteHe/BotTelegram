import timezone from '../settings/timezone';

export const welcome = () => {
	return `‼️Importante‼️
    
Las listas se abrirán 1 hora antes de la salida del bus:

- Para el bus de las 02:00 PM se abrirá a la *01:00 PM*
- Para el bus de las 04:00 PM se abrirá a las *03:00 PM*

*Por favor selecciona una opción:*`;
};

export const faq = () => {
	return `📊 *Preguntas Frecuentes* 📊

*¿Quienes son los administradores del bot?*
▫️_Manuel Escalante_ (@MaEscalanteHe).

*¿Es posible ver el código del bot?*
_Si, usando el comando_ /repositorio.`;
};

export const commands = () => {
	return `⌨️ *Comandos Disponlibles* ⌨️
    
/start - Inicia la funcionalidad principal del bot.
/hora - Muestra la hora actual del servidor.
/reglas - Reglas para el uso apropiado del bot.
/faq - Preguntas frecuentes.`;
};

export const rules = () => {
	return `⚠️ *Reglas para el uso de las listas digitales para el Transporte USB* ⚠️
    
1️⃣ Al momento de anotarse en las listas colocar su *Nombre* y *Apellido*, de lo contrario será omitido a la hora de abordar el bus.
2️⃣ ...`;
};

export const time = () => {
	return `La hora actual del servidor es: *${getDateTime()}*`;
};

export const getDateTime = () => {
	// let date = new Date();
	// let year = date.getFullYear();
	// let month = date.getMonth() + 1;
	// month = (month < 10 ? '0' : '') + month;
	// let day = date.getDate();
	// day = (day < 10 ? '0' : '') + day;
	// let hour = date.getHours();
	// hour = (hour < 10 ? '0' : '') + hour;
	// let min = date.getMinutes();
	// min = (min < 10 ? '0' : '') + min;
	// let sec = date.getSeconds();
	// sec = (sec < 10 ? '0' : '') + sec;
	let date = timezone();
	let hour = date.hours();
	hour = (hour < 10 ? '0' : '') + hour;
	let min = date.minutes();
	min = (min < 10 ? '0' : '') + min;
	let sec = date.seconds();
	sec = (sec < 10 ? '0' : '') + sec;

	return `${hour}:${min}:${sec}`;
};
