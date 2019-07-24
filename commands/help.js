const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    message.delete();
    const embed = new RichEmbed()
        .setTitle('Commands')
        .addField('!!addRole @mention', 'Adds role to specific user.')
        .addField('!!cat', 'Random picture of a cat.')
        .addField('!!dog', 'Random picture of a dog.')
        .addField('!!purge amount', 'Clears the chat with specific amount of messages.')
        .addField('!!cryptoprices cryptocurrency', 'Show the price of specific crypto in real time.')
        .setColor(0xdd9323)
        .setFooter(`ID: ${message.author.id}`);
        
    message.channel.send(embed).then(msg => { msg.delete(15000) });
};

exports.help = {
    name: 'help'
};