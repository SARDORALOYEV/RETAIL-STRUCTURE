---
aliases: [Marketing_Departamenti, Marketing_Department, Abduvoris_Marketing]
tags: [retail-it, department, marketing, index]
created: 2026-08-22
status: active
---

# 🎯 Marketing Departamenti

**Rahbar:** Abduvoris
**Roli:** Marketing kampaniyalari — kontent, ijtimoiy tarmoqlar, leadlar, qamrov, analitika

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Marketing Agent | [[Marketing_Agent]] | Kampaniyalar, leadlar, reklama, brend |
| Marketing Bot Router | [[Marketing_Bot_Router]] | @zavod_marketing_bot — marketing boti |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Kontent Ishlab Chiqarish — Ssenariy va Matn | [[Kontent_Ishlab_Chiqarish]] |
| 2 | Instagram Agent — Reels va Story | [[Instagram_Agent]] |
| 3 | YouTube Agent — Uzun Video va SEO | [[YouTube_Agent]] |
| 4 | TikTok Agent — Qisqa Vertikal Video | [[TikTok_Agent]] |
| 5 | Geografiya — Qamrov Taqsimoti | [[Geografiya_Qamrov]] |
| 6 | Lead va Diler Bazasi — CRM | [[Lead_va_Diler_Bazasi]] |
| 7 | Marketing Analitika — KPI va Hisobot | [[Marketing_Analitika]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Analitika_Agent]] | Bozor tahlili, raqobatchilar |
| [[Sotuv_Agent]] | Sotuv natijalari, lead sifati |
| [[Moliya_Agent]] | Marketing budjeti |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Sotuv_Agent]] | Yangi leadlar, kampaniya natijalari |
| [[Analitika_Agent]] | Marketing KPI, ROI |
| [[Buxgalteriya_Agent]] | Marketing xarajatlari |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| ROI 2 dan past | [[Moliya_Agent]] ga budjet qayta ko'rib chiqish | Marketing |
| Lead sifati 30% dan past | Strategiyani o'zgartirish | Marketing |
| Reklama xarajati 20% oshsa | [[COO_Agent]] ga xabar | Marketing |

## Bog'liqliklar

- [[Sklad_Departamenti]] — ombor va mahsulot mavjudligi
- [[Sotuv_Departamenti]] — lead va kampaniya natijalari
- [[Komron_Analitika_Departamenti]] — bozor tahlili
- [[Moliya_Departamenti]] — marketing budjeti
- [[COO_Agent]] — operatsion boshqaruv
