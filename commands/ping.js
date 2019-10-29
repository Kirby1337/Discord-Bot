const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  await message.delete()
  return msg.channel.send(Math.round(client.ping));
}
//name this whatever the command name is.
module.exports.help = {
  name: "ping"
}
