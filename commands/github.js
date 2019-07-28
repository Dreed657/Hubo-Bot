const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    try {
         message.delete();

        let url = 'https://api.github.com/users/'+ args[0].toString();

        await fetch(url)
            .then(data => data.json())
            .then(data => {  
                let embed = new RichEmbed()
                    .setAuthor(`'${data.login} account statistics.'`)
                    .setColor(0x4078c0)
                    .setDescription(`
                    Id: ${data.id}
                    Name: ${data.name}
                    Location: ${data.location}
                    Created at: ${data.created_at}
                    `)
                    .setFooter(`A random data!!`)
                    .setTimestamp();

                message.channel.send(embed).then(msg => { msg.delete(10 * 1000) });
            });
    } catch (error) {
        message.channel.send('Something went south!').then(msg => { msg.delete(2500) });
        console.error;
    } 
 };
 
 exports.help = {
     name: 'github'
 };