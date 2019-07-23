const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    message.delete();

    try {
        await fetch('http://www.json-generator.com/api/json/get/bTTGItycjm?indent=2')
            .then(data => data.json())
            .then(data => {  
                data.forEach(e => {
                    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
                    let embed = new RichEmbed()
                        .setAuthor('Json Generator')
                        .setColor(randomColor)
                        .setDescription(`
                        Id ${e.id}
                        Title ${e.name}
                        Age ${e.age}
                        Balance ${e.balance}
                        Company ${e.company}
                        `)
                        .setFooter(`A random data!!`)
                        .setTimestamp();

                    message.channel.send(embed);
                });
            });
    
    } catch (err) {
        console.log(err);
    }
};

exports.help = {
    name: 'parce'
};