const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = { // Update To Your Handler
	name: `feed`,
	description: 'Nahrani nekoga.', // Optional
    aliases: ["feed","hrani"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Nahrani nekoga.`,

    async execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) message.author;
        

        async function work() {
        let owo = (await neko.sfw.feed());

        const hugembed = new Discord.MessageEmbed()
        .setTitle('SM | Hrana 🍔')
        .setDescription((message.author.toString() + " Je nahranio/la " + user.toString()))
        .setImage(owo.url)
        .setColor('#3371FF')
        message.channel.send(hugembed);

}

      work();
}
                };