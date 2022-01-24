const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quemsoueu')
    .setDescription('Informa quem é o usuário!'),
  async execute(interaction) {
    if (interaction.user.id === '228186467304865794') {
      await interaction.reply(
        'Você é o grande amor da minha vida, Vick Siebra!'
      )
    } else if (interaction.user.id === '129619039508103168') {
      await interaction.reply('Você é o meu inventor, REVEM!')
    } else {
      await interaction.reply(
        'Você é o usuário ' + interaction.user.username + '!'
      )
    }
  }
}
