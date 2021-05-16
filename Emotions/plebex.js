const { Client, Discord, Message, MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = { // Update To Your Handler
	name: `plebex`,
	cooldown: 86400,
    async execute(message, args) {
        
    const gifs = [
"https://cdn.discordapp.com/attachments/808033689899499570/808033717775106118/opera_uuTsL952S5.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808033725627367488/opera_JGkgWu1sBb.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808034294693363712/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808034415270952980/20210205_125304.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808088847387721788/20210124_111803.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/808088847765864508/Discord_UgIpg4ahL4.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808088848080044112/20201230_221846.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/808088848352935977/20201221_153553.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/808088996830773248/Screenshot_20201221_004845.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/808088996998676510/Discord_JMhouV7Xps.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808111564916916284/Discord_851Wr28XiV.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808112563949928489/Discord_j46l4uaN2Y.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808112585823879178/chrome_Mu0QsnxFXT.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808112705801420880/obs64_s2ROEvEJje.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808112737614823434/4wd2pKLMOS.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808281007211413534/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/835298286868758533/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/833734388771848252/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/833502879851610142/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/830892497890443337/unknown.png",
"https://cdn.discordapp.com/attachments/675122068714684437/828935658214785024/unknown.png",
"https://cdn.discordapp.com/attachments/801961074172755980/835302541582401576/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/808358080886603836/IMG_20210208_162536.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/808630933904293908/IMG_20210208_184150.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/813719028387676200/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/814145636282007582/unknown.png",
"https://cdn.discordapp.com/attachments/808033689899499570/814502175749046345/20210225_151622.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/827674041510920222/IMG-20201117-WA0062.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/827674042990723082/IMG-20200831-WA0123.jpg",
"https://cdn.discordapp.com/attachments/808033689899499570/830569730066350150/unknown.png"
        ]
        const plebexgifs = new MessageEmbed()
            
                    .setTitle("your plebex for today is")
                    .setImage(gifs[Math.floor(Math.random() * gifs.length)])
					.setTimestamp()
                    .setColor("RANDOM")
        			message.channel.send(plebexgifs);
    }
}

