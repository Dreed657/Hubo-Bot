module.exports = (client, member) => {
    let userLogs = client.channels.get('603260228032790539');
    userLogs.send(`${member.user.tag} has joined **${member.guild}**!`);
};