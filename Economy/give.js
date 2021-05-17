  const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
require(".././ExtendedMessage")

module.exports = {
  name: 'addmoney',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {

		let person = message.mentions.members.first(message, args[0]);

    const bruh = new Discord.MessageEmbed()
    .setAuthor('SM | Admin Pay ⛏️', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Nisi kreator!`)
    .setColor("#3371FF")

    const bruh2 = new Discord.MessageEmbed()
    .setAuthor('SM | Admin Pay ⛏️', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Unesi membera!`)
    .setColor("#3371FF")

    const bruh3 = new Discord.MessageEmbed()
    .setAuthor('SM | Admin Pay ⛏️', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Unesi Količinu!`)
    .setColor("#3371FF")


  let user = message.mentions.users.first() 
if(message.author.id !== "711272428499632169") return message.channel.send(bruh)
  let member = db.fetch(`money_${message.author.id}`)

 ;

  if (!user) {
      return message.channel.send(bruh2)
  }

  
  if (!args[1]) {
      return message.cahnnel.send(bruh3)
  }
  
  let embed5 = new Discord.MessageEmbed()
  .setAuthor("SM | Admin Pay ⛏️", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
  .setDescription(`Platio si ${person} ${args[1]} coinsa.`)
  .setColor('#3371FF')
  .setTimestamp();

  message.channel.send(embed5)
  db.add(`money_${user.id}`, args[1])
 

}
}
