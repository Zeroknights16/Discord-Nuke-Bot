const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const today = new Date();
const timess = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const chalk = require('chalk');
const consolewords = chalk.keyword('white');
const consolestarting = chalk.keyword('cyan');

module.exports = {
	name: 'ready',
	execute(client) {
		const activities_list = [
			`${config['bot'].prefix}help`,
			'Made by Ice Development',
			'Developer: Zeroknights#9457',
		];
		console.log(`${timess} | ` + consolewords('[INFO]: ') + consolestarting(`Logged in as ${client.user.tag}`));
		setInterval(() => {
			const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
			client.user.setActivity(activities_list[index]);
		}, 10000);

	},
};