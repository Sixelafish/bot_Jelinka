const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Version 0.0.1");
	console.log("Connected");
});

bot.login(process.env.TOKEN);
