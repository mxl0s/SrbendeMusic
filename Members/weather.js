const weather = require('weather-js');
const Discord = require('discord.js');
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

module.exports = { // Update To Your Handler
	name: `weather`,
	description: 'Prikaži vreme u gradu.', // Optional
    aliases: ["weather","vreme"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Prikaži vreme u gradu.`,

    async execute(message, args) {

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Unesi lokaciju.')

        if(result === undefined || result.length === 0) return message.channel.send('**Loša** lokacija');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Prognoza za: ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor('#3371FF')
        .addField('Vremenska zona 🌎', `UTC+${location.timezone}`, true)
        .addField('Temperatura 🌡️', `${current.temperature}°`, true)
        .addField('Vetar 💨', current.winddisplay, true)
        .addField('Oseća se kao ✔️', `${current.feelslike}°`, true)
        .addField('Vlažnost vazduha 🌬️', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}