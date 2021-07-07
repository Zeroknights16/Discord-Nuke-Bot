const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolecommands = chalk.keyword('cyan');
const consoleerror = chalk.bold.red;

module.exports = {
	name: 'clearchannels',
	version: 1.0,
	description: `${config['commands'].clearchannels.description}`,
	cooldown: `${config['commands'].clearchannels.cooldown}`,
	usage: `${config['commands'].clearchannels.usage}`,
	permission: `${config['commands'].clearchannels.permission}`,
	id: `${config['commands'].clearchannels.id}`,
	guildOnly: true,
	execute: async (message) => {

        const Embed = new Discord.MessageEmbed()
            .setColor('#40FF00')
            .setFooter(`${config['server'].name} Nuker Bot`)
            .setTimestamp()
            .setDescription('``✅`` **Clearing all Channels...**');
        message.channel.send({ embed: Embed });
        message.delete();
        console.log(`${time} | ` + consolewords('[CMD]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}clearchannels`));
        try {
            await message.guild.channels.cache.forEach(channel => channel.delete());
            console.log(`${time} | ` + consolewords('[INFO]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}Successfully cleared all channels.`));
        }
        catch (err) {
            const errorPermEmbed = new Discord.MessageEmbed()
                .setColor('#FE9A2E')
                .setTitle(`⛔ Error (${config['bot'].prefix}${command.name}) `)
                .setDescription(`<@${message.author.id}>, there was an error trying to execute the command!\n\n> **ID:** \`\`${command.id}\`\`\n> **Error:** \`\`${err}\`\`\n> **Case ID:** \`\`12\`\`\n\n_If you think this is an error report it to a staff member via tickets_`)
                .setTimestamp()
                .setFooter(`${config['server'].name} Nuker Bot`);
            message.channel.send({ embed: errorPermEmbed });
            console.error(`${timess} | ` + consoleerror('[ERROR]: ') + consoleerror(error));
        }
    }
}