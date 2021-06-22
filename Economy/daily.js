
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
  let coins = 1000;
  const dailyembed = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🎁 Daily', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Pokupio si Daily od ${coins} coinsa!`)
  .setColor("#3371FF")
  .setTimestamp();
  let daily = await db.fetch(`daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#3371FF")
    .setTitle('SM | Daily reward 🎁')
    .addField('❌ Pokupljen Daily', `Pokupi ga opet za **${time.hours}**h **${time.minutes}**m **${time.seconds}**s`)
    .setColor("RED")
    .setTimestamp();
        message.inlineReply({
  embed: timeEmbed,
  allowedMentions: { repliedUser: false }
});
  } else {
   
  message.channel.send(dailyembed);
  db.add(`money_${user.id}`, amount)
  db.set(`daily_${user.id}`, Date.now())


  }
}
}
