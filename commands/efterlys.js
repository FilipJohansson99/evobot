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
      .setTitle('**Marcus "Möög" Jarlinius**')
      .setURL('https://www.facebook.com/marcus.jarliniusmalmquist/')
      .setAuthor('Deserterare efterlyst för CoH-flykt')
      .setThumbnail('https://cdn.discordapp.com/attachments/752349625306054697/762625684748763146/48356487_1974984045883590_1941520866437234688_n.jpg')
      .addFields(
          { name: 'Brottet', value: 'Efter Marcus Jarlinius CoH-deklaration för perioden Augusti-Oktober 2020 var det tydligt för Wehrverket att Marcus inte spelat tillräckligt med CoH. Den 3:e Augusti gjorde CoPo en räd mot cyberterroristens högkvarter och satte in felaktig RAM i gärningsmannens dator vilket orsakade en total kollaps av deserterarens infrastruktur, men bara dagar senare hade han beslagtagit en ny station. Senare i September upptäckte CoPo att gärningsmannen slagit sönder sin dator efter en stor övning på "War Thunder". Förövaren antas nu vara i asyl hemma hos Mahmod, känd lyxfågelfröhandlare där han sprider dåliga memes hela dagarna.' },
          { name: '\u200B', value: '\u200B' },
          { name: '\u200B', value: 'En belöning på 1 valskinn kan erhållas efter fångsten av gärningsmannen' },
      )
      .setImage('https://cdn.discordapp.com/attachments/752349625306054697/762623550720442368/992205.png')
      .setTimestamp()
      .setFooter('Rikspolischef, Gerhard Axelsson', 'https://cdn.discordapp.com/attachments/752349625306054697/754439823565258822/10443016_10152939590232333_6578930986165096330_o.jpg');
        message.channel.send(exampleEmbed);
    
      }
};