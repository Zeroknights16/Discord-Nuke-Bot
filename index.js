const fs = require('fs');
const Discord = require('discord.js');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const startup = require('./functions/startup.js')
const client = new Discord.Client();

startup;

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

module.exports = {
	client: client,
};

client.login(`${config['bot'].token}`).catch(err => {
	console.log(err);
});