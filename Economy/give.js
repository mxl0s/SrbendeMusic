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

  let user = message.mentions.users.first() 
if(message.author.id !== "711272428499632169") return message.inlineReply('Samo kreator može ovo koristiti!')
  let member = db.fetch(`money_${message.author.id}`)

 ;

  if (!user) {
      return message.inlineReply(`Unesi membera!`, { allowedMentions: { repliedUser: false } })
  }

  
  if (!args[1]) {
      return message.inlineReply('Unesi količinu.')
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
