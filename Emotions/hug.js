const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = { // Update To Your Handler
	name: `hug`,
	description: 'Zagrli nekoga.', // Optional
    aliases: ["hug","grli"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Zagrli nekoga.`,

    async execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) message.author;
        

        async function work() {
        let owo = (await neko.sfw.hug());

        const hugembed = new Discord.MessageEmbed()
        .setTitle("SM | Hug 🤗")
        .setDescription((message.author.toString() + " Je zagrlio/la " + user.toString()))
        .setImage(owo.url)
        .setColor('#3371FF')
        message.channel.send(hugembed);

}

      work();
}
                };