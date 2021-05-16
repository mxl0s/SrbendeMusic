const Discord = require('discord.js')

module.exports = { // Update To Your Handler
	name: `music`,
	description: 'Help komanda, izbacuje muzicke komande na botu', // Optional
    cooldown: 2,

    async execute(message, args) {
       if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
       var EMBED = new Discord.MessageEmbed()
      .setAuthor('Srbende Bot | Music Help 🎶📝', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
      .setColor("#F2F2F2")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
	  .setDescription("!filter ➡️ menjaj filter muzike. (8d, bassboost...)\n!loop ➡️ loopuj trenutni queue.\n!lyrics ➡️ uzmi tekst od pesme.\n!nowplaying ➡️ trenutna puštena pesma.\n!pause ➡️ pauziraj trenutnu pesmu.\n!play ➡️ pusti pesmu.\n!queue ➡️ pogledaj listu pesama.\n!radio ➡️ biraj između 27 radio stanica.\n!remove ➡️ ukloni pesmu iz queue.\n!resume ➡️ nastavi pesmu.\n!search ➡️ pretraži rezultate za pesmu.\n!shuffle ➡️ izmešaj trenutni queue.\n!skip ➡️ premotaj pesmu.\n!skipto ➡️ premotaj do određene pesme.\n!stop ➡️ stopira muziku.\n!volume ➡️ menjaj glasnoću bota.")
       message.channel.send(EMBED)
    }
}
