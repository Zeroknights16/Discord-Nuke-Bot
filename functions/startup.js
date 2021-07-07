const Discord = require('discord.js');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const timess = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolestart = chalk.keyword('red');
const consolestarting = chalk.hex('#2EFE2E');
const consolecommands = chalk.keyword('cyan');
const client = require('../index.js');
client.commands = new Discord.Collection();

console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart(`\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  Starting Ice Nuking Bot (Version ${config['bot'].version})  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  Made by Zeroknights#9457  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestart('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'));
console.log(`${timess} | ` + consolewords('[INFO]: ') + consolecommands('Loading all commands...'));
console.time(`${timess} | ` + consolewords('[INFO]: ') + consolecommands('Nuker Bot Startup complete in'));

// Startup Command-Handler

commandFiles.forEach(file => {
	try {
		const command = require(`../commands/${file}`);
		client.commands.set(command.name, command);
		console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestarting(`Successfully loaded command ${command.name} (Version: ${command.version})`));
	}
	catch (err) {
		console.log(`${timess} | ` + consolestart('[ERROR]: ') + consolestart(`Failed to load ${file} :: ${err}`));
	}
});

console.timeEnd(`${timess} | ` + consolewords('[INFO]: ') + consolecommands('Nuker Bot Startup complete in'));

module.exports = {
	commandHandler: client.commands,
};