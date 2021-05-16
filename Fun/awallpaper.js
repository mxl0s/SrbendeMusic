const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = { // Update To Your Handler
	name: `awallpaper`,
	description: 'Izbacuje random anime wallpaper.', // Optional
    aliases: ["awallpaper","awp"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Izbacuje random anime wallpaper.`,

    async execute(message, args) {

    let owo = (await neko.sfw.wallpaper());

    const wallpaper = new Discord.MessageEmbed()
      .setTitle("Tvoj random anime wallpaper!")
      .setImage(owo.url)
      .setColor('#3371FF')
      .setURL(owo.url);
    message.channel.send(wallpaper);
  }
};