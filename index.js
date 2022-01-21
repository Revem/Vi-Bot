// Classes necessárias do Discord.js
const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js')
const { token } = require('./config.json')

//Novo client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection()
const commandFiles = fs
  .readdirSync('./comandos')
  .filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`)

  client.commands.set(command.data.name, command)
}

client.once('ready', () => {
  console.log('Bot ta on!');
  client.user.setActivity('a linda voz do meu amor', { type: 'LISTENING' })
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const command = client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({
      content: 'Ocorreu um erro ao executar o comando!',
      ephemeral: true
    })
  }
})

//Login
client.login(token)
