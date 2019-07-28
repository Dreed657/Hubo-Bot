exports.run = (client, message, args) => {
    message.delete();
    const botChannel = client.channels.get('603003319816028162');
    const VC = client.channels.get('159011396909137921');

    try {
        client.leaveVoiceChannel(message.author.voiceChannel);
    } catch (err) {
        botChannel.send('Something went south.');
        console.log(err)
    }

    };

exports.help = {
    name: 'voice'
};