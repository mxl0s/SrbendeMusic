const Discord = require('discord.js');

module.exports = {
    name: 'mute',

    async execute(message, args) {

        const member = message.mentions.members.first()
        let role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')

        member.roles.set([])
        await member.roles.add(role)

		const Embed = new Discord.MessageEmbed()
		.setTitle("Srbende Music | Muted 🤫")
		.setColor("#3371FF")
        .setDescription(`${member} je mutiran`)
        .setTimestamp(new Date())
		.setThumbnail('https://cdn.discordapp.com/icons/818989238263218236/a_bed9dccdd4625540acb44408c284ed0f.webp?size=128')
		message.channel.send(Embed);
    }
}