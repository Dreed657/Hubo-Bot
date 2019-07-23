exports.run = (client, message, args) => {
    try {
        channel.messages.delete();
    } catch (error) {
        console.error;
    } 
 };
 
 exports.help = {
     name: 'clear'
 };