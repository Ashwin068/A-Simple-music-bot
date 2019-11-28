const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setTitle('Documentation')
  .setURL('https://cadmium.glitch.me')
  .setDescription('The Cadmium Music Bot')
  .setAuthor('Cadmium')
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor(bot.embedColor)
  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: []
};
