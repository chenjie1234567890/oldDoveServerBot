module.exports = async (client, member) => {
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "加入日期"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": `欢迎使用服务器 ${member.guild.name}`,
		  "value": "请阅读公告，与他人保持良好关系，否则将会被踢出/关小黑屋哦"
		}
	  ]
	};
	member.guild.channels.find("name","geral").send({embed});
}