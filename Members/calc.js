const math = require('mathjs');
const Discord = require('discord.js');

module.exports = { // Update To Your Handler
	name: `calc`,
	description: 'Kalkulator.', // Optional
    aliases: ["calc","calculator", "kalkulator"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Kalkulator.`,

    async execute(message, args) {
        if(!args[0]) return message.channel.send('Unesi brojeve');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Unesi **validne** brojeve')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#3371FF')
        .setTitle('SM | Kalkulator 🏫📚📐')
		.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
        .addField('Pitanje', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Odgovor', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}