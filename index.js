const botconfig = require("./config.json");
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const bot = new Discord.Client();

bot.config = {
    prefix: '+',
    token: botconfig.token
};

fs.readdir("./src/events", (err, files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        const event = require(`./src/events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, event.bind(null, bot));
    });
});

bot.commands = new Enmap();

fs.readdir("./src/commands/", (err, files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let props = require(`./src/commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`load ${commandName}`);
        bot.commands.set(commandName, props);
    });
});

bot.login(botconfig.token);
