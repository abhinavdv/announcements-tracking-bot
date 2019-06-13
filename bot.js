const TelegramBot = require('node-telegram-bot-api')
const token = '870105254:AAEhGVRPFrjhVereqx0dK7z7xzVa0e_KByU')
const bot = new TelegramBot(token, {polling:true})

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

});