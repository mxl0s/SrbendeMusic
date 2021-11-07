const Canvas = require('canvas');

const Discord = require(`discord.js`);
const fastwords = ["Hello","Test","WoW","mxl0s","Amerika","Srbende","Music","Discord","Fortnite","car","bat","volleyball","bridge","educate","enchanting","live","ex","youth","trial","contrary","mole","horseshoe","pipe","excitement","mouse","nail","air","excitement","meaning","gradual","realism","shadow","immune","teenager","border","contempt","treasurer","lawyer",
"seed","arrangement","force","conductor","float","stable","recycle","social","coalition","dangerous","inhibition","install","pioneer","finished","abortion","forge","hallway","cute","fossil","crackpot","expertise","salesperson","name","enchanting","live","love","everything","married","least","children","beautiful","wink","remember","playing","typing","fun","crying",
"husband","something","mother","years","Year","Yeah","yes","no","bogus","actually","brother","sister","lmao","okay","welcome","chair","market","wait","brush","gold","thick","enemy","flexible","amputate","price","sulphur"];
const { Client, Collection, MessageEmbed } = require("discord.js");
const path = require("path");
module.exports = {
	name: "fasttype",
	aliases: ["ft"],
  
	async execute(message, args) {
					let fastembed = new Discord.MessageEmbed()
					 
					.setColor('#F2F2F2')
					.setTimestamp()
					.setDescription(`Za \`3 sekunde\` će se tvoja reč pojaviti, budi spreman!!`)
					const a = await message.channel.send(fastembed);
					await delay(3000);
					let x = 4000;

					let msg = fastwords[Math.floor(Math.random() * fastwords.length)];
												const channel = message.channel;
												if (!channel) return;
												const canvas = Canvas.createCanvas(700, 250);
												const ctx = canvas.getContext('2d');
												const background = await Canvas.loadImage('./images/fast.png');
												ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
												ctx.strokeStyle = '#C0C0C0';
												ctx.strokeRect(0, 0, canvas.width, canvas.height);
												ctx.font = '56px Impact';
												ctx.fillStyle = '#ffffff';
												ctx.fillText(msg, canvas.width / 2.35, canvas.height / 1.8);
												ctx.beginPath();
												ctx.arc(125, 125, 100, 0, Math.PI * 2, true);//position of img
												ctx.closePath();
												ctx.clip();
												const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
												ctx.drawImage(avatar, 25, 25, 200, 200);
												const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'fast-image.png');
												let fastembed2 = new Discord.MessageEmbed()
												 
												.setColor('#F2F2F2')
												.setTimestamp()
												.setImage("attachment://fast-image.png")
												.attachFiles(attachment)
												.addField("Imaš",`\`${x/1000} Sec\``)
												a.delete();
												const b = await message.reply(fastembed2);
					let i=0;
					 var date = new Date();
					await b.channel.awaitMessages(m => m.author.id == message.author.id,
						{max: 1, time: x, errors: ['time'],} ).then(async collected => {
								
								x = collected.first().content;	
						}).catch(() => {return i++;});
							if(i===1) return message.reply("Vreme ti je isteklo!");
							var date2 = new Date();
						return x===msg ? message.reply(`**Wow, pun pogodak!:** \n\nTrebalo ti je \`${(date2-date)/1000} sekundi\``) : message.reply("**Beep-boop, greška!**"); 
    
    }
}
function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }