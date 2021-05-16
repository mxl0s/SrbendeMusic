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

  

  let member = db.fetch(`money_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${user.id}`)
    let bank = await db.fetch(`bank_${user.id}`)


    if(money === 0) return message.inlineReply(`Nemaš coinsa za deposit!`, { allowedMentions: { repliedUser: false } })

    db.add(`bank_${user.id}`, money)
    db.subtract(`money_${user.id}`, money)
message.inlineReply(`Uspešno depositao **${args[0]}** Coinsa u banku!`, { allowedMentions: { repliedUser: false } })
  
  } else {
  

  
  if (!args[0]) {
      return message.inlineReply(`:x: Unesi sumu za deposit!`, { allowedMentions: { repliedUser: false } })
      .catch(err => console.log(err))
  }


  if (message.content.includes('-')) { 
      return message.inlineReply(`❌ Ne možeš depositovati negativne <:Coinse`, { allowedMentions: { repliedUser: false } })
  }
 

  if (member < args[0]) {
      return message.inlineReply(`Samo da još imaš toliko para...`, { allowedMentions: { repliedUser: false } })
  }

  message.inlineReply(`Uspešno si depositovao **${args[0]}** <Coinsa u banku.`, { allowedMentions: { repliedUser: false } })
  db.add(`bank_${user.id}`, args[0])
  db.subtract(`money_${user.id}`, args[0])
  }
}
}