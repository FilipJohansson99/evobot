const { MessageEmbed } = require("discord.js");
const { play } = require("../include/play");
const { YOUTUBE_API_KEY, MAX_PLAYLIST_SIZE, SOUNDCLOUD_CLIENT_ID } = require("../config.json");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
const scdl = require("soundcloud-downloader")

module.exports = {
  name: "playlistadd",
  cooldown: 3,
  aliases: ["pla"],
  description: "Play a playlist from youtube",
  async execute(message, args) {
    const { PRUNING } = require("../config.json");
    const { channel } = message.member.voice;
    const { id } = 384501410210906113;


    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}playlist <YouTube Playlist URL | Playlist Name>`)
        .catch(console.error);

    const search = args.join(" ");
    const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = pattern.test(args[0]);

    let song = null;
    let playlist = null;
    let videos = [];

    if (urlValid) {
      try {
        playlist = await youtube.getPlaylist(url, { part: "snippet" });
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply("Playlist not found :(").catch(console.error);
      }
    } else if (scdl.isValidUrl(args[0])) {
      if (args[0].includes('/sets/')) {
        message.channel.send('⌛ fetching the playlist...')
        playlist = await scdl.getSetInfo(args[0], SOUNDCLOUD_CLIENT_ID)
        videos = playlist.tracks.map(track => ({
          title: track.title,
          url: track.permalink_url,
          duration: track.duration / 1000
        }))
      }
    } else {
      try {
        const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
        playlist = results[0];
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply("Playlist not found :(").catch(console.error);
      }
    }

    videos.forEach((video) => {
      song = {
        title: video.title,
        url: video.url,
        duration: video.durationSeconds
      };


    });

    let playlistEmbed = new MessageEmbed()
      .setTitle(`${playlist.title}`)
      .setURL(playlist.url)
      .setColor("#F8AA2A")
      .setThumbnail("https://cdn.discordapp.com/attachments/752353797438963732/752462041960153148/FolkhemmetLogo.png")
      .setFields(
        { value: `${song.title[0]}`, inline: true },
		{ value: `${song.title[1]}`, inline: true },
      )
      .setFields(
        { value: `${song.title[2]}`, inline: true },
		{ value: `${song.title[3]}`, inline: true },
      )
      .setFields(
        { value: `${song.title[4]}`, inline: true },
		{ value: `${song.title[5]}`, inline: true },
      )
      .setFields(
        { value: `${song.title[6]}`, inline: true },
		{ value: `${song.title[7]}`, inline: true },
      )
      .setTimestamp();


      message.channel.send(playlistEmbed);

  }
};
