const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolecommands = chalk.keyword('cyan');

module.exports = {
	name: 'botinfo',
	version: 1.0,
	description: `${config['commands'].botinfo.description}`,
	cooldown: `${config['commands'].botinfo.cooldown}`,
	Usage: `${config['commands'].botinfo.usage}`,
	permission: `${config['commands'].botinfo.permission}`,
	id: `${config['commands'].botinfo.id}`,
	guildOnly: false,
	execute(message) {

		const dmembed = new Discord.MessageEmbed()
			.setTitle('Bot Info')
			.setColor('#00FFFF')
			.setThumbnail('https://cdn.discordapp.com/avatars/753250773273673811/1c757f83f3a7f76bbf8c287b02d82353.png?size=128')
			.setDescription('**Bot Developer**: ``Zeroknights#9457``\n**Bot Development**: ``Ice``\n**Language**: ``Javascript``\n**Release Date:** ``07/07/2021``\n\n**In development since July 2021.**')
			.setTimestamp()
			.setFooter(`${config['server'].name} Nuker Bot`);
		message.channel.send({ embed: dmembed });
		console.log(`${time} | ` + consolewords('[CMD]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}botinfo`));
	},
};
