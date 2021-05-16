const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const Discord = require('discord.js');

module.exports = { // Update To Your Handler
	name: `avatar`,
	description: 'Pokazuje avatar osobe.', // Optional
    aliases: ["avatar","pfp"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Pokazuje avatar osobe.`,

    async execute(message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar od: ${member.username}`)
        .setImage(avatar)
        .setColor("#3371FF")

        message.channel.send(embed);
    }
}