  const Discord = require('discord.js')
require(".././ExtendedMessage")
const db = require('quick.db')
module.exports = {
  name: 'buy',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

	async execute(message, args) {



    let user = message.author;

    let author = db.fetch(`money_${user.id}`)

let mcembed = new Discord.MessageEmbed()
.setAuthor("SM | Minecraft ⛏️", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Potrebno je 50 coinsa za MC.')
.setColor('#3371FF')
.setTimestamp();


let villaembed = new Discord.MessageEmbed()
.setAuthor("SM | Villa 🏘️", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Potrebno ti je 20000 coinsa za villu!')
.setColor('#3371FF')
.setTimestamp();


   let mackaembed = new Discord.MessageEmbed()
.setAuthor("SM | Mačka 😺", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Potrebno ti je 1000 coinsa za mačku')
.setColor('#3371FF')
.setTimestamp();


    let Embedkola = new Discord.MessageEmbed()
	.setAuthor("SM | Kola 🚗", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
    .setColor("#3371FF")
    .setDescription('Potrebno je 5000 za kola');

    if (args[0] == 'kola') {
        if (author < 5000) return message.channel.send(Embedkola)

       await db.fetch(`car_${user.id}`);
       await db.set(`car_${user.id}`, true)

let kolaembed2 = new Discord.MessageEmbed()
	    .setAuthor("SM | Kola 🚗", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
        .setDescription('Kupio si kola za 5000!')
        .setColor('#3371FF')

       await db.subtract(`money_${user.id}`, 5000)
message.channel.send(kolaembed2)
    } else if (args[0] == 'cat' || args[0] == 'fresh cat' || args[0] == 'big floppa') {
        if (author < 1000) return message.channel.send(mackaembed)
        
       await db.fetch(`cat_${user.id}`);
       await db.set(`cat_${user.id}`, true)

   let mackaembed2 = new Discord.MessageEmbed()
.setAuthor("SM | Mačka 😺", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Kupio si mačku za 1000 coinsa')
.setColor("#3371FF")
.setTimestamp();
		await db.subtract(`money_${user.id}`, 1000)
        message.channel.send(mackaembed2);
    } else if (args[0] == 'kuca' || args[0] == 'villa' || args[0] == 'Mansion') {
        if (author < 20000) return message.channel.send(villaembed)
        
        await db.fetch(`house_${user.id}`);
        await db.set(`house_${user.id}`, true)

      let villa2embed = new Discord.MessageEmebd()
      .setAuthor("SM | Villa 🏘️", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Kupio si villu za 2000!')
.setColor('#3371FF')
.setTimestamp();

      await  db.subtract(`money_${user.id}`, 20000)
        message.channel.send(villa2embed)
       } else if (args[0] == 'minecraft' || args[0] == 'mc' || args[0] == 'game') {
        if (author < 50) return message.channel.send(mcembed)
        
       await  db.fetch(`mc_${user.id}`);
        await db.set(`mc_${user.id}`, true)

        let mcembed2 = new Discord.MessageEmbed()
.setAuthor("SM | Minecraft ⛏️", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Kupio si MC za 50 coinsa!')
.setColor('#3371FF')
.setTimestamp();
      
        await db.subtract(`money_${user.id}`, 50)
        message.channel.send(mcembed2)
        } else {
let nothing = new Discord.Message.Embed()
.setAuthor("SM | Erorr ❌", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" )
.setDescription('Unesi stvar da kupiš')
.setTimestamp();
    }
       

}
}
