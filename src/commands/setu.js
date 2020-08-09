const Discord = require("discord.js");
const botconfig = require("../../config.json");
exports.run = async (bot, message) => {
    message.reply("请求中...");
    const Booru = require('booru')
    // for ES6:
    // import Booru, { search, BooruError, sites } from 'booru'

    const argTags = process.argv.slice(3)
    const site = process.argv[2] || 'konan'
    const tags = argTags.length > 0 ? argTags : ['uncensored']

    // Search with promises
    Booru.search(site, tags, { limit: 1, random: true })
        .then(posts => {
            if (posts.length === 0) {
                console.log('No images found.')
            }
            var embed = new Discord.MessageEmbed();
            for (let post of posts) {
                console.log(post.fileUrl)
                embed.setImage(post.fileUrl);
            }
            message.channel.send(embed);

        })
        .catch((e) => {
            console.log(`setu error:${e.message}`);
        });
}