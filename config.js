const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94766859177"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94766859177' 
global.devs = '94766859177';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+94766859177
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VTRGZvcU5UcmpVOVBMeHVNSTJiTm5tbWRteUZyM3EvRkJ1VTM1ZDRrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2JCcjExdSs0Q0RjbEErVmc3d3hLc0piK00rMzRjNDNHY0cwR0Z4UUJCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTFNLZG9DUllFMWFEY21MZVdVckZmNzVDam00Vms5enBwOVRRbmxFNjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYW0yWGd1Vm5WcWh0L1lZeXJNVE1NYWFhcy9TZ1R5Y1RNSTVuOE54ZW53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IR3cvMEpyK2tVMVJ3NHlFNUs3MS9UZ0Q2emkwQUJrNHRqWWRLNXpqM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJBMzBMdU9wTDZrMHV5aHQ5UXZZWS9TM1B2K3Q0dzJweGRlQ1JiWW1LVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJwbHNJM21ueDRtZ1U1dUU4eTRZT1ZlTTU5bU56czdiaHNpbW9TNzhXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3ZLeTJ6TE5YVXd2S0lBUUJDMEVhK09KaUNNRTVOM3IrTlNKRGl1NGtGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR6dll2Q1d0b3RJSjZYam0rbDQxOEFzZmdNTXpCMzBYWVdoSkFmeU9nbmJKeVhkQW9ORyt2QUNmVE5HaCthQUdlVWxWU1NIK1FUU1M2WXRCK2FEeGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJmZ2IwMUJSSzgrT2tyaC9qTVZ5WG5aVTJqMGZsS0I3N0dBVThEa0p6M2FZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2ODU5MTc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyMUY1NkZEMTM4QjAyQTQwQTZCN0QzMDA2RjhDQ0I2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTIwNDgwMTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNzNWhwMkRWVE9tTlBWelJTaHVyNUEiLCJwaG9uZUlkIjoiYTFlODNkMzgtM2Q1ZC00OWRiLWFkNTctMDNhNTc2Yjk1YzBiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFDK1BUOWRvWmR5MEg3bVo0Y0dUOW04d1N4az0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUhwNE45ZVlid3pMWm9CVEJKY3ZIOCt1eHdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZlbzJvUWpJK3ZzQVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaTc5aHUxaWVSWlhXRHk0VTNpWjZHbnFHQVFyNkpkUUFVWm1rN2k4ZDJXMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM0I5eWlHTTQvb0xKNDVNdE5lV3dINnUrR25GMjRuZkQrZDYyN1dEYm56TXJkTzk4TGJ0Z2pWZEdFeTRPR2dsVStoZ043OFp1bkovWUJ5cGlNZUNERHc9PSIsImRldmljZVNpZ25hdHVyZSI6Imc4dkNXdDVWa0s4MWowWkJOUytTdmhjMDZTd08vR0JaWGRyWDdzcERyYmF4RXppZUVVRVpwaCs0NFF0d1dKbjZtT095RjliUGh6R2k3N3l2U1lTMmpnPT0ifSwibWUiOnsiaWQiOiI5NDc2Njg1OTE3Nzo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik51d2FhLi4uLiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Njg1OTE3Nzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll1L1lidFlua1dWMWc4dUZONG1laHA2aGdFSytpWFVBRkdacE80dkhkbHQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTIwNDgwMTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzJWIn0=,  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'nuwa',
  packname:  process.env.PACK_NAME || 'nuwa',
   
  botname:   process.env.BOT_NAME === nuwa? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'nuwa' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true: process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '+94' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true: process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
