---
title: "Minimal Zaxira Agent"
aliases: [Minimal_Zaxira_Agent, Minimal_Zaxira]
tags: [retail-it, taminot, zaxira]
role: "Zaxiralar kritik darajaga tushishini oldini oluvchi agent"
status: active
created: 2026-08-22
parent: [[Taminot_Agent]]
---

# 🛡️ Minimal Zaxira Agent

Har bir xomashyo turi uchun minimal (kritik) zaxira chegarasini nazorat qiladi.

## Vazifalari

- Har bir xomashyo uchun minimal zaxira chegarasini belgilash
- 14 kunlik prognoz bilan minimal chegarani solishtirish
- Zaxira kritik darajaga yaqinlashsa [[Muammo_Signal_Agent]] ni ishga tushirish
- Zaxira siyosatini davriy qayta ko'rib chiqish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Ehtiyoj_Prognozi_Agent]] | 14 kunlik ehtiyoj prognozi | Haftalik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Muammo_Signal_Agent]] | Kritik zaxira holati | Kunlik |
| [[Taminot_Agent]] | Zaxira siyosati tavsiyasi | Haftalik |
| [[CEO_AI_Yordamchisi_Agent]] | Zaxira darajasi xulosasi | Haftalik |

## Keyinchalik Bog'liqlar

- [[Taminot_Agent]] — bosh agent
- [[Taminot_Departamenti]] — umumiy dashboard
- [[Ehtiyoj_Prognozi_Agent]] — prognoz manbai
- [[Muammo_Signal_Agent]] — keyingi jarayon
