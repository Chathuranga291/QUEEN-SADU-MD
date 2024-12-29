const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MR DINESH*

> *TOHID_MD REPO:*
*|* *https://github.com/mrdinesh595/QUEEN-SADU-MD*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb0Anqe9RZAcEYc2fT2c*
*╰──────────────●●►*

> *CREATED BY MR DINESH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "QUEEN SADU",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'QUEEN SADU',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/mrdinesh595" ,
thumbnailUrl: "https://i.imgur.com/M1BzE37.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
