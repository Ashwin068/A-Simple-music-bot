const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setTitle('MUSIC COMMAND')
  .setURL(bot.user.displayAvatarURL)
  .setDescription('**;play/;p**\nUse it like`;play<songname/url>`\n**;search**\nUse it like `;search <songname>`\n**;np/;nowplaying**\nCheck Who play song now\n**;pause**\n`pause your play current song`\n**;resume**\n`if song pause then use it`\n**;skip/;s/;next/;nxt**\n`Next song of queye list`\n**;dis/;dc**\n`if you want stop song`\n')
  .setAuthor('TRIVIA TIME')
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: []
};
