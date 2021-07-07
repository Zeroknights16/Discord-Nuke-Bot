const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolecommands = chalk.keyword('cyan');

module.exports = {
	name: 'restart',
	version: 1.1,
	description: `${config['commands'].restart.description}`,
	cooldown: `${config['commands'].restart.cooldown}`,
	usage: `${config['commands'].restart.usage}`,
	permission: `${config['commands'].restart.permission}`,
	id: `${config['commands'].restart.id}`,
	guildOnly: true,
	execute: async (message) => {

		try {
			const errorPermEmbed = new Discord.MessageEmbed()
				.setColor('#40FF00')
				.setFooter(`${config['server'].name} Nuker Bot`)
				.setTimestamp()
				.setDescription('``✅`` **Restarting...**');
			await message.channel.send({ embed: errorPermEmbed });
			console.log(`${time} | ` + consolewords('[CMD]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}restart`));
			process.exit(1);
		}
		catch (e) {
			return message.channel.send(`ERROR: ${e.message}`);
		}
	},
};