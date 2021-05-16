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
 

  let user = message.author;

  let member = db.fetch(`money_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${user.id}`)
    
    db.subtract(`bank_${user.id}`, money)
    db.add(`money_${user.id}`, money)
  
  message.inlineReply(`Izvukao si sve pare iz banke.`, { allowedMentions: { repliedUser: false } })
  
  } else {


  
  if (!args[0]) {
      return message.inlineReply(`Unesi količinu za izvlačenje!`, { allowedMentions: { repliedUser: false } })
  }
  

  if (message.content.includes('-')) { 
      return message.inlineReply(`Ne možeš izvući negativno para!`, { allowedMentions: { repliedUser: false } })
  }
  

  if (member2 < args[0]) {
      return message.inlineReply(`Nemaš toliko para!`, { allowedMentions: { repliedUser: false } })
  }

message.inlineReply(`Uspešno si izvukao ${args[0]} coinsa iz banke!`, { allowedMentions: { repliedUser: false } })
  db.subtract(`bank_${user.id}`, args[0])
  db.add(`money_${user.id}`, args[0])
  }
}
}