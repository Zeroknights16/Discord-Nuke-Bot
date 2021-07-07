const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolecommands = chalk.keyword('cyan');
const consoleerrcmds = chalk.keyword('yellow');

module.exports = {
	name: 'help',
	aliases: ['Help'],
	version: 1.0,
	description: `${config['commands'].help.description}`,
	cooldown: `${config['commands'].help.cooldown}`,
	usage: `${config['commands'].help.usage}`,
	permission: `${config['commands'].help.permission}`,
	id: `${config['commands'].help.id}`,
	guildOnly: false,
	execute(message) {

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#2EFEF7')
			.setAuthor(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`)
			.setTitle('``📋`` General help list')
			.addField('Commands', `**${config['bot'].prefix}help** - ${config['commands'].help.description}\n**${config['bot'].prefix}banall** - ${config['commands'].banall.description}\n**${config['bot'].prefix}botinfo** - ${config['commands'].botinfo.description}\n**${config['bot'].prefix}clearchannels** - ${config['commands'].clearchannels.description}\n**${config['bot'].prefix}nuke** - ${config['commands'].nuke.description}\n**${config['bot'].prefix}restart** - ${config['commands'].restart.description}\n**${config['bot'].prefix}uptime** - ${config['commands'].uptime.description}`, true)
			.setTimestamp()
			.setFooter(`${config['server'].name} Nuker Bot`);
		message.channel.send({ embed: exampleEmbed });
		console.log(`${time} | ` + consolewords('[CMD]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}help general`));
	},
};