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


  let beg = await db.fetch(`work_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
 message.inlineReply(`Već si skoro radio. Radi opet za: **${time.minutes}m** **${time.seconds}s**`, { allowedMentions: { repliedUser: false } })
  } else {
       let work = [`Dobio si kurčinu, ali te mxl0s voli i dobio si **${rand}** coinsa!`,`Radio si u McDonaldsu, i dobio **${rand}** coinsa`,`Nahranio si Big Floppu i Floppa ti je dao **${rand}** coinsa`,`Dobio si otkaz, ali na putu do kuće si prebio beskućnika i ukrao mi **${rand}** coinsa! #likeaboss`,`Crnčio si na baušteli i zaradio čitavih **${rand}** coinsa za svoj rad.`,`Radio si u Pegazu kao kasirka i zaradio si **${rand}** coinsa.`]
      let job = (work[Math.floor(Math.random() * work.length)]) 
    
      let embed = new Discord.MessageEmbed()
      .setAuthor('Tvoj Posao', message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`${job}`)
      .setColor("#3371FF")
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