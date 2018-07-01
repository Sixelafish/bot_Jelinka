const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Commande aide : *help");
	console.log("Connected");
});

bot.login(process.env.TOKEN);
