---
title: "Marshrut Nazorati Agent"
aliases: [Marshrut_Nazorati_Agent, Marshrut_Nazorati]
tags: [retail-it, logistika, marshrut]
role: "Yo'nalishlar va logistika marshrutini optimallashtiruvchi agent"
status: active
created: 2026-08-22
parent: [[Logistika_Agent]]
---

# 🗺️ Marshrut Nazorati Agent

Yetkazib berish yo'nalishlarini tuzadi va marshrutlarni optimallashtiradi.

## Vazifalari

- Yetkazib berish manzillari bo'yicha marshrut tuzish
- Bir nechta buyurtmani bitta marshrutga birlashtirish
- Marshrutni transport sig'imiga moslashtirish
- Optimal yo'nalishni tanlash (masofa, vaqt)

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Transport_Nazorati_Agent]] | Bo'sh transport ro'yxati | Kunlik |
| [[Yuk_Holati_Agent]] | Yuk hajmi va marshrut talabi | Kunlik |
| [[Sotuv_Agent]] | Yetkazib berish manzillari | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Kechikish_Ogohlantirish_Agent]] | Rejalashtirilgan marshrut jadvali | Kunlik |
| [[OTD_Yetkazib_Berish_Agent]] | Marshrut bajarilishi holati | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Marshrut samaradorligi | Haftalik |

## Keyinchalik Bog'liqlar

- [[Logistika_Agent]] — bosh agent
- [[Logistika_Departamenti]] — umumiy dashboard
- [[Kechikish_Ogohlantirish_Agent]] — keyingi jarayon
