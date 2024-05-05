let handler = async (m, { conn, text, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await conn.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `La briografia es privada`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await conn.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `𝙻𝚊 𝙱𝚒𝚘𝚐𝚛𝚊𝚏𝚒𝚊 𝙴𝚜 𝙿𝚛𝚒𝚟𝚊𝚍𝚊 :𝚌`
    }
  }
}
handler.help = ['getbio <@tag/reply>']
handler.tags = ['group']
handler.command = /^(getb?io)$/i
handler.limit = true
handler.register = true
export default handler
