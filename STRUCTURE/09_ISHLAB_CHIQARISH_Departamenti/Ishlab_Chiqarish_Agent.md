---
aliases: [Ishlab_Chiqarish_Agent, Production_Agent, Ishlab_Chiqarish]
tags: [retail-it, production, erp, agent]
created: 2026-08-22
status: active
role: Ishlab chiqarish jarayonini boshqarish — zavod agentlari va liniyalar
inputs_from:
  - [[Taminot_Agent]]
  - [[Sklad_Agent]]
  - [[Moliya_Agent]]
  - [[HR_Agent]]
outputs_to:
  - [[Sklad_Agent]]
  - [[Sifat_Nazorati_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[Analitika_Agent]]
cascade_rules:
  trigger: Xom-ashyo yetishmovchiligi yoki liniya to'xtashi
  action:
    - Xom-ashyo yetishmovchiligida → [[Taminot_Agent]] ga xabar
    - Liniya to'xtasa → [[COO_Agent]] ga xabar
    - Brak oshsa → [[Sifat_Nazorati_Agent]] tekshiruvi
  escalate_to: [[COO_Agent]]
parent: [[Sardor_General_Overview]]
---

# 🏭 Ishlab Chiqarish Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Taminot_Agent]] | Xom-ashyo yetkazish | Kunlik |
| [[Sklad_Agent]] | Ombor qoldig'i va talab | Kunlik |
| [[Moliya_Agent]] | Ishlab chiqarish budjeti | Oylik |
| [[HR_Agent]] | Ishchi kuchi ro'yxati | Haftalik |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Sklad_Agent]] | Tayyor mahsulot | Har smena |
| [[Sifat_Nazorati_Agent]] | Namuna va sifat ma'lumotlari | Har smena |
| [[Buxgalteriya_Agent]] | Tannarx hisoboti | Oylik |
| [[Analitika_Agent]] | Ishlab chiqarish KPI | Haftalik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    XT[Xomashyo yetishmasligi] -->|trigger| TAMINOT[Ta'minot Agent]
    TAMINOT -->|resurs yetkazish| PROD[Ishlab Chiqarish]
    LINIYA[To'xtagan liniya] -->|trigger| COO[COO Agent]
    BRAK[Brak oshishi] -->|trigger| SIFAT[Sifat Nazorati]
    BUDJET[Budjet oshishi] -->|trigger| MOLIYA[Moliya Agent]
    PROD -->|mahsulot| SKLAD[Sklad Agent]
    SIFAT -->|sifat hisoboti| COO
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Xom-ashyo yetishmasligi | [[Taminot_Agent]] ga shoshilinch buyurtma | Ishlab Chiqarish |
| Liniya to'xtashi | [[COO_Agent]] ga xabar, [[HR_Agent]] dan qo'shimcha ishchi | COO |
| Brak 5% dan oshsa | [[Sifat_Nazorati_Agent]] to'liq tekshiruv | Sifat |
| Budjet 10% oshsa | [[Moliya_Agent]] ga hisobot | Moliya |

## Keyinchalik Bog'liqlar

- [[Sardor_General_Overview]] — umumiy dashboard
- [[Taminot_Agent]] — xom-ashyo manbai
- [[Sklad_Agent]] — mahsulot qabul qilish
- [[Moliya_Agent]] — budjet nazorati
- [[HR_Agent]] — ishchi kuchi
- [[Sifat_Nazorati_Agent]] — sifat nazorati
- [[Buxgalteriya_Agent]] — tannarx hisoboti
- [[Analitika_Agent]] — KPI
- [[COO_Agent]] — operatsion boshqaruv
