var TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
var token = '314630671:AAEOLu1tbhW4jrkOVNdEtBoURIVrSy7yOm0';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

bot.onText(/\/radio.key/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
//  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "eto go!");
});

bot.on('connect')

// messages.
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  var ans = [
	"Сметни",
	"...kokeleei!",
	"...see6se!",
	"кажи честно",
	"ти май се шегуваш нещо",
	"сори, не те слушах. какво каза?"
  ];

 const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes, you are the bot of my life ❤'],
        ['No, sorry there is another one...']
      ]
    })
  };

  let arand = parseInt(Math.random() * ans.length);

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 
    ans[arand],
    opts);
});


