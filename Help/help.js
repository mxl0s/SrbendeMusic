const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `help`,
	description: 'Help komanda, izbacuje kategorije komandi na botu', // Optional
    aliases: ["h","help"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Help komanda, izbacuje kategorije komandi na botu`,

    async execute(message, args) {
       if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
       var EMBED = new Discord.MessageEmbed()
      .setAuthor('Srbende Bot | Help 📝', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
      .setColor("#F2F2F2")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
	  .setDescription("🎶 Music komande ➡️ !music\n👻 Fun komande ➡️ !fun\n🛠️ Admin komande ➡️ !admin\n🥺 Emotions komande ➡️ !emotions\n⚙️ Members komande ➡️ !members\n💸 Economy komande ➡️ !economy")
       message.channel.send(EMBED)
    }
}
