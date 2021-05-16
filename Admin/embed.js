const Discord = require("discord.js");
module.exports = { // Update To Your Handler
	name: `embed`,
    aliases: ["embed"],


async execute(message, args) {
		const prefix = '!'
        if (!message.member.hasPermission(["VIEW_AUDIT_LOG"])) return message.reply(`**${message.author.username}**, nemaš permisije!`)
        let rest_of_the_string = message.content.slice(prefix.length + 'embed'.length); //removes the first part
        if(!rest_of_the_string.includes("++")) return message.reply(`Komanda: \`${prefix}embed [NASLOV] ++ [DESKRIPCIJA]\``)
        let array_of_arguments = rest_of_the_string.split('++'); //[title, description, link, image]
    
        let embed = new Discord.MessageEmbed()
        embed.setTitle(array_of_arguments[0])
        embed.setDescription(array_of_arguments.slice(1).join(" "))
        embed.setColor("#F2F2F2")
        embed.setThumbnail(message.guild.iconURL())
        embed.setFooter(message.guild.name, message.guild.iconURL())  
         
        message.channel.send(embed).then(msg =>{
            try{
                if(msg.channel.type === "news")
                msg.crosspost()
           } catch (error) {
               console.error(error)
           }  
        })
    }
}
