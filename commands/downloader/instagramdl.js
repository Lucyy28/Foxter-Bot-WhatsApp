const {
    quote
} = require("@mengkodingan/ckptw");
const axios = require("axios");
const mime = require("mime-types");

module.exports = {
    name: "instagramdl",
    aliases: ["ig", "igdl", "instagram"],
    category: "downloader",
    handler: {
        coin: [10, "text", 1]
    },
    code: async (ctx) => {
        if (await handler(ctx, module.exports.handler)) return;

        const url = ctx.args[0] || null;

        if (!url) return await ctx.reply(
            `${quote(tools.msg.generateInstruction(["send"], ["text"]))}\n` +
            quote(tools.msg.generateCommandExample(ctx._used.prefix + ctx._used.command, "https://example.com/"))
        );

        const isUrl = await tools.general.isUrl(url);
        if (!isUrl) return await ctx.reply(config.msg.urlInvalid);

        try {
            const apiUrl = tools.api.createUrl("btch", "/download/igdl", {
                url
            }, null, ["url"]);
            const {
                data
            } = await axios.get(apiUrl);

            for (const media of data.result) {
                const isImage = media.url.includes(".jpg");
                const mediaType = isImage ? "image" : "video";
                const extension = isImage ? "png" : "mp4";

                await ctx.reply({
                    [mediaType]: {
                        url: media.url
                    },
                    mimetype: mime.lookup(extension)
                });
            }
        } catch (error) {
            console.error(`[${config.pkg.name}] Error:`, error);
            if (error.status !== 200) return ctx.reply(config.msg.notFound);
            return await ctx.reply(quote(`⚠️ Terjadi kesalahan: ${errorMessage}`));
        }
    }
};