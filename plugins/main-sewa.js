let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by The.sad.boy01",
        "description": `
┌「 *Sewa bot* 」
│     
├ 1 Grup / 30 Hari
├ Rp. 15,000 Gopay, Dana
├ Rp. 20,000 Pulsa Indosat & Telkomsel 
│
├ 1 Premium / 30 Hari
├ Rp. 5,000 Gopay
├ Rp. 10,000 Pulsa Three
│
├ tertarik? hubungi: 
├ @6285779386736 (@iam_syap)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6285779386736@s.whatsapp.net"
        },
        "footerText": "owner number : wa.me/6285779386736"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium', 'sewa']
handler.tags = ['main']
handler.command = /^(sewabot|premium|sewa)$/i

module.exports = handler
