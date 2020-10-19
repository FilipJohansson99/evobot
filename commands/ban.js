const { MessageEmbed } = require("discord.js");
const { play } = require("../include/play");
const { YOUTUBE_API_KEY, MAX_PLAYLIST_SIZE, SOUNDCLOUD_CLIENT_ID } = require("../config.json");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
const scdl = require("soundcloud-downloader")

module.exports = {
  name: "ban",
  cooldown: 3,
  aliases: ["b"],
  description: "Banna användare",
  async execute(message, args) {
    const { PRUNING } = require("../config.json");
    const { channel } = message.member.voice;
    const  användare  = message.mentions.users

    
      let exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**Bannlysa', användare, '?**' )
      .setURL('https://www.facebook.com/marcus.jarliniusmalmquist/')
      .setAuthor('Deserterare efterlyst för CoH-flykt')
      .setThumbnail('https://cdn.discordapp.com/attachments/752349625306054697/762625684748763146/48356487_1974984045883590_1941520866437234688_n.jpg')
      .setImage('https://cdn.discordapp.com/attachments/752349625306054697/762623550720442368/992205.png')
      .setTimestamp()
      .setFooter('Rikspolischef, Gerhard Axelsson', 'https://cdn.discordapp.com/attachments/752349625306054697/754439823565258822/10443016_10152939590232333_6578930986165096330_o.jpg');
        message.channel.send(exampleEmbed);
    
      }
};