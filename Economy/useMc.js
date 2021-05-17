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

const bruh1 = new Discord.MessageEmbed()
.setAuthor('Srbende Music | ⛏️ MC', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
.setDescription(`Moraš Kupiti MC iz Shopa!`)
.setColor("#3371FF")

const bruh2 = new Discord.MessageEmbed()
.setAuthor('Srbende Music | ⛏️ MC', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
.setDescription(`Uspori, već si igrao MC, vrati se za ${time.seconds}s`)
.setColor("#3371FF")

const bruh3 = new Discord.MessageEmbed()
.setAuthor('Srbende Music | ⛏️ MC', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
.setDescription(`Igrao si MC celu noć. Bilo je toliko dobro da si sad **${rand}** coinsa bogatiji! `)
.setColor("#3371FF")

if (args[0] == 'minecraft' || args[0] == 'mc') {
 let timeout = 120000;
  let rand = Math.round(Math.random() * 250 + 50);
  let user = message.author;
let mc = await db.fetch(`mc_${user.id}`)
  if (mc !== null && timeout - (Date.now() - mc) > 0) {
    let time = ms(timeout - (Date.now() - mc));
  
 message.channel.send(bruh2)
  } else {
  let mc = await db.fetch(`mc_${user.id}`)
  if(mc === null) return message.channel.send(bruh1)
  if(mc > 0) message.channel.send(bruh3)
   db.add(`money_${user.id}`, rand)
   db.set(`mc_${user.id}`, Date.now())
}
  }
}
    }