const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('aviso')
    .setDescription('Avisa os usuários!'),
  async execute(interaction) {
    await interaction.reply(`https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/3fda2ddd387d1af91cc4fe01978ee4a2b0036fd2d5cb77a07c20fcfbad93ce6d_1.jpg`);
  }
}
