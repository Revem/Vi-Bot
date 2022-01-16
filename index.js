// Classes necessárias do Discord.js
const { Client, Intents } = require('discord.js');
const { token }= require('./config.json');

//Novo client
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
	console.log('Bot ta on!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply(`${interaction.user.tag}`);
	} else if (commandName === 'test') {
    await interaction.reply('Test!');
  }
});

//Login
client.login(token);