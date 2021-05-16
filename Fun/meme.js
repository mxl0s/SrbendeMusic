const randomPuppy = require('random-puppy');
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const Discord = require('discord.js');

module.exports = { // Update To Your Handler
	name: `meme`,
	description: 'Izbacuje random meme.', // Optional
    aliases: ["meme","memes"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Izbacuje random meme.`,

    async execute(message, args) {
        const subReddits = ["memes", "dankmemes", "meme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor('#3371FF')
        .setImage(img)
        .setTitle(`Meme iz: r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}