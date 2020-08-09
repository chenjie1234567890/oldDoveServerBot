module.exports = async bot => {

    console.log(`${bot.user.username} has started, used ${bot.users.size} users, used ${bot.channels.size} channels, used ${bot.guilds.size} servers.`);
    bot.user.setActivity(`join ${bot.guilds.size}.`, { type: "STREAMING" });

}