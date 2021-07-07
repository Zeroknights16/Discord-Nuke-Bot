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
	name: 'nuke',
	version: 1.0,
	description: `${config['commands'].nuke.description}`,
	cooldown: `${config['commands'].nuke.cooldown}`,
	usage: `${config['commands'].nuke.usage}`,
	permission: `${config['commands'].nuke.permission}`,
	id: `${config['commands'].nuke.id}`,
	guildOnly: true,
	execute: async (message) => {

        const Embed = new Discord.MessageEmbed()
            .setColor('#40FF00')
            .setFooter(`${config['server'].name} Nuker Bot`)
            .setTimestamp()
            .setDescription('``✅`` **Nuking the discord...**');
        message.channel.send({ embed: Embed });
        message.delete();
        console.log(`${time} | ` + consolewords('[CMD]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}nuke`));
        try {
            await message.guild.roles.cache.forEach((role) => { role.delete("Nuking")});
            console.log(`${time} | ` + consolewords('[INFO]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}Successfully cleared all roles.`));
            await message.guild.channels.cache.forEach(channel => channel.delete());
            console.log(`${time} | ` + consolewords('[INFO]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}Successfully cleared all channels.`));
            await message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }));
            console.log(`${time} | ` + consolewords('[INFO]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}Successfully cleared all emojis.`));
            await message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." }));
            console.log(`${time} | ` + consolewords('[INFO]: ') + consolecommands(`${message.author.username}: ${config['bot'].prefix}Successfully banned all users.`));
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