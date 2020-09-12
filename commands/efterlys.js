const { MessageEmbed } = require("discord.js");
const { play } = require("../include/play");
const { YOUTUBE_API_KEY, MAX_PLAYLIST_SIZE, SOUNDCLOUD_CLIENT_ID } = require("../config.json");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
const scdl = require("soundcloud-downloader")

module.exports = {
  name: "efterlys",
  cooldown: 3,
  aliases: ["efl"],
  description: "Efterlys Hugp",
  async execute(message, args) {
    const { PRUNING } = require("../config.json");
    const { channel } = message.member.voice;

      
      let exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Efterlyses, död eller levande')
      .setURL('https://discord.js.org/')
      .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .setDescription('**Hugo "HuuG" Engren**')
      .setThumbnail('https://cdn.discordapp.com/attachments/752349625306054697/754437743454453791/735019_403801926376704_2121460872_n.jpg')
      .addFields(
          { name: 'Regular field title', value: 'Herr Engren syntes senast till på en bögklubb lördagen 09-12 kring kl. 22, där vittnen hört vrålen av bögsex i bakgrunden efter ett samtal gjordes strax före anmälningen. Hugo antas därefter fortsatt med sina olovliga handlingar istället för att återvända till "CoH 2". Hugo anses nu vara mycket farlig och bögig för allmänheten' },
          { name: '\u200B', value: '\u200B' },
      )
      .addField('En belöning på 500 "Supply" kan erhållas efter fångsten av gärningsmannen', true)
      .setImage('https://cdn.discordapp.com/attachments/752353797438963732/752462041960153148/FolkhemmetLogo.png')
      .setTimestamp()
      .setFooter('Rikspolischef, Gerhard Axelsson', 'https://cdn.discordapp.com/attachments/752349625306054697/754439823565258822/10443016_10152939590232333_6578930986165096330_o.jpg');
        message.channel.send(exampleEmbed);
    
      }
};