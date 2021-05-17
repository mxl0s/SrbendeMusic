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
 
    const bruh1 = new Discord.MessageEmbed()
    .setAuthor('Srbende Music | 🎰 Slots', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Unesi količinu!`)
    .setColor("#3371FF")
    .setTimestamp();
    const bruh2 = new Discord.MessageEmbed()
    .setAuthor('Srbende Music | 🎰 Slots', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
    .setDescription(`Nemaš dovoljno para!`)
    .setColor("#3371FF")
    .setTimestamp();
  let bal = db.fetch(`money_${user.id}`)
  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;


    if (!money) return message.channel.send(bruh1)
    if (money > moneydb) return message.channel.send(bruh2)

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
            
            .setTitle("SM | Slots ✔️")
			.setDescription(` Džep: **${bal + money}** Coins\nBanka: **${bank}** Coins`)
            .setColor("GREEN")
            .setTimestamp();
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
           .setAuthor("SM | Slots ❌")
            .setTitle(`Maler, izgubio si ${money} coinsa!`)
			.setDescription(`Džep: **${bal - money}** Coins\nBanka: **${bank}** Coins`)
            .setColor("RED")
            .setTimestamp();
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, money)
    }

}
  }