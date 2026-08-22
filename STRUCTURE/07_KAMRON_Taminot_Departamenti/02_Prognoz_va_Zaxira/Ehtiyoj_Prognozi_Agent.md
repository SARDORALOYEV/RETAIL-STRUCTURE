---
title: "Ehtiyoj Prognozi Agent"
aliases: [Ehtiyoj_Prognozi_Agent, Ehtiyoj_Prognozi]
tags: [retail-it, taminot, prognoz]
role: "14 kun oldindan kelajakdagi xomashyo ehtiyojini prognoz qiluvchi agent"
status: active
target: "14 Kunlik Prognoz"
created: 2026-08-22
parent: [[Taminot_Agent]]
---

# 🔮 Ehtiyoj Prognozi Agent

> **Target KPI:** 14 Kunlik Prognoz

Ishlab chiqarish rejasi va joriy qoldiq asosida 14 kun oldindan xomashyo ehtiyojini prognoz qiladi.

## Vazifalari

- Ishlab chiqarish rejasi asosida xomashyo ehtiyojini hisoblash
- 14 kunlik prognoz jadvalini shakllantirish
- Joriy qoldiq bilan prognozni solishtirish
- Yetishmovchilik prognoz qilinsa oldindan xarid so'rovini boshlash

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Qoldiq_Nazorati_Agent]] | Joriy qoldiq darajasi | Kunlik |
| [[Ishlab_Chiqarish_Agent]] | Ishlab chiqarish rejasi | Haftalik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Minimal_Zaxira_Agent]] | 14 kunlik ehtiyoj prognozi | Haftalik |
| [[Taminot_Agent]] | Xarid so'rovi tavsiyasi | Haftalik |
| [[CEO_AI_Yordamchisi_Agent]] | 14 kunlik prognoz xulosasi | Haftalik |

## Keyinchalik Bog'liqlar

- [[Taminot_Agent]] — bosh agent
- [[Taminot_Departamenti]] — umumiy dashboard
- [[Qoldiq_Nazorati_Agent]] — qoldiq manbai
- [[Minimal_Zaxira_Agent]] — keyingi jarayon
- [[CEO_AI_Yordamchisi_Agent]] — CEO uchun xulosa
