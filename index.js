// Response for Uptime Robot
const http = require('http')
http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Bot is active \n')
  })
  .listen(3000)

// main
const Discord = require('discord.js')
const client = new Discord.Client()

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.error('TOKENが設定されていません。')
  process.exit(0)
}

client.on('ready', () => {
  console.log(`ログイン: ${client.user.tag}`);
})

client.on('message', message => {
  if (message.mentions.users.has(client.user.id)) {
    message.reply('呼びましたか？')
    return
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)