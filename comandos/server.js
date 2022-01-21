const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Responde com informações sobre o servidor!'),
	async execute(interaction) {
		await interaction.reply('Informações aqui');
	},
};