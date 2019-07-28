const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) 
        return message.channel.send("Ама кажи кой да мутна бе..").then(msg => { msg.delete(2500) });

    var reason = "Без причина.";

    var muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#514f48",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch(e) {
            console.log(e.stack);
        }
    }

    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.setMute(true)
        //mutee.send(`Hello, you have been in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username} was successfully muted.`).then(msg => { msg.delete(2500) });
    })
        
    //send an embed to the modlogs channel
    let embed = new Discord.RichEmbed()
        .setColor(0x4078c0)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Moderation:", "mute")
        .addField("Mutee:", mutee.user.username)
        .addField("Moderator:", message.author.username)
        .addField("Reason:", reason)
        .addField("Date:", message.createdAt.toLocaleString())

    message.channel.send(embed).then(msg => { msg.delete(2500) });
    
 };
 
 exports.help = {
     name: 'mute'
 };