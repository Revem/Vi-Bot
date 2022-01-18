const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Responde com pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Responde com informações do servidor!'),
	new SlashCommandBuilder().setName('user').setDescription('Responde com informações do usuário!'),
  new SlashCommandBuilder().setName('aviso').setDescription('Você foi avisado!'),
	new SlashCommandBuilder().setName('fazer').setDescription('Responde com coisas que vocês vão fazer!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);