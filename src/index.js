require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on("ready", function () {
  console.log(`the bot is ready, ${client.user.tag}`);
  client.user.setStatus("online");
  const testChannel = client.channels;
});

client.on("message", async function (msg) {
  //receiving the message
  if (msg.content === "ping") {
    msg.reply("pong");
  }

  if (msg.content === "hello") {
    msg.channel.send(`Hi there! ${msg.author}`);
  }

  if (msg.content.includes("!test")) {
    msg.channel.send("Glad you are testing");
  }

  if (msg.content === "ye") {
    msg.channel.send("ye ye ye!");
  }

  if (msg.content === "ye ye ye") {
    msg.channel.send("ye!");
  }

  if (msg.content === "!pretty") {
    try {
      const embed = new MessageEmbed()
        // .addField("Something one", "Lorem ipsu")
        .setTitle("Ye")
        .setColor("RED")
        .setAuthor(
          "El kañas",
          "https://web.whatsapp.com/249c7c0f-556d-4c3b-9dc4-db37719bdc6e"
        );
      msg.channel.send(embed);
    } catch (error) {
      console.log(error);
    }
  }
});
