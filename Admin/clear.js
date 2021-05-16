const { Client, Message, MessageEmbed, MessageFlags } = require('discord.js');

module.exports = { // Update To Your Handler
	name: `clear`,

    async execute(message, args) {

        if (!args[0]) return message.channel.send('Unesi all da očistiš poruke od svih, ili taguj osobu od koje želiš da obrišem poruke!')
        if (!args[1] || isNaN(args[1]) || parseInt(args[1]) > 99 || parseInt(args[1] < 1)) return message.channel.send('Unesi broj poruka (1-99)!')

        if (!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('Nemaš permisiju!')
        if (!message.guild.me.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('Nemam permisiju ovo da koristim!')

        if (args[0] == 'all') {
            await message.channel.bulkDelete(parseInt(args[1]))
                .catch(err => console.log(err))
            message.channel.send(`Obrisao ${args[1]} poruka!`).then(m => m.delete({ timeout: 5000 }))
        } else {
            message.channel.messages.fetch({
                limit: 100
            }).then((messages) => {
                let target = message.guild.members.cache.get(args[0]);
                let userMessages = [];
                messages.filter(m => m.author.id == target).forEach(msg => userMessages.push(msg))
                message.channel.bulkDelete(parseInt(args[1]), (userMessages))
                    .catch(err => console.log(err))
                message.channel.send(`Obrisao ${args[1]} poruka!`).then(m => m.delete({ timeout: 5000 }))
            })
        }
    }
}