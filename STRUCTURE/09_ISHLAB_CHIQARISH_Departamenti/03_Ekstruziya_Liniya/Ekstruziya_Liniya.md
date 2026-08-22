---
aliases: [Ekstruziya_Liniya, Ekstruziya_Agenti]
tags: [retail-it, production, ekstruziya, makkajoxori]
created: 2026-08-22
status: active
parent: [[Ishlab_Chiqarish_Agent]]
---

# 🔥 Ekstruziya Liniyasi Agenti

## 📋 Vazifasi

- Ekstruder uskunasining bosim (18–22 bar) va harorat (150–170°C) ko'rsatkichlarini real vaqtda nazorat qilish
- Tayyorlangan makkajo'xori donini ekstruderga uzluksiz uzatilishini ta'minlash
- Yuqori bosim ostida donni puflab, standart shakl (tayoqcha, halqa) va o'lchamdagi mahsulotga aylantirish
- Liniya tezligini (kg/soat) mahsulot turiga qarab sozlash
- Uskuna to'xtashi yoki bosim tushib ketishini darhol aniqlab, texnik xizmat agentiga signal yuborish
- Har smenada ishlab chiqarilgan xom mahsulot (ziravorlanmagan) hajmini hisoblash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Xomashyo_Tayyorlov]] dan tayyorlangan don uzluksiz oqim shaklida keladi.
2. Ekstruder bosim va harorat parametrlari mahsulot turiga (klassik/halqa) qarab sozlanadi.
3. Don yuqori bosim ostida puflanib, tayoqcha yoki halqa shaklidagi xom mahsulotga aylanadi.
4. Ishlab chiqarilgan xom mahsulot miqdori qayd etiladi va [[Qadoqlash_Markirovka]] ga uzatiladi.
5. Uskuna nosozligi yuzaga kelsa, liniya to'xtatiladi va [[Production_Bot_Agents]] orqali texnik xizmat jamoasiga xabar boradi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Tayyor xom-ashyo: 11.4 tonna | [[Xomashyo_Tayyorlov]] | Xom mahsulot (ziravorlanmagan): 10.8 tonna tayoqcha | [[Qadoqlash_Markirovka]] |
| Mahsulot turi bo'yicha navbat | [[Plan_Fakt]] | Liniya holati: 22 bar, 160°C, ishlayapti | [[Ishlab_Chiqarish_Agent]] |
| — | — | Uskuna to'xtash alerti | [[Production_Bot_Agents]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Agent]] — bosh agent
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Xomashyo_Tayyorlov]] — xom-ashyo manbai
- [[Qadoqlash_Markirovka]] — keyingi jarayon
- [[Production_Bot_Agents]] — texnik xizmat va monitoring
