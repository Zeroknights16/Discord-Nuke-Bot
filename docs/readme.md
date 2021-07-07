# Installation Guide

### Steps:
**1.** Please ensure you have [Node.js](https://nodejs.org/en/download/) installed.\
**2.** Download the latest release [Here](https://github.com/Zeroknights16/Discord-Nuke-Bot)\
**3.** Fill in the config.json file. ([Available Permission types](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS))\
**4.** Run install.bat to install all the node_modules.\
**5.** Start the bot by running the start.bat file.

### Config:

```json5
{
  "bot": {
    "prefix": ".", //Prefix of the bot
    "token": "", // Discord Bot's Token
    "version": "1.0" //Version of the config, DO NOT CHANGE THIS!
  },
  "server": {
    "name": "Ice" // DO NOT CHANGE THIS!
  },
  "commands": {
    "banall": {
      "description": "Ban every user within an guild", //Description of "banall" command
      "usage": "banall", //Usage of "banall" command
      "permission": "SEND_MESSAGES", //Permission for the "banall" command
      "cooldown": "30", //Cooldown of the "banall" command, NOTE: do not spam execute this command!
      "id": "100" //DO NOT CHANGE!
    },
    "botinfo": {
      "description": "View Information about the bot", //LOOK ABOVE...
      "usage": "botinfo",
      "permission": "SEND_MESSAGES",
      "cooldown": "5",
      "id": "101"
    },
    "clearchannels": {
      "description": "Clear all channels within an guild", //LOOK ABOVE...
      "usage": "clearchannels",
      "permission": "SEND_MESSAGES",
      "cooldown": "30",
      "id": "102"
    },
    "clearroles": {
      "description": "Clear all roles within an guild", //LOOK ABOVE...
      "usage": "clearroles",
      "permission": "SEND_MESSAGES",
      "cooldown": "30",
      "id": "103"
    },
    "help": {
      "description": "Display help list", //LOOK ABOVE...
      "usage": "help <Category>",
      "permission": "SEND_MESSAGES",
      "cooldown": "3",
      "id": "114"
    },
    "nuke": {
      "description": "Nuke the whole discord server", //LOOK ABOVE...
      "usage": "nuke",
      "permission": "SEND_MESSAGES",
      "cooldown": "30",
      "id": "105"
    },
    "restart": {
      "description": "Restart the bot", //LOOK ABOVE...
      "usage": "restart",
      "permission": "ADMINISTRATOR",
      "cooldown": "5",
      "id": "106"
    },
    "uptime": {
      "description": "Get the bot's uptime", //LOOK ABOVE...
      "usage": "uptime",
      "permission": "SEND_MESSAGES",
      "cooldown": "3",
      "id": "107"
    }
  },
  "messages": { //Message section, you can leave it like it is right now!
    "errfooter": "Parameters in \"[]\" are mandatory, while parameters with \"<>\" are optional.",
    "guildOnly": "you can't execute this command inside dms!",
    "enabled": "this module is disabled!",
    "args": "you missed some arguments!",
    "usermention": "you didn't mention an user!",
    "rolemention": "you didn't select a role!",
    "devmode": "developer mode is currently enabled!",
    "permission": "you are not allowed to execute this command!"
  }
}
```
### Support:
* You can contact me on discord: `Zeroknights#9457`
