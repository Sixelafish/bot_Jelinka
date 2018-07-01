const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Version 0.2.0");
	console.log("Connected");
});



bot.on('guildMemberAdd', member => {
  create.var = money.DisplayName
    return channel.send('Voici ton argent : ' + money.displayName + member.displayName)
  }).catch(console.error)





bot.login(process.env.TOKEN);

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("```\n Liste des commandes : \n \n *help - Affiche les commandes \n ```");
	}


	}
);
