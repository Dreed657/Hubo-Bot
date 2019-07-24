exports.run = (client, message, args) => {
    message.delete();
    const c = message.guild.roles.get('603274579590512650'); // Moderator

    let user = message.mentions.members.first();

    user.addRole(c)
        .catch(err => {
            console.log(err);
            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
        });
 };
 
 exports.help = {
     name: 'addRole'
 };