let handler = async (m, { conn, usedPrefix, command }) => {

    let additionalInfo = [
        "- 𝙲𝚛𝚎𝚊𝚍𝚘𝚛 𝚍𝚎𝚕 𝚋𝚘𝚝 𝚁𝙴𝙼.",
        "- 𝙳𝚎𝚜𝚊𝚛𝚛𝚘𝚕𝚕𝚊𝚗𝚍𝚘 𝚎𝚕 𝚋𝚘𝚝 𝚙𝚘𝚛 𝚙𝚞𝚛𝚊 𝚍𝚒𝚟𝚎𝚛𝚜𝚒ó𝚗.",
        "- 𝙸𝚗𝚝𝚎𝚛𝚎𝚜𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚌𝚒ó𝚗 𝚢 𝚕𝚊 𝚝𝚎𝚌𝚗𝚘𝚕𝚘𝚐í𝚊.",
        "- 𝚂𝚒𝚎𝚖𝚙𝚛𝚎 𝚋𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚊𝚙𝚛𝚎𝚗𝚍𝚎𝚛 𝚊𝚕𝚐𝚘 𝚗𝚞𝚎𝚟𝚘.",
        "- 𝙵𝚊𝚗á𝚝𝚒𝚌𝚘 𝚍𝚎 𝙳𝚎𝚝𝚛𝚘𝚒𝚝: 𝙱𝚎𝚌𝚘𝚖𝚎 𝙷𝚞𝚖𝚊𝚗 𝚢 𝙱𝚘𝚛𝚞𝚝𝚘.",
        "- 𝙽𝚘 𝚕𝚎 𝚐𝚞𝚜𝚝𝚊𝚗 𝚕𝚘𝚜 𝚊𝚗𝚒𝚖𝚎𝚜.",
        "- 𝙾𝚍𝚒𝚊 𝚎𝚕 𝚌𝚊𝚏é 𝚢 𝚎𝚜 𝚖𝚘𝚛𝚖ó𝚗.",
        "- 𝙶𝚛𝚊𝚗 𝚊𝚍𝚖𝚒𝚛𝚊𝚍𝚘𝚛 𝚍𝚎 𝙲𝚘𝚗𝚗𝚘𝚛 𝚍𝚎 𝙳𝚎𝚝𝚛𝚘𝚒𝚝: 𝙱𝚎𝚌𝚘𝚖𝚎 𝙷𝚞𝚖𝚊𝚗."
    ];

    let selectedInfo = additionalInfo[Math.floor(Math.random() * additionalInfo.length)];

    let creatorInfo = `
╭───═[ *_𝘾𝙍𝙀𝘼𝘿𝙊𝙍_* ]═─────⋆
│
│👤 *𝙽𝙾𝙼𝙱𝚁𝙴*: 𝙶𝙰𝙱𝚁𝙸𝙴𝙻 𝙲𝚄𝚁𝙸
│📞 *𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿*: wa.me/51913091648
│
│📌 *𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁*:
│  ${selectedInfo}
│
│⚠️ *𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊*: 𝙽𝚘 𝚍𝚎𝚋𝚎𝚜 𝚎𝚜𝚌𝚛𝚒𝚋𝚒𝚛𝚕𝚎 𝚊 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 𝚊 𝚖𝚎𝚗𝚘𝚜 𝚚𝚞𝚎 𝚜𝚎𝚊 𝚍𝚎 𝚖𝚞𝚌𝚑𝚊 𝚞𝚛𝚐𝚎𝚗𝚌𝚒𝚊.
│
╰────────═┅═────────
`

    let img = 'https://telegra.ph/file/c775e80b9043a37191b98.png'
    conn.sendFile(m.chat, img, 'img.png', creatorInfo, m, null, rpyp)
    //conn.sendPayment(m.chat, '2000', 'USD', creatorInfo, m.sender, m)
}

handler.help = ['creador']
handler.tags = ['main']
handler.command = ['creador', 'dueño', 'owner']

export default handler
