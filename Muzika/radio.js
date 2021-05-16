const { canModifyQueue } = require("../util/MilratoUtil");
const { play } = require("../include/play");
const { attentionembed } = require("../util/attentionembed"); 
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { PREFIX } = require(`../config.json`);
//stanice
const Radiostations = [
  "mxl0s-radio http://stream.zeno.fm/t5eynszars8uv.mp3",
  "Standard-Radio https://streams.ilovemusic.de/iloveradio14.mp3",
  "Base-Radio.de https://baseradiode.stream.laut.fm/baseradiode",
  "Chill-Radio https://streams.ilovemusic.de/iloveradio17.mp3",
  "Nightcore-Radio http://stream.zeno.fm/4uw406g2rs8uv.mp3",
  "Dance-Radio https://streams.ilovemusic.de/iloveradio2.mp3",
  "Deutsch-Rap-Radio https://streams.ilovemusic.de/iloveradio6.mp3",
  "Greatest-hits-Radio https://streams.ilovemusic.de/iloveradio16.mp3",
  "Hip-hop-Radio https://streams.ilovemusic.de/iloveradio3.mp3",
  "Party-Radio https://streams.ilovemusic.de/iloveradio14.mp3",
  "Us-Rap-Radio https://streams.ilovemusic.de/iloveradio13.mp3",
  "Greatest-hits-Radio https://stream-mz.planetradio.co.uk/net2national.mp3", 
  "Absolut-Radio http://icy-e-bab-02-gos.sharp-stream.com/absoluteradio.mp3",
  "Absolut-70s-Radio http://ais.absoluteradio.co.uk/absolute70s.mp3",
  "Absolut-80s-Radio http://ais.absoluteradio.co.uk/absolute80s.mp3",
  "Absolut-90s-Radio http://ais.absoluteradio.co.uk/absolute90s.mp3",
  "Absolut-2000s-Radio http://ais.absoluteradio.co.uk/absolute00s.mp3",
  "Absolut-Classic-Rock http://icy-e-bab-04-cr.sharp-stream.com/absoluteclassicrock.mp3",

  "Naxi.fm https://naxi128.streaming.rs:9152/;*.mp3",
  "Play-Radio https://stream.playradio.rs:8443/play.mp3",
  "AS-FM https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream",
  "Radio-S-Rap https://stream.radios.rs:9004/;*.mp3",
  "Radio-AS http://185.102.239.216:8000/;*.mp3",
  "Boem-Naxi https://naxidigital-boem128ssl.streaming.rs:8162/;*.mp3",
  "Ok-Radio http://live.okradio.net:8020/;*.mp3",
  "Radio-S3-Rap&Trap https://stream.radios.rs:9030/;*.mp3",

  "radio90-cieszyn http://streams2.radio90.pl:8000/radio90_128kbps_stereo.mp3",
  "Fama-Radio http://stream2.nadaje.com:8076/,stream.mp3"
]

