---
title: "Kechikish Ogohlantirish Agent"
aliases: [Kechikish_Ogohlantirish_Agent, Kechikish_Ogohlantirish]
tags: [retail-it, logistika, kechikish, alert]
role: "Yolda kechikish va muammolar bo'lganda ogohlantiruvchi agent"
status: active
created: 2026-08-22
parent: [[Logistika_Agent]]
---

# ⚠️ Kechikish Ogohlantirish Agent

Marshrut bo'yicha real vaqtda kuzatuv olib boradi va kechikish/muammo yuzaga kelganda darhol ogohlantiradi.

## Vazifalari

- Marshrut bajarilishini real vaqtda kuzatish
- Rejadagi vaqtdan chetlanishni aniqlash
- Yo'l-transport hodisasi yoki texnik nosozlik haqida xabar berish
- [[Sotuv_Agent]] ga mijozni oldindan ogohlantirish

## Alert

Marshrut rejadan 30 daqiqadan ko'p kechiksa → [[Sotuv_Agent]] va [[Logistika_Agent]] ga darhol xabar.

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Marshrut_Nazorati_Agent]] | Rejalashtirilgan marshrut jadvali | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Logistika_Agent]] | Kechikish alerti | Real vaqt |
| [[OTD_Yetkazib_Berish_Agent]] | Kechikish statistikasi | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Kritik kechikishlar xulosasi | Kunlik |

## Keyinchalik Bog'liqlar

- [[Logistika_Agent]] — bosh agent
- [[Logistika_Departamenti]] — umumiy dashboard
- [[Marshrut_Nazorati_Agent]] — marshrut manbai
- [[OTD_Yetkazib_Berish_Agent]] — hisobot
