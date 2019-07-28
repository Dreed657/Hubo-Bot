const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    var mutee = message.mentions.members.first();
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
    
    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.setMute(false)
        message.channel.send(`${mutee.user.username} was successfully unmuted.`).then(msg => { msg.delete(2500) })
    })
 };
 
 exports.help = {
     name: 'unmute'
 };