module.exports = {
  name: "radio",
  description: "Pusti radio",
  cooldown: 3,
  edesc: `Kucaj ovo da ukljucis radio!\nUsage: ${PREFIX}radio <1-25>`,
 async execute(message, args, client) {
  //define the No args Embed, lmao
  let resultsEmbed = new Discord.MessageEmbed()
      .setTitle(`**✅ Dostupne radio stanice**`)//
      .addFields(
        { name: `*** 📻  Običan Radio***`, value: `**1:  ** [\`${Radiostations[1-1].split(" ")[0]}\`](${Radiostations[1-1].split(" ")[1]})
        **2:  ** [\`${Radiostations[2-1].split(" ")[0]}\`](${Radiostations[2-1].split(" ")[1]})
        **3:  ** [\`${Radiostations[3-1].split(" ")[0]}\`](${Radiostations[3-1].split(" ")[1]})
        **4:  ** [\`${Radiostations[4-1].split(" ")[0]}\`](${Radiostations[4-1].split(" ")[1]})
        **5:  ** [\`${Radiostations[5-1].split(" ")[0]}\`](${Radiostations[5-1].split(" ")[1]})
        ` , inline: true}, { name: `*** 📻  Običan Radio***`, value: `**6:  ** [\`${Radiostations[6-1].split(" ")[0]}\`](${Radiostations[6-1].split(" ")[1]})
        **7:  ** [\`${Radiostations[7-1].split(" ")[0]}\`](${Radiostations[7-1].split(" ")[1]})
        **8:  ** [\`${Radiostations[8-1].split(" ")[0]}\`](${Radiostations[8-1].split(" ")[1]})
        **9:  ** [\`${Radiostations[9-1].split(" ")[0]}\`](${Radiostations[9-1].split(" ")[1]})
        **10: ** [\`${Radiostations[10-1].split(" ")[0]}\`](${Radiostations[10-1].split(" ")[1]})
        **11: ** [\`${Radiostations[11-1].split(" ")[0]}\`](${Radiostations[11-1].split(" ")[1]})
        ` , inline: true},
        { name: `\u200b`, value: `\u200b` , inline: true},

        { name: `***🇬🇧 British RADIO:***`, value: `**12: ** [\`${Radiostations[12-1].split(" ")[0]}\`](${Radiostations[12-1].split(" ")[1]})
**13: ** [\`${Radiostations[13-1].split(" ")[0]}\`](${Radiostations[13-1].split(" ")[1]})
` , inline: true},
{ name: `***🇬🇧 British RADIO:***`, value: `
**14: ** [\`${Radiostations[14-1].split(" ")[0]}\`](${Radiostations[14-1].split(" ")[1]})
**15: ** [\`${Radiostations[15-1].split(" ")[0]}\`](${Radiostations[15-1].split(" ")[1]})
` , inline: true},
{ name: `***🇬🇧 British RADIO:***`, value: `
**16: ** [\`${Radiostations[16-1].split(" ")[0]}\`](${Radiostations[16-1].split(" ")[1]})
**17: ** [\`${Radiostations[17-1].split(" ")[0]}\`](${Radiostations[17-1].split(" ")[1]})
` , inline: true},

        { name: `***🇷🇸 Srpski RADIO:***`, value: `**18: ** [\`${Radiostations[18-1].split(" ")[0]}\`](${Radiostations[18-1].split(" ")[1]})
**19: ** [\`${Radiostations[19-1].split(" ")[0]}\`](${Radiostations[19-1].split(" ")[1]})
**20: ** [\`${Radiostations[20-1].split(" ")[0]}\`](${Radiostations[20-1].split(" ")[1]})
**21: ** [\`${Radiostations[21-1].split(" ")[0]}\`](${Radiostations[21-1].split(" ")[1]})
**22: ** [\`${Radiostations[22-1].split(" ")[0]}\`](${Radiostations[22-1].split(" ")[1]})
**23: ** [\`${Radiostations[23-1].split(" ")[0]}\`](${Radiostations[23-1].split(" ")[1]})
**24: ** [\`${Radiostations[24-1].split(" ")[0]}\`](${Radiostations[24-1].split(" ")[1]})
**25: ** [\`${Radiostations[25-1].split(" ")[0]}\`](${Radiostations[25-1].split(" ")[1]})
**26: ** [\`${Radiostations[26-1].split(" ")[0]}\`](${Radiostations[26-1].split(" ")[1]})
`, inline: true },
      )		
      .setColor("#3371FF")
      .setFooter(`Kucaj: ${PREFIX}radio <1-26>`,  client.user.displayAvatarURL())
      .setTimestamp();
        //if not guild send this
  if(!message.guild)      
      return message.author.send(resultsEmbed);      
    //if no args
    if (args[0] == null) {
      message.channel.send(    new MessageEmbed().setColor("#3371FF")
      .setDescription(`**👍 ${message.author} Proveri \`DM\` za listu radio stanica!**`)
       );
       message.author.send(new MessageEmbed().setColor("#3371FF")
       .setDescription(`**👍 Poslato iz <#${message.channel.id}>**`))
      return message.author.send(resultsEmbed);
    }
  const { channel } = message.member.voice;
  //get the serverQueue
  const serverQueue = message.client.queue.get(message.guild.id);
  //if not a valid channel
  if (!channel) return attentionembed(message, "Uđi u voice kanal prvo");  
  //react with emoji
    message.react("✅");
    //If not in the same channel return error
    if (serverQueue && channel !== message.guild.me.voice.channel)
    return attentionembed(message, `Moramo biti u istom kanalu`);
    //check permissions
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message,"Trebaju mi permisije za tvoj kanal!");
    if (!permissions.has("SPEAK"))
      return attentionembed(message,"Nemam permisiju da pričam u ovom kanalu");
    //If not a number return
    if(isNaN(args[0])) {
      channel.leave();
      return message.reply(
      new MessageEmbed()
      .setColor("#3371FF")
      .setTitle( `Nije validna stanica, izaberi broj izmedju \`1\` and \`${Radiostations.length}\``)
     );}

let i;

//get which radio station
for(i=1; i <= 1 + Radiostations.length; i++){

  if(Number(args[0])===Number(i)) {
    break;
  } 
}
//if number to big
if(Number(i) === 27) {
  channel.leave();
  return message.reply(  new MessageEmbed()
.setColor("#3371FF")
.setTitle( `Nije validna stanica, izaberi broj izmedju \`1\` i \`${Radiostations.length}\``));}
//define the Radio Args like title and url
const args2 = Radiostations[i-1].split(` `);
//song infos
const song = {
  title: args2[0],
  url: args2[1],
  thumbnail: "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png",
  duration: 10000,
};
let a, b;
if(!serverQueue){
  a=[];
  b=0;
}else{
  a = serverQueue.filters;
  b = serverQueue.realseek;
}
//change volume to 25
const queueConstruct = {
  textChannel: message.channel,
  channel,
  connection: null,
  songs: [],
  loop: false,
  volume: 25,
  filters: a,
  realseek: b,
  playing: true
};
//try to join the Channel
queueConstruct.connection = await channel.join().catch(console.error);
//Send info message for joining 
if(!serverQueue)
message.channel.send(    new MessageEmbed().setColor("#3371FF")
.setDescription(`**👍 Ušao u \`${channel.name}\` 📄 iz \`#${message.channel.name}\`**`)
.setFooter(`${message.author.username}#${message.author.discriminator}`));
//send Search something embed
message.channel.send(new MessageEmbed().setColor("#3371FF")
.setDescription(`**💢 Tražim 🔍 \`${Radiostations[i-1].split(" ")[0]}\`**`));
//mute yourself
await queueConstruct.connection.voice.setSelfDeaf(true);
await queueConstruct.connection.voice.setDeaf(true);
/*
//if something is playing then end everthing
if (serverQueue) 
  serverQueue.songs = [];
*/
//if something is playing add send this message
if (serverQueue) {
  //Calculate the estimated Time
  let estimatedtime = Number(0);
  for (let i = 0; i < serverQueue.songs.length; i++) {
    estimatedtime += Number(serverQueue.songs[i].duration);
  }
  if (estimatedtime > 60) {
    estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
    estimatedtime = estimatedtime + " Minuta"
  }
  else if (estimatedtime > 60) {
    estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
    estimatedtime = estimatedtime + " Sati"
  }
  else {
    estimatedtime = estimatedtime + " Sekundi"
  }
  //Push the ServerQueue
  serverQueue.songs.push(song);
  //the new song embed
  const newsong = new MessageEmbed()
    .setTitle("✅ " + song.title)
    .setColor("#3371FF")
    .setThumbnail(song.thumbnail)
    .setURL(song.url)
    .setDescription(`\`\`\`Je dodan u queue.\`\`\``)
    .addField("Vreme do pesme:", `\`${estimatedtime}\``, true)
    .addField("Pozicija:", `**\`${serverQueue.songs.length - 1}\`**`, true)
    .setFooter(`Zatraženo od: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
  //send the Embed into the Queue Channel
    return serverQueue.textChannel
    .send(newsong)
    .catch(console.error);
  
}
//add it to the Queue
queueConstruct.songs.push(song);
//set the Server Queue
message.client.queue.set(message.guild.id, queueConstruct);

try {
  play(queueConstruct.songs[0], message, client);     
} catch (error) {
  console.error(error);
  message.client.queue.delete(message.guild.id);
  await channel.leave();
  return message.channel.send(`Ne mogu ući u kanal: ${error}`).catch(console.error);
}
  //sende bestätigung
 }
};
