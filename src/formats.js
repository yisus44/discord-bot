const { MessageEmbed } = require("discord.js");

function createMessage(title, color, author, description) {
  const helpFormat = new MessageEmbed();
  helpFormat.setColor(color);
  helpFormat.setAuthor(author), helpFormat.setTitle(title);
  helpFormat.setDescription(description);
  return helpFormat;
}

module.exports = { createMessage };
