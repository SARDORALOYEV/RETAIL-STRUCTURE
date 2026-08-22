---
aliases: [Taminot_Agent, Ta'minot_Agent, Supply_Agent]
tags: [retail-it, taminot, erp, agent]
created: 2026-08-22
status: active
role: Xom-ashyo va materiallar ta'minoti — yetkazib berish, sifat nazorati
bot_router: "@xamxam_taminot_bot"
target: "14 Kunlik Prognoz"
inputs_from:
  - [[Ishlab_Chiqarish_Agent]]
  - [[Sklad_Agent]]
  - [[Import_Agent]]
  - [[Moliya_Agent]]
outputs_to:
  - [[Ishlab_Chiqarish_Agent]]
  - [[Sklad_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[Analitika_Agent]]
  - [[CEO_AI_Yordamchisi_Agent]]
cascade_rules:
  trigger: Xom-ashyo yetishmovchiligi yoki yetkazish kechikishi
  action:
    - Yetkazish 3 kun kechiksa → [[COO_Agent]] ga xabar
    - Xom-ashyo sifati past → [[Ishlab_Chiqarish_Agent]] ga ogohlantirish
    - Narx 15% oshsa → [[Moliya_Agent]] ga hisobot
  escalate_to: [[COO_Agent]]
parent: [[Taminot_Departamenti]]
---

# 🚚 Ta'minot Agent

> **Bot Router:** `@xamxam_taminot_bot` | **Target KPI:** 14 Kunlik Prognoz

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Xomashyo Nazorati | [[Xomashyo_Nazorati_Agent]] |
| 2 | Qoldiq Nazorati | [[Qoldiq_Nazorati_Agent]] |
| 3 | Ehtiyoj Prognozi | [[Ehtiyoj_Prognozi_Agent]] |
| 4 | Minimal Zaxira | [[Minimal_Zaxira_Agent]] |
| 5 | Muammo Signal | [[Muammo_Signal_Agent]] |

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Ishlab_Chiqarish_Agent]] | Xom-ashyo kerakligi | Kunlik |
| [[Sklad_Agent]] | Ombor qoldig'i | Kunlik |
| [[Import_Agent]] | Import xom-ashyosi | Kerak bo'lganda |
| [[Moliya_Agent]] | Ta'minot budjeti | Oylik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Ishlab_Chiqarish_Agent]] | Xom-ashyo yetkazish | Kunlik |
| [[Sklad_Agent]] | Xom-ashyo qabuli | Kunlik |
| [[Buxgalteriya_Agent]] | Xarajat hisoboti | Oylik |
| [[Analitika_Agent]] | Ta'minot KPI | Haftalik |
| [[CEO_AI_Yordamchisi_Agent]] | 14 kunlik prognoz xulosasi | Haftalik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    KECHIKISH[Yetkazish 3 kun kechiksa] -->|trigger| COO[COO Agent]
    SIFAT[Xom-ashyo sifati past] -->|trigger| PROD[Ishlab Chiqarish Agent]
    NARX[Narx 15% oshsa] -->|trigger| MOLIYA[Moliya Agent]
    TAMINOT[Ta'minot Agent] -->|xom-ashyo| PROD
    PROD -->|mahsulot| SKLAD[Sklad Agent]
    MOLIYA -->|budjet tasdig'i| TAMINOT
    IMPORT[Import Agent] -->|xorijiy xom-ashyo| TAMINOT
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Yetkazish 3 kun kechiksa | [[COO_Agent]] ga shoshilinch xabar | Ta'minot |
| Xom-ashyo sifati past | [[Ishlab_Chiqarish_Agent]] ga ogohlantirish, qaytarish | Ta'minot |
| Narx 15% oshsa | [[Moliya_Agent]] ga hisobot, alternativa izlash | Ta'minot |
| Yangi yetkazib beruvchi | [[Yuridik_Agent]] ga shartnoma tuzish | Ta'minot |

## Keyinchalik Bog'liqlar

- [[Taminot_Departamenti]] — umumiy dashboard
- [[HR_Departamenti]] — ta'minot xodimlari
- [[Ishlab_Chiqarish_Agent]] — xom-ashyo iste'molchisi
- [[Sklad_Agent]] — xom-ashyo saqlash
- [[Import_Agent]] — xorijiy xom-ashyo
- [[Moliya_Agent]] — budjet nazorati
- [[Buxgalteriya_Agent]] — xarajat hisoboti
- [[Analitika_Agent]] — ta'minot KPI
- [[Yuridik_Agent]] — shartnomalar
- [[COO_Agent]] — operatsion boshqaruv
