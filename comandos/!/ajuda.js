const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    embed = new Discord.RichEmbed()
        .setTitle(`Comandos: ❄ OSLO ❄`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField('🔥 PREFIXO 🔥','Padrão: "o!" | Administração "o!!"')
        .addBlankField(true)
        .addField('🔥 Comandos 🔥',`Todos`)
        .addField('👉 Info ',`O comando mostra as informações do servidor`)
        .addField('👉 Shippo ',`O comando mostra as chances de um relacionamento funcionar`)
        .addField('👉 Criar ',`O comando cria uma sala temporária`)
        .addField('👉 Adicionar ',`O comando adiciona alguém em sua sala temporária`)
        .addField('👉 Reportar ',`O comando envia para a equipe o erro reportado`)
        .addBlankField(true)
        .addField('🔥 Administração 🔥',`Admins`)
        .addField('👉 Banir ',`O comando expulsa o membro permanentemente`)
        .addField('👉 Kickar ',`O comando expulsa o membro`)
        .addField('👉 Deletar ',`O comando deleta as mensagens no chat (1~100)`)
        message.channel.send(embed);
}