const {  MessageEmbed } = require("discord.js");

module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react("❌");
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("❌ | " + titel)
      .setColor("#3371FF")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
