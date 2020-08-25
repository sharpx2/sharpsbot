const Discord = require('discord.js')
const client = new Discord.Client({
  disableEveryone: true
})
let rpcGenerator = require("discordrpcgenerator")
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))

client.on('ready', async() => {
  console.log('Successfully launched the bot.')
  rpcGenerator.getRpcImage('729393447303381042', 'bentei')
      .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("Bad Energy ⚡")
        .setUrl("https://twitch.tv/discord")
        .setType("STREAMING")
        .setApplicationId("729393447303381042")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText(image.name)
        .setDetails(":pasdechance:")
        .setState("Living Lonely Nights And Having Sweet Dreams")
        .setParty({
            size: [1, 4],
            id: uuid()
        })
        .setDetails("Love,")
 
        client.user.setPresence(presence.toDiscord())
})
})

client.on('message', async message => {
  if(message.author.id != '466357112134565888') return;
  if(!message.content.startsWith('?')) return;
  if(message.content.startsWith('?test')) {
    message.delete()
    message.channel.send('ONLINE')
  }
})

client.login(process.env.TOKEN)
