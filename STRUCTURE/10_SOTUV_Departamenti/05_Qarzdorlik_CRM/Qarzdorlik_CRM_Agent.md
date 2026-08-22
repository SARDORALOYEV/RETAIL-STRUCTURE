---
title: "Qarzdorlik CRM Agent"
aliases: [Qarzdorlik_CRM_Agent, Qarzdorlik_CRM, Qarzdorlik_Bot]
tags: [retail-it, sotuv, qarzdorlik, makkajoxori]
role: "Mijozlar qarzdorligini nazorat qilish va muddati o'tgan to'lovlar bo'yicha avtomatik eslatmalar yuborish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 💰 Qarzdorlik CRM Agent

## 📋 Vazifasi

- Har bir mijozning qarz summasi va to'lov muddatini kartada yuritish
- Muddati o'tgan (30/50/60 kun) qarzlarni darajalarga ajratib nazorat qilish
- To'lov muddati yaqinlashgan mijozlarga avtomatik eslatma (SMS/Telegram) yuborish
- 50 kundan oshgan qarzlar bo'yicha [[Yuridik_Agent]] ga yuridik chora ko'rish uchun ma'lumot uzatish
- Yangi qarzga sotish so'rovlarida mijozning joriy kredit limitini tekshirish
- Haftalik umumiy qarzdorlik holati bo'yicha hisobot tayyorlash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Zakaz_Kassa_Agent]] dan qarzga sotilgan buyurtma ma'lumoti keladi.
2. Mijoz kartasida qarz summasi va to'lov muddati qayd etiladi.
3. Muddat yaqinlashganda mijozga avtomatik eslatma yuboriladi.
4. Muddat o'tsa va 50 kundan oshsa, ma'lumot [[Yuridik_Agent]] ga yuridik chora ko'rish uchun uzatiladi.
5. Haftalik qarzdorlik holati [[Moliya_Agent]] va [[Analitika_Agent]] ga hisobot qilinadi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Qarzga sotilgan buyurtma: 6.2 mln so'm, 30 kun | [[Zakaz_Kassa_Agent]] | Muddati o'tgan qarz ro'yxati: 3 mijoz, 14.5 mln so'm | [[Moliya_Agent]] |
| Mijoz to'lov tarixi | Buxgalteriya arxivi | Yuridik chora so'rovi (50+ kun) | [[Yuridik_Agent]] |
| — | — | Haftalik qarzdorlik KPI | [[Analitika_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Zakaz_Kassa_Agent]] — qarz manbai
- [[Moliya_Agent]] — qarzdorlik nazorati
- [[Yuridik_Agent]] — yuridik chora
