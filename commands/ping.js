exports.run = (client, message, args) => {
    message.delete();
    message.channel.send('Pong!').catch(console.error);
};

exports.help = {
    name: 'ping'
};