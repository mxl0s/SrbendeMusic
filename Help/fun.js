const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `fun`,
	description: 'Help komanda, izbacuje fun komande na botu', // Optional
    cooldown: 2,

    async execute(message, args) {
       if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
       var EMBED = new Discord.MessageEmbed()
      .setAuthor('Srbende Bot | Fun Help 👻📝', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
      .setColor("#F2F2F2")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
	  .setDescription("!8ball ➡️ magični 8ball će odgovoriti na sva vaša pitanja.\n!animesearch ➡️ pretraži neki anime\n!ascii ➡️ pretvara tekst u ascii art.\n!awallpaper ➡️ daje random anime wallpaper.\n!fasttype ➡️ izazov, ukucaj datu reč što brže!\n!meme ➡️ daje random meme sa reddita.\n!translate ➡️ prevedi nešto.\n!wallpaper ➡️ daje random wallpaper.")
       message.channel.send(EMBED)
    }
}
