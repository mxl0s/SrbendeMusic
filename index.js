const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const { TOKEN, PREFIX} = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const db = require("quick.db")
require("./ExtendedMessage");
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.setMaxListeners(0);
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH
client.on(`ready`, () => {	
client.user.setActivity('!help | made by mxl0s', { type: 'PLAYING' });

client.on('guildMemberAdd', async member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'bottest');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
channel.send(`**${time}**, 👋${member.user} je ušao na server.`);
});
client.on('guildMemberRemove', async member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'bottest');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
channel.send(`**${time}**, 🚪${member.user} je izašao sa servera.`);
});
client.on('message', message => {
		const prefix = '!'
        if (message.content.startsWith(`!gay`)) {
        if(!message.mentions.members.first()) return message.channel.send(`Unesi nekoga da izračunam gay!`).then(message.react('❌'));
		let args = message.content.slice(prefix.length).split(/ +/)
		let person = message.mentions.members.first(message, args[0]);
		if(person.id === message.author.id) return message.channel.send("Ne mozes samog sebe!");

        const love = Math.round(Math.random() * 100);
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "🌈".repeat(loveIndex) + "⠀".repeat(10 - loveIndex);
        
        let loveEmbed = new Discord.MessageEmbed()
	    .setColor('#3371FF')
        .setTitle("SM | Pride 🌈")
        .setDescription(`${person} je ${love}% gej \n\n${loveLevel}`)
        message.channel.send(loveEmbed)
    }
})

client.on('message', message => {
		const prefix = '!'
        if (message.content.startsWith(`!love`)) {
        if(!message.mentions.members.first()) return message.channel.send(`Unesi nekoga da izračunam ljubav!`).then(message.react('❌'));
		let args = message.content.slice(prefix.length).split(/ +/)
		let person = message.mentions.members.first(message, args[0]);
		if(person.id === message.author.id) return message.channel.send("Ne mozes samog sebe!");

        const love = Math.round(Math.random() * 100);
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
        
        let loveEmbed = new Discord.MessageEmbed()
	    .setColor('#3371FF')
        .setTitle("Srbende Music | Ljubav 💖")
        .setDescription(`${message.author} voli ${person} ${love}% \n\n${loveLevel}`)
        message.channel.send(loveEmbed)
    }
})

client.on('message', async (message) => {
        if(message.author.bot) return;
        const args = message.content.trim().split(/ +/g);
        if((args[0].toLowerCase() == 'ja sam' || args[0].toLowerCase() == 'ja sam') && (args[1]) && !client.disabledMembers.has(message.author.id)){
                message.channel.send(`Ćao ${args.slice(1).join(' ')}, ja sam Srbende Music`);
        }
})
client.on('message', message => {
    if (message.content.startsWith(`!userinfo`)) {

        const guild = message.guild;
        const usr = message.mentions.users.first() || message.author
        const member = guild.members.cache.get(usr.id)

        const membero = guild.members.cache.get(usr.id)

        const usero = membero.user;

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${usr.tag}`, `${usr.displayAvatarURL({dynamic: true})}`)
            .setThumbnail(`${usr.displayAvatarURL({dynamic: true})}`)
            .setDescription(`Informacije o ${usr}`)
            .addField(`**ID:**`, `${usr.id}`)
            .addField(`**Avatar:**`, `${usr.displayAvatarURL({dynamic: true})}`)
            .addField(`**Nickname:**`, `${membero.nickname || `**Ne postoji nickname!**`}`)
            .addField(`**Datum ulaska u server:**`, `${membero.joinedAt}`)
            .addField(`**Datum kreacije naloga:**`, `${usr.createdAt}`)
            .addField(`**Status:**`, `**${usr.presence.status}**`)
            .addFields({
                name: 'Role-ovi',
                value: member.roles.cache.size - 1,
            })
            .setColor('BLUE')
   		    .setImage("https://cdn.discordapp.com/attachments/307586447836184596/806748284550512690/standard.gif")
        message.channel.send(embed);
    }
})
client.on("message", async message => {
  if (message.content.toLowerCase() === "!crime") {

       
      let user = message.author;
    let author = await db.fetch(`money_${user.id}`)
  if (author < 250) {
          return message.channel.send('Treba ti bar 250 coinsa da budeš kriminalac')
      }



  let timeout = 60000;
  let rand = Math.round(Math.random() * 700 + 200);


  let beg = await db.fetch(`crime_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
 let embedPop = new Discord.MessageEmbed()
 .setTitle("woaaaaaaaaaaa, drzi floppu!")
 .setDescription(`Već si bio cigan, pokušaj opet za \n **${time.seconds}**s`)
 .setColor("RED")
     message.inlineReply({
  embed: embedPop,
  allowedMentions: { repliedUser: false }
});
  } else {
    
       let crimes = ["Prebio si pola staračkog doma i dobio si:","Ukrao si kola i prodao si ih za:","Otišao si na deponiju i reciklirao kola za:","Nisi uradio ništa, ali mxl0s ti poklanja:","Genijalan si, uspeo si da zgrabiš nečiju torbicu i u njoj je bilo:", "Opljačkao si pegaz, i ukrao iz kase:", `Resellao si Jordanke i flipao ih na kupujemprodajem za: `]
      let randomized = (crimes[Math.floor(Math.random() * crimes.length)])
    let embedCrime = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`${randomized} **${rand}** Coinsa`)
    .setColor("GREEN")
    .setFooter('Good!')
   
          message.inlineReply({
  embed: embedCrime,
  allowedMentions: { repliedUser: false }
});
  db.add(`money_${user.id}`, rand)
  db.set(`crime_${user.id}`, Date.now())

     }
  }
  

  
       
     
