const { NovelCovid } = require('novelcovid');
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

const track = new NovelCovid()

module.exports = { // Update To Your Handler
	name: `covid`,
	description: 'Broj slučajeva Covid-19 u državi.', // Optional
    aliases: ["covid", "covid19", "corona", "korona", "kovid", "covid-19"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Broj slučajeva Covid-19 u državi.`,

async execute(message, args) {

        const corona = await track.countries(args.join(" "));

        if(!args[0]) return message.channel.send("Nema argumenta.");

        const embed = new MessageEmbed()
        .setTitle(`${corona.country}`)
		.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
        .setDescription(`🦠Informacije o Covid-19 u: ${corona.country}`)
        .addField('Ukupan broj slučajeva 😷: ', corona.cases, true)
        .addField('Ukupan broj smrti⚰️:', corona.deaths, true)
        .addField('Ukupan broj oporavljenih 👍:', corona.recovered, true)
        .addField('Današnji slučajevi 🕒:', corona.todayCases, true)
        .addField('Današnje smrti 💀:', corona.todayDeaths, true)
        .addField('Aktivni slučajevi ☢️:', corona.active, true)
        .addField('Ozbiljni slučajevi 👎:', corona.critical, true)
		.setColor("#3371FF")

        message.channel.send(embed);

    }
}