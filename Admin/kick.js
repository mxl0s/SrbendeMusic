const Discord = require("discord.js");
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

module.exports = { // Update To Your Handler
	name: `kick`,
	description: 'Kickuje osobu iz servera.', // Optional
    aliases: ["kick"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Kickuje osobu iz servera.`,
    async execute(message, args) {
        if (!message.member.hasPermission(["KICK_MEMBERS"])) return message.reply(`**${message.author.username}**, nemaš permisiju za kickovanje!`)

        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        console.log(banMember)
        
       if (!banMember) return message.reply(`**${message.author.username}**, Taguj osobu za kick!`)
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "no reason"
    
        if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.reply("Nemam permisiju da kickujem!")
    
         const Sembed = new MessageEmbed()
            .setColor('#3371FF')
            .setDescription(`> Kikovan/na si iz ${message.guild.name} zbog ${reason}.`)
        let i = 0;
        banMember.send(Sembed)
        banMember.kick(banMember, reason).catch(err => {
            console.log(err.toString().red)
            i++
           }).then(
               ()=>{
                const embed = new MessageEmbed()
                .setColor('#3371FF')
                .setDescription(`✅ **${banMember.user.tag}** je usprešno kikovan!`)
                if(i==1)
                return message.reply("Nemaš premisiju za kickovanje.")
                message.reply(embed).then(msg => {
                })
               }
           )
        
    
        
    }
}
