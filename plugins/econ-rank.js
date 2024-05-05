import { xpRange } from '../lib/levelling.js';
import Canvacord from 'canvacord';

let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) throw `✳️ 𝙀𝙨𝙩𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨`;

  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './logo.jpg');
  let user = global.db.data.users[who];
  let { exp, level, role } = global.db.data.users[who];
  let { min, xp } = xpRange(user.level, global.multiplier);
  let username = conn.getName(who);

  let crxp = exp - min
  let customBackground  = './Assets/rankbg.jpg'
  let requiredXpToLevelUp = xp

  const card = await new Canvacord.Rank()
  .setAvatar(pp)
  .setLevel(level)
  .setCurrentXP(crxp) 
  .setRequiredXP(requiredXpToLevelUp) 
  .setProgressBar('#00BFFF', 'COLOR') 
  .setDiscriminator(who.substring(3, 7))
  .setCustomStatusColor('#00BFFF')
  .setLevelColor('#FFFFFF', '#FFFFFF')
  .setOverlay('#000000')
  .setUsername(username)
  .setBackground('IMAGE', customBackground)
  .setRank(level, 'LEVEL', false)
  .renderEmojis(true)
  .build();

  const str = `🏮 *𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤:* ${username}\n\n⭐ *𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖:* ${crxp} / ${requiredXpToLevelUp}\n\n🏅 𝙍𝙖𝙣𝙠:${global.rpg.role(level)}`

  try {
    conn.sendFile(m.chat, card, 'rank.jpg', str, m, false, { mentions: [who] });
    m.react('✅');
  } catch (error) {
    console.error(error);
  }
  
  
  const creditExpStr = `💰 𝙾𝚁𝙾: ${user.credit}\n🔹 𝙿𝚞𝚗𝚝𝚘𝚜 𝚍𝚎 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊: ${user.exp}`;
  
 
  const randomMessage = generateRandomMessage();
  
  
  const decorations = `
  *━━━━━━━━━━━━━━━━*
  🌟 *𝙽𝙸𝚅𝙴𝙻:* ${level}
  🎖️ *𝚁𝙾𝙻:* ${global.rpg.role(level)}
  *━━━━━━━━━━━━━━━━*
  `;
  
  
  m.reply(`${creditExpStr}\n\n${randomMessage}\n\n${decorations}`);
}

handler.help = ['rank'];
handler.tags = ['economy'];
handler.command = ['rank','rango','estatus'];

export default handler;


