exports.run = (client, message, args) => {
   try {
        const responce = args.join(' ');
        message.delete();
        message.channel.send(responce)
   } catch (error) {
       console.error;
   } 
};

exports.help = {
    name: 'say'
};