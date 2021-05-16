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
    .setTitle("Pegaz")
    .addField('Cat (Big Floppa) — **1000**', `Uzmi Floppu, i daruje ti 1000 coinsa dnevno!`)
    .addField('Kola — **5000**', `Koristi kola da gaziš pešake! I zaradi do 10000 coinsa!`)
    .addField('Villa — **20000**', `Kupi Villu i iznajmi je stanarima, zaradi od 2000 do 30000 coinsa nedeljno!`)
    .addField('Minecraft — **50**', `Igraj MC i zaradi!`)
    .setColor("#3371FF")
	.setThumbnail("http://pegaz-ruma.com/img/pekara_i_picerija_Ruma_Pegaz_pekarski_i_poslasti%C4%8Darski_proizvodi_dostava_Ruma_Sremska_Mitrovica_LOGO.jpg")
    .setFooter("Kucaj !buy [ime stvari] da je kupiš! Da je koristiš, !use [stvar]")
    message.channel.send(embed)




}
  }
  