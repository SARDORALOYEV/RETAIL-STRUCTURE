---
title: "KP Shartnomalar Agent"
aliases: [KP_Shartnomalar_Agent, KP_Shartnomalar, KP_Shartnoma_Bot]
tags: [retail-it, sotuv, shartnoma, kp, makkajoxori]
role: "Tijorat takliflarini (KP) va yetkazib berish shartnomalarini avtomatik tayyorlash"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 📝 KP Shartnomalar Agent

## 📋 Vazifasi

- Mijoz turiga (supermarket, ulgurji bozor, eksport dileri) mos tijorat taklifini (KP) 1 daqiqa ichida shakllantirish
- Mahsulot assortimenti (tayoqcha, konserva, ziravorli kukuruz), narx va yetkazib berish shartlarini KP'ga kiritish
- Standart yetkazib berish shartnomasini avtomatik generatsiya qilish va [[Yuridik_Agent]] tekshiruviga yuborish
- Chegirma va to'lov muddati shartlarini [[Moliya_Agent]] limitlari doirasida taklif qilish
- Imzolangan shartnomalar arxivini yuritish va muddati tugash sanasini kuzatish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Lead_Baza_CRM_Agent]] dan tayyor (shartnomaga qiziqqan) mijoz keladi.
2. Mijoz talabiga mos KP (mahsulot turi, narx, yetkazish shartlari) shakllantiriladi.
3. Standart shartnoma generatsiya qilinib, [[Yuridik_Agent]] tekshiruvidan o'tkaziladi.
4. Tasdiqlangan shartnoma mijozga yuboriladi va imzolanadi.
5. Imzolangan shartnoma asosida birinchi buyurtma [[Zakaz_Kassa_Agent]] ga uzatiladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Tayyor mijoz: "HAVAS, 25 filial" | [[Lead_Baza_CRM_Agent]] | Tijorat taklifi (KP): 6 turdagi mahsulot, 12 oylik narx | Mijoz |
| Narxlar ro'yxati | [[Buxgalteriya_Agent]] | Shartnoma loyihasi (tekshiruvga) | [[Yuridik_Agent]] |
| Yuridik shablonlar | [[Yuridik_Agent]] | Imzolangan shartnoma → birinchi buyurtma | [[Zakaz_Kassa_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Yuridik_Agent]] — yuridik tekshiruv
- [[Zakaz_Kassa_Agent]] — keyingi jarayon
