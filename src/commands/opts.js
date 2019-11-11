export const replyOpts = {
	parse_mode: 'Markdown',
	reply_markup: JSON.stringify({
		force_reply: true,
	}),
};

export const webDisable = {
	disable_web_page_preview: true,
	parse_mode: 'Markdown',
};

export const mainOpts = {
	parse_mode: 'Markdown',
	reply_markup: {
		keyboard: [['📝 2:00 PM', '📝 4:00 PM'], ['👁 Ver listas', '🕞 Hora']],
		resize_keyboard: true,
		one_time_keyboard: false,
	},
};

export const viewOpts = {
	parse_mode: 'Markdown',
	reply_markup: {
		keyboard: [['👁 2:00 PM', '👁 4:00 PM'], ['⏪ Atrás']],
		resize_keyboard: true,
		one_time_keyboard: false,
	},
};
