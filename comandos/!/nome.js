const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    if(message.member.hasPermission('ADMINISTRATOR')) return message.reply("Não é possivel alterar seu nickname por suas permissões serem maiores que as minhas");
    nick = args.join(""); 
    message.member.setNickname(nick);
    

}