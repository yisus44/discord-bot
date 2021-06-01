require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const ext = "!";
const { createMessage } = require("./formats");

client.login(process.env.DISCORD_TOKEN);

client.on("ready", function () {
  console.log(`the bot is ready, ${client.user.tag}`);
  client.user.setStatus("online");
});

client.on("message", async function (msg) {
  //receiving the message

  if (msg.content === "hello") {
    msg.channel.send(`Hi there! ${msg.author}`);
  }

  if (msg.content.includes(ext + "test")) {
    msg.channel.send("Glad you are testing, ye");
  }

  if (msg.content.includes("ye")) {
    if (msg.content === "ye") {
      msg.channel.send("ye ye ye!");
    } else if (msg.content === "ye ye") {
      msg.channel.send("ye ye!");
    } else if (msg.content === "ye ye ye") {
      msg.channel.send("ye!");
    }
  }

  if (msg.content === ext + "help") {
    try {
      const helpMessage = createMessage(
        "help",
        "blue",
        "mr ye",
        "type ye or yeye or yeyeye. ye"
      );
      msg.channel.send(helpMessage);
    } catch (err) {
      msg.channel.send("Something went wrong with our server, ye");
      console.log(err);
    }
  }

  if (msg.content === ext + "pretty") {
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
      msg.channel.send("Something went wrong with our server, ye");
      console.log(error);
    }
  }
});
