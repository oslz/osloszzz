exports.run = (client, message, args)  => {
    let reason = args.slice(0).join(' ');
      if (message.author.bot) return message.reply("**Sem permissão =/**");
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
          
      if (reason.length < 1) return message.reply('**Diga quanto devo deletar 1~100**');
      message.channel.bulkDelete(`${args[0]}`)
        setTimeout(function() {
            message.channel.send(`** <@${message.author.id}> limpou o historico!**`).then((value) => {
                setTimeout(() => {
                    value.delete();
                }, 1000);
            });
        }, 400)
    }
