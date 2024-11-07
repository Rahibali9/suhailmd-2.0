const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_05_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTM2lhblp0U3UweUtnMXowMVJqbksvamkxbzE2WFk4c1phbDh4TVhoeGxZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFUFRfdGlpZFNFcU8xVXktTVdQYUlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNiMzk2ZWZiLTY2ZWYtNGM2YS1hYzhkLTVhZDdlNmMzNmRhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAyMyxcbiAgICAgIDM1LFxuICAgICAgNzgsXG4gICAgICAxNTMsXG4gICAgICAyMzIsXG4gICAgICAxMDAsXG4gICAgICAxODEsXG4gICAgICAxNTQsXG4gICAgICA3MyxcbiAgICAgIDE4OCxcbiAgICAgIDEzOSxcbiAgICAgIDE4NixcbiAgICAgIDI4LFxuICAgICAgMTgsXG4gICAgICAyMTIsXG4gICAgICAyMzEsXG4gICAgICAxNzUsXG4gICAgICA1NCxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDEyMSxcbiAgICAgIDM5LFxuICAgICAgMTUsXG4gICAgICAxNyxcbiAgICAgIDEwNixcbiAgICAgIDI1MSxcbiAgICAgIDE1NixcbiAgICAgIDIsXG4gICAgICA2NyxcbiAgICAgIDE1NSxcbiAgICAgIDU4LFxuICAgICAgMTUyLFxuICAgICAgOSxcbiAgICAgIDE1MixcbiAgICAgIDE0NSxcbiAgICAgIDIzOCxcbiAgICAgIDI4LFxuICAgICAgMjI4LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhRTjdHM1dSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMjY4OTU0MjU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY3MTY2MTY3MDAwODE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYUsrdUFFRUxtdXM3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZaTzMycVNTY1F0MXlldzVoOGZQZ1hXZVEySEt2Q0x5NytId3oxc1FqeGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGVtZVNsM3c2Y2dObzl6a3N3UEdHUXBicmxiSWt0bThPNTE5b1FCTmpVbGM0SFNYemtIWnhSQ2V6T3lsK3A2UnNxVWVQeFc4VkMrWFFiaWdDWjFTQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlJ5YUIvMERnTUc0bUE2QTB3RlJFaHZzZGRuN2hoVkFlMkJnU09YQUdwUkx6dG50ZlU1K3lkMjVZZmdTMXNwaExiNXc1WDJnMnE2MnEzMXM3bk5BQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzI2ODk1NDI1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTkxOTMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS29TXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjOVRxRTVUOXh4UGdCUkJoamNXY1NPSVVOalNUMmlQMnRtQVRlNnF0SnhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzcwNjg1OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
