const Discord = require("discord.js");
module.exports = { // Update To Your Handler
	name: `unban`,
    aliases: ["unban", "unb"],
    cooldown: 2,

async execute(message, args) {

        if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply(`**${message.author.username}**, nemaš permisiju!`)
        if (isNaN(args[0])) return message.channel.send("Unesi ID ili taguj membera.")
        let bannedMember = await client.users.fetch(args[0])
    
        if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("Nemam permisiju!")

       
        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Nije dat razlog!"

        try {
            message.guild.members.unban(bannedMember, reason).catch(err => console.log(err.toString().red))
            let Sembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
            .setDescription(`> Unbanovan si iz **${message.guild.name}** razlog: ${reason}.`)
            
            bannedMember.send(Sembed).catch(err => console.log(err.toString().red))
        let embed = new Discord.MessageEmbed()
            .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
            .setDescription(`✅ **${bannedMember.tag}** uspešno unbanovan`)
            
        message.reply(embed).catch(err => console.log(err.red))
        } catch (e) {
            message.channel.send("Ne mogu unbanovati membera, pokušaj opet kasnije!").catch(err => console.log(err.toString().red))
            console.log(e.stack.toString().red)
        }
        
    }
}
