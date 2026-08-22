---
aliases: [Sifat_Nazorati_Agent, Quality_Inspector_Agent]
tags: [retail-it, production, sifat, agent, makkajoxori]
created: 2026-08-22
status: active
role: Har smenadagi mahsulot sifatini tekshiruvchi va brak foizini hisoblovchi agent
parent: [[Sifat_Brak_Nazorati]]
---

# 🧪 Sifat Nazorati Agent

## 📋 Vazifasi

- Har partiyadan tasodifiy namuna olib, laboratoriya tahlilidan (namlik, yog' foizi, ta'm) o'tkazish
- Mahsulot rangi va shaklini standart namuna bilan vizual solishtirish
- Qadoq og'irligini (masalan 70g ± 2g) tarozida tekshirish
- Har smena uchun brak foizini avtomatik hisoblab, kunlik/haftalik trend grafigini yuritish
- Brak me'yordan (5%) oshgan smenalar bo'yicha darhol ogohlantirish yuborish
- Yaroqlilik muddati tugagan yoki tugashiga oz qolgan mahsulotni omborda aniqlash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Sifat_Brak_Nazorati]] jarayoni doirasida har partiyadan namuna oladi.
2. Namlik, yog' foizi, ta'm va og'irlik ko'rsatkichlari standart bilan solishtiriladi.
3. Standartga mos kelmagan birliklar brak sifatida ro'yxatga olinadi va sababi (masalan "kuydirilgan", "ziravor kam") belgilanadi.
4. Smena bo'yicha brak foizi hisoblanadi va 5% chegara bilan solishtiriladi.
5. Chegaradan oshsa [[Ekstruziya_Liniya]] yoki [[Qadoqlash_Markirovka]] ga darhol xabar yuboriladi.
6. Kunlik sifat hisoboti [[Ishlab_Chiqarish_Agent]] ga taqdim etiladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Partiya namunasi (tasodifiy 50 dona) | [[Sifat_Brak_Nazorati]] | Brak foizi hisoboti: 2.1% (norma ichida) | [[Ishlab_Chiqarish_Agent]] |
| Standart ko'rsatkichlar (namlik, og'irlik) | Ichki standart baza | Chegaradan oshish alerti | [[Ekstruziya_Liniya]] / [[Qadoqlash_Markirovka]] |
| — | — | Haftalik sifat trendi | [[Analitika_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sifat_Brak_Nazorati]] — bosh jarayon
- [[Ishlab_Chiqarish_Agent]] — umumiy nazorat
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Ekstruziya_Liniya]] — brak sababi manbai
- [[Qadoqlash_Markirovka]] — brak sababi manbai
