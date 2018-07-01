const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Version 0.2.1");
	console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("```\n Liste des commandes : \n \n *help - Affiche les commandes \n ```");
	}

	if (message.content === prefix + "BourseCréer"){
		message.channel.sendMessage("Votre bourse à été créer " + member.displayName + " \n \n \n *C'est un test, en vrai vous avez pas de bourse*")

	}


	}
);
