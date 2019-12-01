const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setTitle('MUSIC COMMAND')
  .setURL(bot.user.displayAvatarURL)
  .setDescription('**;play/;p**\nUse it like`;play<songname/url>`\n**;search**\nUse it like `;search <songname>`\n**;np/;nowplaying**\nCheck Who play song now\n**;pause**\n`pause your play current song`\n**;resume**\n`if song pause then use it`\n**;skip/;s/;next/;nxt**\n`Next song of queye list`\n**;dis/;dc**\n`if you want stop song`\n**;volume/;v/;bol**\n`Set volume to [0-100]`\n**;reload**\n`all Command.js has reload`\n**;list/;musiclist/;songlist**\n`you can see all queue in list`\n**;loop/;replay**\n`you can Song repeat`\n**;lyrics\n;ly/;l**\nuse it like`;ly <songname>`\n\n**__EXTRA COMMAND__**\n**;ping**\n `you can check bot latency`\n**;stats**\n`check stats this bot`')
  .setAuthor('TRIVIA TIME')
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: []
};
