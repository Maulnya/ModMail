const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

    exports.run = async (bot, message) => {

  let user = message.author;
  let timeout = 604800000;
  let amount = 500;
      let xamount = 2000;
    
     
  let weekly = await db.fetch(`weekly_${message.author.id}`);
      let xenonite = await db.fetch(`xenocry_${message.author.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`<:pleux_no:887553189883281438> | You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else if (xenonite === true){
     let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:gems:994042284553277470> You've collected your weekly reward of ${xamount} Gems`);
  message.channel.send(moneyEmbed)
  db.add(`gems_${message.author.id}`, xamount)
  db.set(`weekly_${message.author.id}`, Date.now())
    
  }
      else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:gems:994042284553277470> You've collected your weekly reward of ${amount} Gems`);
  message.channel.send(moneyEmbed)
  db.add(`gems_${message.author.id}`, amount)
  db.set(`weekly_${message.author.id}`, Date.now())


  }
}

  exports.info = {
  name: "weekly",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}