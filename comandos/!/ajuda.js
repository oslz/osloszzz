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
        .addField('👉 Guild ',`O comando mostra as informações do servidor`)
        .addField('👉 User ',`O comando mostra as informações do user`)
        .addField('👉 Shippo ',`O comando mostra as chances de um relacionamento funcionar`)
        .addField('👉 Criar ',`O comando cria uma sala temporária`)
        .addField('👉 Adicionar ',`O comando adiciona alguém em sua sala temporária`)
        .addField('👉 Reportar ',`O comando envia para o dono da guild o erro reportado`)
        .addField('👉 Nome ',`Altere seu nome`)
        .addBlankField(true)
        .addField('🔥 Administração 🔥',`Admins`)
        .addField('👉 Banir ',`O comando expulsa o membro permanentemente`)
        .addField('👉 Kickar ',`O comando expulsa o membro`)
        .addField('👉 Deletar ',`O comando deleta as mensagens no chat (1~100)`)
        .addBlankField(true)
        .addField('🔥 Level 🔥',`Sistema de XP`)
        .addBlankField(true)
        .addField('🔥 Coins 🔥',`Sistema de COINS EM BREVE`)
        message.channel.send(embed).then(msg => {msg.delete(25000)});
        message.channel.send("**EXEMPLO:** `o!guild`").then(msg => {msg.delete(24999)});
}