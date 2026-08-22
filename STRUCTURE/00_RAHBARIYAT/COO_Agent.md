---
aliases: [COO_Agent, COO, Operatsion_Direktor]
tags: [retail-it, rahbariyat, coo, erp]
created: 2026-08-22
status: active
role: Operatsion Direktor — barcha operatsion jarayonlarni boshqaradi
inputs_from:
  - [[CEO_Agent]]
cascade_rules:
  trigger: Bo'limlararo operatsion nosozlik
  action: Resurslarni qayta taqsimlash va muvofiqlashtirish
  escalate_to: [[CEO_Agent]]
---

# 🏢 COO Agent — Operatsion Direktor

## Roll va Mas'uliyat

COO (Chief Operating Officer) — **operatsion jarayonlarni boshqaradi**. Barcha bo'limlararo ish oqimlarini muvofiqlashtiradi va operatsion samaradorlikni nazorat qiladi.

## 12 Bo'limli ERP Modeli

```mermaid
graph TD
    CEO[🎯 CEO_Agent] --> COO[🏢 COO_Agent]

    COO --> PROD[Ishlab Chiqarish Agent]
    COO --> SKLAD[Sklad Agent]
    COO --> TAM[Ta'minot Agent]
    COO --> SOT[Sotuv Agent]
    COO --> MARK[Marketing Agent]
    COO --> FIN[Moliya Agent]
    COO --> BUX[Buxgalteriya Agent]
    COO --> ANAL[Analitika Agent]
    COO --> HR[HR Agent]
    COO --> LEGAL[Yuridik Agent]
    COO --> IMP[Import Agent]
    COO --> EXP[Export Agent]

    %% Zanjirli bog'liqliklar
    PROD -->|Xom-ashyo kerak| TAM
    TAM -->|Yetkazish| SKLAD
    SKLAD -->|Mahsulot tayyor| PROD
    PROD -->|Tayyor mahsulot| SKLAD
    SKLAD -->|Sotish| SOT
    SOT -->|Leadlar| MARK
    MARK -->|Reklama natijasi| ANAL
    FIN -->|Budget| ALL[Barcha bo'limlar]
    BUX -->|Hisob-kitob| FIN
    HR -->|Ishchi kuchi| PROD
    LEGAL -->|Shartnoma| SOT
    IMP -->|Xom-ashyo| TAM
    EXP -->|Tayyor mahsulot| SOT
```

## Operatsion Zanjir

| Bosqich | Bo'lim | Harakat |
|---------|--------|---------|
| 1 | [[Marketing_Agent]] | Lead yaratish, reklama |
| 2 | [[Sotuv_Agent]] | Lead → zakazga aylantirish |
| 3 | [[Sklad_Agent]] | Mahsulot mavjudligini tekshirish |
| 4 | [[Ishlab_Chiqarish_Agent]] | Yetishmayotgan mahsulotni ishlab chiqarish |
| 5 | [[Taminot_Agent]] | Xom-ashyo yetkazish |
| 6 | [[Export_Agent]] | Xorijiy buyurtmalarni bajarish |
| 7 | [[Buxgalteriya_Agent]] | To'lov va hisob-kitob |
| 8 | [[Moliya_Agent]] | Budjet nazorati |

## Keyinchalik Bog'liqlar

- [[CEO_Agent]] — strategik topshiriqlar manbai
- [[Ishlab_Chiqarish_Agent]] — ishlab chiqarish jarayoni
- [[Sklad_Agent]] — ombor boshqaruvi
- [[Taminot_Agent]] — xom-ashyo ta'minoti
- [[Sotuv_Agent]] — sotuv jarayoni
- [[Marketing_Agent]] — marketing kampaniyalari
- [[Moliya_Agent]] — moliyaviy boshqaruv
- [[Buxgalteriya_Agent]] — buxgalteriya hisoblari
- [[Analitika_Agent]] — tahliliy hisobotlar
- [[HR_Agent]] — inson resurslari
- [[Yuridik_Agent]] — yuridik maslahat
- [[Import_Agent]] — import operatsiyalari
- [[Export_Agent]] — export operatsiyalari
