const config = require('../etc/config');

var TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const log = console.log;

var token = config.secret;

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });


bot.onText(/\/help/, function (msg, match) {
  bot.sendMessage(chatId, "\
  /help - this help\
  /logo - for test\
  /radiokey - get the key for radio private stream")
});


bot.onText(/\/logo/, function (msg, match) {
  bot.sendPhoto(chatId, 'assets/logo.jpg')
});

bot.onText(/\/radiokey/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  log(msg);

  var chatId = msg.chat.id;
//  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendI,age
  bot.sendMessage(chatId, "\
    потребител: hmsushano\
    парола: hmsu6no\
    връзка директна: http://hmsushano:hmsu6no@radio2.hmsu.org:42024/hmsu-vip.ogg\
    (в някои браузери работи директно и самата връзка, но може и във VLC)"
  ).then((res) => bot.sendPhoto(chatId, 'assets/vlc-howto.gif'));
});

// Matches /test
bot.onText(/\/register/, function onEditableText(msg) {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'change this text',
             // we shall check for this value when we listen
             // for "callback_query"
            callback_data: 'edit'
          }
        ]
      ]
    }
  };
  bot.sendMessage(msg.from.id, 'Original Text', opts);
});

// messages.
bot.on('message', function (msg) {
  if (!msg.resolved);

  var chatId = msg.chat.id;
  var ans = [
	"Сметни (/help за команди)",
	"...see6se! (/help за команди)",
	"кажи честно (/help за команди)",
	"еми да (/help за команди)",
	"сори, не те слушах. какво каза? (/help за команди)"
  ];
/*
 const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes, you are the bot of my life ❤'],
        ['No, sorry there is another one...']
      ]
    })
  };
*/

  let arand = parseInt(Math.random() * ans.length);

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 
    ans[arand]
    );
});
