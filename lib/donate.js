exports.donate = (id, DRA, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${DRA}*
╠════════════════════
║├≽️⚜ *PULSA* : _081292709196_
║├≽️⚜ *DANA* : _081292709196_
╠════════════════════
║  *${DRA}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${DRA}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY DENDRA RIZKI*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}

