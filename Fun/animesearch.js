const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  aliases: ["as"],

  async execute(message, args) {


const search = `${args}`;
if(!search)
return message.reply('Dodaj stavku za traženje!');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`My Anime List pretraga za ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor("#F2F2F2")
    .addField('Engleski Titl', data.englishTitle, true)
    .addField('Japanski Titl', data.japaneseTitle, true)
    .addField('Tip', data.type, true)
    .addField('Epizode', data.episodes, true)
    .addField('Rating', data.rating, true)
    .addField('Izlazak', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Link', data.url);

    message.channel.send(malEmbed);

  })
}
};