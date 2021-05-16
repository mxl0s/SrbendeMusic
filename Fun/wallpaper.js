const randomPuppy = require('random-puppy');
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const Discord = require('discord.js');

module.exports = { // Update To Your Handler
	name: `wallpaper`,
	description: 'Izbacuje random wallpaper.', // Optional
    aliases: ["wallpaper","wp"], // You Can Keep Any Name
    cooldown: 1,
	edesc: `Izbacuje random wallpaper.`,

    async execute(message, args) {
        const subReddits = ["wallpapers", "wallpaper", "wallpaperworthy"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor('#3371FF')
        .setImage(img)
        .setTitle(`Tvoj random wallpaper`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}