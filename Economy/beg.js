const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")
require(".././ExtendedMessage")

module.exports = {
  name: 'beg',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {


  let user = message.author;

  let timeout = 300000;
  let rand = Math.round(Math.random() * 50 + 1);


  let beg = await db.fetch(`beg_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  const begEmbed = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | ❌💰 Beg', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Već si prosio. Prosi opet za **${time.seconds}s**`)
  .setColor("#3371FF")
  message.channel.send(begEmbed);
  } else {
  const beg2Embed = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 💰 Beg', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Prosio si i dobio **${rand}** Coinsa!`)
  .setColor("#3371FF")
  message.channel.send(beg2Embed);
  db.add(`money_${user.id}`, rand)
  db.set(`beg_${user.id}`, Date.now())


  }
  }
}