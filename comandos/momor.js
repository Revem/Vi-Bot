const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('momor')
		.setDescription('Responde com muito amor!'),
	async execute(interaction) {
		await interaction.reply('Eu te amo muito Vitória, muito muito muito');
	},
};