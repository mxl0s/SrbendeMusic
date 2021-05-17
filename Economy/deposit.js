const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
require(".././ExtendedMessage");
module.exports = {
  name: 'deposit',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {

let user = message.author;
  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;

  const nocoins = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🏦 Deposit', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Nemaš Dovoljno Coinsa`)
  .setColor("#3371FF")

  const success = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🏦 Deposit', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Uspešno depositao **${args[0]}** Coinsa u banku!`)
  .setColor("#3371FF")

  const suma = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🏦 Deposit', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Unesi sumu!`)
  .setColor("#3371FF")

  const negative = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🏦 Deposit', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Ne možeš negativan deposit napraviti!`)
  .setColor("#3371FF")

  const broke = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🏦 Deposit', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Nemaš dovoljno para!`)
  .setColor("#3371FF")

  const success2 = new Discord.MessageEmbed()
  .setAuthor('Srbende Music | 🏦 Deposit', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
  .setDescription(`Uspešno depositao **${args[0]}** Coinsa u banku!`)
  .setColor("#3371FF")

  let member = db.fetch(`money_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${user.id}`)

    if(money === 0) return message.channel.send(nocoins);

    db.add(`bank_${user.id}`, money)
    db.subtract(`money_${user.id}`, money)
message.channel.send(success);
  
  } else {
  

  
  if (!args[0]) {
      return message.channel.send(suma)
      .catch(err => console.log(err))
  }


  if (message.content.includes('-')) { 
      return message.channel.send(negative)
  }
 

  if (member < args[0]) {
      return message.channel.send(broke)
  }

  message.channel.send(success2);
  db.add(`bank_${user.id}`, args[0])
  db.subtract(`money_${user.id}`, args[0])
  }
}
}