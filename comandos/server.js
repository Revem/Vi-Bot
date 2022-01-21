const { SlashCommandBuilder } = require('@discordjs/builders');
const { channel } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Responde com informações sobre o servidor!'),
	async execute(interaction) {
		await interaction.reply(`canal ${this.channel.id}`);
	},
};