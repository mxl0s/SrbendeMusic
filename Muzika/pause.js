const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed"); 
const { PREFIX } = require(`../config.json`);
module.exports = {
  name: "pause",
  aliases: ['pauza'],
  description: "Pauziraj trenutnu pesmu",
  cooldown: 5,
  edesc: `Kucaj komandu da pauziraš pesmu!\nKomanda: ${PREFIX}pauza`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, "Ništa nije pušteno").catch(console.error);
    //If not in the same channel return
    if (!canModifyQueue(message.member)) return;
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#3371FF")
      .setAuthor(`${message.author.username} je pauzirao muziku.`, "https://cdn.discordapp.com/emojis/769912238236106793.png")
      //react with approve emoji
      message.react("✅")
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
