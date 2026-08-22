---
aliases: [Sklad_Departamenti, Warehouse_Department, Abduvoris_Sklad, Abduvoris_Sklad_Marketing]
tags: [retail-it, department, warehouse, index]
created: 2026-08-22
status: active
---

# 📦 Sklad Departamenti (Warehouse)

**Rahbar:** Abduvoris
**Roli:** Ombor boshqaruvi — qabul, chiqim, qoldiq nazorati, reviziya, hisobot

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Sklad Agent | [[Sklad_Agent]] | Ombor boshqaruvi — mahsulot saqlash, yetkazish, qoldiq nazorati |
| Sklad Bot | [[Sklad_Bot]] | @zavod_sklad_bot — ombor operatsiyalari boti |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Nomenklatura — Kod va Joy Berish | [[Nomenklatura]] |
| 2 | Kirim Agent — Prixod Qabuli | [[Kirim_Agent]] |
| 3 | Chiqim Agent — Rasxod va Jo'natma | [[Chiqim_Agent]] |
| 4 | Qoldiq Nazorati — Min Chegara Alert | [[Qoldiq_Nazorati]] |
| 5 | Reviziya — Tsiklik Sanash | [[Reviziya]] |
| 6 | Sklad Hisobotchi — Kunlik Otchet | [[Sklad_Hisobotchi]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Ishlab_Chiqarish_Agent]] | Tayyor mahsulot |
| [[Taminot_Agent]] | Xom-ashyo qabuli |
| [[Sotuv_Agent]] | Sotuv zakazlari |
| [[Import_Agent]] | Import mahsulotlari |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Ishlab_Chiqarish_Agent]] | Ombor qoldig'i |
| [[Sotuv_Agent]] | Mahsulot mavjudligi |
| [[Export_Agent]] | Tayyor mahsulot zaxirasi |
| [[Analitika_Agent]] | Ombor KPI |
| [[Buxgalteriya_Agent]] | Ombor qiymati |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Qoldiq 20% dan kam | [[Ishlab_Chiqarish_Agent]] ga shoshilinch buyurtma | Sklad |
| Qoldiq 200% dan oshsa | [[Moliya_Agent]] ga xabar | Sklad |
| Mahsulot muddati o'tsa | [[Buxgalteriya_Agent]] ga yo'qotish akti | Sklad |

## Bog'liqliklar

- [[Marketing_Departamenti]] — leadlar va kampaniyalar
- [[Ishlab_Chiqarish_Departamenti]] — tayyor mahsulot manbai
- [[Sotuv_Departamenti]] — mahsulot mavjudligi
- [[Kamron_HR_Logistika_Taminot]] — xom-ashyo yetkazish
- [[Moliya_Departamenti]] — ombor qiymati
- [[COO_Agent]] — operatsion boshqaruv
