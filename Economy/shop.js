const Discord = require('discord.js')
require(".././ExtendedMessage");
module.exports = {
  name: 'shop',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {
     let embed = new Discord.MessageEmbed()
    .setAuthor("Srbende Music | Shop 🛒,", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
    .setDescription('Cat (Big Floppa) — **1000**\nUzmi Floppu, i daruje ti 1000 coinsa dnevno!\nKola — **5000** Koristi kola da gaziš pešake!\n I zaradi do 10000 coinsa!\nVilla — **20000**\nKupi Villu i iznajmi je stanarima, zaradi od 2000 do 30000 coinsa nedeljno!\nMinecraft — **50**\nIgraj MC i zaradi!')
    .setColor("#3371FF")
	  .setThumbnail("https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
    .setFooter("Kucaj !buy [ime stvari] da je kupiš! Da je koristiš, !use [stvar]")
    .setTimestamp();
    message.channel.send(embed)




}
  }
  