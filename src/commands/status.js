const Discord = require("discord.js");
const botconfig = require("../../config.json");
var http = require('https');
exports.run = async (bot, message) => {
    message.reply("请求中...");
    var host = 'https://api.mcsrvstat.us/2/';
    var address = botconfig.serverAddress;
    var url = host + address;

    http.get(url, (res) => {
        var jsonStr = '';
        res.on("data", (data) => {
            // 构造json对象
            console.log(data);
            jsonStr += data;
            var jsonObj = JSON.parse(jsonStr);
            var embed = new Discord.MessageEmbed();
            // 请求成功
            if (jsonObj.debug.ping) {
                embed
                    .setColor('#0099ff')
                    .setAuthor(`${jsonObj.motd.clean}`)
                    .addFields({ name: '状态', value: `${jsonObj.debug.ping ? "√" : "×"}`, inline: true }, { name: '在线人数', value: `${jsonObj.players.online}/${jsonObj.players.max}`, inline: true }, { name: '在线玩家', value: `${jsonObj.players.list}` });
            } else { // 请求失败
                embed
                    .setColor('#0099ff')
                    .addFields({ name: '状态', value: "×", inline: true });
            }
            message.channel.send(embed);
        })

        res.on("end", () => {
            console.log(jsonStr)
        })
    }).on("error", (e) => {
        console.log(`获取数据失败: ${e.message}`)
    })
}