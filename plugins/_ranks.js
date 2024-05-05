global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return "";

    const roles = [
      { name: "𝙽𝚄𝙴𝚅𝙾", level: 0 },
      { name: "𝙿𝙴𝚀𝚄𝙴Ñ𝙾", level: 5 }, //»»————⍟——««\n
      { name: "𝙰𝚅𝙰𝙽𝚉𝙰𝙳𝙾", level: 10 },
      { name: "𝙴𝚇𝙿𝙴𝚁𝚃𝙾", level: 15 },
      { name: "🐬 𝙴𝚇𝙿𝙴𝚁𝚃𝙾 𝙴𝙽 𝙳𝙾𝙿𝙻𝙸𝙽", level: 20 },
      { name: "🥷 𝙳𝙾𝙼𝙰𝙳𝙾𝚁", level: 25 }, //𐏓・,〔𒁷, 𒆜〢
      { name: "⚔ 𝙴𝙻 𝙲𝙰𝚁𝚁𝚈", level: 30 },
      { name: "👑 𝙻𝙸𝙳𝙴𝚁 𝙴𝚇𝙿𝙴𝚁𝙾 𝙴𝙽 𝚁𝙴𝙼", level: 35 },
      { name: "🪼 𝙴𝚇𝙿𝙴𝚁𝚃𝙾 𝙴𝙽 𝙼𝙰𝚁𝙴𝚂", level: 40 },
      { name: "🐍 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴 𝙿𝙻𝚄𝚃𝙾𝙽", level: 45 },
      { name: "👹 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴 𝙼𝙴𝚁𝙲𝚄𝚁𝙸𝙾", level: 50 },
      { name: "🧙‍♂️ 𝙼𝙰𝙽𝙾 𝙳𝙴𝚁𝙴𝙲𝙷𝙰 𝙳𝙴𝙻 𝙾𝚆𝙽𝙴𝚁", level: 60 },
      { name: "🧝‍♂️ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴 𝚅𝙴𝙽𝚄𝚂", level: 70 },
      { name: "🐲 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴 𝙽𝙴𝙿𝚃𝚄𝙽𝙾", level: 80 },
      { name: "🔮 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴 𝚂𝙰𝚃𝚄𝚁𝙽𝙾 🔮", level: 90 },
      { name: "🔱 𝙾𝚆𝙽𝙴𝚁 𝙿𝙴𝚀𝚄𝙴Ñ𝙾 🔱", level: 100 },
    ];

    const role = roles.reverse().find((role) => level >= role.level);
    return role ? role.name : "";
  },
};
