const Discord = require('discord.js');
const client = new Discord.Client();
require('./server.js')
const Database = require("@replit/database")
const db = new Database()
const chalk = require("chalk")
const dotenv = require("dotenv").config()
client.on('ready', () => {

  console.log("Bloxington running successfully (Ready event)")
client.user.setActivity("over bloxington", {
  type: "WATCHING"
});
});


    client.on('message', message => {
        if (!message.content.startsWith("b!") || message.author.bot) return;
        var prefix = "b!"
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();


        if (command == "gamereport"){
            if (!args[1]) {
                return message.reply("Please use this format: b!gamereport (Roblox profile link) (reason)")
            }
            client.channels.cache.get("829533500453158915").send(message.author.tag + " (" + message.author.id + ") Has submitted a report! Roblox profile link: " + args[0] + ", Reason: " + args[1])
            message.channel.send("Report submitted successfully! Abuse of this command will result in a blacklist.")
        }
        if(command == "help" || command == "cmds" || command == "commands") {
          var embed = new Discord.MessageEmbed()
          embed.setTitle("Made by spacehold!")
          embed.setDescription('Avalible commands: `b!gamereport` `b!help`')
          message.channel.send("Current Commands:")
          message.channel.send(embed)
        }
        if(command == "store") {
          if (!args[1]) {
            return message.reply("please use this command like this: b!store (key) (value)")
          }
db.set(args[0], args[1]).then(() => {
  message.reply("successfully stored!")
});
        }
        if(command == "get") {
          if (!args[0]) {
            message.reply("please use this command like this: b!get (key)")
          }
db.get(args[0]).then(value => {
  if (!value == "") {
    message.channel.send(value)
  }
  else{
    message.reply("invalid key.")
  }
  
});
        }
        if(command == "delete") {
          if (!args[0]) {
            message.reply("Please use this command like this: b!delete (key)")
          }
db.delete(args[0]).then(() => {
  message.reply("Deleted a key!")
});
        }
        if (command == "keys") {
          if (args[0]) {
            
db.list(args[0]).then(matches => {
  message.reply(matches)
});
          }
          else {
            
db.list().then(keys => {
  message.reply(keys)
});
          }
        }
    })


client.login(process.env.TOKEN)
.then((output) => {
  console.log("Running bloxington! (Login Event)")

})
.catch(err => {
  console.error('');
  console.error(chalk.redBright("Couldn't log into Discord. Wrong bot token?"));
  console.error('');
  console.error(err);
  process.exit();
});




