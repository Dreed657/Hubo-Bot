exports.run = (client, message, args) => {
    message.delete();
    message.channel.fetchMessages({
            limit: 100,
        }).then(message.channel.bulkDelete(args[0]).catch(error => console.log(error.stack)));
};

exports.help = {
    name: 'purge'
};