////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const ytdl = require("discord-ytdl-core");
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed, splitMessage, escapeMarkdown,MessageAttachment } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const createBar = require("string-progressbar");
const lyricsFinder = require("lyrics-finder");
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  async play(song, message, client, filters) {
    //VERY MESSY CODE WILL BE CLEANED SOON!
    const { PRUNING, SOUNDCLOUD_CLIENT_ID } = require("../config.json");

    const queue = message.client.queue.get(message.guild.id);

    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      const endembed = new MessageEmbed().setColor("#3371FF")
        .setAuthor(`Queue gotov.`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
      return queue.textChannel.send(endembed).catch(console.error);
    }

    let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
    let isnotayoutube=false;        
    let seekTime = 0;
    let oldSeekTime = queue.realseek;
    let encoderArgstoset;
    if (filters === "remove") {
        queue.filters = ['-af','dynaudnorm=f=200'];
        encoderArgstoset = queue.filters;
        try{
          seekTime = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000 + oldSeekTime;
        } catch{
          seekTime = 0;
        } 
          queue.realseek = seekTime;
    } else if (filters)
    {
      try{
        seekTime = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000 + oldSeekTime;
      } catch{
        seekTime = 0;
      } 
        queue.realseek = seekTime;
        queue.filters.push(filters)
        encoderArgstoset = ['-af', queue.filters]
    }
 

    try {
      if (song.url.includes("youtube.com")) {
         stream = ytdl(song.url, {
          filter: "audioonly",
          opusEncoded: true,
          encoderArgs: encoderArgstoset,
          bitrate: 320,
          seek: seekTime, 
          quality: "highestaudio",
          liveBuffer: 40000,
          highWaterMark: 1 << 25, 
  
      });
      } else if (song.url.includes(".mp3") || song.url.includes("baseradiode")) {
        stream = song.url;
        isnotayoutube = true;
      }
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      console.error(error);
      return attentionembed(message, `Error: ${error.message ? error.message : error}`);
    }

    queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));   
    
    if(isnotayoutube){
      console.log("NON-YOUTUBE KOMANDA")
      const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();

        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
    })
    .on("error", (err) => {
      console.error(err);
      queue.songs.shift();
      module.exports.play(queue.songs[0], message);
    });
  dispatcher.setVolumeLogarithmic(queue.volume / 100);
    }else{
      const dispatcher = queue.connection
      .play(stream, { type: streamType })
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();
  
        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", (err) => {
        console.error(err);
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      });
    dispatcher.setVolumeLogarithmic(queue.volume / 100);
    }
    
  let thumb;
    thumb = song.thumbnail === undefined ? "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" : song.thumbnail.url;

    try {
      const newsong = new MessageEmbed()
        .setTitle("✅ "+song.title)
        .setURL(song.url)
        .setColor("#3371FF")
        .setThumbnail(thumb)
        .setFooter(`Pustio: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
        .addField("Trajanje:", `\`${song.duration} Minuta\``, true)

      var playingMessage = await queue.textChannel.send(newsong);
      

     // await playingMessage.react("⏭"); //skip
     // await playingMessage.react("⏯"); //pause
    //  await playingMessage.react("🔄"); //loop
     // await playingMessage.react("⏹"); //stop
    //  await playingMessage.react("❓"); //np
    //  await playingMessage.react("🎵"); //queue
    //  await playingMessage.react("📑"); //lyrics
    } catch (error) {
      console.error(error);
    }



    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
      time: song.duration > 0 ? song.duration * 1000 : 600000
    });

    collector.on("collect", async (reaction, user) => {
      if (!queue) return;
      const member = message.guild.member(user);

      switch (reaction.emoji.name) {
        //queue
        case "🎵":
          reaction.users.remove(user).catch(console.error);
          const description = queue.songs.map((song, index) => `${index + 1}. ${escapeMarkdown(song.title)}`);

          let queueEmbed = new MessageEmbed()
            .setTitle("Lista pesama")
            .setDescription(description)
            .setColor("#3371FF")
             ;
      
          const splitDescription = splitMessage(description, {
            maxLength: 2048,
            char: "\n",
            prepend: "",
            append: ""
          });
      
          splitDescription.forEach(async (m) => {
      
            queueEmbed.setDescription(m);
            message.react("✅")
            message.channel.send(queueEmbed);
          });
          break;
        //np
        case "❓":
        reaction.users.remove(user).catch(console.error);
        const song = queue.songs[0];
        //get current song duration in s
        let minutes = song.duration.split(":")[0];   
        let seconds = song.duration.split(":")[1];    
        let ms = (Number(minutes)*60+Number(seconds));   
        //get thumbnail
        let thumb;
        thumb = song.thumbnail === undefined ? "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png" : song.thumbnail.url;
        //define current time
        const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
        //define left duration
        const left = ms - seek;
        //define embed
        let nowPlaying = new MessageEmbed()
          .setTitle("Puštam")
          .setDescription(`[**${song.title}**](${song.url})`)
          .setThumbnail(song.thumbnail.url)
          .setColor("#3371FF")
          .setFooter("Preostalo vreme: " + new Date(left * 1000).toISOString().substr(11, 8));
          //if its a stream
          if(ms >= 10000) {
            nowPlaying.addField("\u200b", "🔴 LIVE", false);
            //send approve msg
            return message.channel.send(nowPlaying);
          }
          //If its not a stream 
          if (ms > 0 && ms<10000) {
            nowPlaying.addField("\u200b", "**[" + createBar((ms == 0 ? seek : ms), seek, 25, "▬", "⚪️")[0] + "]**\n**" + new Date(seek * 1000).toISOString().substr(11, 8) + " / " + (ms == 0 ? " ◉ LIVE" : new Date(ms * 1000).toISOString().substr(11, 8))+ "**" , false );
            //send approve msg
            return message.channel.send(nowPlaying);
          }
        
        break;
        //skip
        case "⏭":
          queue.playing = true;
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.connection.dispatcher.end();
          const skipembed = new MessageEmbed().setColor("#3371FF").setAuthor(`${user.username} je skipovao pesmu.`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
          queue.textChannel.send(skipembed).catch(console.error);

          collector.stop();

          break;
        //lyrics
        case "📑":
        
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          let lyrics = null;
          let temEmbed = new MessageEmbed()
          .setAuthor("Tražim...", "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png").setFooter("Tekst")
          .setColor("#3371FF")
          let result = await message.channel.send(temEmbed)
          try {
            lyrics = await lyricsFinder(queue.songs[0].title,"");
            if (!lyrics) lyrics = `Nema pronadjenog teksta za ${queue.songs[0].title}.`;
          } catch (error) {
            lyrics = `Nema pronadjenog teksta za ${queue.songs[0].title}.`;
          }
      
          let lyricsEmbed = new MessageEmbed()
            .setTitle("📑 Tekst")
            .setDescription(lyrics)
            .setColor("#3371FF")
      
          if (lyricsEmbed.description.length >= 2048)
      
            lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
            message.react("✅");
          return result.edit(lyricsEmbed).catch(console.error);

          
          //pause
        case "⏯":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          if (queue.playing) {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.pause(true);
            const pausemebed = new MessageEmbed().setColor("#3371FF")
              .setAuthor(`${user.username} je pauzirao muziku.`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
            queue.textChannel.send(pausemebed).catch(console.error);
          } else {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.resume();
            const playembed = new MessageEmbed().setColor("#3371FF")
              .setAuthor(`${user.username} je odpauzirao muziku!`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
            queue.textChannel.send(playembed).catch(console.error);
          }
          break;
          //loop  
        case "🔄":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.loop = !queue.loop;
          const loopembed = new MessageEmbed().setColor("#3371FF")
            .setAuthor(`Loop je trenutno ${queue.loop ? " uključen" : " isključen"}`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
          queue.textChannel.send(loopembed).catch(console.error);
          break;
          //stop
        case "⏹":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.songs = [];
          const stopembed = new MessageEmbed().setColor("#3371FF").setAuthor(`${user.username} stopped the music!`, "https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png")
          queue.textChannel.send(stopembed).catch(console.error);
          try {
            queue.connection.dispatcher.end();
          } catch (error) {
            console.error(error);
            queue.connection.disconnect();
          }
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });

    collector.on("end", () => {
      playingMessage.reactions.removeAll().catch(console.error);
      if (PRUNING && playingMessage && !playingMessage.deleted) {
        playingMessage.delete({ timeout: 3000 }).catch(console.error);
      }
    });
  }
};
