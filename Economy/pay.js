const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require("quick.db")
require(".././ExtendedMessage")
module.exports = {
		name: "pay",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
	async execute(message, args) {

        const user = message.mentions.members.first()
		let person = message.mentions.members.first(message, args[0]);
    let idk2 = parseInt(args[1])
    let idk3 = parseInt(args[0])
    let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setAuthor("SM | Pay ❌", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
  .setColor("#FF0000")
  .setDescription(`❌ Unesi osobu!`)
  .setTimestamp();

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setAuthor("SM | Pay ❌", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
  .setColor("#FF0000")
  .setDescription(`❌ Unesi sumu!`)
  .setTimestamp();
  
  if (!parseInt(args[1])) {
    return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setAuthor("SM | Pay ❌", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
  .setColor("#FF0000")
  .setDescription(`❌ Ne možeš platiti negativnu sumu!`)
  .setTimestamp();

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }

  let embed4 = new Discord.MessageEmbed()
  .setAuthor("SM | Pay ❌", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
  .setColor("#FF0000")
  .setDescription(`❌ Nemaš dovoljno para!`)
  .setTimestamp();

  if (member < parseInt(args[1])) {
    return message.channel.send(embed4)
}
  let embed5 = new Discord.MessageEmbed()
  .setAuthor("SM | Pay ✔️", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
  .setColor("#00FF00")
  .setDescription(`✔️ Platio si ${person} ${parseInt(args[1])} coinsa!`)
  .setTimestamp();

  
  db.add(`money_${user.id}`, parseInt(args[1]))
  db.subtract(`money_${message.author.id}`, parseInt(args[1]))
// console.log(db.fetch(`money_${user.id}_${message.author.id}`, parseInt(args[1]))); debugging shit

  message.channel.send(embed5)
  

	}
}