---
aliases: [Sotuv_Departamenti, Sales_Department, Sotuv]
tags: [retail-it, department, sales, index]
created: 2026-08-22
status: active
---

# 🛒 Sotuv Departamenti (Sales)

**Rahbar:** Sardor
**Roli:** Sotuv jarayoni — leadlar, zakazlar, qarzdorlik, torgoviy agentlar

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Sotuv Agent | [[Sotuv_Agent]] | Sotuv jarayonini boshqarish |
| Sales Bot Router | [[Sales_Bot_Router]] | 6 ta bot router |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Lead Baza CRM | [[Lead_Baza_CRM_Agent]] |
| 2 | Torgoviy Agent Route | [[Torgoviy_Agent_Route_Agent]] |
| 3 | KP va Shartnomalar | [[KP_Shartnomalar_Agent]] |
| 4 | Zakaz va Kassa | [[Zakaz_Kassa_Agent]] |
| 5 | Qarzdorlik CRM | [[Qarzdorlik_CRM_Agent]] |
| 6 | Sales Bot Router | [[Sales_Bot_Router]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Marketing_Agent]] | Leadlar ro'yxati |
| [[Sklad_Agent]] | Mahsulot mavjudligi |
| [[Yuridik_Agent]] | Shartnoma shablonlari |
| [[Buxgalteriya_Agent]] | Narxlar ro'yxati |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Sklad_Agent]] | Zakazlar — mahsulot chiqarish |
| [[Buxgalteriya_Agent]] | Sotuv hisoboti, qarzdorlik |
| [[Moliya_Agent]] | Sotuv tushumi |
| [[Analitika_Agent]] | Sotuv KPI |
| [[Export_Agent]] | Xorijiy zakazlar |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Sotuv 30% dan kam | [[Marketing_Agent]] ga shoshilinch reklama | Sotuv |
| Qarzdorlik 50 kun | [[Yuridik_Agent]] ga yuridik chora | Sotuv |
| 100% zakaz bajarilmasa | [[COO_Agent]] ga xabar | COO |
| Yangi bozor | [[Export_Agent]] ga taklif | Sotuv |

## Bog'liqliklar

- [[Ishlab_Chiqarish_Departamenti]] — mahsulot ishlab chiqarish
- [[Moliya_Departamenti]] — KPI va moliya
- [[Analitika_Departamenti]] — sotuv KPI
- [[Sklad_Departamenti]] — ombor mavjudligi
- [[Marketing_Departamenti]] — leadlar
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — shartnomalar
- [[COO_Agent]] — operatsion boshqaruv
