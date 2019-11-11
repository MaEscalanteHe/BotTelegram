import TelegramBot from 'node-telegram-bot-api';

require('dotenv').config();

// ---------------------------------------------------------------------------------------------------- //
// Token provided by BotFather on Telegram.
// ---------------------------------------------------------------------------------------------------- //
const token = process.env.TELEGRAM_TOKEN;

// ---------------------------------------------------------------------------------------------------- //
// The bot uses 'polling' to get the requests.
// ---------------------------------------------------------------------------------------------------- //
const bot = new TelegramBot(token, { polling: true });

export default bot;
