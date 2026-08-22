---
aliases: [Sotuv_Agent, Sales_Agent]
tags: [retail-it, sotuv, erp, agent, makkajoxori]
created: 2026-08-22
status: active
role: Makkajo'xori zavodi mahsulotlarini supermarket, ulgurji bozor va distribyutorlarga sotish jarayonini boshqaruvchi bosh agent
inputs_from:
  - [[Marketing_Agent]]
  - [[Sklad_Agent]]
  - [[Yuridik_Agent]]
  - [[Buxgalteriya_Agent]]
outputs_to:
  - [[Sklad_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[Moliya_Agent]]
  - [[Analitika_Agent]]
parent: [[Sotuv_Departamenti]]
---

# 🛒 Sotuv Agent

## 📋 Vazifasi

- Supermarketlar (KORZINKA, MAKRO, HAVAS va h.k.), ulgurji bozorlar, distribyutorlar va dilerlar bazasini yuritish
- Torgoviy agentlarning kunlik marshrutini va do'konlarga tashrif rejasini nazorat qilish
- Tijorat takliflari (KP) va shartnomalarni tasdiqlashdan o'tkazish
- Zakazlarni qabul qilib, ombor va kassa jarayoniga uzatish
- Mijozlar qarzdorligini kuzatib, muddati o'tgan to'lovlar bo'yicha chora ko'rish
- Haftalik sotuv hajmi va mahsulot turlari bo'yicha (tayoqcha, konserva, ziravorli kukuruz) hisobot tayyorlash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Marketing_Agent]] dan yangi supermarket/distribyutor leadlari keladi, [[Lead_Baza_CRM_Agent]] ularni saralaydi.
2. [[Torgoviy_Agent_Route_Agent]] savdo agentlarining do'konlarga tashrif marshrutini tuzadi.
3. Do'kon buyurtma bersa, [[KP_Shartnomalar_Agent]] tijorat taklifi va shartnomani tayyorlaydi.
4. Tasdiqlangan buyurtma [[Zakaz_Kassa_Agent]] orqali qabul qilinadi va [[Sklad_Agent]] ga mahsulot chiqarish uchun yuboriladi.
5. To'lov muddati kelganda [[Qarzdorlik_CRM_Agent]] holatni kuzatadi, kechiksa mijozga eslatma yuboradi.
6. Haftalik sotuv KPI [[Analitika_Agent]] ga, tushum esa [[Moliya_Agent]] ga yuboriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Yangi supermarket/distribyutor leadlari | [[Marketing_Agent]] | Zakazlar — mahsulot chiqarish so'rovi | [[Sklad_Agent]] |
| Tayyor mahsulot qoldig'i | [[Sklad_Agent]] | Sotuv hisoboti, qarzdorlik | [[Buxgalteriya_Agent]] |
| Shartnoma shablonlari | [[Yuridik_Agent]] | Haftalik sotuv tushumi | [[Moliya_Agent]] |
| Narxlar ro'yxati | [[Buxgalteriya_Agent]] | Sotuv KPI (hajm, konversiya) | [[Analitika_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Lead_Baza_CRM_Agent]] — mijoz manbai
- [[Torgoviy_Agent_Route_Agent]] — marshrut
- [[KP_Shartnomalar_Agent]] — hujjatlar
- [[Zakaz_Kassa_Agent]] — buyurtma qabuli
- [[Qarzdorlik_CRM_Agent]] — qarzdorlik nazorati
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Sklad_Agent]] — mahsulot manbai
- [[Ishlab_Chiqarish_Agent]] — mahsulot ishlab chiqaruvchi