if (message.content.toLowerCase() === "!use cat") {
   let rand = Math.round(Math.random() * 5 + 1);
let timeout = 86400000;
let amount = 1000;
  let user = message.author;
let pop = await db.fetch(`cat_${user.id}`)
  if (pop !== null && timeout - (Date.now() - pop) > 0) {
    let time = ms(timeout - (Date.now() - pop));
  
 message.inlineReply(`Ne bud pohlep. Floppa će te Blagosloviti samo jednom na dan! Vrati se za **${time.hours}**h **${time.minutes}**m **${time.seconds}**s`, { allowedMentions: { repliedUser: false } })
  } else {

let embed = new Discord.MessageEmbed()
.setTitle('Uspeh')
.setDescription(`Pomazio si Floppu, I Blagoslovio te je sa  **1000** Coinsa`)
.setColor("GREEN")
.setFooter(`Cat Owner: ${message.author.tag}`)
  
  let pop = await db.fetch(`cat_${user.id}`)
  if(pop === null) return message.inlineReply("Moraš kupiti floppu!")
  if(pop > 0) message.channel.send(embed)
   db.add(`money_${user.id}`, amount)
   db.set(`cat_${user.id}`, Date.now())
  }
}
 if (message.content.toLowerCase() === "!use villa") {
   let timeout = 604800000;
  let rand = Math.round(Math.random() * 30000 + 2000);
  let user = message.author;
let house = await db.fetch(`house_${user.id}`)
  if (house !== null && timeout - (Date.now() - house) > 0) {
    let time = ms(timeout - (Date.now() - house));
  
 message.inlineReply(`Možeš pokupiti rent samo jednom nedeljno!\n Pokušaj opet za **${time.days}**d **${time.hours}**h **${time.minutes}**m **${time.seconds}**s`, { allowedMentions: { repliedUser: false } })
  } else {
let embed = new Discord.MessageEmbed()
.setTitle('Uspešna kupovina')
.setDescription(`Dobio stanarinu od ${rand} Coinsa`)
.setColor("GREEN")
.setFooter(`Mansion Owner: ${message.author.tag}`)
  let house = await db.fetch(`house_${user.id}`)
  if(house === null) return message.inlineReply("Moraš prvo kupiti villu!")
  if(house > 0) message.inlineReply({
  embed: embed,
  allowedMentions: { repliedUser: false }
});
   db.add(`money_${user.id}`, rand)
   db.set(`house_${user.id}`, Date.now())


} 
}

