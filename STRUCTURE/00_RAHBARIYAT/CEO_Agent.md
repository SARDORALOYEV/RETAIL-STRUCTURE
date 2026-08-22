---
aliases: [CEO_Agent, CEO_Bosh_Direktor]
tags: [retail-it, rahbariyat, ceo, erp]
created: 2026-08-22
status: active
role: Bosh Direktor — strategik boshqaruv va yakuniy qaror qabul qiluvchi
inputs_from:
  - [[CEO_Yordamchisi]]
  - [[COO_Agent]]
cascade_rules:
  trigger: Tashkilot miqyosidagi strategik nosozlik
  action: Strategik rejalarni qayta ko'rib chiqish va yangilash
  escalate_to: (yakuniy qaror — tashqi manba yo'q)
---

# 🎯 CEO Agent — Bosh Direktor

## Roll va Mas'uliyat

CEO — tashkilotning **eng yuqori boshqaruvchisi**. Strategik qarorlarni qabul qiladi, budjetni tasdiqlaydi va barcha bo'limlar rahbarlaridan hisobot oladi.

## ERP Tizimidagi O'rni

```mermaid
graph TD
    CEO[🎯 CEO_Agent] --> COO[🏢 COO_Agent]
    CEO --> CFO[💰 Moliya Agent]
    CEO --> LEGAL[⚖️ Yuridik Agent]

    COO --> PROD[Ishlab Chiqarish]
    COO --> SKLAD[Sklad]
    COO --> TAM[Ta'minot]
    COO --> SOT[Sotuv]
    COO --> MARK[Marketing]
    COO --> HR[HR]
    COO --> ANAL[Analitika]
    COO --> BUX[Buxgalteriya]
    COO --> IMP[Import]
    COO --> EXP[Export]

    CFO -->|Yillik budjet| CEO
    COO -->|Operatsion hisobot| CEO
    LEGAL -->|Yuridik maslahat| CEO
```

## Topshiriqlar Zanjiri

| Vazifa | Qabul qiluvchi | Muddati |
|--------|----------------|---------|
| Yillik strategiya tasdig'i | [[COO_Agent]] | Yanvar |
| Yillik budjet tasdig'i | [[Moliya_Agent]] | Yanvar |
| Katta loyiha qarori | [[COO_Agent]] | Kerak bo'lganda |
| Kadr o'zgarishlari | [[HR_Agent]] | Kerak bo'lganda |
| Yuridik nizolar | [[Yuridik_Agent]] | Kerak bo'lganda |

## Keyinchalik Bog'liqlar

- [[COO_Agent]] — operatsion boshqaruv
- [[CEO_Yordamchisi]] — topshiriqlarni taqsimlash
- [[Moliya_Agent]] — budjet va moliya
- [[Yuridik_Agent]] — yuridik maslahat
- [[Analitika_Agent]] — strategik tahlillar
- [[HR_Agent]] — kadr masalalari
