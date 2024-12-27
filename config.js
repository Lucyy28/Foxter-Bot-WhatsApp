// Modul dan dependensi yang diperlukan
const pkg = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/ckptw");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "Foxter Bot", // Nama bot
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "6283101799665", // Nomor telepon bot biar nyambung
        thumbnail: "https://files.catbox.moe/lf2pwt.jpg", // Gambar thumbnail bot
        website: "https://whatsapp.com/channel/0029Vb1FZAQKQuJJGIctsS21", // Website untuk WhatsApp bot
        groupJid: "" // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("Itu Buat Admin Grup Cok 😔"), // Pesan ketika perintah hanya untuk admin
        banned: quote("⛔ Kamu Di Banned Sama Owner, Mungkin Ada Yang Salah Minta Maaf Aja"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("Set Dulu Adminnya Ke Bot 😒"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote("⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot!"), // Pesan untuk pengguna yang tidak ada dalam grup
        cooldown: quote("Bisa Sabar Ga?!?! Cooldown Kocak 😤"), // Pesan saat cooldown perintah
        coin: quote("Coin Lu Ga Cukuppp 😂"), // Pesan ketika koin tidak cukup
        group: quote("Cuman Bisa Di Akses Di Grup! 😚"), // Pesan untuk perintah grup
        owner: quote("Cuman Owner Doang Yang Bisa 😎"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("Buat Orang Premium Itu Brok!, Minta Premium Gih 😜"), // Pesan jika pengguna bukan Premium
        private: quote("Commandnya Bisa Di Akses Di Chat Pribadi 📥"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintahnya telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        watermark: `@${pkg.name} / v${pkg.version}`, // Watermark nama dan versi pada bot
        footer: italic("Developed by Lucy Foxter"), // Footer di pesan bot
        readmore: "\u200E".repeat(4001), // String read more

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Ga Nemu Apa Apa Botnya, Maaf Coba Lagi"), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URLnya itu lohh, Ga Valid") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "Foxter Bot", // Nama owner bot
        number: "6283101799665", // Nomor telepon owner bot
        organization: "Zirotude", // Nama organisasi owner bot
        co: ["6283101799665"] // Nomor co-owner bot
    },

    // Konfigurasi stiker bot
    sticker: {
        packname: "Stiker ini dibuat oleh", // Nama paket stiker
        author: "@Lucy" // Pembuat stiker
    },

    // Pengaturan sistem bot
    system: {
        autoRead: false, // Apakah bot otomatis membaca pesan masuk
        autoTypingOnCmd: false, // Aktifkan status mengetik ketika memproses perintah
        cooldown: 5000, // Waktu cooldown antar perintah dalam milidetik
        restrict: false, // Membatasi perintah tertentu untuk keamanan
        requireBotGroupMembership: false, // Apakah pengguna harus bergabung dengan grup bot
        port: 8080, // Port yang diinginkan (opsional jika menggunakan server)
        selfOwner: true, // Apakah bot menjadi owner
        selfReply: true, // Apakah bot merespon pesan yang dikirim bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        usePairingCode: true, // Menggunakan kode pairing untuk koneksi
        useServer: false // Menggunakan server
    }
};