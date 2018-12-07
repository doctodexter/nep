const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', function(message){
  if(message.content == 'you suck')
  {
    message.reply('you too');
  }
   if(message.content == 'bab')
   {
     message.channel.send('nNONOnoNOnoNOOgoMOGMO MO gmoMO GGMO gmo i GIB KISS')
   }
   if(message.content == 'goodbye')
   {
     message.channel.send('bye bah')
   }
   });
   bot.on('message', function(message)
   {
   if(message.content.startsWith ("how are you?")){
     message.channel.send("I am good!", {files: ["good.PNG"]});
   }
     if(message.content.startsWith("r00by")){
     message.channel.send("omGMOgmo", {files: ["r00by.PNG"]});
   }
   if(message.content.startsWith("scr00m")){

   }
if(message.content == "hello world")
{
  message.channel.send("hello people")
}
 });
bot.login(process.env.BOT_TOKEN);
