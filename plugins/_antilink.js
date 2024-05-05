
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.reply(m.chat, `*≡ 𝙇𝙞𝙣𝙠 𝘿𝙚𝙩𝙚𝙘𝙩𝙖𝙙𝙤*

𝙉𝙤 𝙨𝙚 𝙩𝙤𝙡𝙚𝙧𝙖 𝙡𝙤 𝙨𝙞𝙚𝙣𝙩𝙤
:c *@${m.sender.split('@')[0]}* 𝙏𝙚 𝙚𝙘𝙝𝙖𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 ${isBotAdmin ? '' : '\n\n𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧 𝙖𝙨í 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙩𝙚 :"𝙘'}`, null, { mentions: [m.sender] } )
        if (isBotAdmin && chat.antiLink) {
          await conn.sendMessage(m.chat, { delete: m.key })
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
}
