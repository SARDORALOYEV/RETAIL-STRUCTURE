---
title: "Transport Nazorati Agent"
aliases: [Transport_Nazorati_Agent, Transport_Nazorati]
tags: [retail-it, logistika, transport]
role: "Mashinalar, haydovchilar va biriktirilgan texnika agenti"
status: active
created: 2026-08-22
parent: [[Logistika_Agent]]
---

# 🚚 Transport Nazorati Agent

Barcha transport vositalari, ularga biriktirilgan haydovchilar va texnik holatni kuzatadi.

## Vazifalari

- Transport vositalari bazasini yuritish
- Haydovchi-texnika biriktirish
- Texnik ko'rikdan o'tish muddatlarini nazorat qilish
- Bo'sh transportni [[Marshrut_Nazorati_Agent]] ga taqdim etish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[HR_Agent]] | Haydovchilar ro'yxati | Haftalik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Marshrut_Nazorati_Agent]] | Bo'sh transport ro'yxati | Kunlik |
| [[Yuk_Holati_Agent]] | Transport sig'imi | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Transport parki holati | Haftalik |

## Keyinchalik Bog'liqlar

- [[Logistika_Agent]] — bosh agent
- [[Logistika_Departamenti]] — umumiy dashboard
- [[Yuk_Holati_Agent]] — yuk bilan bog'liq
