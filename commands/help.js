const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setTitle('MUSIC COMMAND')
  .setURL('https://cadmium.glitch.me')
  .setDescription('*help\n*play')
  .setAuthor('TRIVIA TIME')
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor(bot.embedColor)
  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: []
};
