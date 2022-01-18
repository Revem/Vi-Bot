// Classes necessárias do Discord.js
const { Client, Intents } = require('discord.js')
const { token } = require('./config.json')
const {lol_api} = require('./config.json')

//league of legends

//Novo client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Bot ta on!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === 'ping') {
    await interaction.reply('Pong!')
  } else if (commandName === 'server') {
    await interaction.reply('Server info.')
  } else if (commandName === 'user') {
    await interaction.reply(`${interaction.user.tag}`)
  } else if (commandName === 'aviso') {
    await interaction.reply(`https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/3fda2ddd387d1af91cc4fe01978ee4a2b0036fd2d5cb77a07c20fcfbad93ce6d_1.jpg
		`)
  } else if (commandName === 'fazer') {
    var Coisas = ['Assistir Filme', 'Assistir Série', 'Jogar Fortnite', 'Jogar TFT', 'Jogar Solo/Duo', 'Jogar Pokemon Unite', 'Jogar Stardew Valley', 'Assistir Anime', 'Jogar Flex', 'Jogar ARAM']
    var Fazer = Coisas[Math.floor(Math.random() * Coisas.length)]
    await interaction.reply(`Vocês vão ${Fazer}`)
  }
})

//Login
client.login(token)
