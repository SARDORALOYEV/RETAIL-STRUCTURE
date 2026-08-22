---
aliases: [Plan_Fakt, Plan_Fakt_Agenti]
tags: [retail-it, production, plan-fakt, makkajoxori]
created: 2026-08-22
status: active
parent: [[Ishlab_Chiqarish_Agent]]
---

# 📊 Plan-Fakt — Kunlik Smena va Hajm Rejasi

## 📋 Vazifasi

- Sotuv buyurtmalari va ombor qoldig'i asosida kunlik/haftalik ishlab chiqarish hajmini (tonna, turlar bo'yicha) rejalashtirish
- Har smena uchun qaysi mahsulot (klassik tayoqcha, pishloqli, barbekyu, konservalangan kukuruz) ishlab chiqarilishini belgilash
- Rejalashtirilgan va real bajarilgan hajmni (Plan vs Fakt) kunlik solishtirish
- Liniyalar orasida navbatni (qaysi mahsulot birinchi ishlab chiqarilishi) optimallashtirish
- Reja bajarilmasa sababini aniqlash (xom-ashyo yetishmasligi, uskuna nosozligi, ishchi kuchi kamligi) va tegishli agentga signal berish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Sotuv_Agent]] dan buyurtmalar hajmi va turlari haqida ma'lumot keladi.
2. [[Sklad_Agent]] dan omordagi tayyor mahsulot qoldig'i olinadi.
3. [[Moliya_Agent]] dan oylik ishlab chiqarish budjeti tasdiqlanadi.
4. Ushbu ma'lumotlar asosida kunlik smena rejasi va mahsulot turlari bo'yicha navbat shakllantiriladi.
5. Reja [[Xomashyo_Tayyorlov]] ga (qancha xom-ashyo tayyorlanishi kerakligini bildirish uchun) uzatiladi.
6. Smena yakunida real bajarilgan hajm reja bilan solishtiriladi va farq [[Ishlab_Chiqarish_Agent]] ga hisobot qilinadi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Buyurtmalar hajmi va turlari | [[Sotuv_Agent]] | Kunlik smena rejasi | [[Xomashyo_Tayyorlov]] |
| Tayyor mahsulot qoldig'i | [[Sklad_Agent]] | Mahsulot turlari bo'yicha navbat | [[Ekstruziya_Liniya]] |
| Ishlab chiqarish budjeti | [[Moliya_Agent]] | Plan vs Fakt hisoboti | [[Ishlab_Chiqarish_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Agent]] — bosh agent
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Xomashyo_Tayyorlov]] — keyingi jarayon
- [[Sotuv_Agent]] — buyurtma manbai
- [[Sklad_Agent]] — qoldiq manbai
