const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Responde com a tag do usuário!'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.tag}`);
	},
};