const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const talkedRecently = new Set();

const bot = new Discord.Client({disableEveryone: true});

// bot.on("ready", async () => {
//   console.log(`${bot.user.username} is fighting!`);
//   for (var i = 0; i<100;i++){
//   bot.user.setActivity("%help", {type: "playing"});
//   bot.user.setActivity("%clans", {type: "playing"});
//   bot.user.setActivity(`${bot.users.size} users`, {type: "WATCHING"});
// }
//   bot.user.setStatus(`online`);
// });

bot.on("ready", async () => {
  console.log(`${bot.user.username} is fighting!`);
    let setStatus = setInterval(function () {
        var names = ["%help","%clans",`Watching ${bot.users.size} users`];
        var game = names[Math.floor(Math.random() * names.length)];
       bot.user.setActivity(game,{ type: 'playing' });
     }, 10000)
});

bot.on("message", async message => {
  let prefix = botconfig.prefix;
  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    if(message.content.startsWith(prefix)){
    message.channel.send("Commands are Guild only!");
    return;
  }
}

  // let bot_channel = message.guild.channels.get('309443716299358211');
  //
  // if (!(message.channel.id === bot_channel)) {
  //   if(message.content.startsWith(prefix)){
  //     message.channel.send("Bruh you kiding me right. Have you even read the rules! You do bot commands in..... Oh yeah whats that channel called. Oh that's it right FUCKING <#309443716299358211>");
  //     return;
  //   }
  // }
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  // let owner = "198624804348100609";
  // let daddy = "217768377207226371";
  //
  // function clean(text) {
  //   if (typeof(text) === "string")
  //   return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  //   else
  //     return text;
  //   }
  //
  //   if (message.content.startsWith(botconfig.prefix + "eval")) {
  //       if(!(message.author.id == owner || message.author.id == daddy)) return;
  //         try {
  //           const code = args.join(" ");
  //           let evaled = eval(code);
  //
  //           if (typeof evaled !== "string")
  //             evaled = require("util").inspect(evaled);
  //
  //             message.channel.send(clean(evaled), {code:"xl"});
  //           } catch (err) {
  //               message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  //     }
  //   }

  if(cmd === `${prefix}help`){

    let helpembed = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path", true)
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let helpembed2 = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .setColor("00ff00")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path", true)
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let helpembed3 = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .setColor("f84a07")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path", true)
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let helpembed4 = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .setColor("f6f608")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path", true)
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let helpembed5 = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .setColor("fd03b7")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path")
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let helpembed6 = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .setColor("1dc495")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path", true)
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let helpembed7 = new Discord.RichEmbed()
    .setTitle("__Clan Commands__")
    .setColor("fd0707")
    .addField("%help", "Shows this message", true)
    .addField("%clans", "Shows a list of all clans", true)
    .addField("%join <clan name>", "Joins a clan", true)
    .addField("%leave <clan name>", "Leaves your current clan", true)
    .addField("%heal <@user>", "Heals yourself or another user", true)
    .addField("%fight <@user>", "Fight to the death with another user", true)
    .addField("%craft", "Craft something", true)
    .addField("%plant", "Plant some crops", true)
    .addField("%harvest", "Harvest some crops", true)
    .addField("%scout", "Scout out other clans", true)
    .addField("%engineer", "Choose an Engineer path", true)
    .addField("__Other Commands__", "***not related to clans***")
    .addField("%report <@user> <reason>", "Report someone breaking the rules", true)
    .addField("%suggest <suggestion>", "Suggest an idea for the server", true)
    .addField("%ping", "Pings the bot", true)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();


    let endingembed = new Discord.RichEmbed()
    .setTitle("❌ Error! ❌")
    .setColor("RED")
    .addField("Connection Proxy Terminated", "User has over flown the bandiwidth of the bot.")
    .addField("User Termination", "User will be terminated in an estimated time of 2 hours.")
    .addField("Bot Termination", "Client will be terminated as it over flew our bandiwidth.")
    .setFooter("© Discord Trust and Safety Team 2018");

    const m = await message.channel.send(helpembed);
    for (var i = 0; i<2;i++){
    m.edit(helpembed2);
    m.edit(helpembed3);
    m.edit(helpembed4);
    m.edit(helpembed5);
    m.edit(helpembed6);
    m.edit(helpembed7);
    m.edit(helpembed);
  }
  // m.edit(endingembed)
  }

  if(cmd === `${prefix}clans`){

    let clansembed = new Discord.RichEmbed()
    .setTitle("__Clans List__")
    .setThumbnail("https://cdn.discordapp.com/attachments/309443716299358211/455901932058574879/the_100.jpg")
    .setDescription("\n• Skaikru \n• Trikru\n• Azgeda\n• Floukru\n• Sankru\n• Yujleda\n• Ouskejonkru\n• Delfikru\n• Trishanakru\n• Podakru\n• Ingranronakru\n• Boudalankru\n• Louwodakliron\n• Maungedakru\n• Wonkru")
    .addField("To join a clan do", "%join <clan name>")
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();
    message.channel.send(clansembed);
  }

  if(cmd === `${prefix}join`){

    let clans = ["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"]
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let member = message.member;
    let trikru = message.guild.roles.get("372865001330966529");
    let skaikru = message.guild.roles.get("372865157929631745");
    let azgeda = message.guild.roles.get("372865219480911873");
    let floukru = message.guild.roles.get("372865241840877568");
    let sankru = message.guild.roles.get("372865273402884096");
    let yujleda = message.guild.roles.get("372865297839030272");
    let ouskejonkru = message.guild.roles.get("372865375525928960");
    let delfikru = message.guild.roles.get("372865486238646293");
    let trishanakru = message.guild.roles.get("372865522670239744");
    let podakru = message.guild.roles.get("372865583764733953");
    let ingranronakru = message.guild.roles.get("372865621878243340");
    let boudalankru = message.guild.roles.get("372865679755444224");
    let louwodakliron = message.guild.roles.get("372865724827435010");
    let maungedakru = message.guild.roles.get("441239527164739584");
    let wonkru = message.guild.roles.get("436649781054406657");
    let trikruchannel = message.guild.channels.find(`name`, "trikru");
    let skaikruchannel = message.guild.channels.find(`name`, "skaikru");
    let azgedachannel = message.guild.channels.find(`name`, "azgeda");
    let floukruchannel = message.guild.channels.find(`name`, "floukru");
    let sankruchannel = message.guild.channels.find(`name`, "sankru");
    let yujledachannel = message.guild.channels.find(`name`, "yujleda");
    let ouskejonkruchannel = message.guild.channels.find(`name`, "ouskejonkru");
    let delfikruchannel = message.guild.channels.find(`name`, "delfikru");
    let trishanakruchannel = message.guild.channels.find(`name`, "trishanakru");
    let podakruchannel = message.guild.channels.find(`name`, "podakru");
    let ingranronakruchannel = message.guild.channels.find(`name`, "ingranronakru");
    let boudalankruchannel = message.guild.channels.find(`name`, "boudalankru");
    let louwodaklironchannel = message.guild.channels.find(`name`, "louwodakliron");
    let maungedakruchannel = message.guild.channels.find(`name`, "maungedakru");
    let wonkruchannel = message.guild.channels.find(`name`, "wonkru");

    if(args.length === 0) {
       message.channel.send("❌ No clan name was entered! ❌")
       return;
    }

    if(args.length >= 2) {
      message.channel.send("❌ Too many arguments was given! ❌ *Use* ***%join <clan name>***")
      return;
    }

    if(args.length === 1) {

    if(!clans.some(clans => message.content.includes(clans))) {
      message.channel.send("❌ Clan was not recognized! ❌ *Do* ***%clans*** *to see clans list*")
      return;
    }}

    if(args[0] === "Trikru") {

    if(message.member.roles.has(trikru.id) && (!rUser)){
      message.channel.send("❌ You are already in this clan! ❌")
      return;
}
    if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
      message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Trikru***")
      return;
    }
    if(!message.member.roles.some(r=>["Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
      message.channel.send("✅ You joined **Trikru**! ✅").then(member.addRole("372865001330966529"))
      trikruchannel.send(`${message.author} has joined your clan!`)
      return;
    }

    }

    if(args[0] === "Skaikru") {
      if(message.member.roles.has(skaikru.id) && (!rUser)){
        message.channel.send("❌ You are already in this clan! ❌")
        return;
      }
      if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
        message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Skaikru***")
        return;
      }
      if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
        message.channel.send("✅ You joined **Skaikru**! ✅").then(member.addRole("372865157929631745"))
        skaikruchannel.send(`${message.author} has joined your clan!`)
        return;
      }

      }

      if(args[0] === "Azgeda") {
        if(message.member.roles.has(azgeda.id) && (!rUser)){
          message.channel.send("❌ You are already in this clan! ❌")
          return;
        }
        if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
          message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Azgeda***")
          return;
        }
        if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
          message.channel.send("✅ You joined **Azgeda**! ✅").then(member.addRole("372865219480911873"))
          azgedachannel.send(`${message.author} has joined your clan!`)
          return;
        }

        }

        if(args[0] === "Floukru") {
          if(message.member.roles.has(floukru.id) && (!rUser)){
            message.channel.send("❌ You are already in this clan! ❌")
            return;
          }
          if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
            message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Floukru***")
            return;
          }
          if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
            message.channel.send("✅ You joined **Floukru**! ✅").then(member.addRole("372865241840877568"))
            floukruchannel.send(`${message.author} has joined your clan!`)
            return;
          }

          }

          if(args[0] === "Sankru") {
            if(message.member.roles.has(sankru.id) && (!rUser)){
              message.channel.send("❌ You are already in this clan! ❌")
              return;
            }
            if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
              message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Sankru***")
              return;
            }
            if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
              message.channel.send("✅ You joined **Sankru**! ✅").then(member.addRole("372865273402884096"))
              sankruchannel.send(`${message.author} has joined your clan!`)
              return;
            }

            }

            if(args[0] === "Yujleda") {
              if(message.member.roles.has(yujleda.id) && (!rUser)){
                message.channel.send("❌ You are already in this clan! ❌")
                return;
              }
              if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Yujleda***")
                return;
              }
              if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                message.channel.send("✅ You joined **Yujleda**! ✅").then(member.addRole("372865297839030272"))
                yujledachannel.send(`${message.author} has joined your clan!`)
                return;
              }

              }

              if(args[0] === "Ouskejonkru") {
                if(message.member.roles.has(ouskejonkru.id) && (!rUser)){
                  message.channel.send("❌ You are already in this clan! ❌")
                  return;
                }
                if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                  message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Ouskejonkru***")
                  return;
                }
                if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                  message.channel.send("✅ You joined **Ouskejonkru**! ✅").then(member.addRole("372865375525928960"))
                  ouskejonkruchannel.send(`${message.author} has joined your clan!`)
                  return;
                }

                }
                if(args[0] === "Delfikru") {
                  if(message.member.roles.has(delfikru.id) && (!rUser)){
                    message.channel.send("❌ You are already in this clan! ❌")
                    return;
                  }
                  if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                    message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Delfikru***")
                    return;
                  }
                  if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                    message.channel.send("✅ You joined **Delfikru**! ✅").then(member.addRole("372865486238646293"))
                    delfikruchannel.send(`${message.author} has joined your clan!`)
                    return;
                  }

                  }
                  if(args[0] === "Trishanakru") {
                    if(message.member.roles.has(trishanakru.id) && (!rUser)){
                      message.channel.send("❌ You are already in this clan! ❌")
                      return;
                    }
                    if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                      message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Trishanakru***")
                      return;
                    }
                    if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                      message.channel.send("✅ You joined **Trishanakru**! ✅").then(member.addRole("372865522670239744"))
                      trishanakruchannel.send(`${message.author} has joined your clan!`)
                      return;
                    }

                    }
                    if(args[0] === "Podakru") {
                      if(message.member.roles.has(podakru.id) && (!rUser)){
                        message.channel.send("❌ You are already in this clan! ❌")
                        return;
                      }
                      if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                        message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Podakru***")
                        return;
                      }
                      if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                        message.channel.send("✅ You joined **Podakru**! ✅").then(member.addRole("372865583764733953"))
                        podakruchannel.send(`${message.author} has joined your clan!`)
                        return;
                      }

                      }
                      if(args[0] === "Ingranronakru") {
                        if(message.member.roles.has(ingranronakru.id) && (!rUser)){
                          message.channel.send("❌ You are already in this clan! ❌")
                          return;
                        }
                        if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                          message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Ingranronakru***")
                          return;
                        }
                        if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                          message.channel.send("✅ You joined **Ingranronakru**! ✅").then(member.addRole("372865621878243340"))
                          ingranronakruchannel.send(`${message.author} has joined your clan!`)
                          return;
                        }

                        }
                        if(args[0] === "Boudalankru") {
                          if(message.member.roles.has(boudalankru.id) && (!rUser)){
                            message.channel.send("❌ You are already in this clan! ❌")
                            return;
                          }
                          if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                            message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Boudalankru***")
                            return;
                          }
                          if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                            message.channel.send("✅ You joined **Boudalankru**! ✅").then(member.addRole("372865679755444224"))
                            boudalankruchannel.send(`${message.author} has joined your clan!`)
                            return;
                          }

                          }
                          if(args[0] === "Louwodakliron") {
                            if(message.member.roles.has(louwodakliron.id) && (!rUser)){
                              message.channel.send("❌ You are already in this clan! ❌")
                              return;
                            }
                            if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                              message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Louwodakliron***")
                              return;
                            }
                            if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                              message.channel.send("✅ You joined **Louwodakliron**! ✅").then(member.addRole("372865724827435010"))
                              louwodaklironchannel.send(`${message.author} has joined your clan!`)
                              return;
                            }

                            }
                            if(args[0] === "Maungedakru") {
                              if(message.member.roles.has(maungedakru.id) && (!rUser)){
                                message.channel.send("❌ You are already in this clan! ❌")
                                return;
                              }
                              if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Maungedakru***")
                                return;
                              }
                              if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                message.channel.send("✅ You joined **Maungedakru**! ✅").then(member.addRole("441239527164739584"))
                                maungedakruchannel.send(`${message.author} has joined your clan!`)
                                return;
                              }

                              }
                              if(args[0] === "Wonkru") {
                                if(message.member.roles.has(wonkru.id) && (!rUser)){
                                  message.channel.send("❌ You are already in this clan! ❌")
                                  return;
                                }
                                if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                  message.channel.send("❌ You are already in a clan! ❌ *To join a different clan do* ***%leave <current clan name>*** *then do* ***%join Wonkru***")
                                  return;
                                }
                                if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                  message.channel.send("✅ You joined **Wonkru**! ✅").then(member.addRole("436649781054406657"))
                                  wonkruchannel.send(`${message.author} has joined your clan!`)
                                  return;
                                }

                                }

    }

    if(cmd === `${prefix}leave`){

      let clans = ["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"]
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let member = message.member;
      let trikru = message.guild.roles.get("372865001330966529");
      let skaikru = message.guild.roles.get("372865157929631745");
      let azgeda = message.guild.roles.get("372865219480911873");
      let floukru = message.guild.roles.get("372865241840877568");
      let sankru = message.guild.roles.get("372865273402884096");
      let yujleda = message.guild.roles.get("372865297839030272");
      let ouskejonkru = message.guild.roles.get("372865375525928960");
      let delfikru = message.guild.roles.get("372865486238646293");
      let trishanakru = message.guild.roles.get("372865522670239744");
      let podakru = message.guild.roles.get("372865583764733953");
      let ingranronakru = message.guild.roles.get("372865621878243340");
      let boudalankru = message.guild.roles.get("372865679755444224");
      let louwodakliron = message.guild.roles.get("372865724827435010");
      let maungedakru = message.guild.roles.get("441239527164739584");
      let wonkru = message.guild.roles.get("436649781054406657");
      let trikruchannel = message.guild.channels.find(`name`, "trikru");
      let skaikruchannel = message.guild.channels.find(`name`, "skaikru");
      let azgedachannel = message.guild.channels.find(`name`, "azgeda");
      let floukruchannel = message.guild.channels.find(`name`, "floukru");
      let sankruchannel = message.guild.channels.find(`name`, "sankru");
      let yujledachannel = message.guild.channels.find(`name`, "yujleda");
      let ouskejonkruchannel = message.guild.channels.find(`name`, "ouskejonkru");
      let delfikruchannel = message.guild.channels.find(`name`, "delfikru");
      let trishanakruchannel = message.guild.channels.find(`name`, "trishanakru");
      let podakruchannel = message.guild.channels.find(`name`, "podakru");
      let ingranronakruchannel = message.guild.channels.find(`name`, "ingranronakru");
      let boudalankruchannel = message.guild.channels.find(`name`, "boudalankru");
      let louwodaklironchannel = message.guild.channels.find(`name`, "louwodakliron");
      let maungedakruchannel = message.guild.channels.find(`name`, "maungedakru");
      let wonkruchannel = message.guild.channels.find(`name`, "wonkru");

      if(args.length === 0) {
         message.channel.send("❌ The clan name was not entered! ❌")
         return;
      }

      if(args.length >= 2) {
        message.channel.send("❌ Too many arguments was given! ❌ *Use* ***%leave <clan name>***")
        return;
      }

      if(args.length === 1) {

      if(!clans.some(clans => message.content.includes(clans))) {
        message.channel.send("❌ Clan was not recognized! ❌ *Do* ***%clans*** *to see clans list*")
        return;
      }}
      if(!message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
        message.channel.send("❌ You are not in a clan! ❌ *Do* ***%join <clan name>*** *to join a clan*")
        return;
      }

      if(args[0] === "Trikru") {
        if(message.member.roles.has(trikru.id) && (!rUser)){
          message.channel.send("✅ You left **Trikru**! ✅").then(member.removeRole("372865001330966529"))
          trikruchannel.send(`${message.author} has left your clan!`)
          return;
        }
        if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
          message.channel.send("❌ You are not in this clan! ❌")
          return;
        }
      }
        if(args[0] === "Skaikru") {
          if(message.member.roles.has(skaikru.id) && (!rUser)){
            message.channel.send("✅ You left **Skaikru**! ✅").then(member.removeRole("372865157929631745"))
            skaikruchannel.send(`${message.author} has left your clan!`)
            return;
          }
          if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
            message.channel.send("❌ You are not in this clan! ❌")
            return;
          }
        }
          if(args[0] === "Azgeda") {
            if(message.member.roles.has(azgeda.id) && (!rUser)){
              message.channel.send("✅ You left **Azgeda**! ✅").then(member.removeRole("372865219480911873"))
              azgedachannel.send(`${message.author} has left your clan!`)
              return;
            }
            if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
              message.channel.send("❌ You are not in this clan! ❌")
              return;
            }
          }
            if(args[0] === "Floukru") {
              if(message.member.roles.has(floukru.id) && (!rUser)){
                message.channel.send("✅ You left **Floukru**! ✅").then(member.removeRole("372865241840877568"))
                floukruchannel.send(`${message.author} has left your clan!`)
                return;
              }
              if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                message.channel.send("❌ You are not in this clan! ❌")
                return;
              }
            }
              if(args[0] === "Sankru") {
                if(message.member.roles.has(sankru.id) && (!rUser)){
                  message.channel.send("✅ You left **Sankru**! ✅").then(member.removeRole("372865273402884096"))
                  sankruchannel.send(`${message.author} has left your clan!`)
                  return;
                }
                if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                  message.channel.send("❌ You are not in this clan! ❌")
                  return;
                }
              }
                if(args[0] === "Yujleda") {
                  if(message.member.roles.has(yujleda.id) && (!rUser)){
                    message.channel.send("✅ You left **Yujleda**! ✅").then(member.removeRole("372865297839030272"))
                    yujledachannel.send(`${message.author} has left your clan!`)
                    return;
                  }
                  if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                    message.channel.send("❌ You are not in this clan! ❌")
                    return;
                  }
                }
                  if(args[0] === "Ouskejonkru") {
                    if(message.member.roles.has(ouskejonkru.id) && (!rUser)){
                      message.channel.send("✅ You left **Ouskejonkru**! ✅").then(member.removeRole("372865375525928960"))
                      ouskejonkruchannel.send(`${message.author} has left your clan!`)
                      return;
                    }
                    if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                      message.channel.send("❌ You are not in this clan! ❌")
                      return;
                    }
                  }
                    if(args[0] === "Delfikru") {
                      if(message.member.roles.has(delfikru.id) && (!rUser)){
                        message.channel.send("✅ You left **Delfikru**! ✅").then(member.removeRole("372865486238646293"))
                        delfikruchannel.send(`${message.author} has left your clan!`)
                        return;
                      }
                      if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                        message.channel.send("❌ You are not in this clan! ❌")
                        return;
                      }
                    }
                      if(args[0] === "Trishanakru") {
                        if(message.member.roles.has(trishanakru.id) && (!rUser)){
                          message.channel.send("✅ You left **Trishanakru**! ✅").then(member.removeRole("372865522670239744"))
                          trishanakruchannel.send(`${message.author} has left your clan!`)
                          return;
                        }
                        if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                          message.channel.send("❌ You are not in this clan! ❌")
                          return;
                        }
                      }
                        if(args[0] === "Podakru") {
                          if(message.member.roles.has(podakru.id) && (!rUser)){
                            message.channel.send("✅ You left **Podakru**! ✅").then(member.removeRole("372865583764733953"))
                            podakruchannel.send(`${message.author} has left your clan!`)
                            return;
                          }
                          if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                            message.channel.send("❌ You are not in this clan! ❌")
                            return;
                          }
                        }
                          if(args[0] === "Ingranronakru") {
                            if(message.member.roles.has(ingranronakru.id) && (!rUser)){
                              message.channel.send("✅ You left **Ingranronakru**! ✅").then(member.removeRole("372865621878243340"))
                              ingranronakruchannel.send(`${message.author} has left your clan!`)
                              return;
                            }
                            if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                              message.channel.send("❌ You are not in this clan! ❌")
                              return;
                            }
                          }
                            if(args[0] === "Boudalankru") {
                              if(message.member.roles.has(boudalankru.id) && (!rUser)){
                                message.channel.send("✅ You left **Boudalankru**! ✅").then(member.removeRole("372865679755444224"))
                                boudalankruchannel.send(`${message.author} has left your clan!`)
                                return;
                              }
                              if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                message.channel.send("❌ You are not in this clan! ❌")
                                return;
                              }
                            }
                              if(args[0] === "Louwodakliron") {
                                if(message.member.roles.has(louwodakliron.id) && (!rUser)){
                                  message.channel.send("✅ You left **Louwodakliron**! ✅").then(member.removeRole("372865724827435010"))
                                  louwodaklironchannel.send(`${message.author} has left your clan!`)
                                  return;
                                }
                                if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                  message.channel.send("❌ You are not in this clan! ❌")
                                  return;
                                }
                              }
                                if(args[0] === "Maungedakru") {
                                  if(message.member.roles.has(maungedakru.id) && (!rUser)){
                                    message.channel.send("✅ You left **Maungedakru**! ✅").then(member.removeRole("441239527164739584"))
                                    maungedakruchannel.send(`${message.author} has left your clan!`)
                                    return;
                                  }
                                  if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                    message.channel.send("❌ You are not in this clan! ❌")
                                    return;
                                  }
                                }
                                  if(args[0] === "Wonkru") {
                                    if(message.member.roles.has(wonkru.id) && (!rUser)){
                                      message.channel.send("✅ You left **Wonkru**! ✅").then(member.removeRole("436649781054406657"))
                                      wonkruchannel.send(`${message.author} has left your clan!`)
                                      return;
                                    }
                                    if(message.member.roles.some(r=>["Trikru", "Azgeda", "Skaikru", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Maungedakru", "Wonkru"].includes(r.name)) ) {
                                      message.channel.send("❌ You are not in this clan! ❌")
                                      return;
                                    }
}

    }


    if(cmd === `${prefix}report`){

    message.delete().catch(O_o=>{});
    let reporter = message.author
    let reportschannel = message.guild.channels.find(`name`, "reports");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.join(" ").slice(22);
    if(!rUser) {
      message.reply("you did not mention anyone to report!")
        .then(msg => {
          msg.delete(2500);
        });
        return;
    }
    if(!reason) {
      message.reply("you did not supply a reason!")
        .then(msg => {
          msg.delete(2500);
        });
        return;
    }

    let reportedEmbed = new Discord.RichEmbed()
    .setTitle("__Report__")
    .setDescription("Report Succesfully Created! It will be reviewd by a Staff member.")
    .addField("You reported:", `${rUser}`)
    .addField("In channel:", message.channel)
    .addField("At time:", message.createdAt)
    .addField("For reason:", reason)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

      message.author.send(reportedEmbed);


    let reportEmbed = new Discord.RichEmbed()
    .setTitle("__Report__")
    .setDescription("React with :white_check_mark: to accept it or :x: to deny it")
    .setColor("d39e1f")
    .addField("User Reported:", `${rUser}`)
    .addField("Reported By:", `${message.author}`)
    .addField("Reported in Channel:", message.channel)
    .addField("Time Reported:", message.createdAt)
    .addField("Reason Reported:", reason)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let acceptedreport = new Discord.RichEmbed()
    .setTitle("__Report__")
    .setDescription("Report Accepted")
    .setColor("00ff00")
    .addField("User Reported:", `${rUser}`)
    .addField("Reported By:", `${message.author}`)
    .addField("Reported in Channel:", message.channel)
    .addField("Time Reported:", message.createdAt)
    .addField("Reason Reported:", reason)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let deniedreport = new Discord.RichEmbed()
    .setTitle("__Report__")
    .setDescription("Report Denied")
    .setColor("fd0707")
    .addField("User Reported:", `${rUser}`)
    .addField("Reported By:", `${message.author}`)
    .addField("Reported in Channel:", message.channel)
    .addField("Time Reported:", message.createdAt)
    .addField("Reason Reported:", reason)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let reportedaccepted = new Discord.RichEmbed()
    .setTitle("__Report__")
    .setDescription("Your report was accepted!")
    .setColor("00ff00")
    .addField("You reported:", `${rUser}`)
    .addField("In channel:", message.channel)
    .addField("At time:", message.createdAt)
    .addField("For reason:", reason)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    let reporteddenied = new Discord.RichEmbed()
    .setTitle("__Report__")
    .setDescription("Your report was denied!")
    .setColor("fd0707")
    .addField("You reported:", `${rUser}`)
    .addField("In channel:", message.channel)
    .addField("At time:", message.createdAt)
    .addField("For reason:", reason)
    .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
    .setTimestamp();

    const m = await reportschannel.send(reportEmbed)
    .then( async function (message) {
      await message.react("✅")
      await message.react("❌")

       const reactions = await message.awaitReactions(reaction => reaction.emoji.name === '✅', {maxUsers: 1});
      message.edit(acceptedreport);
      // message.author.send(reportedaccepted);
      return;

      const reaction = await message.awaitReactions(reaction => reaction.emoji.name === '❌', {maxUsers: 1});
      message.edit(deniedreport);
      return;
      // message.author.send(reporteddenied);


        });



      //
      // let loggedreportEmbed = new Discord.RichEmbed()
      // .setTitle("Report command was used!")
      // .addField("Used by:", `${message.author}`)
      // .addField("In channel:", message.channel)
      //
      // let logreport = message.guild.channels.find(`name`, "log-channel");
      // logreport.send(loggedreportEmbed);
  }


    if(cmd === `${prefix}ping`){

      const m = await message.channel.send("Pinging...");
      m.edit(`Pong! Latency is **${m.createdTimestamp - message.createdTimestamp}ms**. API Latency is **${Math.round(bot.ping)}ms**.`);

}

    if(cmd === `${prefix}suggest`){

      message.delete();
      let suggestedchannel = message.guild.channels.find(`name`, "suggested-ideas");
      let guild = message.guild;
      let suggestion = args.join(" ").slice(0);
      if(!suggestion){
          message.reply("you must enter something suggest!").then(msg => msg.delete(3000));
          return;
    }

        let suggestedEmbed = new Discord.RichEmbed()
        .setTitle("New suggestion")
        .setColor("d39e1f")
        .addField("Suggested By:", `${message.author}`)
        .addField("Suggested Idea:", suggestion)
        .addField("React with :white_check_mark: if it's worth adding or :x: if it's not or :thinking: if not sure", "multiple votes can invalidate your response.")
        .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
        .setTimestamp();

        suggestedchannel.send(suggestedEmbed)
        .then(async function (message) {
            await message.react("✅")
            await message.react("❌")
            await message.react("🤔")
});
        let suggestEmbed = new Discord.RichEmbed()
        .setTitle("Thank you for suggesting!")
        .addField("Your suggestion has been recorded,", message.author)
        .setColor("00ff00")
        .setFooter("Clans Bot 2018© | Made By: Elite_HuntsMan")
        .setTimestamp();

        message.channel.send(suggestEmbed);

}


    if(cmd === `${prefix}heal`){

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let healers = message.guild.roles.get("317682783877201921");
      if(message.member.roles.has(healers.id) && (!rUser)){
        message.reply("you have been healed!");
      }


        if(message.member.roles.has(healers.id) && rUser) {
          message.channel.send("You healed " + rUser + "!");
        }

      if(!message.member.roles.has(healers.id)){
        message.reply("you do not have the `Healers` role! To get this role you must reach level **10**.").then(msg => msg.delete(8000));
      }
    }



    if(cmd === `${prefix}fight`){


      let fUser = message.guild.member(message.mentions.users.first());
      let warriors = message.guild.roles.get("317083595045077002");


      if(!message.member.roles.has(warriors.id)){
        message.reply("you do not have the `Warriors` role! To get this role you must reach level **20**.").then(msg => msg.delete(8000));
        return;
      }

      if(!fUser) return message.reply("you did not enter a user to fight!").then(msg => msg.delete(3000));

      let player = [fUser, message.author]
      if(fUser.id === message.author.id){
        message.channel.send("You cannot fight yourself!");
      return;
      }
    let winner = player[Math.floor(Math.random() * player.length)]
    if(winner === fUser) {
        let loser = message.author;
        let deathM = [`${winner} has sabotaged ${loser}`, `${loser} has been torn apart by ${winner}`, `${winner} sliced off ${loser}'s head`];
        let rDeathM = Math.floor((Math.random() * deathM.length));
        message.channel.send(deathM[rDeathM]);
        message.channel.send(`${winner} has won!`);
        return;
    }
    if(winner === message.author) {
        let loser = fUser;
        let deathM = [`${winner} has sabotaged ${loser}!`, `${loser} has been torn apart by ${winner}!`, `${winner} sliced off ${loser}'s head!`, `${winner} has murdered ${loser}!`,  ];
        let rDeathM = Math.floor((Math.random() * deathM.length));
        message.channel.send(deathM[rDeathM]);
        message.channel.send(`${winner} has won!`);
        return;
    }

  }

    if(cmd === `${prefix}strike`){

      message.delete().catch(O_o=>{});
      let strikedstaffchannel = message.guild.channels.find(`name`, "staff-strikes");
      let rUser = message.guild.member(message.mentions.users.first());
      let reason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.reply("you do not have the correct permissions to do this!").then(msg => msg.delete(4000));
        return;
      }

      if(!rUser) {
        message.reply("you did not mention a staff member to strike!")
          .then(msg => {
            msg.delete(4000);
          });
          return;
      }

      if(!reason) {
        message.reply("you did not supply a reason for the strike!")
          .then(msg => {
            msg.delete(4000);
          });
          return;
      }

        message.channel.send("Given 1 strike to" + rUser + " for reason: `" + reason + "`!")

        strikedstaffchannel.send("1 Strike was given to " + rUser + " for reason: `" + reason + "` by "  + message.author + "!");

        if(rUser) {
          rUser.send("You have been given 1 strike for reason: `" + reason + "`.");
        }
    }

    if(cmd === `${prefix}remove-strike`){

      message.delete().catch(O_o=>{});
      let strikedstaffchannel = message.guild.channels.find(`name`, "staff-strikes");
      let rUser = message.guild.member(message.mentions.users.first());
      let reason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.reply("you do not have the correct permissions to do this!").then(msg => msg.delete(4000));
        return;
      }
      
      if(!rUser) {
        message.reply("you did not mention a staff member to remove the strike from!")
          .then(msg => {
            msg.delete(4000);
          });
          return;
      }

      if(!reason) {
        message.reply("you did not supply a reason for the removal of the strike!")
          .then(msg => {
            msg.delete(4000);
          });
          return;
      }

        if(!message.member.hasPermission("MANAGE_SERVER")){
          message.channel.send("You do not have the correct permissions to do this!").then(msg => msg.delete(4000));
          return;
        }


        message.channel.send("Removed 1 strike from" + rUser + " with reason: `" + reason + "`!")

        strikedstaffchannel.send("1 Strike was removed from " + rUser + " with reason: `" + reason + "` by "  + message.author + "!");

        if(rUser) {
          rUser.send("A strike has been removed from you with reason: `" + reason + "`.");
        }

    }

    if(cmd === `${prefix}craft`){

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let craftsman = message.guild.roles.get("443500634839318530");

      if(!message.member.roles.has(craftsman.id)){
        message.reply("you do not have the `Craftsman` role! To get this role you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to look at the role. It costs **100,000**").then(msg => msg.delete(8000));
        return;
      }

      let replies = ["You made some clothing for the people.", "You made some beautiful art to show to the people!", "You hand made some wodden boxes.", "You crafted some armor.", "You made a sword!","You made a bow!", "You made an arrow!", "You made an axe!"];

      let result = Math.floor((Math.random() * replies.length));
      let question = args.slice(0).join(" ");

      if(message.member.roles.has(craftsman.id) && (!rUser)){
        message.channel.send(replies[result]);
      }


      }

      if(cmd === `${prefix}plant`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let farmer = message.guild.roles.get("443499347103973377");

        if(!message.member.roles.has(farmer.id)){
          message.reply("you do not have the `Farmer` role! To get this role you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to look at the role. It costs **200,000**").then(msg => msg.delete(8000));
          return;
        }

        let replies = ["You planted some soy beans.", "You planted some wheat.", "You planted an apple tree.", "You planted an orange tree.", "You planted some tomatoes.", "You planted some potatoes.", "You planted some rice.", "You planted a banana tree!", "You planted some onions."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        if(message.member.roles.has(farmer.id) && (!rUser)){
          message.channel.send(replies[result]);
        }
      }

      if(cmd === `${prefix}harvest`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let farmer = message.guild.roles.get("443499347103973377");

        if(!message.member.roles.has(farmer.id)){
          message.reply("you do not have the `Farmer` role! To get this role you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to look at the role. It costs **200,000**").then(msg => msg.delete(8000));
          return;
        }

        let replies = ["You harvested some soy beans.", "You harvested some wheat.", "You picked some apples.", "You picked some oranges.", "You harvested some tomatoes.", "You harvested some potatoes.", "You harvested some rice.", "You got some bananas.", "You harvested some onions."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        if(message.member.roles.has(farmer.id) && (!rUser)){
          message.channel.send(replies[result]);
        }
      }

      if(cmd === `${prefix}scout`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let scout = message.guild.roles.get("443500346447364117");

        if(!message.member.roles.has(scout.id)){
          message.reply("you do not have the `Scout` role! To get this role you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to look at the role. It costs **400,000**").then(msg => msg.delete(8000));
          return;
        }

        let replies = ["You scouted out `Skaikru` and decided they are not an enemy!", "You scouted out `Skaikru` and decided they are an enemy!", "You scouted out `Azgeda` and decided they are an enemy!", "You scouted out `Azgeda` and decided they are not an enemy!", "You scouted out `Floukru` and decided they are an enemy!", "You scouted out `Floukru` and decided they are not an enemy!", "You scouted out `Trikru` and decided they are an enemy!", "You scouted out `Trikru` and decided they are not an enemy!", "You scouted out `Sankru` and decided they are an enemy!", "You scouted out `Sankru` and decided they are not an enemy!", "You scouted out `Yujleda` and decided they are an enemy!", "You scouted out `Yujleda` and decided they are an enemy!", "You scouted out `Ouskejonkru` and decided they are an enemy!", "You scouted out `Ouskejonkru` and decided they are an enemy!", "You scouted out `Delfikru` and decided they are an enemy!",
        "You scouted out `Delfikru` and decided they are not an enemy!", "You scouted out `Trishanakru` and decided they are an enemy!", "You scouted out `Trishanakru` and decided they are an enemy!", "You scouted out `Podakru` and decided they are an enemy!", "You scouted out `Podakru` and decided they are an enemy!", "You scouted out `Ingranronakru` and decided they are an enemy!", "You scouted out `Ingranronakru` and decided they are an enemy!",
        "You scouted out `Boudalankru` and decided they are an enemy!", "You scouted out `Boudalankru` and decided they are an enemy!", "You scouted out `Louwodakliron` and decided they are an enemy!", "You scouted out `Louwodakliron` and decided they are an enemy!", "You scouted out `Maungedakru` and decided they are an enemy!", "You scouted out `Maungedakru` and decided they are an enemy!"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");


        if(message.member.roles.has(scout.id) && (!rUser)){
          message.channel.send(replies[result]);
        }
      }

      if(cmd === `${prefix}engineer`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let medical = message.guild.roles.get("446804203323523075");
        let electronics = message.guild.roles.get("446804329316352030");
        let environmental = message.guild.roles.get("446804257035780101");
        let structural = message.guild.roles.get("446804539278884864");
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(message.member.roles.has(electronics.id) && (!rUser)){
          message.reply("you already have chosen the `Electronics Engineer` profession! You may not leave or chose another!").then(msg => msg.delete(8000));
          return;
        }
        if(message.member.roles.has(environmental.id) && (!rUser)){
          message.reply("you already have chosen the `Environmental Engineer` profession! You may not leave or chose another!").then(msg => msg.delete(8000));
          return;
        }
        if(message.member.roles.has(structural.id) && (!rUser)){
          message.reply("you already have chosen the `Structural Engineer` profession! You may not leave or chose another!").then(msg => msg.delete(8000));
          return;
        }
        if(message.member.roles.has(systems.id) && (!rUser)){
          message.reply("you already have chosen the `Systems Engineer` profession! You may not leave or chose another!").then(msg => msg.delete(8000));
          return;
        }
        if(message.member.roles.has(medical.id) && (!rUser)){
          message.reply("you already have chosen the `Medical Engineer` profession! You may not leave or chose another!").then(msg => msg.delete(8000));
          return;
        }
        if(!message.member.roles.has(engineer.id)){
          message.reply("you do not have the `Engineer` role! To get this role you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to look at the role. It costs **800,000**").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(engineer.id) && (!rUser)){
          message.reply("which profession would you like to join? You can only join one! Professions you may join: `Medical Engineer`, `Electronics Engineer`, `Environmental Engineer`, `Strctural Engineer`, or `Systems Engineer`. For example, type `%profession-structural-engineer`. **NOTE** once you join a profession you may not leave it or change! Chose wisely.");
        }
      }

      if(cmd === `${prefix}profession-medical-engineer`){

        let medical = message.guild.roles.get("446804203323523075");
        let electronics = message.guild.roles.get("446804329316352030");
        let environmental = message.guild.roles.get("446804257035780101");
        let structural = message.guild.roles.get("446804539278884864");
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(message.member.roles.has(medical.id)){
          message.reply("you are already in the **Medical Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(electronics.id)){
          message.reply("sorry but you cannot join the **Medical Engineer** profession as you are already in the **Electronics Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(environmental.id)){
          message.reply("sorry but you cannot join the **Medical Engineer** profession as you are already in the **Environmental Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(structural.id)){
          message.reply("sorry but you cannot join the **Medical Engineer** profession as you are already in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id)){
          message.reply("sorry but you cannot join the **Medical Engineer** profession as you are already in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }


        let member = message.member;
        let Role = message.guild.roles.get("446804370621726720");

        if(message.member.roles.has(engineer.id)){
          message.reply("you have chosen your profession as a `Medical Engineer`! To view the commands you have, do `%help-medical-engineer`");
          member.addRole("446804203323523075");
          return;
        }
      }

      if(cmd === `${prefix}profession-electronics-engineer`){

        let medical = message.guild.roles.get("446804203323523075");
        let electronics = message.guild.roles.get("446804329316352030");
        let environmental = message.guild.roles.get("446804257035780101");
        let structural = message.guild.roles.get("446804539278884864");
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(message.member.roles.has(medical.id)){
          message.reply("sorry but you cannot join the **Electronics Engineer** profession as you are already in the **Medical Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(electronics.id)){
          message.reply("you are already in the **Electronics Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(environmental.id)){
          message.reply("sorry but you cannot join the **Electronics Engineer** profession as you are already in the **Environmental Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(structural.id)){
          message.reply("sorry but you cannot join the **Electronics Engineer** profession as you are already in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id)){
          message.reply("sorry but you cannot join the **Electronics Engineer** profession as you are already in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }


        let member = message.member;
        let Role = message.guild.roles.get("446804370621726720");

        if(message.member.roles.has(engineer.id)){
          message.reply("you have chosen your profession as an `Electronics Engineer`! To view the commands you have, do `%help-electronics-engineer`");
          member.addRole("446804329316352030");
          return;
        }
      }

      if(cmd === `${prefix}profession-environmental-engineer`){

        let medical = message.guild.roles.get("446804203323523075");
        let electronics = message.guild.roles.get("446804329316352030");
        let environmental = message.guild.roles.get("446804257035780101");
        let structural = message.guild.roles.get("446804539278884864");
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(message.member.roles.has(medical.id)){
          message.reply("sorry but you cannot join the **Environmental Engineer** profession as you are already in the **Medical Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(electronics.id)){
          message.reply("sorry but you cannot join the **Environmental Engineer** profession as you are already in the **Electronics Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(environmental.id)){
          message.reply("you are already in the **Environmental Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(structural.id)){
          message.reply("sorry but you cannot join the **Environmental Engineer** profession as you are already in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id)){
          message.reply("sorry but you cannot join the **Environmental Engineer** profession as you are already in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }


        let member = message.member;
        let Role = message.guild.roles.get("446804370621726720");

        if(message.member.roles.has(engineer.id)){
          message.reply("you have chosen your profession as an `Environmental Engineer`! To view the commands you have, do `%help-environmental-engineer`");
          member.addRole("446804257035780101");
          return;
        }
      }

      if(cmd === `${prefix}profession-structural-engineer`){

        let medical = message.guild.roles.get("446804203323523075");
        let electronics = message.guild.roles.get("446804329316352030");
        let environmental = message.guild.roles.get("446804257035780101");
        let structural = message.guild.roles.get("446804539278884864");
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(message.member.roles.has(medical.id)){
          message.reply("sorry but you cannot join the **Structural Engineer** profession as you are already in the **Medical Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(electronics.id)){
          message.reply("sorry but you cannot join the **Structural Engineer** profession as you are already in the **Electronics Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(environmental.id)){
          message.reply("sorry but you cannot join the **Structural Engineer** profession as you are already in the **Environmental Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(structural.id)){
          message.reply("you are already in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id)){
          message.reply("sorry but you cannot join the **Structural Engineer** profession as you are already in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }


        let member = message.member;
        let Role = message.guild.roles.get("446804370621726720");

        if(message.member.roles.has(engineer.id)){
          message.reply("you have chosen your profession as a `Structural Engineer`! To view the commands you have, do `%help-structural-engineer`");
          member.addRole("446804539278884864");
          return;
        }
      }

      if(cmd === `${prefix}profession-systems-engineer`){

        let medical = message.guild.roles.get("446804203323523075");
        let electronics = message.guild.roles.get("446804329316352030");
        let environmental = message.guild.roles.get("446804257035780101");
        let structural = message.guild.roles.get("446804539278884864");
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(message.member.roles.has(medical.id)){
          message.reply("sorry but you cannot join the **Systems Engineer** profession as you are already in the **Medical Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(electronics.id)){
          message.reply("sorry but you cannot join the **Systems Engineer** profession as you are already in the **Electronics Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(environmental.id)){
          message.reply("sorry but you cannot join the **Systems Engineer** profession as you are already in the **Environmental Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(structural.id)){
          message.reply("sorry but you cannot join the **Systems Engineer** profession as you are already in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id)){
          message.reply("you are already in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }


        let member = message.member;
        let Role = message.guild.roles.get("446804370621726720");

        if(message.member.roles.has(engineer.id)){
          message.reply("you have chosen your profession as a `Systems Engineer`! To view the commands you have, do `%help-systems-engineer`");
          member.addRole("446804370621726720");
          return;
        }
      }

      if(cmd === `${prefix}help-medical-engineer`){

        let medical = message.guild.roles.get("446804203323523075");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(medical.id)){
          message.reply("you are not in the **Medical Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        message.channel.send("As a Medical Engineer, you develop new technology for our medical staff to use! You have some unique commands you may use, they are: *No commands made yet!*");
      }

      if(cmd === `${prefix}help-electronics-engineer`){

        let electronics = message.guild.roles.get("446804329316352030");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(electronics.id)){
          message.reply("you are not in the **Electronics Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        message.channel.send("As an Electronics Engineer, you keep our electronic systems working fine and smoothly! You have some unique commands you may use, they are: *No commands made yet!*");
      }

      if(cmd === `${prefix}help-environmental-engineer`){

        let environmental = message.guild.roles.get("446804257035780101");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(environmental.id)){
          message.reply("you are not in the **Environmental Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        message.channel.send("As an Environmental Engineer, you keep our environmental system running well so we can survive as long as possible! You have some unique commands you may use, they are: *No commands made yet!*");
      }

      if(cmd === `${prefix}help-structural-engineer`){

        let structural = message.guild.roles.get("446804539278884864");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(structural.id)){
          message.reply("you are not in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        message.channel.send("As a Structural Engineer, you help keep the Ark structurally secure 100%! You have some unique commands you may use, they are: `%repair [anything to repair]`, `%check-in`, `%log [what you done]`");
      }

      if(cmd === `${prefix}help-systems-engineer`){

        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        message.channel.send("As a Systems Engineer, you ensure that all the Arks security systems, alarm systems, etc. are up to top notch! You have some unique commands you may use, they are: `%systems-check`, `%systems-list`, `%check-in`, `%log [what you done]`");
      }

      if(cmd === `${prefix}systems-check`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        let replies = ["*Alarm Systems* - **Running well** \n*Security Systems* - **Running well** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Running well** \n\n✅All systems working properly!✅ \nNo maintenance is required.", "*Alarm Systems* - **Not working** \n*Security Systems* - **Running well** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Running well** \n\n⚠️Alarm systems not functioning properly!⚠️ \nDo the command `%fix-alarm-systems` to fix them.", "*Alarm Systems* - **Running well** \n*Security Systems* - **Not working** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Running well** \n\n⚠️Security Systems not functioning properly!⚠️ \nDo the command `%fix-security-systems` to fix them.",
        "*Alarm Systems* - **Not working** \n*Security Systems* - **Not working** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Running well** \n\n⚠️Alarm Systems and Security Systems not functioning properly!⚠️ \nDo the commands `%fix-alarm-systems` and `%fix-security-systems` to fix them.", "*Alarm Systems* - **Running well** \n*Security Systems* - **Running well** \n*Communication Systems* - **Not working** \n*Oxygen Systems* - **Running well** \n\n⚠️Communication Systems not functioning properly!⚠️ \nDo the command `%fix-communication-systems` to fix them.", "*Alarm Systems* - **Not working** \n*Security Systems* - **Not working** \n*Communication Systems* - **Not working** \n*Oxygen Systems* - **Running well** \n\n⚠️Alarm Systems, Security Systems, and Communication Systems not funcioning properly!⚠️ \nDo the commands `%fix-alarm-systems`, `%fix-security-systems` and `%fix-communication-sysetms` to fix them.",
        "*Alarm Systems* - **Not working** \n*Security Systems* - **Not working** \n*Communication Systems* - **Not working** \n*Oxygen Systems* - **Not working** \n\n⚠️Alarm Systems, Security Systems, Communication Systems, and Oxygen Systems not funcioning properly!⚠️ \nDo the command `%fix-all-systems` to fix them.",
        "*Alarm Systems* - **Not working** \n*Security Systems* - **Running well** \n*Communication Systems* - **Not working** \n*Oxygen Systems* - **Running well** \n\n⚠️Alarm Systems and Communication Systems not funcioning properly!⚠️ \nDo the commands `%fix-alarm-systems` and `%fix-communication-systems` to fix them.",
        "*Alarm Systems* - **Running well** \n*Security Systems* - **Not working** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Not working** \n\n⚠️Security Systems and Oxygen Systems not funcioning properly!⚠️ \nDo the commands `%fix-security-systems` and `%fix-oxygen-systems` to fix them.",
        "*Alarm Systems* - **Not working** \n*Security Systems* - **Running well** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Not working** \n\n⚠️Alarm Systems and Oxygen Systems not funcioning properly!⚠️ \nDo the commands `%fix-alarm-systems` and `%fix-oxygen-systems` to fix them.",
        "*Alarm Systems* - **Running well** \n*Security Systems* - **Running well** \n*Communication Systems* - **Not working** \n*Oxygen Systems* - **Not working** \n\n⚠️Communication Systems and Oxygen Systems not funcioning properly!⚠️ \nDo the commands `%fix-communication-systems` and `%fix-oxygen-systems` to fix them.",
        "*Alarm Systems* - **Not working** \n*Security Systems* - **Not working** \n*Communication Systems* - **Running well** \n*Oxygen Systems* - **Not working** \n\n⚠️Alarm Systems, Security Systems, and Oxygen Systems not funcioning properly!⚠️ \nDo the commands `%fix-alarm-systems`, `%fix-security-systems`, and `%fix-oxygen-systems` to fix them.",
        "*Alarm Systems* - **Running well** \n*Security Systems* - **Not working** \n*Communication Systems* - **Not working** \n*Oxygen Systems* - **Not working** \n\n⚠️Security Systems, Communication Systems, and Oxygen Systems not funcioning properly!⚠️ \nDo the commands `%fix-security-systems`, `%fix-communication-systems`, and `%fix-oxygen-systems` to fix them."];
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");


        if(message.member.roles.has(systems.id) && (!rUser)){

        const m = await message.channel.send("Checking systems");
        m.edit("Checking systems.");
        m.edit("Checking systems..");
        m.edit("Checking systems...");
        m.edit("Checking systems.");
        m.edit("Checking systems..");
        m.edit("Checking systems...");
        m.edit(replies[result]);
          }
      }

      if(cmd === `${prefix}fix-alarm-systems`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id) && (!rUser)){

          const m = await message.channel.send("Fixing systems");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Alarm Systems have been fixed!");
            }
      }

      if(cmd === `${prefix}fix-security-systems`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id) && (!rUser)){

          const m = await message.channel.send("Fixing systems");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Security Systems have been fixed!");
            }
      }

      if(cmd === `${prefix}fix-communication-systems`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id) && (!rUser)){

          const m = await message.channel.send("Fixing systems");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Communication Systems have been fixed!");
            }
      }

      if(cmd === `${prefix}fix-oxygen-systems`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id) && (!rUser)){

          const m = await message.channel.send("Fixing systems");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Fixing systems.");
          m.edit("Fixing systems..");
          m.edit("Oxygen Systems have been fixed!");
            }
      }

      if(cmd === `${prefix}fix-all-systems`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let systems = message.guild.roles.get("446804370621726720");
        let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        if(!message.member.roles.has(systems.id)){
          message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
          return;
        }

        if(message.member.roles.has(systems.id) && (!rUser)){

          const m = await message.channel.send("Fixing systems");
          m.edit("Fixing alarm systems.");
          m.edit("Fixing alarm systems..");
          m.edit("Fixing security systems.");
          m.edit("Fixing security systems..");
          m.edit("Fixing communication systems.");
          m.edit("Fixing communication systems..");
          m.edit("Fixing oxygen systems.");
          m.edit("Fixing oxygen systems..");
          m.edit("All Systems have been fixed!");
            }
      }

      if(cmd === `${prefix}check-in`){

      message.delete();
      let logchannel = message.guild.channels.find(`name`, "engineer-logs");
      let engineer = message.guild.roles.get("443499649341456396");
      let checkinEmbed = new Discord.RichEmbed()
      .setTitle("__Check in__")
      .addField("User who checked in:", `${message.author}`)
      .setTimestamp();

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

        message.reply("you have checked in for the day.");

        logchannel.send(checkinEmbed);
      }

      if(cmd === `${prefix}log`){

      message.delete();
      let loggedinfo = args.join(" ").slice(0);
      let logchannel = message.guild.channels.find(`name`, "engineer-logs");
      let engineer = message.guild.roles.get("443499649341456396");

        if(!message.member.roles.has(engineer.id)){
          message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
          return;
        }

      if(!args[0]) return message.reply("you must log what you have done! For example `%log [fixed this, fixed that]`").then(msg => msg.delete(8000));

      let loggedEmbed = new Discord.RichEmbed()
      .setTitle("__Engineer Log__")
      .addField("User who logged:", `${message.author}`)
      .addField("What they logged:", loggedinfo)
      .setTimestamp();

      message.reply("you have successfully logged your work for today.");
      logchannel.send(loggedEmbed);
      }

  if(cmd === `${prefix}repair`){

    message.delete();
    let logchannel = message.guild.channels.find(`name`, "engineer-logs");
    let engineer = message.guild.roles.get("443499649341456396");
    let structural = message.guild.roles.get("446804539278884864");

    if(!message.member.roles.has(engineer.id)){
      message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
      return;
    }
    if(!message.member.roles.has(structural.id)){
      message.reply("you are not in the **Structural Engineer** profession!").then(msg => msg.delete(8000));
      return;
    }
      if(!args[0]) return message.reply("you did not enter something to repair!").then(msg => msg.delete(8000));

    let repaired = args.join(" ").slice(0);
    message.reply("you successfully repaired **" + repaired + "**!");

    let repairedEmbed = new Discord.RichEmbed()
    .setTitle("__Engineer Repair__")
    .addField("User who repaired:", `${message.author}`)
    .addField("What they repaired:", repaired)
    .setTimestamp();

    logchannel.send(repairedEmbed);
  }

  if(cmd === `${prefix}systems-list`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let systems = message.guild.roles.get("446804370621726720");
    let engineer = message.guild.roles.get("443499649341456396");

    if(!message.member.roles.has(engineer.id)){
      message.reply("you need the `Engineer` role! In order to get it you must buy it in the economy shop by going to <#309443716299358211> and typing `_shop` to view and buy the role. It costs **800,000**. Once you have the Engineer role you can then chose your profession!").then(msg => msg.delete(8000));
      return;
    }

    if(!message.member.roles.has(systems.id)){
      message.reply("you are not in the **Systems Engineer** profession!").then(msg => msg.delete(8000));
      return;
    }

    if(message.member.roles.has(systems.id) && (!rUser)){
      message.channel.send("**Here is the list of the systems** \n\n- *Alarm Systems* \n- *Security Systems* \n- *Communication Systems* \n- *Oxygen Systems*");
    }
  }


  });
  bot.login(process.env.BOT_TOKEN);
