exports.run = async (client, message, args) => {
    client.emit('guildMemberRemove', message.member);
}

exports.help = {
    name: 'newmember'
};