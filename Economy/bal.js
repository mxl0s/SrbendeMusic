const Discord = require("discord.js");
const message = require("discord.js")
const db = require("quick.db");
require(".././ExtendedMessage");
module.exports = {
  name: 'bal',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {
  let user = message.mentions.members.first() || message.author;
  let bal = db.fetch(`money_${user.id}`)
  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;
  let moneyEmbed = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 💰 Balance', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .addField("👤 **Korisnik:**", `${message.mentions.members.first() || message.author}`, false)
  .addField("💸 **Džep:**", `${bal} 💳`, true)
  .addField("🏛️ **Banka:**", `${bank} 💳`, true)
  .addField("💎 **Ukupno:**", `${bank + bal} 💳`, true)
  .setTimestamp(new Date())
  .setColor("#3371FF")
      message.inlineReply({
  embed: moneyEmbed,
  allowedMentions: { repliedUser: false }
});
}

  
}  