const fs = require('fs');
const ytdl = require('ytdl-core');

exports.run = (client, message, args) => {
    message.delete();

    const botChannel = client.channels.get('603003319816028162');
    

    var VC = message.member.voiceChannel;
    if (!VC)
        return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
    VC.join()
        .then(connection => {
            try {
                const ulr = 'https://www.youtube.com/watch?v=o7cbzo-ld1I&list=PL0EXOCxtOjwFoDtPeA58w9qirxWIX_BCb&index=6&t=0s';
                // ytdl('https://www.youtube.com/watch?v=o7cbzo-ld1I&list=PL0EXOCxtOjwFoDtPeA58w9qirxWIX_BCb&index=6&t=0s', { filter: 'audioonly' })
                //     .pipe(fs.createWriteStream('video.mp3'));
                
                const stream = ytdl(url, { filter: 'audioonly' });
                
                const dispatcher = connection.playStream(stream);

                dispatcher.on('end', () => voiceChannel.leave());
            } catch (err) {
                console.log('hmm')
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