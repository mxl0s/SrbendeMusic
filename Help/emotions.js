const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `emotions`,
	description: 'Help komanda, izbacuje emotions komande na botu', // Optional
    cooldown: 2,

    async execute(message, args) {
       if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
       var EMBED = new Discord.MessageEmbed()
      .setAuthor('Srbende Bot | Emotions Help 🥺📝', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
      .setColor("#F2F2F2")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
	  .setDescription("!hug ➡️ zagrli nekog.\n!kiss ➡️ poljubi nekog.\n!slap ➡️ ošamari nekoga.\n!feed ➡️ nahrani nekoga.\n!love ➡️ pokazuje koliko % vi nekoga volite.")
       message.channel.send(EMBED)
    }
}
