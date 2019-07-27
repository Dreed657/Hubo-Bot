const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    message.delete();

    const cryptoChannel = client.channels.get('603003319816028162');

    fetch('http://www.bom.gov.au/fwo/IDQ60901/IDQ60901.94578.json')
        .then(res => res.json())
        .then(body => {
            body.observations.data.forEach(e => {
                if (e.local_date_time == "24/01:00am") {
                    console.log(e);

                    // let embed = new RichEmbed()
                    //     .setAuthor(`'${e.data.name}'`)
                    //     .setColor(0xf7931a)
                    //     .setDescription(`
                    //     Date: ${e.data.local.date.time}
                    //     Name: ${e.data.name}
                    //     Wild: ${e.data.wind_dir}
                    //     Clouds: ${e.data.cloud}
                    //     Pressure: ${e.data.press}
                    //     Air Temp: ${e.data.air_temp}
                    //     `)
                    //     .setFooter(`A Random BOM Weather data!!`)
                    //     .setTimestamp();

                    // cryptoChannel.send(embed)
                }
        })});


    // await fetch('http://www.bom.gov.au/fwo/IDQ60901/IDQ60901.94578.json')
    //     .then(data => data.json())
    //     .then(data => {  
    //         data.forEach(e => {
    //             console.log(e);
    //             // if (e.data.name == "Brisbane Airport") {
    //             //     let embed = new RichEmbed()
    //             //         .setAuthor(`'${e.data.name}'`)
    //             //         .setColor(0xf7931a)
    //             //         .setDescription(`
    //             //         Date: ${e.data.local.date.time}
    //             //         Name: ${e.data.name}
    //             //         Wild: ${e.data.wind_dir}
    //             //         Clouds: ${e.data.cloud}
    //             //         Pressure: ${e.data.press}
    //             //         Air Temp: ${e.data.air_temp}
    //             //         `)
    //             //         .setFooter(`A Random BOM Weather data!!`)
    //             //         .setTimestamp();

    //             //     cryptoChannel.send(embed)
    //             // }
    //         });
    //     })
    //     .catch(err => console.log(err));

};


exports.help = {
    name: 'bitcoinprice'
};