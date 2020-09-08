const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "clear",
  aliases: ["q"],
  description: "Removes all songs from playlist",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Usage: ${message.client.prefix}clear`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}clear`);
    queue = [];
    queue.textChannel.send(`${message.author} ❌ cleared the queue.`);
  }
};