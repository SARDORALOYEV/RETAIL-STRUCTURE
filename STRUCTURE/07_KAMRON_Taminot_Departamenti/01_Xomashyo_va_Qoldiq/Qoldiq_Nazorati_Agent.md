---
title: "Qoldiq Nazorati Agent"
aliases: [Qoldiq_Nazorati_Agent_Taminot, Taminot_Qoldiq_Nazorati]
tags: [retail-it, taminot, qoldiq]
role: "Ombor qoldig'i va minimal balansni tekshiruvchi agent"
status: active
created: 2026-08-22
parent: [[Taminot_Agent]]
---

# 📊 Qoldiq Nazorati Agent

Xomashyo ombordagi joriy qoldig'ini kuzatadi va minimal balans bilan solishtiradi.

## Vazifalari

- Xomashyo qoldig'ini real vaqtda kuzatish
- Minimal balans chegarasini belgilash
- Qoldiq chegaradan pastga tushsa [[Ehtiyoj_Prognozi_Agent]] ga signal berish
- Ombor qiymatini hisoblash

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Xomashyo_Nazorati_Agent]] | Qabul qilingan xomashyo miqdori | Kunlik |
| [[Ishlab_Chiqarish_Agent]] | Xomashyo sarfi | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Ehtiyoj_Prognozi_Agent]] | Joriy qoldiq darajasi | Kunlik |
| [[Minimal_Zaxira_Agent]] | Minimal balans holati | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Ombor qoldig'i xulosasi | Haftalik |

## Keyinchalik Bog'liqlar

- [[Taminot_Agent]] — bosh agent
- [[Taminot_Departamenti]] — umumiy dashboard
- [[Xomashyo_Nazorati_Agent]] — qoldiq manbai
- [[Ehtiyoj_Prognozi_Agent]] — keyingi jarayon
