const Discord = require('discord.js');
const cooldowns = new Discord.Collection();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const errorembeds = require('../schemas/errorembed.js');
const startup = require('../functions/startup.js');
const commandHandler = startup.commandHandler;
const today = new Date();
const timess = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consoleerror = chalk.bold.red;

module.exports = {
	name: 'message',
	execute(message) {
		const prefix = `${config['bot'].prefix}`;
		if (!message.content.startsWith(prefix)) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();
		const command = commandHandler.get(commandName)
		|| commandHandler.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) return;

		if (command.guildOnly && message.channel.type === 'dm') {
			errorembeds(message, 'guildonly', command.name, 12);
			return;
		}
		if (command.permission && !message.member.hasPermission([`${command.permission}`])) {
			errorembeds(message, 'permission', command.name, 1);
			return;
		}

		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		try {
			command.execute(message, args);
		}
		catch (error) {
			const errorPermEmbed = new Discord.MessageEmbed()
				.setColor('#FE9A2E')
				.setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
				.setDescription(`<@${message.author.id}>, there was an error trying to execute the command!\n\n> **ID:** \`\`${command.id}\`\`\n> **Error:** \`\`${error}\`\`\n> **Case ID:** \`\`12\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
				.setTimestamp()
				.setFooter(`${config['server'].name} Nuker Bot`);
			message.channel.send({ embed: errorPermEmbed });
			console.error(`${timess} | ` + consoleerror('[ERROR]: ') + consoleerror(error));
			return;
		}
	},
};