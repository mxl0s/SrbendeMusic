const { MessageEmbed } = require('discord.js');
const os = require('os');
const osu = require('node-os-utils');
const prettyMs = require('pretty-ms');

module.exports = {
    name: "resources",

    async execute(message, args) {
    const notSupported = "Operative system not supported"
    const full = '█'
    const empty = '░'
    const precision = 20

    const freeRAM = os.freemem()
    const usedRAM = os.totalmem() - freeRAM;

    const diagramMaker = (used,free) => {
        const total = used + free;
        used = Math.round((used / total) * precision)
        free = Math.round((free / total) * precision)
        return full.repeat(used) + empty.repeat(free)
    }

    let cpuUsage;

    const p1 = osu.cpu.usage()
    .then(cpuPercentage => {
        cpuUsage = cpuPercentage;
    })

    let processes;

    const p2 = osu.proc.totalProcesses()
    .then(process => {
        processes = process;
    })

    let driveUsed, driveFree;

    const p3 = osu.drive.info()
    .then(i => {
        driveUsed = i.usedPercentage;
        driveFree = i.freePercentage;
    })
    .catch(() => {
        driveUsed = false;
    })

    let networkUsage, networkUsageIn, networkUsageOut;

    const p4 = osu.netstat.inOut()
    .then(i => {
        networkUsage = i.total;
        networkUsageIn = networkUsage.inputMb;
        networkUsageOut = networkUsage.outputMb;
    })
    .catch(() => {
        networkUsage = false;
    })

    await Promise.all([p1,p2,p3,p4]);

    const embed = new MessageEmbed()
    .setColor("#3371FF")
    .setAuthor('SM | Stats 💻', 'https://cdn.discordapp.com/app-icons/802583582022697011/817941229e62f9dc8f6219ab6ef21a10.png')
    .addField(`Used:`,(`RAM: ${diagramMaker(usedRAM, freeRAM)} [${Math.round(100 * usedRAM / (usedRAM + freeRAM))}%]\n`+
    `CPU: ${diagramMaker(cpuUsage, 100-cpuUsage)} [${Math.round(cpuUsage)}%]\n`+
    `STORAGE: ${driveUsed ? `${diagramMaker(driveUsed, driveFree)} [${Math.round(driveUsed)}%]` : notSupported}\n`+
    `PROCESSES: ${processes != 'not supported'? processes : notSupported}`).trim())
    .addField(`Machine Specs:`,`CPU Count: ${osu.cpu.count()}\nCPU Model: ${os.cpus()[0].model}\nCPU Speed: ${os.cpus()[0].speed}MHz
${osu.os.platform() != "win32" ? `Storage: ${diagramMaker(driveUsed,driveFree)} [${driveUsed}%]`: ""}`)
    .addField(`System Specs:`,`System Type: ${osu.os.type()}\nSystem Architecture: ${osu.os.arch()}\nSystem Platform: ${osu.os.platform()}`)
    .addField(`Network Stats:`,`${networkUsage ? `Download: ${networkUsageIn}\nUpload: ${networkUsageOut}` : notSupported}`)
    .addField('\u200b','\u200b')
    .addField(`Bot Uptime:`,`${prettyMs(process.uptime()*1000, { verbose: true })}`,true)
    .setTimestamp()

    message.channel.send(embed)
    }
}
