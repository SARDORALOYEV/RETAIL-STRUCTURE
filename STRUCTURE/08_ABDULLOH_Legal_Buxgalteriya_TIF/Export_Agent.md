---
aliases: [Export_Agent, Export]
tags: [retail-it, export, erp, agent]
created: 2026-08-22
status: active
role: Export operatsiyalari — xorijiy sotuv, bojxona, transport
inputs_from:
  - [[Sotuv_Agent]]
  - [[Sklad_Agent]]
  - [[Yuridik_Agent]]
  - [[Moliya_Agent]]
outputs_to:
  - [[Buxgalteriya_Agent]]
  - [[Yuridik_Agent]]
  - [[Moliya_Agent]]
  - [[Analitika_Agent]]
  - [[COO_Agent]]
cascade_rules:
  trigger: Export kechikishi yoki xorijiy zakaz oshishi
  action:
    - Export 5 kun kechiksa → [[COO_Agent]] ga xabar
    - Xorijiy zakaz 50% oshsa → [[Sklad_Agent]] ga zaxira ko'paytirish
    - Bojxona muammolari → [[Yuridik_Agent]] ga yordam
  escalate_to: [[COO_Agent]]
parent: [[Abdulloh_Legal_Buxgalteriya_TIF]]
---

# 🌏 Export Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Sotuv_Agent]] | Xorijiy zakazlar | Kerak bo'lganda |
| [[Sklad_Agent]] | Export uchun tayyor mahsulot | Haftalik |
| [[Yuridik_Agent]] | Export hujjatlari | Kerak bo'lganda |
| [[Moliya_Agent]] | Export budjeti | Oylik |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Buxgalteriya_Agent]] | Export tushumlari | Kunlik |
| [[Yuridik_Agent]] | Bojxona hujjatlari | Kerak bo'lganda |
| [[Moliya_Agent]] | Export moliyaviy hisoboti | Oylik |
| [[Analitika_Agent]] | Export KPI | Haftalik |
| [[COO_Agent]] | Export hisoboti | Haftalik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    KECHIKISH[Export 5 kun kechiksa] -->|trigger| COO[COO Agent]
    ZAKAZ[Xorijiy zakaz 50% oshsa] -->|trigger| SKLAD[Sklad Agent]
    MUAMMO[Bojxona muammolari] -->|trigger| LEGAL[Yuridik Agent]
    EXP[Export Agent] -->|tushum| BUX[Buxgalteriya Agent]
    EXP -->|bojxona hujjatlari| LEGAL
    EXP -->|moliyaviy hisobot| MOLIYA[Moliya Agent]
    EXP -->|hisobot| COO
    SKLAD -->|tayyor mahsulot| EXP
    SOTUV[Sotuv] -->|xorijiy zakazlar| EXP
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Export 5 kun kechiksa | [[COO_Agent]] ga shoshilinch xabar | Export |
| Xorijiy zakaz +50% | [[Sklad_Agent]] ga zaxira ko'paytirish | Export |
| Bojxona muammolari | [[Yuridik_Agent]] ga yordam | Export |
| Yangi bozor | [[Marketing_Agent]] ga tadqiqot | Export |

## Keyinchalik Bog'liqlar

- [[Abdulloh_Legal_Buxgalteriya_TIF]] — umumiy dashboard
- [[Sotuv_Agent]] — xorijiy zakazlar manbai
- [[Sklad_Agent]] — tayyor mahsulot
- [[Yuridik_Agent]] — bojxona hujjatlari
- [[Moliya_Agent]] — export budjeti
- [[Buxgalteriya_Agent]] — export tushumlari
- [[Analitika_Agent]] — export KPI
- [[Marketing_Agent]] — yangi bozorlar
- [[COO_Agent]] — operatsion boshqaruv
