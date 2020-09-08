const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "clear",
  aliases: ["q"],
  description: "Removes all songs from playlist",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    queue.songs.length = 0;
    queue.textChannel.send(`${message.author} ❌ cleared the queue.`);
  }
};