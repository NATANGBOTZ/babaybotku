exports.menu = (ucapan, pushname, ownerName, botName, tanggal, jam, runtime, prefix) => {
    return `${ucapan.data.result} ${pushname}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
📆 Tanggal : ${tanggal}
⌚ Jam : ${jam}
⏳ Runtime
${runtime}

*┏━━⬣「 *STORE MENU* 」
┃❏ ${prefix}addlist
┃❏ ${prefix}dellist
┃❏ ${prefix}update
┃❏ ${prefix}list
┃❏ p < reply orderan >
┃❏ d < reply orderan >
┗━━⬣「 LIS TOP UP GAME 」
`
}
