const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  name: 'withdraw',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {
 
    const bruh1 = new Discord.MessageEmbed()
    .setAuthor('Srbende Music | 🏦 Withdraw', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Izvukao si sve pare iz banke!`)
    .setColor("GREEN")
    .setTimestamp();
    const bruh2 = new Discord.MessageEmbed()
    .setAuthor('Srbende Music | 🏦 Withdraw', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Unesi količinu!`)
    .setColor("#3371FF")
    .setTimestamp();
    const bruh3 = new Discord.MessageEmbed()
    .setAuthor('Srbende Music | 🏦 Withdraw', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Ne možeš negativan broj uneti!`)
    .setColor("#3371FF")
    .setTimestamp();
    const bruh4 = new Discord.MessageEmbed()
    .setAuthor('Srbende Music | 🏦 Withdraw', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Nemaš dovoljno novca!`)
    .setColor("RED")
    .setTimestamp();
    const bruh5 = new Discord.MessageEmbed()
.setAuthor('Srbende Music | 🏦 Withdraw', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
.setDescription(`Uspešno si izvukao ${args[0]} coinsa iz banke!`)
.setColor("GREEN")
.setTimestamp();
  let user = message.author;
  let member2 = db.fetch(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${user.id}`)
    
    db.subtract(`bank_${user.id}`, money)
    db.add(`money_${user.id}`, money)
  
  message.channel.send(bruh1)
  
  } else {


  
  if (!args[0]) {
      return   message.channel.send(bruh2)
  }
  

  if (message.content.includes('-')) { 
      return   message.channel.send(bruh3)
  }
  

  if (member2 < args[0]) {
      return   message.channel.send(bruh4)
  }

  message.channel.send(bruh5)
  db.subtract(`bank_${user.id}`, args[0])
  db.add(`money_${user.id}`, args[0])
  }
}
}