const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    message.delete();
    let meow = await fetch('http://aws.random.cat/meow')
        .then(res => res.json())
        .then(json => json.message);

    let embed = new RichEmbed()
        .setAuthor(message.member.user.tag, message.member.user.avatarURL)
        .setColor(0xdd9323)
        .setImage(meow)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`A random cat!!`)
        .setTimestamp();

    message.channel.send(embed).then(msg => { msg.delete(2500) });
};

exports.help = {
    name: 'meow'
};