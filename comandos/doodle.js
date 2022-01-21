const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require("node-fetch");
const { token } = require('../config.json')




module.exports = {
  data: new SlashCommandBuilder()
    .setName('doodle')
    .setDescription('Inicia uma sessão de doodle!'),
  async execute(interaction) {
    let channel = interaction.member.voice.channel;
    if (!channel) return interaction.channel.send("Você não está em um canal de voz!");

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
      method: 'POST',
      body: JSON.stringify({
        max_age: 0,
        max_uses: 1,
        target_application_id:  "878067389634314250",
        target_type: 2,
        temporary: false,
        validate: null
      }),
      headers: {
        "Authorization": `Bot ${token}`,
        "Content-Type": "application/json"
      }
    }) .then(res => res.json())
    .then(invite =>{
      if(!invite.code) return interaction.reply(" :x: Não foi possível iniciar!")
      interaction.channel.send(`Clique no link para iniciar: \n https://discord.com/invite/${invite.code}`)
    })
  }
}
