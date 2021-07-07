const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const startup = require('../functions/startup.js');
const commandHandler = startup.commandHandler;
const today = new Date();
const timess = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consoleerrcmds = chalk.keyword('yellow');

module.exports = function errorembed(message, errortype, commandName, caseid) {
	const command = commandHandler.get(commandName)
		|| commandHandler.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (errortype === 'args') {
		const errorArgsEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].args}\n\n> **ID:** \`\`${command.id}\`\`\n> **Usage:** \`\`${config['bot'].prefix}${command.usage}\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setFooter(`${config['messages'].errfooter}`);
		message.channel.send({ embed: errorArgsEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Missing Arguments => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else if (errortype === 'devmode') {
		const errorPermEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].devmode}\n\n> **ID:** \`\`${command.id}\`\`\n> **Module:** \`\`${command.activated}\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setTimestamp()
			.setFooter(`${config['server'].name} Nuker Bot`);
		message.channel.send({ embed: errorPermEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Dev Mode enabled => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else if (errortype === 'guildonly') {
		const errorPermEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].guildOnly}\n\n> **ID:** \`\`${command.id}\`\`\n> **Dms:** \`\`disabled\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setTimestamp()
			.setFooter(`${config['server'].name} Nuker Bot`);
		message.channel.send({ embed: errorPermEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Dms => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else if (errortype === 'activated') {
		const errorPermEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].enabled}\n\n> **ID:** \`\`${command.id}\`\`\n> **Module:** \`\`${command.activated}\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setTimestamp()
			.setFooter(`${config['server'].name} Nuker Bot`);
		message.channel.send({ embed: errorPermEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Module Disabled => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else if (errortype === 'usermention') {
		const errorArgsEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].usermention}\n\n> **ID:** \`\`${command.id}\`\`\n> **Usage:** \`\`${config['bot'].prefix}${command.usage}\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setTimestamp()
			.setFooter(`${config['messages'].errfooter}`);
		message.channel.send({ embed: errorArgsEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Missing Arguments => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else if (errortype === 'rolemention') {
		const errorRoleEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].rolemention}\n\n> **ID:** \`\`${command.id}\`\`\n> **Usage:** \`\`${config['bot'].prefix}${command.usage}\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setTimestamp()
			.setFooter(`${config['messages'].errfooter}`);
		message.channel.send({ embed: errorRoleEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Missing Mention => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else if (errortype === 'permission') {
		const errorPermEmbed = new Discord.MessageEmbed()
			.setColor('#FE9A2E')
			.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
			.setDescription(`<@${message.author.id}>, ${config['messages'].permission}\n\n> **ID:** \`\`${command.id}\`\`\n> **Required permission:** \`\`${command.permission}\`\`\n> **Case ID:** \`\`${caseid}\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
			.setTimestamp()
			.setFooter(`${config['server'].name} Nuker Bot`);
		message.channel.send({ embed: errorPermEmbed });
		console.log(`${timess} | ` + consolewords('[CMD]: ') + consoleerrcmds(`${message.author.username}: Missing Permission => Error => ID: ${command.id}, Case ID: ${caseid}`));
		return;
	}
	else {
		console.error(`${timess} | An error occured while executing a function.`);
	}
};