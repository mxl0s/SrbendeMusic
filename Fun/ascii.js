const figlet = require('figlet');
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

module.exports = { // Update To Your Handler
	name: `ascii`,
	description: 'Prevara text u ascii art.', // Optional
    aliases: ["ascii"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Prevara text u ascii art.`,

async execute(message, args) {
figlet(args.join(" "), function(err, data) {
if(err) {
message.channel.send('Greška')
}
message.channel.send("```" + data + "```")
		})
	}
}