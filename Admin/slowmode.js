const Discord = require("discord.js");
module.exports = { // Update To Your Handler
	name: `slowmode`,
    aliases: ["slow", "slowmode"],

async execute(message, args) {


     if (!message.member.hasPermission(["VIEW_AUDIT_LOG"])) return message.reply(`**${message.author.username}**, nemaš permisiju za ovo!`)

        if (!isNaN(args[0]) || parseInt(args[0]) < 0) {
              let embed = new Discord.MessageEmbed()
            .setColor("#F2F2F2")
                .setDescription(`✅ Slowmode stavljen na ${args[0]}!`)
                
            message.reply(embed)
            message.channel.setRateLimitPerUser(args[0])
        } else {
            let embed2 = new Discord.MessageEmbed()
            .setColor("#F2F2F2")
                .setDescription(`Uneti broj!`)
                
            message.reply(embed2)
        }

    }
}
