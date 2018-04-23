const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    embed = new Discord.RichEmbed()
        .setTitle(`Informações: ❄ ${message.guild.name} ❄`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField('📋 ID do servidor',`${message.guild.id}`)
        .addBlankField(true)
        .addField('🕛 Quando foi criado',`${message.guild.createdAt}`)
        .addBlankField(true)
        .addField('🌍 Região do servidor',`${message.guild.region}`)
        .addBlankField(true)
        .addField('👤 Criador do servidor',`${message.guild.owner} (${message.guild.owner.id})`)
        .addBlankField(true)
        .addField('🕕 Quando eu entrei aqui',`${message.guild.joinedAt}`)
        .addBlankField(true)
        .addField(`👥 Quantidade de membros`,`${message.guild.memberCount}`)
        .addBlankField(true)
        .addField(`🌀 Criador do OSLO`,`@oslz#0001`)
        message.channel.send(embed);
}