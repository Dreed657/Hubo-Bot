exports.run = (client, message, args) => {
    message.delete();

    let user = message.mentions.members.first().id;
    client.users.get(user).send(args.join(' '));
};

exports.help = {
    name: 'dm'
};