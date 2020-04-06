const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Version 0.2.3");
	console.log("Connected");
});


bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("```\n Liste des commandes : \n \n *help - Affiche les commandes \n ```");
	}

	if (message.content === prefix + "Bourse Créer"){
		message.channel.sendMessage("Votre bourse à été créer "  + <@USER_ID> + " \n \n \n *C'est un test, en vrai vous avez pas de bourse*")

	}


	}
);

bot.login(process.env.TOKEN);
