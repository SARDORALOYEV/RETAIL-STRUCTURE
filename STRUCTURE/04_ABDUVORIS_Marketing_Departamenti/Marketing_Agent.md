---
aliases: [Marketing_Agent, Marketing]
tags: [retail-it, marketing, erp, agent]
created: 2026-08-22
status: active
role: Marketing kampaniyalari — leadlar, reklama, brend, tahlil
inputs_from:
  - [[Analitika_Agent]]
  - [[Sotuv_Agent]]
  - [[Moliya_Agent]]
outputs_to:
  - [[Sotuv_Agent]]
  - [[Analitika_Agent]]
  - [[Buxgalteriya_Agent]]
cascade_rules:
  trigger: Marketing ROI 2 past yoki lead sifati yomon
  action:
    - ROI 2 dan past → [[Moliya_Agent]] ga budjet qayta ko'rib chiqish
    - Lead sifati 30% dan past → strategiyani o'zgartirish
    - Reklama xarajati 20% oshsa → [[COO_Agent]] ga xabar
  escalate_to: [[COO_Agent]]
parent: [[Sardor_General_Overview]]
---

# 📣 Marketing Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Analitika_Agent]] | Bozor tahlili, raqobatchilar | Oylik |
| [[Sotuv_Agent]] | Sotuv natijalari, lead sifati | Haftalik |
| [[Moliya_Agent]] | Marketing budjeti | Oylik |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Sotuv_Agent]] | Yangi leadlar, kampaniya natijalari | Kunlik |
| [[Analitika_Agent]] | Marketing KPI, ROI | Haftalik |
| [[Buxgalteriya_Agent]] | Marketing xarajatlari | Oylik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    ROI[ROI 2 dan past] -->|trigger| MOLIYA[Moliya Agent]
    MOLIYA -->|budjet qayta ko'rish| MARKETING
    LEAD[Lead sifati 30% dan past] -->|trigger| SOTUV[Sotuv Agent]
    SOTUV -->|strategiya o'zgarishi| MARKETING
    XARAJAT[Reklama xarajati 20% oshsa] -->|trigger| COO[COO Agent]
    MARKETING -->|leadlar| SOTUV
    SOTUV -->|sotuv natijasi| MARKETING
    ANALITIKA[Analitika Agent] -->|bozor tahlili| MARKETING
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| ROI < 2 | [[Moliya_Agent]] ga budjet qayta ko'rib chiqish | Marketing |
| Lead sifati < 30% | Strategiyani o'zgartirish | Marketing |
| Reklama xarajati +20% | [[COO_Agent]] ga xabar | Marketing |
| Yangi bozor | [[Export_Agent]] ga tadqiqot | Marketing |

## Keyinchalik Bog'liqlar

- [[Sardor_General_Overview]] — umumiy dashboard
- [[Analitika_Agent]] — bozor tahlili
- [[Sotuv_Agent]] — lead manbai
- [[Moliya_Agent]] — budjet nazorati
- [[Buxgalteriya_Agent]] — xarajat hisoboti
- [[Export_Agent]] — yangi bozorlar
- [[COO_Agent]] — operatsion boshqaruv
