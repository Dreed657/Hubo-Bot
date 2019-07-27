exports.run = (client, message, args) => {
    message.delete();

    //
    //NOT WORKING 
    //

    const botChannel = client.channels.get('603003319816028162');

    if(message.member.voiceChannel) {
        //let currentChannel = client.voiceConnections.map(voiceConnection => console.log(voiceConnection.channel.id));
        try {
            //console.log(message.member.channel.id);
            //client.leaveVoiceChannel(message.member.voiceState.channelID);
            console.log(message.voiceChannel);
        } catch (err) {
            botChannel.send('Something went south.');
            console.log(err)
        }
    }
       
    };

exports.help = {
    name: 'voice'
};