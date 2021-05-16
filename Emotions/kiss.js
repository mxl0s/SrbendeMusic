const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = { // Update To Your Handler
	name: `kiss`,
	description: 'Poljubi nekoga.', // Optional
    aliases: ["kiss","poljubi"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Poljubi nekoga.`,

    async execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) message.author;
        

        async function work() {
        let owo = (await neko.sfw.kiss());

        const hugembed = new Discord.MessageEmbed()
        .setTitle('SM | Kiss 😘')
        .setDescription((message.author.toString() + " Je poljubio/la " + user.toString()))
        .setImage(owo.url)
        .setColor('#3371FF')
        message.channel.send(hugembed);

}

      work();
}
                };