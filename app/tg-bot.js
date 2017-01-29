const config = require('../etc/config');

var TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const log = console.log;

var token = config.secret;

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

bot.onText(/\/radiokey/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  log(msg);

  var chatId = msg.chat.id;
//  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "паролата е: (копирай долния ред целия) \n983!!!sdf");
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
  msg.resolved = true;
});

// messages.
bot.on('message', function (msg) {

  if (!msg.resolved);

  var chatId = msg.chat.id;
  var ans = [
	"Сметни",
	"...kokeleei!",
	"...see6se!",
	"кажи честно",
	"ти май се шегуваш нещо",
	"сори, не те слушах. какво каза?"
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
