const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Commande aide : *help");
	console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("```\n Liste des commandes : \n *help - Affiche les commandes ");
	}
