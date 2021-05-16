const Discord = require('discord.js');
let PlayerCount = require('../handleri_req_sranja/players.js');
let config = require('../handleri_req_sranja/config.json');
module.exports = {
    name: 'stats',
    description: 'See all players',
     async execute(message, args){
        PlayerCount.getPlayerCount().then((result) => {
            
            let list = result.data;
            var id = "";
            var players = "";
            var ping = ""
            for(var i = 0; i < list.length; i++){
                id += list[i].id+'\n';
                players += list[i].name+'\n';
                ping += list[i].ping+'\n';
               
            }
            const pListEmbed = new Discord.MessageEmbed()
                .setColor('#3371FF')
                .setTitle('💻 Online Igrači')
                .setDescription(`👥 Ukupno Igrača: ${list.length}`)
                .setThumbnail(config.SERVER_LOGO)
                .addFields(
                    { name: '🆔 ID Igrača', value: id, inline: true  },
                    { name: '👤 Ime Igrača', value: players, inline: true  },
                    { name: '📶 Ping', value: `${ping}`, inline: true },
                   
                )
                .setTimestamp(new Date())
                .setFooter('Poslao: '+message.author.tag, `${config.SERVER_LOGO}`);
                message.channel.send(pListEmbed);
            
            
        })
        .catch(function(){
            const errpListEmbed = new Discord.MessageEmbed()
                .setColor('#3371FF')
                .setTitle('💻 Online Igrači')
                .setDescription(`👥 Totalni Igrači: nula 😞`)
                .setThumbnail(config.SERVER_LOGO)
                .addFields(
                    { name: '🆔 ID Igrača', value: '0', inline: true  },
                    { name: '👤 Ime Igrača', value: 'None', inline: true  },
                    { name: '📶 Ping', value: 'None', inline: true },
                   
                )
                .setTimestamp(new Date())
                .setFooter('Poslao: '+message.author.tag, `${config.SERVER_LOGO}`);
                message.channel.send(errpListEmbed);
        })
    }, 
};