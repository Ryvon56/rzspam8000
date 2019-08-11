const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("610093175130030080")
setInterval(function() {
channel.send(`انا هنا للترفيه عن نفسي فقط فلا يظن عقلك المصدي أنني اطمح للتقرب منك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);