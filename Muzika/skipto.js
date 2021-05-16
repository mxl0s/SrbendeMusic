////////////////////////////
////////CONFIG LOAD/////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "skipto",
  aliases: ["st", "jump"],
  description: "Skipuje do određene pesme",
  cooldown: 4,
  edesc: `Kucaj komandu da skipuješ određeni broj pesama do željene pesme.\nKomanda: ${PREFIX}skipto`,

execute(message, args) {
    //if not in a guild return
    if (!message.guild) return;
    //react with approve
    message.react("✅").catch(console.error);
    //if no args return error
    if (!args.length)
      return attentionembed(message, `Try: ${message.client.prefix}${module.exports.name} <Broj Pesme>`)
    //if not a number return error
    if (isNaN(args[0]))
      return attentionembed(message, `Try: ${message.client.prefix}${module.exports.name} <Broj Pesme>`)
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no Queue return error
    if (!queue) return attentionembed(message, "Queue ne postoji!");
    //if member not in the same voice channel as the Bot return
    if (!canModifyQueue(message.member)) return;
    //if args bigger then the Server Queue return error
    if (args[0] > queue.songs.length)
      return attentionembed(message, `Queue ima samo ${queue.songs.length} pesama!`);
    //set playing to true
    queue.playing = true;
    //if the queue is loop 
    if (queue.loop) {
      //make a loop for all songs to skip and add them at the end again
      for (let i = 0; i < args[0] - 1; i++) 
        queue.songs.push(queue.songs.shift());
    //if not a loop
    } else {
      //remove all songs including the args 
      queue.songs = queue.songs.slice(args[0] - 1);
    }
    //end current song
    queue.connection.dispatcher.end();
    //Send approve
    queue.textChannel.send(
      new MessageEmbed()
        .setColor("#3371FF")
        .setAuthor(`${message.author.username}#${message.author.discriminator} je skipovao ${args[0]} pesama`, "https://cdn.discordapp.com/emojis/769915194444480542.png")
    ).catch(console.error);
  }
};
