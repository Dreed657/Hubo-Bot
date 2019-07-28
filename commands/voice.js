const ytdl = require('ytdl-core');

exports.run = (client, message, args) => {
    message.delete();

    var VC = message.member.voiceChannel;
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
    };

exports.help = {
    name: 'voice'
};