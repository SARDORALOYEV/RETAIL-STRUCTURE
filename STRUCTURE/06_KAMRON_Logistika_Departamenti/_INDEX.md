---
aliases: [Logistika_Departamenti, Logistics_Department, Kamron_Logistika]
tags: [retail-it, department, logistika, index]
created: 2026-08-22
status: active
---

# 🚛 Logistika Departamenti

**Rahbar:** Kamron
**Roli:** Transport va yetkazib berish — marshrut, yuk, OTD nazorati
**Bot Router:** `@xamxam_logistika_bot`
**Target KPI:** OTD >= 96%

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Logistika Agent | [[Logistika_Agent]] | Transport, marshrut, OTD nazorati |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Transport Nazorati | [[Transport_Nazorati_Agent]] |
| 2 | Yuk Holati | [[Yuk_Holati_Agent]] |
| 3 | Marshrut Nazorati | [[Marshrut_Nazorati_Agent]] |
| 4 | Kechikish Ogohlantirish | [[Kechikish_Ogohlantirish_Agent]] |
| 5 | OTD Yetkazib Berish | [[OTD_Yetkazib_Berish_Agent]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Sklad_Agent]] | Jo'natiladigan mahsulot |
| [[Sotuv_Agent]] | Yetkazib berish manzillari |
| [[Taminot_Agent]] | Kiruvchi yuk jadvali |
| [[HR_Agent]] | Haydovchilar ro'yxati |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Sklad_Agent]] | Yetkazib berish holati |
| [[Analitika_Agent]] | Logistika KPI |
| [[CEO_AI_Yordamchisi_Agent]] | OTD umumiy hisobot |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| OTD 96% dan past | [[COO_Agent]] ga shoshilinch xabar | Logistika |
| Yo'lda kechikish | [[Sotuv_Agent]] ga ogohlantirish | Logistika |

## Bog'liqliklar

- [[HR_Departamenti]] — haydovchilar
- [[Taminot_Departamenti]] — kiruvchi yuk
- [[Sklad_Departamenti]] — ombor va jo'natma
- [[CEO_AI_Yordamchisi_Agent]] — umumiy hisobot
- [[COO_Agent]] — operatsion boshqaruv
