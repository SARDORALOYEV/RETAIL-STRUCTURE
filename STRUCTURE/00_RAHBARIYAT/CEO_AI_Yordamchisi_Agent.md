---
title: "CEO AI Yordamchisi Agent"
aliases: [CEO_AI_Yordamchisi_Agent, CEO_AI_Yordamchisi]
tags: [retail-it, ceo, orchestrator, cross-cutting, agent]
role: "HR, Logistika va Ta'minot bo'limlaridan kelgan barcha xulosalarni yig'ib, CEO uchun yagona operatsion hisobot shakllantiruvchi markazlashgan agent"
status: active
created: 2026-08-22
target: "Operatsion holatning bir joyda, real vaqtda ko'rinishi"
inputs_from:
  - [[HR_Hisobotchi_Agent]]
  - [[OTD_Yetkazib_Berish_Agent]]
  - [[Ehtiyoj_Prognozi_Agent]]
  - [[HR_Agent]]
  - [[Logistika_Agent]]
  - [[Taminot_Agent]]
outputs_to:
  - [[CEO_Agent]]
  - [[COO_Agent]]
cascade_rules:
  trigger: HR, Logistika yoki Ta'minot bo'limidan kritik alert kelishi
  action:
    - Medknijka 100% ta'minlanmasa → [[CEO_Agent]] ga ogohlantirish
    - OTD 96% dan past tushsa → [[CEO_Agent]] ga shoshilinch hisobot
    - 14 kunlik prognozda tanqislik ko'rinsa → [[CEO_Agent]] ga risklar xulosasi
  escalate_to: [[CEO_Agent]]
parent: [[CEO_Yordamchisi]]
---

# 🧭 CEO AI Yordamchisi — XAMXAM Umumiy Xulosa Agenti

Kamronning uchta departamenti (HR, Logistika, Ta'minot) — XAMXAM AI arxitekturasi asosida — o'z natijalarini avtomatik ravishda shu agentga jamlaydi. Bu agent CEO va COO uchun yagona, qisqa va real vaqtdagi operatsion xulosa tayyorlaydi.

## Bog'langan Departamentlar

| Departament | Bot Router | Target KPI | Asosiy Chiquvchi Fayl |
|---|---|---|---|
| [[HR_Departamenti]] | `@xamxam_hr_bot` | 100% Medknijka Nazorati | [[HR_Hisobotchi_Agent]] |
| [[Logistika_Departamenti]] | `@xamxam_logistika_bot` | OTD >= 96% | [[OTD_Yetkazib_Berish_Agent]] |
| [[Taminot_Departamenti]] | `@xamxam_taminot_bot` | 14 Kunlik Prognoz | [[Ehtiyoj_Prognozi_Agent]] |

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[HR_Hisobotchi_Agent]] | Davomat, medknijka, xodim holati | Kunlik |
| [[OTD_Yetkazib_Berish_Agent]] | OTD foizi, kechikishlar | Kunlik |
| [[Ehtiyoj_Prognozi_Agent]] | 14 kunlik xomashyo prognozi | Haftalik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[CEO_Agent]] | Yagona operatsion xulosa | Kunlik |
| [[COO_Agent]] | Batafsil operatsion hisobot | Kunlik |

## Cascade Rules

```mermaid
flowchart TD
    HR[HR Hisobotchi Agent] -->|medknijka holati| CEOAI[CEO AI Yordamchisi]
    OTD[OTD Yetkazib Berish Agent] -->|OTD foizi| CEOAI
    PROGNOZ[Ehtiyoj Prognozi Agent] -->|14 kunlik prognoz| CEOAI
    CEOAI -->|umumiy xulosa| CEO[CEO Agent]
    CEOAI -->|batafsil hisobot| COO[COO Agent]
```

## Keyinchalik Bog'liqlar

- [[HR_Departamenti]] — HR AI
- [[Logistika_Departamenti]] — Logistika AI
- [[Taminot_Departamenti]] — Ta'minot AI
- [[CEO_Yordamchisi]] — bosh orchestrator
- [[CEO_Agent]] — strategik qarorlar
- [[COO_Agent]] — operatsion boshqaruv
