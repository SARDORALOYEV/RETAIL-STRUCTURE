---
title: "Torgoviy Agent Route Agent"
aliases: [Torgoviy_Agent_Route_Agent, Torgoviy_Agent_Route, Torgoviy_Agent_Bot]
tags: [retail-it, sotuv, marshrut, gps, makkajoxori]
role: "Torgoviy agentlarning GPS marshrutini va do'konlarga tashrif jadvalini boshqarish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 🚗 Torgoviy Agent Route Agent

## 📋 Vazifasi

- Har hududdagi supermarket va do'konlar ro'yxati asosida torgoviy agentlarning kunlik GPS marshrutini tuzish
- Do'konlarga tashrif chastotasini (haftada 1, 2 marta) mijoz hajmiga qarab belgilash
- Agentning real vaqtdagi GPS joylashuvi va marshrut bajarilishini kuzatish
- Tashrif vaqtida to'ldirilgan hisobot (qoldiq, yangi buyurtma, muammo) ni qabul qilish
- Marshrutdan chetlanish yoki tashrif o'tkazib yuborilgan holatlarni aniqlash
- Yangi do'konlarni mavjud marshrutlarga eng samarali tarzda qo'shish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Lead_Baza_CRM_Agent]] dan hudud bo'yicha tayyor mijoz profili keladi.
2. Do'konlar joylashuvi va tashrif chastotasi asosida kunlik GPS marshrut tuziladi.
3. Torgoviy agent marshrut bo'yicha do'konlarni aylanib, tashrif natijasini (buyurtma, qoldiq) botga kiritadi.
4. Yangi buyurtma aniqlansa, ma'lumot [[Zakaz_Kassa_Agent]] ga uzatiladi.
5. Marshrut bajarilishi va samaradorligi haqida hisobot [[Sotuv_Agent]] ga yuboriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Hudud bo'yicha mijoz profili: 18 do'kon, Chilonzor tumani | [[Lead_Baza_CRM_Agent]] | Kunlik GPS marshrut rejasi: 12 do'kon/kun | Torgoviy agent (bot) |
| Ombor qoldiqlari (do'konda) | Torgoviy agent hisoboti | Yangi buyurtma: 40 quti tayoqcha | [[Zakaz_Kassa_Agent]] |
| — | — | Marshrut bajarilishi hisoboti: 92% | [[Sotuv_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Lead_Baza_CRM_Agent]] — mijoz manbai
- [[Zakaz_Kassa_Agent]] — keyingi jarayon
