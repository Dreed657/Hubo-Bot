exports.run = (client, message, args) => {
    message.delete();
    console.log('Loggi');

    message.channel.send('Pong!').catch(console.error);
};

exports.help = {
    name: 'ping'
};