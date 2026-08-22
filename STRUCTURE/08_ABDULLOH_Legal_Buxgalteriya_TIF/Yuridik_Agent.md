---
aliases: [Yuridik_Agent, Legal_Agent, Yuridik]
tags: [retail-it, yuridik, erp, agent]
created: 2026-08-22
status: active
role: Yuridik maslahat — shartnomalar, patentlar, nizolar, soliq
inputs_from:
  - [[Sotuv_Agent]]
  - [[Taminot_Agent]]
  - [[Import_Agent]]
  - [[Export_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[HR_Agent]]
outputs_to:
  - [[COO_Agent]]
  - [[CEO_Agent]]
  - [[Sotuv_Agent]]
  - [[Taminot_Agent]]
  - [[Buxgalteriya_Agent]]
cascade_rules:
  trigger: Yuridik nizo yoki muddat yaqinlashishi
  action:
    - Shartnoma muddatiga 30 kun qolganda → tegishli bo'limlarga eslatma
    - Yuridik nizo boshlansa → [[CEO_Agent]] ga xabar
    - Patent muddati o'tsa → [[COO_Agent]] ga ogohlantirish
  escalate_to: [[CEO_Agent]]
parent: [[Abdulloh_Legal_Buxgalteriya_TIF]]
---

# ⚖️ Yuridik Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Sotuv_Agent]] | Sotuv shartnomalari | Kerak bo'lganda |
| [[Taminot_Agent]] | Ta'minot shartnomalari | Kerak bo'lganda |
| [[Import_Agent]] | Import hujjatlari | Kerak bo'lganda |
| [[Export_Agent]] | Export hujjatlari | Kerak bo'lganda |
| [[Buxgalteriya_Agent]] | Soliq hujjatlari | Oylik |
| [[HR_Agent]] | Mehnat shartnomalari | Kerak bo'lganda |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[COO_Agent]] | Yuridik hisobot | Oylik |
| [[CEO_Agent]] | Strategik yuridik maslahat | Kerak bo'lganda |
| [[Sotuv_Agent]] | Shartnoma shablonlari | Kerak bo'lganda |
| [[Taminot_Agent]] | Ta'minot shartnomalari | Kerak bo'lganda |
| [[Buxgalteriya_Agent]] | Soliq maslahatlari | Oylik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    MUDDAT[Shartnoma muddatiga 30 kun] -->|eslatma| ALL[Tegishli bo'limlar]
    NIZO[Yuridik nizo] -->|trigger| CEO[CEO Agent]
    PATENT[Patent muddati o'tsa] -->|trigger| COO[COO Agent]
    LEGAL[Yuridik Agent] -->|shartnoma| SOTUV[Sotuv]
    LEGAL -->|shartnoma| TAMINOT[Ta'minot]
    LEGAL -->|soliq maslahati| BUX[Buxgalteriya]
    LEGAL -->|mehnat shartnomasi| HR[HR]
    LEGAL -->|import hujjatlari| IMP[Import]
    LEGAL -->|export hujjatlari| EXP[Export]
    LEGAL -->|hisobot| COO
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Shartnoma muddatiga 30 kun | Tegishli bo'limlarga eslatma | Yuridik |
| Yuridik nizo | [[CEO_Agent]] ga xabar | Yuridik |
| Patent muddati o'tsa | [[COO_Agent]] ga ogohlantirish | Yuridik |
| Soliq auditi | [[Buxgalteriya_Agent]] bilan hamkorlik | Yuridik |

## Keyinchalik Bog'liqlar

- [[Abdulloh_Legal_Buxgalteriya_TIF]] — umumiy dashboard
- [[COO_Agent]] — operatsion boshqaruv
- [[CEO_Agent]] — strategik qarorlar
- [[Sotuv_Agent]] — sotuv shartnomalari
- [[Taminot_Agent]] — ta'minot shartnomalari
- [[Buxgalteriya_Agent]] — soliq hujjatlari
- [[HR_Agent]] — mehnat shartnomalari
- [[Import_Agent]] — import hujjatlari
- [[Export_Agent]] — export hujjatlari
