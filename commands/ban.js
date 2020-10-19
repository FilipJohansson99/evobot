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
    const taggedUser = message.mentions.users.first();

    var Author = "Banna " + taggedUser.username + "?";
    var Title = 'Verifiera Bannlysning';

      let exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(Title)
      .setURL('https://www.facebook.com/marcus.jarliniusmalmquist/')
      .setAuthor(Author)
      .setDescription('Klicka på länken för att varifiera ban.')
      .setThumbnail(`${message.taggedUser.displayAvatarURL({ format: 'png', dynamic: true })}`)
      .setTimestamp()
      .setFooter(`${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true }));
        message.channel.send(exampleEmbed);
    
      }
};