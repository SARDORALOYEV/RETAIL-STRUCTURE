---
aliases: [Taminot_Departamenti, Supply_Department, Kamron_Taminot]
tags: [retail-it, department, taminot, index]
created: 2026-08-22
status: active
---

# 🚚 Ta'minot Departamenti

**Rahbar:** Kamron
**Roli:** Xom-ashyo ta'minoti — nazorat, prognoz, zaxira, signal
**Bot Router:** `@xamxam_taminot_bot`
**Target KPI:** 14 Kunlik Prognoz

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Ta'minot Agent | [[Taminot_Agent]] | Xom-ashyo yetkazish, sifat nazorati |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Xomashyo Nazorati | [[Xomashyo_Nazorati_Agent]] |
| 2 | Qoldiq Nazorati | [[Qoldiq_Nazorati_Agent]] |
| 3 | Ehtiyoj Prognozi | [[Ehtiyoj_Prognozi_Agent]] |
| 4 | Minimal Zaxira | [[Minimal_Zaxira_Agent]] |
| 5 | Muammo Signal | [[Muammo_Signal_Agent]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Ishlab_Chiqarish_Agent]] | Xom-ashyo kerakligi |
| [[Sklad_Agent]] | Ombor qoldig'i |
| [[Import_Agent]] | Import xom-ashyosi |
| [[Moliya_Agent]] | Ta'minot budjeti |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Ishlab_Chiqarish_Agent]] | Xom-ashyo yetkazish |
| [[Analitika_Agent]] | Ta'minot KPI |
| [[CEO_AI_Yordamchisi_Agent]] | 14 kunlik prognoz xulosasi |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Yetkazish 3 kun kechiksa | [[COO_Agent]] ga xabar | Ta'minot |
| Zaxira kritik darajaga tushsa | [[Muammo_Signal_Agent]] orqali avtomatik signal | Ta'minot |

## Bog'liqliklar

- [[HR_Departamenti]] — ta'minot xodimlari
- [[Logistika_Departamenti]] — kiruvchi yuk
- [[Ishlab_Chiqarish_Departamenti]] — xom-ashyo iste'molchisi
- [[CEO_AI_Yordamchisi_Agent]] — umumiy hisobot
- [[COO_Agent]] — operatsion boshqaruv
