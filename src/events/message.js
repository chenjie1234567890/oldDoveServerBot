module.exports = (bot, message) => {
    const prefix = bot.config.prefix;
    
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    const command = bot.commands.get(cmd);

    if(!command) return;

    command.run(bot, message, args);
};