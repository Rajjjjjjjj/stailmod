const Discord = require('discord.js');
const bot = new Discord.Client();

prefix = '.';

logo = 'https://cdn.discordapp.com/attachments/812699470395080714/812704964756373544/loooooooogooooooooooo.png';
invURL = 'https://discord.gg/54x4NC56fe';

bot.on('ready', () => {
    logStartNum = 1;
    bot.user.setActivity('Welcome to Stail Mods', {type: "STREAMING", url: "https://www.twitch.tv/stailstrm"});
    console.log('Online');
})

bot.on('message', msg => {

    ownerRole = msg.guild.roles.cache.find(role => role.name === "Stail");
    adminRole = msg.guild.roles.cache.find(role => role.name === "Admin");
    modRole = msg.guild.roles.cache.find(role => role.name === "Moderator");

    if(msg.content.startsWith(prefix + 'announce')) {
        if(msg.member.roles.cache.has(ownerRole.id)){
            annMsg = msg.content.slice(10);
            const richAnn = new Discord.MessageEmbed()
            .setColor('#ff5252')
            .setTitle('Stail Modifications\'s Announcement')
            .setURL(invURL)
            .setAuthor('Stail Cad\'s', logo, invURL)
            .setDescription(annMsg)
            .setFooter('Stail Cad\'s Server Announcement', logo);
        
            msg.channel.send(richAnn);
        }
    }

    if(msg.content.startsWith(prefix + 'del')) {
        msgDel = msg.content.slice(5);
        if(msg.member.roles.cache.has(ownerRole.id)) {
            msg.channel.bulkDelete(msgDel);
        } else {
            if(msg.member.roles.cache.has(adminRole.id)) {
                msg.channel.bulkDelete(msgDel);
            } else {
                if(msg.member.roles.cache.has(modRole.id)) {
                    msg.channel.bulkDelete(msgDel);
                } else {
                    msg.channel.send('no fuck off');
                }
            }
        }
    }

    if(msg.content.startsWith(prefix + 'newrelease')) {
        if(msg.member.roles.cache.has(ownerRole.id)){
            msgRelease = msg.content.slice(12);
            const richAnn = new Discord.MessageEmbed()
            .setColor('#ff5252')
            .setTitle('Stail Modifications\'s Announcement')
            .setURL(invURL)
            .setAuthor('Stail Cad\'s', logo, invURL)
            .setDescription(msgRelease)
            .setFooter('Stail Cad\'s Server Announcement', logo);
        
            msg.channel.send(richAnn);
        }
    }
})

bot.login(process.env.token);