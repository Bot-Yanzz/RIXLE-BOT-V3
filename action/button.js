const { MessageType }= require('@adiwajshing/baileys'),
      { contactsArray } = MessageType,
      fs = Ft.fs,
      { servers, yta, ytv } = require("../Lib/y2mate.js")
      fetch = require('node-fetch')
module.exports = {
async execute(m, {button, args, text }) {
let { conn } = data

try {
switch (button.split(" ")[0].toLowerCase()) {
   case 'estetik':
let res = await fetch('https://raw.githubusercontent.com/Rizxyu/FEATURE-BOT/main/random/Estetik.json')
let dot = await res.json()
let json = dot[Math.floor(Math.random() * dot.length)]
conn.sendButImg(m.chat, await (await fetch(json)).buffer(), `${json.teks}`, 'Rixle Bot', 'LAIN', 'estetik', m)
break;

   case 'cecan':
let knjt = await fetch('https://raw.githubusercontent.com/Rizxyu/FEATURE-BOT/main/random/cecan.json')
let dit = await knjt.json()
let jsn = dit[Math.floor(Math.random() * dit.length)]
conn.sendButImg(m.chat, await ( await fetch(jsn)).buffer(), 'NIH FOTO CECAN', userbot.packname, 'Next', 'cecan', m)
break;

   case "rules":
capt = `
Terima kasih telah menggunakan bot kami😄
Kami harap anda senang karena telah menggunakan bot ini😗

Rules menggunakan bot:
❌ Jangan telpon atau vc bot
❌ Jangan bandingkan bot lain
❌ No spam command

Mau source bot?
wa.me/6282328303332
`
m.reply(capt)
break;

   case "audio":
  try {
let yt = false
let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(button.split(" ")[1], server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
if (yt === false) throw 'semua server gagal'
conn.sendFile(m.chat,yt.dl_link,"m.mp3",null,m)
} catch (e) {
throw e
}
break;

   case "video":
  try {
let yt = false
let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await ytv(button.split(" ")[1], server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
if (yt === false) throw 'semua server gagal'
conn.sendFile(m.chat,yt.dl_link,"m.mp3",null,m)
} catch (e) {
throw e
}
break;

   case "creator":
conarray = []
ownerContact = ['6282328303332', '62822980698995','6285783417029','62823283033323','6285640020165','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
 vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
  conarray.push({
"displayName": 'Rizky',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
conn.sendMessage(m.chat, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage', { quoted: m })
conn.sendMessage(m.chat, 'Ini nomer pembuat bot gak usah chat aneh aneh ya!',MessageType.text, { quoted: m} )
console.log(a)
break;
default:
throw new Error(`command ${button} tidak ada :v`) //biar tau soalny kesusahan di buat button audio asw
}
} catch (e) {
console.log(e)
}
}
}
