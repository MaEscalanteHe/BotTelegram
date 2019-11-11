import bot from './app';

bot.on('polling_error', err => console.log(err));
