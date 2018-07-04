const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = ["Heads.", "Tails."];

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#4286f4")
  .addField("Result", replies[result]);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "flipacoin"
}