function generateRandomMessage() {
  const messages = [
    '¡𝚂𝚒𝚐𝚞𝚎 𝚊𝚜í! 💪',
    '¡𝙴𝚡𝚌𝚎𝚕𝚎𝚗𝚝𝚎 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚘! 👏',
    '¡𝚃𝚞 𝚎𝚜𝚏𝚞𝚎𝚛𝚣𝚘 𝚎𝚜𝚝á 𝚍𝚊𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜! 🎉',
    '𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚜𝚒𝚎𝚖𝚙𝚛𝚎 𝚖𝚊𝚗𝚝𝚎𝚗𝚎𝚛𝚝𝚎 𝚊𝚌𝚝𝚒𝚟𝚘 𝚎𝚗 𝚎𝚕 𝚋𝚘𝚝 𝚙𝚊𝚛𝚊 𝚐𝚊𝚗𝚊𝚛 𝚖á𝚜 𝚙𝚞𝚗𝚝𝚘𝚜 𝚍𝚎 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 𝚢 𝚌𝚛é𝚍𝚒𝚝𝚘𝚜. 😉',
    '𝚂𝚒 𝚗𝚎𝚌𝚎𝚜𝚒𝚝𝚊𝚜 𝚊𝚢𝚞𝚍𝚊 𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚊𝚕𝚐𝚞𝚗𝚊 𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊, 𝚗𝚘 𝚍𝚞𝚍𝚎𝚜 𝚎𝚗 𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊𝚛 𝚎𝚗 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘. 𝙴𝚜𝚝𝚊𝚖𝚘𝚜 𝚊𝚚𝚞í 𝚙𝚊𝚛𝚊 𝚊𝚢𝚞𝚍𝚊𝚛𝚝𝚎. 🤗',
    '𝙽𝚘 𝚘𝚕𝚟𝚒𝚍𝚎𝚜 𝚛𝚎𝚟𝚒𝚜𝚊𝚛 𝚕𝚘𝚜 𝚗𝚞𝚎𝚟𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚢 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚎𝚜 𝚊𝚐𝚛𝚎𝚐𝚊𝚍𝚊𝚜 𝚊𝚕 𝚋𝚘𝚝. ¡𝙿𝚞𝚎𝚍𝚎𝚗 𝚜𝚎𝚛 ú𝚝𝚒𝚕𝚎𝚜 𝚙𝚊𝚛𝚊 𝚝𝚒! 🚀',
    '¡𝙻𝚊 𝚌𝚘𝚖𝚞𝚗𝚒𝚍𝚊𝚍 𝚝𝚎 𝚊𝚐𝚛𝚊𝚍𝚎𝚌𝚎 𝚙𝚘𝚛 𝚝𝚞 𝚙𝚊𝚛𝚝𝚒𝚌𝚒𝚙𝚊𝚌𝚒ó𝚗 𝚢 𝚌𝚘𝚗𝚝𝚛𝚒𝚋𝚞𝚌𝚒ó𝚗! 🌟',
    '¡𝚂𝚒𝚐𝚞𝚎 𝚜𝚞𝚋𝚒𝚎𝚗𝚍𝚘 𝚍𝚎 𝚗𝚒𝚟𝚎𝚕 𝚢 𝚊𝚕𝚌𝚊𝚗𝚣𝚊 𝚗𝚞𝚎𝚟𝚊𝚜 𝚖𝚎𝚝𝚊𝚜 𝚎𝚗 𝚎𝚕 𝚋𝚘𝚝! 💫',
    '𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚜𝚒𝚎𝚖𝚙𝚛𝚎 𝚙𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚗𝚜𝚞𝚕𝚝𝚊𝚛 𝚝𝚞𝚜 𝚎𝚜𝚝𝚊𝚍í𝚜𝚝𝚒𝚌𝚊𝚜 𝚢 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚘 𝚌𝚘𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 *𝚛𝚊𝚗𝚔*.',
    '𝚂𝚒 𝚝𝚎 𝚐𝚞𝚜𝚝𝚊 𝚎𝚕 𝚋𝚘𝚝, ¡𝚗𝚘 𝚍𝚞𝚍𝚎𝚜 𝚎𝚗 𝚌𝚘𝚖𝚙𝚊𝚛𝚝𝚒𝚛𝚕𝚘 𝚌𝚘𝚗 𝚝𝚞𝚜 𝚊𝚖𝚒𝚐𝚘𝚜! 📲',
    '¡𝙵𝚎𝚕𝚒𝚌𝚒𝚍𝚊𝚍𝚎𝚜 𝚙𝚘𝚛 𝚝𝚞 𝚊𝚟𝚊𝚗𝚌𝚎! 🎊',
    '¡𝚃𝚞 𝚍𝚎𝚍𝚒𝚌𝚊𝚌𝚒ó𝚗 𝚎𝚜 𝚊𝚍𝚖𝚒𝚛𝚊𝚋𝚕𝚎! 💖',
    '𝙽𝚞𝚗𝚌𝚊 𝚎𝚜 𝚝𝚊𝚛𝚍𝚎 𝚙𝚊𝚛𝚊 𝚜𝚎𝚐𝚞𝚒𝚛 𝚊𝚙𝚛𝚎𝚗𝚍𝚒𝚎𝚗𝚍𝚘 𝚢 𝚌𝚛𝚎𝚌𝚒𝚎𝚗𝚍𝚘. ¡𝚃ú 𝚙𝚞𝚎𝚍𝚎𝚜! 💪',
    '𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚌𝚊𝚍𝚊 𝚙𝚎𝚚𝚞𝚎ñ𝚘 𝚙𝚊𝚜𝚘 𝚝𝚎 𝚊𝚌𝚎𝚛𝚌𝚊 𝚖á𝚜 𝚊 𝚝𝚞𝚜 𝚖𝚎𝚝𝚊𝚜. ¡𝚂𝚒𝚐𝚞𝚎 𝚊𝚍𝚎𝚕𝚊𝚗𝚝𝚎! 🚶‍♂️',
    '¡𝚃𝚞𝚜 𝚕𝚘𝚐𝚛𝚘𝚜 𝚜𝚘𝚗 𝚒𝚗𝚜𝚙𝚒𝚛𝚊𝚌𝚒ó𝚗 𝚙𝚊𝚛𝚊 𝚕𝚘𝚜 𝚍𝚎𝚖á𝚜! 🌟',
    '𝙴𝚕 é𝚡𝚒𝚝𝚘 𝚗𝚘 𝚎𝚜 𝚜𝚘𝚕𝚘 𝚎𝚕 𝚍𝚎𝚜𝚝𝚒𝚗𝚘, 𝚜𝚒𝚗𝚘 𝚝𝚊𝚖𝚋𝚒é𝚗 𝚎𝚕 𝚟𝚒𝚊𝚓𝚎. ¡𝙳𝚒𝚜𝚏𝚛𝚞𝚝𝚊 𝚌𝚊𝚍𝚊 𝚖𝚘𝚖𝚎𝚗𝚝𝚘! 🌄',
    '¡𝙴𝚜𝚏𝚞é𝚛𝚣𝚊𝚝𝚎 𝚙𝚘𝚛 𝚜𝚎𝚛 𝚞𝚗𝚊 𝚖𝚎𝚓𝚘𝚛 𝚟𝚎𝚛𝚜𝚒ó𝚗 𝚍𝚎 𝚝𝚒 𝚖𝚒𝚜𝚖𝚘 𝚌𝚊𝚍𝚊 𝚍í𝚊! 🌟',
    '𝙻𝚊 𝚙𝚎𝚛𝚜𝚎𝚟𝚎𝚛𝚊𝚗𝚌𝚒𝚊 𝚎𝚜 𝚕𝚊 𝚌𝚕𝚊𝚟𝚎 𝚍𝚎𝚕 é𝚡𝚒𝚝𝚘. ¡𝙽𝚘 𝚝𝚎 𝚛𝚒𝚗𝚍𝚊𝚜 𝚗𝚞𝚗𝚌𝚊! 💪',
    '¡𝙴𝚕 𝚕í𝚖𝚒𝚝𝚎 𝚎𝚜 𝚜𝚘𝚕𝚘 𝚞𝚗𝚊 𝚒𝚕𝚞𝚜𝚒ó𝚗! ¡𝚃ú 𝚙𝚞𝚎𝚍𝚎𝚜 𝚊𝚕𝚌𝚊𝚗𝚣𝚊𝚛 𝚕𝚘 𝚚𝚞𝚎 𝚝𝚎 𝚙𝚛𝚘𝚙𝚘𝚗𝚐𝚊𝚜! 🚀',
    '𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚌𝚊𝚍𝚊 𝚍𝚎𝚜𝚊𝚏í𝚘 𝚎𝚜 𝚞𝚗𝚊 𝚘𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚍𝚊𝚍 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚌𝚎𝚛 𝚢 𝚊𝚙𝚛𝚎𝚗𝚍𝚎𝚛. 💡',
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
}
