const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")
require(".././ExtendedMessage")

module.exports = {
  name: 'work',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {


  let user = message.author;

  let timeout = 1800000;
  let rand = Math.round(Math.random() * 3000 + 690);

  const bruh1 = new Discord.MessageEmbed()
.setAuthor('Srbende Music | 👷 Work', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
.setThumbnail("https://cdn.discordapp.com/app-icons/807706628278583346/c7df1f389b00c9c0f58ebbf162956e2b.png")
.setDescription(`Već si skoro radio. Radi opet za: **${time.minutes}m** **${time.seconds}s**`)
.setColor("#3371FF")
.setTimestamp();
  let beg = await db.fetch(`work_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
 message.çhannel.send(bruh1)
  } else {
       let work = [`Nisi dobio ništa, ali te mxl0s voli i dobio si **${rand}** coinsa!`,`Radio si u McDonaldsu, i dobio **${rand}** coinsa`,`Nahranio si Big Floppu i Floppa ti je dao **${rand}** coinsa`,`Dobio si otkaz, ali na putu do kuće si prebio beskućnika i ukrao mi **${rand}** coinsa! #likeaboss`,`Crnčio si na baušteli i zaradio čitavih **${rand}** coinsa za svoj rad.`,`Radio si u Pegazu kao kasirka i zaradio si **${rand}** coinsa.`]
      let job = (work[Math.floor(Math.random() * work.length)]) 
    
      let embed = new Discord.MessageEmbed()
      .setAuthor('Tvoj Posao', message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`${job}`)
      .setColor("#3371FF")
      .setTimestamp()
      .setFooter(`${message.author.tag}`)
                message.inlineReply({
  embed: embed,
  allowedMentions: { repliedUser: false }
});
  db.add(`money_${user.id}`, rand)
  db.set(`work_${user.id}`, Date.now())


  }
  }
}
