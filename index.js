const TelegramBot = require('node-telegram-bot-api');

// 👉 यहाँ अपना Bot Token डालना है
const token = 'YOUR_BOT_TOKEN';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, 'Hello 👋 मैं तुम्हारा AI bot हूँ!');
    } else {
        bot.sendMessage(chatId, 'तुमने लिखा: ' + text);
    }
});
