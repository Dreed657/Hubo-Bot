module.exports = (client, message) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);

    const welcome = client.channels.find(c => c.name === 'welcome');
    const crypto = client.channels.find(c => c.name === 'crypto-log');
    const botspam = client.channels.find(c => c.name === 'bot-spam');

    const fetchedMessages = [welcome, crypto, botspam];
    fetchedMessages.forEach(c => {
        c.fetchMessages({ limit: 10 }).catch(console.error);
    });
};