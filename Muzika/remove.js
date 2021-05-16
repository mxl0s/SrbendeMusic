////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "remove",
  description: "Briše pesmu iz queue",
  aliases: ["delete"],
  cooldown: 2,
  edesc: `Kucaj ovu komandu da obrišeš pesmu.\nKomanda: ${PREFIX}remove <broj pesme>`,

execute(message, args) {
  //if its not a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if there is no queue return error
    if (!queue) return attentionembed(message,"Queue ne postoji");
    //if he isnt in the same voice channel as the bot
    if (!canModifyQueue(message.member)) return;
    //if no args then return error
    if (!args.length) return attentionembed(message,`Pokušaj: ${message.client.prefix}remove <Broj Pesme>`);
    //If not a number then return error
    if (isNaN(args[0])) return attentionembed(message,`Pokušaj: ${message.client.prefix}remove <Broj Pesme>`);
    //get the song
    const song = queue.songs.splice(args[0], 1);
    //react with approve
    message.react("✅")
    //send approve
    queue.textChannel.send(new MessageEmbed()
    .setDescription(`❌ | ${message.author} je obrisao **${song[0].title}** iz Queue`)
    .setColor("#3371FF")
    );
  }
};
