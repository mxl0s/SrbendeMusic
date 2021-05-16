  const Discord = require('discord.js')
require(".././ExtendedMessage")
const db = require("quick.db")
const ms = require("parse-ms")
module.exports = {
  name: 'slots',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

        async execute(message, args) {
  
    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
	const slotItems = [":Grape:", ":Watermelon:", "🍊", ":Apple:", ":slot_machine:", ":Strawberry:", ":cherries:"];
 

  let bal = db.fetch(`money_${user.id}`)
  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;


    if (!money) return message.inlineReply(`Unesi količinu za klađenje!`, { allowedMentions: { repliedUser: false } })
    if (money > moneydb) return message.inlineReply(`Nemaš toliko kinte sirotinjo.`, { allowedMentions: { repliedUser: false } });

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            
            .setTitle(` Osvojio si ${money} coinsa!`)
			.setDescription(` Džep: **${bal + money}** Coins\nBanka: **${bank}** Coins`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
           
            .setTitle(`Maler, izgubio si ${money} coinsa!`)
			.setDescription(`Džep: **${bal - money}** Coins\nBanka: **${bank}** Coins`)
            .setColor("RED")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, money)
    }

}
  }