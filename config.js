//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "263776758808";
global.owner = process.env.OWNER_NUMBER || "263776758808";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasIm";
eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NFNTdoN1d NZmhiZDdFaDRKVGtDbjhobjJrVGxSRWxpNFZqcGdPNThtMD0ifSwicHVibGljIjp7InR5cGUi OiJCdWZmZXIiLCJkYXRhIjoiSHBHZTFjc0MvRmFJNk1qOFMyb3dvZmQxTGg4Szc0eFJOU 0dNQ0FKSmVVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsi dHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QnRVbzFJeTNVMUhUbVJVUkoxcmh3SHRHd3I1cjFtY 2s4L1FpMktJQW5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VEw3Q mFhNlo4VTNoWUxYSmw1Sm5weGhtRmJJMEphVlY0U21kZGxCMm00PSJ9fSwic2lnbmVk SWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPVXhDOU JFTmtuUEIxSytZMEErYU9HMDFVclR6cDVmSUduVkVhbEpQbEk9In0sInB1YmxpYyI6eyJ0 eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBlanZDN1dVNU5abmlXU2p2Y3NrbDRkKzNVWTVETDV KOE1SVDBRQzR5Ujg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIj p7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01KRU9sMjd4VHRhNXArbm9aTVQ0eG9WVjlxT lIyMWcyZkVlQTFhME5IWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm5U eVNURjZJNGliL3A5NnlERVRZZnNUVmQ1ODRBTzNweThaNVJYUzRpYz0ifX0sInNpZ25hd HVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB0SU1jSkJZQmhTYURRN0hqSnh2bWM4 SjVMODdqK3lzZ2kybVo4WjZhY0FCRE95dDVkNGswRk13MGVOdjJzN1JEVERJY2pqRm9 vdHR1ZUd3NlpHZWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkd lNlY3JldEtleSI6IlBoU1NDbUdmYjFhWnpnUU5NNFNTdUhmSDl3MWw2UTZjeEMzbWRrRm tkL1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzN zc2NzU4ODA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZCQ0QzN0FE RjA5QzNDOTkxRUQ2Mjk4MzdGQzEyMDU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwNz QzNzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxL CJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmV DaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im90RFhmdTZiUlVTT1FOdU56T0l1ckEiLCJwaG 9uZUlkIjoiYjM3MDEzM2YtYzU0Yy00NDhlLTkyYjAtYjE4M2FhMDJjZWVkIiwiaWRlbnRpdHlJ ZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZVaEpRUm1wRDNlanlTRmlWMVhyck1odVNm OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsIm RhdGEiOiJrSWhrSTBQWGZ0Y2plUytyd0RUb2xMSmkyWU09In0sInJlZ2lzdHJhdGlvbiI6e30 sInBhaXJpbmdDb2RlIjoiNE0xSDlMVDUiLCJtZSI6eyJpZCI6IjI2Mzc3Njc1ODgwODoxQHMud 2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbms2Y29CRVBtSms3VUd HQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2NFRlbWhQV0Zpa2JSU0NUY0l oVmZXc3BLTDNLME93d2xhT3dmb0pOZldjPSIsImFjY291bnRTaWduYXR1cmUiOiJ2ckh6b3 QwN0c3NVhkMGtVMlRFZGVWLyt1NUxFaWYyNE1HcnJjdGJ4d1RPbTRFM3h2czZzbDdvW DIvZldVRU56cTRWVWp5ZFBtanhjd1A4dTlnZzlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVN DK2UxN0tEMGdJN3JaSEd3cUU0ckNrSVJ1ay9nRk5HS2o1SU5aRHM1eU1BaW9xc3QyM UhmUUlDNXpodWxUNDh0TzYrY3BsRE0ydTJqVEJiR0o2Z3c9PSJ9LCJzaWduYWxJZGVu dGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzY3NTg4MDg6MUBzLndoYXR zYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZ GF0YSI6IkJldUUzcG9UMWhZcEcwVWdrM0NJVlgxcktTaTl5dERzTUpXanNINkNUWDFuIn1 9XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyM Dc0Mzc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZWbyJ9
global.SESSION_ID=
  process.env.SESSION_ID ||
  
   cktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZL0tkZHF1SnA0dVVSTEc"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "YNW_JuLcE",
  errorChat: process.env.ERROR_CHAT || "263776758808",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
