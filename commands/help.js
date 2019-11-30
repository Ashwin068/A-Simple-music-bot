const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setTitle('MUSIC COMMAND')
  .setURL(bot.user.displayAvatarURL)
  .setDescription('**;play**\nUse it like`;play<songname/url>`\n**;search**\nUse it like `;search <songname>`\n**;np/;nowplaying**\nCheck Who play song now\n**;pause**\npause your play current song')
  .setAuthor('TRIVIA TIME')
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: []
};
