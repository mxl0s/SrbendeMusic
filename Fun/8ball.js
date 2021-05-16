const Discord = require('discord.js');
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const answers = [
    "Možda.",
    "Sigurno ne.",
    "Nadam se.",
    "Ni u snovima.",
    "Postoji šansa.",
    "Verovatno.",
    "Nadam se.",
    "Nadam se da ne.",
    "Nikad!",
    "Zaboravi na to",
    "Ahahah! Stvarno?",
    "Pfft.",
    "Budućnost je mutna.",
    "Budućnost nije sigurna.",
    "Rekao bih da ne",
    "Koga jebeno briga?",
    "Postoji šansa.",
    "Nikad, nikad i nikad.",
    "Postoji mala šansa.",
    "Da!",
    "D A!",
    "Ähem, ne..",
    "Ne, bukvalno ne!",
];

module.exports = { // Update To Your Handler
	name: `8ball`,
	description: 'Otkriva tvoju sudbinu.', // Optional
    aliases: ["8ball","8b"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Otkriva tvoju sudbinu.`,
    async execute(message, args) {
    if(args[0]==null) return message.channel.send('Unesi pitanje');
      return message.reply(args.join(' ').endsWith('?') ? 
       `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
       "🎱 ***Ne deluje kao pitanje! Pokušaj opet!***");
    }
}