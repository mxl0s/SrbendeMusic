const Discord = require('discord.js');
const db = require('quick.db');
require(".././ExtendedMessage");
const ms = require('parse-ms')
module.exports = {
  name: 'use',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {
let user = message.author;

 

if (args[0] == 'minecraft' || args[0] == 'mc') {
 let timeout = 120000;
  let rand = Math.round(Math.random() * 250 + 50);
  let user = message.author;
let mc = await db.fetch(`mc_${user.id}`)
  if (mc !== null && timeout - (Date.now() - mc) > 0) {
    let time = ms(timeout - (Date.now() - mc));
  
 message.inlineReply(`Šefe, uspori. Već si igrao MC celu noć sinoć, zar opet?! Vrati se za **${time.seconds}s**`, { allowedMentions: { repliedUser: false } })
  } else {

  let mc = await db.fetch(`mc_${user.id}`)
  if(mc === null) return message.inlineReply("Moraš kupiti MC iz shopa!")
  if(mc > 0) message.channel.send(`Igrao si MC celu noć. Bilo je toliko dobro da si sad **${rand}** coinsa bogatiji! `)
   db.add(`money_${user.id}`, rand)
   db.set(`mc_${user.id}`, Date.now())
}
  }
}
    }