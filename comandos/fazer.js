const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fazer')
		.setDescription('Responde com algo para fazer!'),
	async execute(interaction) {
    var Coisas = ['Assistir Filme', 'Assistir Série', 'Jogar Fortnite', 'Jogar TFT', 'Jogar Solo/Duo', 'Jogar Pokemon Unite', 'Jogar Stardew Valley', 'Assistir Anime', 'Jogar Flex', 'Jogar ARAM']
    var Fazer = Coisas[Math.floor(Math.random() * Coisas.length)]
    await interaction.reply(`Vocês vão ${Fazer}`)
	},
};