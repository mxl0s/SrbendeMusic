const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = { // Update To Your Handler
	name: `slap`,
	description: 'Ošamari nekoga.', // Optional
    aliases: ["slap","samar"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Ošamari nekoga.`,

    async execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) 
        

        async function work() {
        let owo = (await neko.sfw.slap());

        const hugembed = new Discord.MessageEmbed()
        .setTitle("SM | Slap 👋")
        .setDescription((message.author.toString() + " Je ošamario/la " + user.toString()))
        .setImage(owo.url)
        .setColor('#3371FF')
        message.channel.send(hugembed);

}

      work();
}
                };