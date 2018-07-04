const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("How To Not Be A Mistake", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


if(cmd === `${prefix}server_info`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("server Information")
  .setColor("64ff42")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

if(cmd === `${prefix}Server_info`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("server Information")
  .setColor("64ff42")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

  if(cmd === `${prefix}bot_info`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#64ff42")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}Bot_info`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#64ff42")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

if(cmd === `${prefix}victor`){
  return message.channel.send("Sock Time Sock Time Sock Time Sock Time Sock Time", { tts: true });
}
if(cmd === `${prefix}Victor`){
  return message.channel.send("Sock Time Sock Time Sock Time Sock Time Sock Time", { tts: true });
}
if(cmd === `${prefix}autism`){
  return message.channel.send(":red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle:", { tts: true });
}
if(cmd === `${prefix}Autism`){
  return message.channel.send(":red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle: :red_circle:", { tts: true });
}

if(cmd === `${prefix}Who_is_a_furry?`){
  return message.channel.send("Victor is a furry", { tts: true, files: ["https://cdn.discordapp.com/attachments/459592835574792195/462486143569756161/image.jpg"]});
}

if(cmd === `${prefix}who_is_a_furry?`){
  return message.channel.send("Victor is a furry", { tts: true, files: ["https://cdn.discordapp.com/attachments/459592835574792195/462486143569756161/image.jpg"]});
}

if(cmd === `${prefix}Cease`){
  return message.channel.send("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
}

if(cmd === `${prefix}cease`){
  return message.channel.send("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
}

if(cmd === `${prefix}Cease*`){
  return message.channel.send("cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease cease", { tts: true });
}

if(cmd === `${prefix}Disable`){
  return message.channel.send("You can't disable me!", { tts: true });
}

if(cmd === `${prefix}disable`){
  return message.channel.send("You can't disable me!", { tts: true });
}

if(cmd === `${prefix}Liam`){
  return message.channel.send("https://cdn.discordapp.com/attachments/459592835574792195/460590191330197504/23c84a6356630fc92cf4231a5819341d4ac06177_00.jpg");
}

if(cmd === `${prefix}liam`){
  return message.channel.send("https://cdn.discordapp.com/attachments/459592835574792195/460590191330197504/23c84a6356630fc92cf4231a5819341d4ac06177_00.jpg");
}

if(cmd === `${prefix}No_u`){
  return message.channel.send("https://cdn.discordapp.com/attachments/459592835574792195/460638981089001490/CSuB3ZW.png");
}

if(cmd === `${prefix}no_u`){
  return message.channel.send("https://cdn.discordapp.com/attachments/459592835574792195/460638981089001490/CSuB3ZW.png");
}

if(cmd === `${prefix}felix`){
  return message.channel.send("https://cdn.discordapp.com/attachments/459592835574792195/461383582665932810/image.jpg");
}

if(cmd === `${prefix}Felix`){
  return message.channel.send("https://cdn.discordapp.com/attachments/459592835574792195/461383582665932810/image.jpg");
}

if(cmd === `${prefix}cameron`){
  return message.channel.send("Big brain Camy Stek", { tts: true, files: ["https://cdn.discordapp.com/attachments/459734806834446337/461705590482141184/photo.png"]});
}

if(cmd === `${prefix}Cameron`){
  return message.channel.send("Big brain Camy Stek", { tts: true, files: ["https://cdn.discordapp.com/attachments/459734806834446337/461705590482141184/photo.png"]});
}

if(cmd === `${prefix}Dan`){
  return message.channel.send("When Grei threatened you and you hear noises downstairs", { tts: true, files: ["https://cdn.discordapp.com/attachments/459592835574792195/462366316880461825/20180527_104934.jpg"]});
}

if(cmd === `${prefix}dan`){
  return message.channel.send("When you throw acid on someone", { tts: true, files: ["https://cdn.discordapp.com/attachments/459592835574792195/462366316880461825/20180527_104934.jpg"]});
}

if(cmd === `${prefix}gay`){
  return message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/459592835574792195/462370545800052737/1.png"]});
}

if(cmd === `${prefix}Gay`){
  return message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/459592835574792195/462370545800052737/1.png"]});
}


});

bot.login(botconfig.token);
