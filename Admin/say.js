const Discord = require("discord.js");

module.exports = { // Update To Your Handler
	name: `say`,
    aliases: ["say","botsay"], // You Can Keep Any Name
    cooldown: 2,

    async execute(message, args) {
        if (!message.member.hasPermission(["VIEW_AUDIT_LOG"])) return message.reply(`**${message.author.username}**, nemaš premisiju za ovo!`)
        if(!args) return message.reply("Dodaj šta da kažem");
        message.channel.send(args.join(" ")).then(msg =>{
            try{
                if(msg.channel.type === "news")
                msg.crosspost()
           } catch (error) {
               console.log(error.stack.toString().red)
           }  
        })
    }
}
