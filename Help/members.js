const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `members`,
	description: 'Help komanda, izbacuje members komande na botu', // Optional
    cooldown: 2,

    async execute(message, args) {
       if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
       var EMBED = new Discord.MessageEmbed()
      .setAuthor('Srbende Bot | Members Help ⚙️📝', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
      .setColor("#F2F2F2")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
	  .setDescription("!avatar ➡️ izbacuje avatar tagovane osobe.\n!calc ➡️ izračunava sve matematičke probleme.\n!covid ➡️ informacije o Covid-19 slučajevima\n!server ➡️ izbacuje info servera.\n!srbwiki ➡️ pretraži srpsku wikipediju.\n!wiki ➡️ pretraži svetsku wikipediju.\n!userinfo ➡️ pokazuje informacije o memberu.\n!weather ➡️ izbacuje prognozu grada/države.\n!ping ➡️ ping discord bota na API serverima.\n!uptime ➡️ vreme rada bota.")
       message.channel.send(EMBED)
    }
}
