const Discord = require("discord.js");
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);

module.exports = { // Update To Your Handler
	name: `ban`,
	description: 'Banuje osobu iz servera.', // Optional
    aliases: ["ban"], // You Can Keep Any Name
    cooldown: 2,
	edesc: `Banuje osobu iz servera.`,
    async execute(message, args) {
        if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply(`Nemaš permisiju za banovanje!`)

        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        console.log(banMember)
        
        if (!banMember) return message.reply(`**${message.author.username}**, Taguj osobu za ban!`)
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "no reason"
    
        if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("Nemam permisiju da banujem!")
    
         const Sembed = new MessageEmbed()
            .setColor('#3371FF')
            .setDescription(`> Banovan/na si iz ${message.guild.name} zbog ${reason}. Banovan/na si zauvek.`)
        let i = 0;
        banMember.send(Sembed)
        banMember.ban(banMember, reason).catch(err => {
            console.log(err.toString().red)
            i++
           }).then(
               ()=>{
                const embed = new MessageEmbed()
                .setColor('#3371FF')
                .setDescription(`✅ **${banMember.user.tag}** je uspešno banovan!`)
                if(i==1)
                return message.reply("Nedostaju permisije za ban!")
                message.reply(embed).then(msg => {
                })
               }
           )
        
    
        
    }
}
