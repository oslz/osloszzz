const Discord = require(`discord.js`);
const client = new Discord.Client();

exports.run = (client, message, args, command)  => {
    let member = message.mentions.members.first();
    const sayMessage = args.join("");
    if(!message.member.hasPermission('BAN_MEMBERS')) return;
    member.ban();
    embed = new Discord.RichEmbed()
        .setTitle(`Punição: ❄ ${message.guild.name} ❄`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField('📋 Usuario punido ',`${member}`)
        .addField('📋 Autor do banimento ',`${message.author}`)
        .addField('📋 Punição aplicada ',`**BAN**`)
        message.channel.send(embed);

    }

