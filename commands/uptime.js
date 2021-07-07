const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolecommands = chalk.keyword('cyan');

module.exports = {
	name: 'uptime',
	version: 1.0,
	description: `${config['commands'].uptime.description}`,
	cooldown: `${config['commands'].uptime.cooldown}`,
	usage: `${config['commands'].uptime.usage}`,
	permission: `${config['commands'].uptime.permission}`,
	id: `${config['commands'].uptime.id}`,
	guildOnly: false,
	execute(message) {

		const client = require('../index.js');
		const days = Math.floor(client.client.uptime / 86400000);
		const hours = Math.floor(client.client.uptime / 3600000) % 24;
		const minutes = Math.floor(client.client.uptime / 60000) % 60;
		const seconds = Math.floor(client.client.uptime / 1000) % 60;
		const errorPermEmbed = new Discord.MessageEmbed()
			.setColor('#00FFBF')
			.setDescription(`\`\`🕰️\`\` **${config['server'].name} Nuker Bot Uptime**: \`\`${days}\`\`d \`\`${hours}\`\`h \`\`${minutes}\`\`m \`\`${seconds}\`\`s`);
		message.channel.send({ embed: errorPermEmbed });
		console.log(`${time} | ` + consolewords('[CMD]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}uptime`));
	},
};
