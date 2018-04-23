const Discord = require(`discord.js`);
const client = new Discord.Client();
const prefix = "o!";
const prefixa = "o!!";
var fs = require("fs");
let xp = require("./xp.json");


client.login('NDM3NzE5NDc5NTk0NTE2NDg3.Db6Jnw.0PrB6i3qZV-nJIrNTvBu5OAb7D4');
client.on("ready", () => {
    client.user.setPresence({ game: { name: 'o!ajuda', type: 1, url: 'https://www.twitch.tv/olszera'} });
    console.log(`${client.user.username} esta ligado em ${client.guilds.size} guilds!`)
    
}) // CMDS
client.on("message", message =>{
    if (message.author.bot) return;
    if (!message.content.startsWith(prefixa)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefixa.length);
    let args = message.content.split(" ").slice(1);
    try {
    let commandFile = require(`./comandos/!!/${command}.js`);
    commandFile.run(client, message, args);
    console.error("[CONSOLE] " + err);
    } catch (err) {

}


}) // CMDS
client.on("message", message =>{
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    try {
    let commandFile = require(`./comandos/!/${command}.js`);
    commandFile.run(client, message, args);
    console.error("[CONSOLE] " + err);
    } catch (err) {

}
})
client.on("message", async function(message) {
    if (message.content == 'o!reportar') {
    await  message.author.createDM()
    var bug,server;
    await message.author.send("**Ahh, você quer reportar um erro! Qual é ele?**")
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 1000 * 20,max: 1})
    collector.on('collect', a => {
        bug = a.content;
    message.author.send('**Aonde ele fica?**')
    var collector3 =  message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id,{time: 1000 * 20,max: 1})
    collector3.on('collect', c => {
        server = c.content;
        message.guild.owner.send(`O ${message.author.username} achou um bug "**${bug}**" no "**${server}**"`)
     message.author.send("**Obrigado pelo report!**")   
    })
    })
    }
    
    })
    
client.on("message", message => {

    if(message.content.startsWith("o!criar")) {
        message.author.send("Sala criada")
        message.channel.send(message.author + " Sua sala foi criada, você tem 15 segundos para entrar nela, se não ela sera removida.")
        message.delete();

        message.guild.createRole({"name":message.author.username}).then(a =>{
            message.guild.members.get(message.author.id).addRole(a)
            message.guild.createChannel(message.author.username,'voice').then(b =>{
            var da = message.guild.roles.find("name","@everyone")
            b.overwritePermissions(da,{
            CONNECT: false,
            VIEW_CHANNEL: false
            
            })
            b.overwritePermissions(a,{
                VIEW_CHANNEL: true,
                CONNECT:true
            })
            message.member.setVoiceChannel(b)
        var o = setInterval(() =>{
        if (b.members.size == 0){
        b.delete()
        a.delete()
        clearInterval(o)
}

},1000 * 30)

            })
            
        
    })

    client.on("message", message => {
        if (message.content.startsWith("o!adicionar")) {
            let member = message.mentions.members.first();
            if (message.mentions.users.size < 1) return message.channel.send("Mencione alguem");
            message.author.send("O " + member.displayName + " foi adicionado na sala!");
            message.channel.send(member + " Voce foi adicionado da sala do " + message.author + " basta você entrar!")
            var cargo = message.guild.roles.find('name',message.author.username)
            if (cargo == null) return;

            message.guild.members.get(message.mentions.users.first().id).addRole(cargo)
        
    }
})
    }
})
client.on("message", message =>{
let xpAdd = Math.floor(Math.random() * 3) + 5;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 150;
  let newlvl = curlvl + 1
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle(`${message.author.user}`)
    .setColor(2490112)
    .setImage(`https://cdn.discordapp.com/attachments/437684192663568384/437786741915516929/level-up-gif.gif`)
    .addField("Você upou de nivel", "**" + newlvl + "**")
    .addField("XP ATUAL", `**${curxp}**`)
    message.channel.send(lvlup)
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  })
})