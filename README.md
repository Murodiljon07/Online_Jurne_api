📘 Online Journal System

Zamonaviy o‘quv markazlari, maktablar va kurslar uchun mo‘ljallangan raqamli jurnal va boshqaruv tizimi.

Excel va qog‘oz jurnallarni unuting — barcha jarayonlar endi bitta platformada 🚀

✨ Asosiy imkoniyatlar

📊 Davomat nazorati

📝 Baholash tizimi

👨‍🏫 O‘qituvchi boshqaruvi

👨‍🎓 O‘quvchi profili va rivojlanish statistikasi

🪙 Rag‘batlantirish uchun Coin (virtual mukofot) tizimi

🔐 Rolga asoslangan kirish (RBAC)

🌐 API orqali integratsiya

👥 Foydalanuvchi rollari
🧑‍💼 SUPER ADMIN

To‘liq tizim boshqaruvi

Imkoniyatlar:

Barcha foydalanuvchilarni boshqarish

Kurslar va guruhlarni yaratish

Coin mukofot tizimini sozlash

Statistik hisobotlarni ko‘rish

API sozlamalarini boshqarish

👩‍🏫 TEACHER

Ta’lim jarayonini yuritish

Imkoniyatlar:

Davomatni belgilash

Baholar qo‘yish

Vazifalar berish

O‘quvchilarga coin berish

O‘quvchi rivojlanishini kuzatish

👨‍🎓 STUDENT

Shaxsiy natijalarni kuzatish

Imkoniyatlar:

Baholarni ko‘rish

Davomatni tekshirish

Coin balansini ko‘rish

Sovrinlar do‘konidan foydalanish

Shaxsiy rivojlanish statistikasi

🪙 Coin tizimi (Gamification)

O‘quvchilarni rag‘batlantirish uchun virtual mukofot tizimi.

Qanday ishlaydi?

O‘qituvchi o‘quvchiga coin beradi

O‘quvchi coin yig‘adi

Coinlarni sovrinlarga almashtiradi 🎁

Misollar:

Qo‘shimcha dars materiali

Sertifikat

Bonus ball

Sovg‘alar

🏗️ Tizim arxitekturasi
                ┌────────────────────┐
                │     Frontend       │
                │  (Web Interface)   │
                └─────────┬──────────┘
                          │ API Requests
                          ▼
                ┌────────────────────┐
                │   Backend API      │
                │ (Online Journal)   │
                └─────────┬──────────┘
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
   ┌────────────┐  ┌────────────┐  ┌────────────┐
   │  Users DB  │  │ Courses DB │  │ Coins DB   │
   └────────────┘  └────────────┘  └────────────┘

⚙️ O‘rnatish (Installation)
1️⃣ Reponi yuklab oling
git clone https://github.com/Murodiljon07/Online_Jurne_api.git
cd Online_Jurne_api

2️⃣ Kerakli paketlarni o‘rnating
npm install

3️⃣ .env fayl yarating
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key

4️⃣ Serverni ishga tushiring
npm start

🔑 API orqali ulanish

Frontend yoki boshqa tizimlar API orqali ulanishi mumkin.

Misol:
POST /api/auth/login
GET  /api/students
POST /api/attendance

📊 Tizimdan foydalanish jarayoni

SUPER ADMIN tizimni sozlaydi

O‘qituvchilar qo‘shiladi

O‘quvchilar ro‘yxatdan o‘tadi

Davomat va baholar yuritiladi

Coin orqali rag‘batlantirish amalga oshiriladi

🎯 Kimlar uchun?

O‘quv markazlari

Xususiy maktablar

IT kurslar

Til o‘rgatish markazlari

Repetitorlar

🚀 Afzalliklari

✅ Qog‘ozsiz boshqaruv
✅ Oson o‘rnatish
✅ Gamification (coin tizimi)
✅ Rolga asoslangan xavfsizlik
✅ API orqali kengaytirish imkoniyati

🔮 Kelajak rejalari (Roadmap)

 Mobil ilova

 Telegram bot integratsiyasi

 To‘lov tizimi integratsiyasi

 Ota-onalar uchun kabinet

 Analitik dashboard

🤝 Hissa qo‘shish (Contributing)

Pull requestlar va takliflar doimo ochiq!
Loyihani rivojlantirishda qatnashishingiz mumkin.

📄 Litsenziya

MIT License
