    const Discord = require("discord.js");
    const translate = require("translatte");
    module.exports = { // Update To Your Handler
      name: `translate`,
    
        async execute(message, args) {

      if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#F2F2F2').setTitle(" Error | Pogrešno korišćenje komande!").setDescription("`translate <iz> <u> <Tekst>`\nPrimer: `translate en de Hello World`"))

      if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('#F2F2F2').setTitle(" Error | Pogrešno korišćenje komande!").setDescription("`translate <iz> <u> <Tekst>`\nPrimer: `translate en de Hello World`"))

      if(!args[2]) return message.channel.send(new Discord.MessageEmbed().setColor('#F2F2F2').setTitle(" Error | Pogrešno korišćenje komande!").setDescription("`translate <iz> <u> <Tekst>`\nPrimer: `translate en de Hello World`"))

    translate(args.slice(2).join(" "), {from: args[0], to: args[1]}).then(res=>{
      let embed = new Discord.MessageEmbed()
      .setColor('#F2F2F2')
      .setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
      .addField(`Od: \`${args[0]}\``.substr(0, 256), args.slice(2).join(" ").substr(0, 1024))
      .addField("\u200B", "\u200B")
      .addField(`Do: \`${args[1]}\``.substr(0, 256), res.text.substr(0, 1024))
      message.channel.send(embed)
      }).catch(err => {
        let embed = new Discord.MessageEmbed()
        .setColor('#F2F2F2')
        .setTitle("Error")
        .setFooter("Srbende Music")
        .setDescription(String("```"+err.stack+"```").substr(0, 2000))
        message.channel.send(embed)
          console.log(err);
      });
    }
  };
