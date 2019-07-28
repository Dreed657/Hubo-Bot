const fs = require('fs');
const ytdl = require('ytdl-core');

exports.run = (client, message, args) => {
    message.delete();

    const botChannel = client.channels.get('603003319816028162');
    
    if (!VC)
        return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
    VC.join()
        .then(connection => {
            try {
                const url = args[0];
                const stream = ytdl(url, { filter: 'audioonly' });
                
                const dispatcher = connection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
            } catch (err) {
                console.log(err)
            }


           
        })
        .catch(console.error);




    // if(message.member.voiceChannel) {
    //     try {
    //         message.member.voiceChannel.join();
    //     } catch (err) {
    //         botChannel.send('Something went south.');
    //         console.log(err)
    //     }
    // }
       
    };

exports.help = {
    name: 'voice'
};