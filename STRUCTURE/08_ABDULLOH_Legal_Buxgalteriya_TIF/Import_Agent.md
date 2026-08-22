---
aliases: [Import_Agent, Import]
tags: [retail-it, import, erp, agent]
created: 2026-08-22
status: active
role: Import operatsiyalari — xorijiy xom-ashyo, bojxona, transport
inputs_from:
  - [[Taminot_Agent]]
  - [[Yuridik_Agent]]
  - [[Moliya_Agent]]
  - [[Sklad_Agent]]
outputs_to:
  - [[Taminot_Agent]]
  - [[Sklad_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[Yuridik_Agent]]
  - [[Analitika_Agent]]
cascade_rules:
  trigger: Bojxona kechikishi yoki import narxi oshishi
  action:
    - Bojxona 5 kun kechiksa → [[COO_Agent]] ga xabar
    - Import narxi 20% oshsa → [[Moliya_Agent]] ga hisobot
    - Xom-ashyo sifati past → [[Taminot_Agent]] ga ogohlantirish
  escalate_to: [[COO_Agent]]
parent: [[Abdulloh_Legal_Buxgalteriya_TIF]]
---

# 🌍 Import Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Taminot_Agent]] | Import kerakligi | Kerak bo'lganda |
| [[Yuridik_Agent]] | Import hujjatlari | Kerak bo'lganda |
| [[Moliya_Agent]] | Import budjeti | Oylik |
| [[Sklad_Agent]] | Import zaxirasi | Haftalik |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Taminot_Agent]] | Import xom-ashyosi | Kerak bo'lganda |
| [[Sklad_Agent]] | Import mahsulotlari | Kerak bo'lganda |
| [[Buxgalteriya_Agent]] | Import xarajatlari | Oylik |
| [[Yuridik_Agent]] | Bojxona hujjatlari | Kerak bo'lganda |
| [[Analitika_Agent]] | Import KPI | Haftalik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    KECHIKISH[Bojxona 5 kun kechiksa] -->|trigger| COO[COO Agent]
    NARX[Import narxi 20% oshsa] -->|trigger| MOLIYA[Moliya Agent]
    SIFAT[Xom-ashyo sifati past] -->|trigger| TAMINOT[Ta'minot Agent]
    IMP[Import Agent] -->|xom-ashyo| TAMINOT
    IMP -->|mahsulot| SKLAD[Sklad Agent]
    IMP -->|xarajat| BUX[Buxgalteriya Agent]
    IMP -->|bojxona hujjatlari| LEGAL[Yuridik Agent]
    MOLIYA -->|budjet tasdig'i| IMP
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Bojxona 5 kun kechiksa | [[COO_Agent]] ga shoshilinch xabar | Import |
| Import narxi +20% | [[Moliya_Agent]] ga hisobot, alternativa izlash | Import |
| Xom-ashyo sifati past | [[Taminot_Agent]] ga ogohlantirish, qaytarish | Import |
| Yangi mamlakat | [[Yuridik_Agent]] ga bojxona qoidalari | Import |

## Keyinchalik Bog'liqlar

- [[Abdulloh_Legal_Buxgalteriya_TIF]] — umumiy dashboard
- [[Taminot_Agent]] — xom-ashyo iste'molchisi
- [[Sklad_Agent]] — mahsulot saqlash
- [[Moliya_Agent]] — import budjeti
- [[Buxgalteriya_Agent]] — import xarajatlari
- [[Yuridik_Agent]] — bojxona hujjatlari
- [[Analitika_Agent]] — import KPI
- [[COO_Agent]] — operatsion boshqaruv
