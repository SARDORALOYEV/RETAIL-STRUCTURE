---
title: "Zakaz Kassa Agent"
aliases: [Zakaz_Kassa_Agent, Zakaz_Kassa, Zakaz_Kassa_Bot]
tags: [retail-it, sotuv, zakaz, kassa, makkajoxori]
role: "Buyurtmalarni qabul qilish, ombor va kassa operatsiyalariga avtomatik o'tkazish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 💳 Zakaz Kassa Agent

## 📋 Vazifasi

- Torgoviy agentlar va shartnoma asosidagi mijozlardan tushgan buyurtmalarni ro'yxatga olish
- Buyurtma tarkibini (mahsulot turi, miqdor) [[Sklad_Agent]] dagi qoldiq bilan solishtirish
- Yetarli mahsulot bo'lsa buyurtmani tasdiqlash va omborga chiqarish topshirig'ini berish
- Naqd/plastik/o'tkazma to'lovlarni kassa tizimida rasmiylashtirish
- Har kunlik sotuv summasi va mahsulot turlari bo'yicha kassa hisobotini shakllantirish
- Yetarli mahsulot bo'lmasa mijozga muqobil taklif yoki kutish muddatini bildirish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Torgoviy_Agent_Route_Agent]] yoki [[KP_Shartnomalar_Agent]] dan yangi buyurtma keladi.
2. Buyurtma tarkibi [[Sklad_Agent]] dagi qoldiq bilan solishtiriladi.
3. Mahsulot yetarli bo'lsa, buyurtma tasdiqlanadi va omborga chiqarish topshirig'i beriladi.
4. Mijoz to'lovi (naqd/o'tkazma) kassa tizimida qayd etiladi.
5. Kunlik sotuv va kassa hisoboti [[Buxgalteriya_Agent]] ga, qarzga sotilgan buyurtmalar esa [[Qarzdorlik_CRM_Agent]] ga uzatiladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Yangi buyurtma: 40 quti tayoqcha, "MAKRO" | [[Torgoviy_Agent_Route_Agent]] | Mahsulot chiqarish topshirig'i: 40 quti | [[Sklad_Agent]] |
| Ombor qoldig'i: 1 250 quti | [[Sklad_Agent]] | Kunlik kassa hisoboti: 18.4 mln so'm | [[Buxgalteriya_Agent]] |
| — | — | Qarzga sotilgan buyurtma: 6.2 mln so'm (30 kun) | [[Qarzdorlik_CRM_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Sklad_Agent]] — mahsulot mavjudligi
- [[Qarzdorlik_CRM_Agent]] — keyingi jarayon
