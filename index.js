const Dellubot = require('dellusofbot');
const bot = new Dellubot();
const TOKEN = 'TOKEN OF YOUR BOT';
bot.botToken(TOKEN);

const activities = ['♥️ Hello World♥️', 'Discord.com ❣️', 'exemple de démarrage de bot', 'dellusofbot'];
const time = 10000
bot.MultiAct(activities, time);
// commande say
bot.CommandsStart('!', {
'say': message => {
bot.BotSay(message);
  },
});
// commande qui envoie votre avatar
bot.CommandsStart('T!', {
'pp': message => {
  const avatar = bot.YourAvatar(message);
  bot.BotSendMsg(message.channel, avatar)
  },
});
// commande 8ball
bot.CommandsStart('!', {
'8ball': message => {
const mess = bot.randomMess(['peut être', 'surement', 'reve pas']);
  bot.BotSendMsg(message.channel, mess)
 },
});
// ajoutez dautres commandes et explorez ce que vous pouvez faire