if (message.content.toLowerCase() === "!use car") {
   let rand = Math.round(Math.random() * 9000 + 1000);
  let user = message.author;
   let timeout = 43200000;
 


  let happi = await db.fetch(`happi_${user.id}`);
  if (happi === null) happi = 0;

  if (happi !== null && timeout - (Date.now() - happi) > 0) {
    let time = ms(timeout - (Date.now() - happi));

let embed0 = new Discord.MessageEmbed()
.setTitle("Uspori...")
.setDescription(`Ne možeš voziti ceo dan! Možeš tek na vožnju za \n**${time.hours}**h **${time.minutes}**m **${time.seconds}**s`)
.setColor("RED")
message.inlineReply({
  embed: embed0,
  allowedMentions: { repliedUser: false }
});
  } else {
let embed1 = new Discord.MessageEmbed()
.setTitle('Uspeh')
.setDescription(`Vozio si se sa Soggom, i dobio si ${rand} coinsa`)
.setColor("GREEN")
.setFooter(`Vlasnik auta: ${message.author.tag}`)
  let car = await db.fetch(`car_${user.id}`)
  if(car === null) return message.inlineReply("Moraš kupiti **kola** iz prodavnice!")
  if(car > 0) message.inlineReply({
  embed: embed1,
  allowedMentions: { repliedUser: false }
});
   db.add(`money_${user.id}`, rand)
   db.set(`happi_${user.id}`, Date.now())
}
}
})
client.on('message', message => {
    if(message.content.startsWith("!server")){ 
        if (message.author.bot || !message.guild) return message.reply("Komanda je samo za server!")
        var EMBED = new Discord.MessageEmbed()
        .setTitle("Server info")
        .addField("Ime Servera 🎗️", `${message.guild.name}`)
        .addField("ID Servera 🆔", `${message.guild.id}`)
        .addField("Vlasnik 👑", `${message.guild.owner.user.tag}`)
        .addField("Memberi 👥", `${message.guild.memberCount}`)
        .addField("Role-ovi 🔐", `${message.guild.roles.cache.size}`)
    .addField("Kanali 💬", `  ${message.guild.channels.cache.filter(r => r.type === "text").size} Text
        ${message.guild.channels.cache.filter(r => r.type === "voice").size} Voice`)
        .addField("Region 🌍", `${message.guild.region}`)  
    .addField("Datum kreacije 📆 ", `${message.guild.createdAt.toLocaleString()}`)
    .addField("Boostovi ✨", `${message.guild.premiumSubscriptionCount}`)
    .setColor("BLUE")
    .setImage("https://cdn.discordapp.com/attachments/307586447836184596/806748284550512690/standard.gif")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        message.channel.send(EMBED)
    }
})
  
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
    }); 
//DO NOT TOUCH
client.on(`warn`, (info) => console.log(info));
//DO NOT TOUCH
client.on(`error`, console.error);
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Muzika`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Muzika`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `Fun`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Fun`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `Emotions`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Emotions`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `Members`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Members`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `Admin`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Admin`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `Help`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Help`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `Economy`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Economy`, `${file}`));
  client.commands.set(command.name, command);
}commandFiles = readdirSync(join(__dirname, `FiveM`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `FiveM`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
const { inspect } = require('util');
const prefix = '!'
    if (message.content.startsWith(prefix + "eval")) { //if cmd == eval
        const evalargs = message.content.split(' ');
        evalargs.shift();
        //Allowed user:
       if (message.author.id !== '711272428499632169') return;
        let evaled;
        try {
            if(evalargs.join(' ').includes("token")) return console.log("ERROR NO TOKEN GRABBING ;)");
            evaled = await eval(evalargs.join(' '));
            if(evaled.toString().includes(client.token)) return console.log("ERROR NO TOKEN GRABBING ;)"); //just to be 100% sure
            return message.channel.send("\`\`\`" + inspect(evaled) + "\`\`\`");
        }
        catch (error) {
            console.error(error);
            return message.reply('Eval error.');
        }
    }
  if (message.author.bot) return;
  
if(message.content === `${PREFIX}ping`) {
  let embed = new Discord.MessageEmbed()
      .setTitle("Discord server Latency")
      .setFooter( client.user.username +` Kucaj: ${PREFIX}help za više komandi!`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
.setDescription("🏓 " + `${client.ws.ping}` + "ms")
      .setColor("#3371FF")
	  .setImage("https://cdn.discordapp.com/attachments/307586447836184596/806748284550512690/standard.gif")
message.channel.send(embed);
}


  if (message.content.toLowerCase() === `${PREFIX}uptime`) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
   return message.channel.send(`Vreme rada bota\n\`\`\`fix\n${days}d ${hours}h ${minutes}m ${seconds}s\n\`\`\``);
}

  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("#00ebaa").setAuthor(`${message.author.username}, Moj prefix je ${PREFIX}, da započneš; kucaj ${PREFIX}help`, message.author.displayAvatarURL({dynamic:true})));
  } 

//command Handler DO NOT TOUCH
//select channels that the bot operates in
 if (message.channel.id !== '739857834703061022' && message.channel.id !== '803382813730013184' && message.channel.id !== '757729010342953020' && message.channel.id !== '818989306130464888' && message.channel.id !== '801961074172755980' && message.channel.id !== '735221795115892828' && message.channel.id !== '835189683435864074' && message.channel.id !== '836296126297800765' && message.channel.id !== '836304299599986748' && message.channel.id !== '822561532037562408') return; 
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("#3371FF")
      .setTitle(`❌ Sačekaj \`${timeLeft.toFixed(1)} sekundi\` pre nego što koristiš komandu \`${PREFIX}${command.name}\`!`)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {

 }
});
//mxl0s bot
