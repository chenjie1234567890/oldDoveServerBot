exports.run = async (bot, message) => {
    const m = await message.channel.send("ping?");
        m.edit(`延迟是 ${m.createdTimestamp - message.createdTimestamp}ms.\nAPI延迟为 ${Math.round(bot.ping)}ms`);
    
}