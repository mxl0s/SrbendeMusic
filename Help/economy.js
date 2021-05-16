const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `economy`,
	description: 'Help komanda, izbacuje emotions komande na botu', // Optional
    cooldown: 2,

    async execute(message, args) {
       if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
       var EMBED = new Discord.MessageEmbed()
      .setAuthor('Srbende Bot | Economy Help 💸📝', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
      .setColor("#F2F2F2")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
	  .setDescription("!bal ➡️ pogledaj svoj balans.\n!beg ➡️ prosi na ulici za pare.\n!buy ➡️ kupi stvari iz shopa.\n!daily ➡️ pokupi dnevni bonus.\n!deposit ➡️ ostavi pare u banku.\n!shop ➡️ otvori shop za kupovinu.\n!slots ➡️ oprobaj sreću u slotovima.\n!use ➡️ koristi stvari iz shopa.\n!withdraw ➡️ pokupi pare iz banke.\n!work ➡️ radi posao.\n!crime ➡️ počini krivično delo.\n!use ➡️ koristi iteme iz shopa.")
       message.channel.send(EMBED)
    }
}
