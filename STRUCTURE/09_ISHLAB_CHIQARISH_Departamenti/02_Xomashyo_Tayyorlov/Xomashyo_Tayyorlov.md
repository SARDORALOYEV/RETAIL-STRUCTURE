---
aliases: [Xomashyo_Tayyorlov, Xomashyo_Tayyorlov_Agenti]
tags: [retail-it, production, xomashyo, makkajoxori]
created: 2026-08-22
status: active
parent: [[Ishlab_Chiqarish_Agent]]
---

# 🌽 Xom-ashyo Tayyorlov Agenti

## 📋 Vazifasi

- Kelib tushgan makkajo'xori donini turi va sifat sinfi bo'yicha saralash (yirik, mayda, aralash)
- Don namligini o'lchash — ekstruziya uchun standart 12–14% namlik darajasiga yetkazish
- Namligi yuqori donni quritish liniyasida qayta ishlash
- Yot aralashmalar (somon, tosh, chirigan don) va zararkunanda izlarini avtomatik tozalash
- Har partiyaning namlik, tozalik va sifat ko'rsatkichlarini jurnalga qayd etish
- Tayyorlangan donni Ekstruziya liniyasiga uzluksiz uzatilishini ta'minlash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Taminot_Agent]] dan makkajo'xori doni partiyasi va uning sertifikati keladi.
2. [[Plan_Fakt]] dan kunlik kerakli xom-ashyo hajmi bo'yicha topshiriq olinadi.
3. Don saralash, tozalash va namlik o'lchash amalga oshiriladi; namlik normadan yuqori bo'lsa quritish liniyasiga yo'naltiriladi.
4. Tayyor xom-ashyo miqdori va sifat ko'rsatkichlari qayd etiladi.
5. Tayyorlangan don [[Ekstruziya_Liniya]] ga uzatiladi.
6. Rad etilgan (sifatsiz) partiya haqida [[Taminot_Agent]] ga xabar yuboriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Don partiyasi: 12 tonna, namlik 16%, sertifikat №4021 | [[Taminot_Agent]] | Tayyor xom-ashyo: 11.4 tonna, namlik 13% | [[Ekstruziya_Liniya]] |
| Kunlik kerakli hajm: 10 tonna | [[Plan_Fakt]] | Rad etilgan partiya akti: 0.6 tonna (zararkunanda izi) | [[Taminot_Agent]] |
| — | — | Xom-ashyo tayyorlash hisoboti (namlik, tozalik) | [[Sifat_Brak_Nazorati]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Agent]] — bosh agent
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Plan_Fakt]] — reja manbai
- [[Ekstruziya_Liniya]] — keyingi jarayon
- [[Taminot_Agent]] — xom-ashyo yetkazuvchi
