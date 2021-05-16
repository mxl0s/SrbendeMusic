
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
require(".././ExtendedMessage");
module.exports = {
  name: 'daily',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {

  let user = message.author;

  let timeout = 86400000;
  let amount = 1500;

  let daily = await db.fetch(`daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#3371FF")
    .setTitle('SM | Daily reward 🎁')
    .addField('❌ Pokupljen Daily', `Pokupi ga opet za **${time.hours}**h **${time.minutes}**m **${time.seconds}**s`)
    .setColor("RED")
        message.inlineReply({
  embed: timeEmbed,
  allowedMentions: { repliedUser: false }
});
  } else {
   
  message.inlineReply(`Pokupio si daily od **${amount}** Coinsa!`, { allowedMentions: { repliedUser: false } })
  db.add(`money_${user.id}`, amount)
  db.set(`daily_${user.id}`, Date.now())


  }
}
}