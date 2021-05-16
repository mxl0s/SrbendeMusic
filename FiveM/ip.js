const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `ip`,

    async execute(message, args) {
        if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
        var EMBED = new Discord.MessageEmbed()
        .setAuthor('server-name')
        .setDescription('connect serverip')
        .setColor('#3371FF')
        message.channel.send(EMBED)
    }
}