const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    embed = new Discord.RichEmbed()
        .setTitle(`Informações do membro: ❄ ${message.author.username} ❄`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField('📋 ID da conta',`${message.author.id}`)
        .addField('🕛 Quando foi criado',`${message.author.createdAt}`)
        .addField('👤 Apelido no discord',`${message.author}`)
        message.channel.send(embed).then(msg => {msg.delete(15000)});
}