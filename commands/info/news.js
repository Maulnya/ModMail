const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

exports.run = async (bot, message, args) => {
      //--------------------------------------S T A R T---------------------------------------

       const color = "#34c6eb";
  let linkSupport = `https://discord.gg/xvcwjHsp4w`
  let linkInvite = `https://discord.com/oauth2/authorize?client_id=975706013124661252&scope=bot&permissions=1543629054`
  let linkWebsite = `https://pleux.ga`
        const embed = new Discord.MessageEmbed()
       //  .setThumbnail("https://cdn.discordapp.com/attachments/943098651285262366/989710981355667566/icon.png")
    .setColor(color)
   .setAuthor(bot.user.username + ` New's`, bot.user.displayAvatarURL())
        .setImage(bot.config.thumbail)
        .setThumbnail("https://cdn.discordapp.com/avatars/993729379614076931/fd3ae5f5098a56547207cbf7d9dc240f.webp?size=1024.png")
    //.setDescription(`my prefix on this server is \`${bot.config.prefix}\``)
       // .addField("SOME HELPFUL LINKS-", `[Invite me]` + `(${linkInvite})` + `\n[Support server]` + `(${linkSupport})` + `\n[Official Website]` + `(${linkWebsite})` + `\nmy prefix on this server is \`${bot.config.prefix}\``)
     .addField(
      "**What's new**",
      " `none`"
    ).setFooter(`• please report commands that error, type (${bot.config.prefix}report), have suggestions for developers?, use (${bot.config.prefix}suggestion)`)
   .setTimestamp();
     message.channel.send(embed)
  };
  
exports.info = {
  name: 'news',
usage: "",
  description: "",
  enabled: true,
  guildOnly: false,
aliases: [], 
  permLevel: 0
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}
  