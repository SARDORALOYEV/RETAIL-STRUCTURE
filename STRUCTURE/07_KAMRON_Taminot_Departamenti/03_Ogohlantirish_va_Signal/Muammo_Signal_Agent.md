---
title: "Muammo Signal Agent"
aliases: [Muammo_Signal_Agent, Muammo_Signal]
tags: [retail-it, taminot, signal, alert]
role: "Xomashyo tugashidan oldin avtomatik signal beruvchi agent"
status: active
created: 2026-08-22
parent: [[Taminot_Agent]]
---

# 🚨 Muammo Signal Agent

Zaxira kritik darajaga yaqinlashganda yoki xomashyo tugash xavfi bo'lganda avtomatik signal yuboradi.

## Vazifalari

- [[Minimal_Zaxira_Agent]] dan kelgan kritik holatlarni qabul qilish
- Shoshilinch xarid so'rovini [[Taminot_Agent]] ga yuborish
- Ishlab chiqarishga to'xtash xavfi haqida ogohlantirish
- Signal tarixini yuritish (qачон, qaysi xomashyo, qanday hal qilindi)

## Alert

Xomashyo 7 kundan kamga yetsa → [[Taminot_Agent]] ga shoshilinch buyurtma signali, [[COO_Agent]] ga nusxa.

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Minimal_Zaxira_Agent]] | Kritik zaxira holati | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Taminot_Agent]] | Shoshilinch xarid signali | Real vaqt |
| [[COO_Agent]] | Ishlab chiqarish to'xtash xavfi | Real vaqt |
| [[CEO_AI_Yordamchisi_Agent]] | Kritik signallar xulosasi | Kunlik |

## Keyinchalik Bog'liqlar

- [[Taminot_Agent]] — bosh agent
- [[Taminot_Departamenti]] — umumiy dashboard
- [[Minimal_Zaxira_Agent]] — signal manbai
- [[CEO_AI_Yordamchisi_Agent]] — CEO uchun xulosa
