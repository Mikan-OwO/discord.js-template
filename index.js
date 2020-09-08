const { 
  Client,
  MessageEmbed,
  MessageAttachment
} = require("discord.js");

const client = new Client();

function Set(message, prefix, [cmd, ...args]) {
  if(!message.content.startsWith(prefix)) return;
  if(cmd === "ping") message.channel.send(client.ws.ping + "ms");
}

client.on("message", message => Set(message, "!", message.content.slice(1).split(" ")));

client.login("token");
