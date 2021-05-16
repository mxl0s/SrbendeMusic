const { MessageEmbed } = require('discord.js') // npm i discord.js

module.exports = { // Update To Your Handler
	name: `server`,
	description: 'Prikazuje informacije o serveru.', // Optional
    aliases: ["server", "serverinfo"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Prikazuje informacije o serveru.`,
}

//command in index.js!