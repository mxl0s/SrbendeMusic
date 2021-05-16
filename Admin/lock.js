const Discord = require("discord.js");
module.exports = { 
	name: ``,
	description: 'lock komands.', 


    async execute(message, args) {

        if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
return message.channel.send("**Nemaš permisije **");
message.channel.createOverwrite(message.guild.id, {SEND_MESSAGES: false}).then(() => {
let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL)
.setThumbnail(message.guild.iconURL)
.setDescription("**:lock: Zaključao kanal: <#"+message.channel+"> **")
.addField('By',`${message.author.tag}`)
.setColor("RANDOM")
return message.channel.send(embed)})}     
}; 
