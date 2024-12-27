const {
    MessageType,
    quote
} = require("@mengkodingan/ckptw");

module.exports = {
    name: "readviewonce",
    aliases: ["hm"],
    category: "owner",
    handler: {
        owner: true
    },
    code: async (ctx) => {
        if (await handler(ctx, module.exports.handler)) return;

        if (!await tools.general.checkQuotedMedia(ctx.quoted, ["viewOnce"])) return await ctx.reply(quote(tools.msg.generateInstruction(["reply"], ["viewOnce"])));


        try {
            const quoted = ctx.quoted?.viewOnceMessageV2?.message;
            const messageType = Object.keys(quoted)[0];
            const media = await ctx.downloadContentFromMessage(quoted[messageType], messageType.slice(0, -7));

            let buffer = Buffer.from([]);
            for await (const chunk of media) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            // Tentukan nomor pemilik bot
            const ownerJid = "6283101799665@s.whatsapp.net"; // Ganti dengan nomor pemilik bot

            if (messageType === MessageType.imageMessage) {
                // Kirim gambar ke pemilik bot
                await ctx._client.sendMessage(ownerJid, {
                    image: buffer,
                    caption: "Media dari RVO"
                });
            } else if (messageType === MessageType.videoMessage) {
                // Kirim video ke pemilik bot
                await ctx._client.sendMessage(ownerJid, {
                    video: buffer,
                    caption: "Media dari RVO"
                });
            }

            // Berikan notifikasi bahwa media sudah dikirim
            await ctx.reply("okedeh");
        } catch (error) {
            console.error(`[${config.pkg.name}] Error:`, error);
            return await ctx.reply(quote(`⚠️ Terjadi kesalahan: ${error.message}`));
        }
    }
};
