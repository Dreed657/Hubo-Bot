const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    message.delete();

    const cryptoChannel = client.channels.get('603333841448468484');

    setInterval(async function() {
        try {
            await fetch('https://api.coinmarketcap.com/v1/ticker/'+ args[0] +'/')
                .then(data => data.json())
                .then(data => {  
                    data.forEach(e => {
                        let embed = new RichEmbed()
                            .setAuthor(`'${e.name} price at the moment.'`)
                            .setColor(0xf7931a)
                            .setDescription(`
                            Symbol: ${e.symbol}
                            World Ranking: ${e.rank}
                            Price USD: ${e.price_usd}
                            Change 1h: ${e.percent_change_1h}
                            Change 24h: ${e.percent_change_24h}
                            Change 7d: ${e.percent_change_7d}
                            `)
                            .setFooter(`A random data!!`)
                            .setTimestamp();

                            cryptoChannel.send(embed)
                    });
                });
        } catch (err) {
            cryptoChannel.send('Invalid Currency!').then(msg => { msg.delete(5000) });
            console.log(err);
        }
    }, 5000);
};


exports.help = {
    name: 'bitcoinprice'
};