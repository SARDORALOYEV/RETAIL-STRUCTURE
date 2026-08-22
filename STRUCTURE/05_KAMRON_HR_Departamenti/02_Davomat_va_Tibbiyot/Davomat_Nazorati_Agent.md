---
title: "Davomat Nazorati Agent"
aliases: [Davomat_Nazorati_Agent, Davomat_Nazorati]
tags: [retail-it, hr, davomat]
role: "Keldi-ketdi, kechikishlar va yo'qlama nazorati"
status: active
created: 2026-08-22
parent: [[HR_Agent]]
---

# 🕘 Davomat Nazorati Agent

Xodimlarning kunlik keldi-ketdisini, kechikish va yo'qlamalarini nazorat qiladi.

## Vazifalari

- Keldi-ketdi vaqtlarini qayd etish
- Kechikishlarni aniqlash
- Yo'qlama (ishga kelmagan) xodimlarni belgilash
- Oylik davomat statistikasini shakllantirish

## Alert

Kechikish yoki yo'qlama 3 martadan oshsa → [[HR_Agent]] ga xabar.

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Xodimlar_Baza_Agent]] | Xodimlar ro'yxati | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[HR_Agent]] | Davomat alertlari | Kunlik |
| [[HR_Hisobotchi_Agent]] | Davomat statistikasi | Kunlik |
| [[Buxgalteriya_Agent]] | Ish haqi uchun davomat ma'lumoti | Oylik |
| [[CEO_AI_Yordamchisi_Agent]] | Davomat xulosasi | Haftalik |

## Keyinchalik Bog'liqlar

- [[HR_Agent]] — bosh agent
- [[HR_Departamenti]] — umumiy dashboard
- [[Medknijka_Nazorati_Agent]] — tibbiy nazorat bilan bog'liq
