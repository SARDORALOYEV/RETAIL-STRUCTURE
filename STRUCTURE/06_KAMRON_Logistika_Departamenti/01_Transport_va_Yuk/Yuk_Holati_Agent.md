---
title: "Yuk Holati Agent"
aliases: [Yuk_Holati_Agent, Yuk_Holati]
tags: [retail-it, logistika, yuk]
role: "Yuk miqdori va uning holatini kuzatuvchi agent"
status: active
created: 2026-08-22
parent: [[Logistika_Agent]]
---

# 📦 Yuk Holati Agent

Har bir jo'natmadagi yukning miqdori, og'irligi va jismoniy holatini kuzatadi.

## Vazifalari

- Yuk miqdori va og'irligini qayd etish
- Yuk holatini (butun/shikastlangan) tekshirish
- Transport sig'imi bilan yukni moslashtirish
- Yo'lda yuk holati o'zgarsa xabar berish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Sklad_Agent]] | Jo'natiladigan mahsulot ro'yxati | Kunlik |
| [[Transport_Nazorati_Agent]] | Transport sig'imi | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Marshrut_Nazorati_Agent]] | Yuk hajmi va marshrut talabi | Kunlik |
| [[OTD_Yetkazib_Berish_Agent]] | Yetkazilgan yuk holati | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Yuk holati umumiy statistikasi | Haftalik |

## Keyinchalik Bog'liqlar

- [[Logistika_Agent]] — bosh agent
- [[Logistika_Departamenti]] — umumiy dashboard
- [[Transport_Nazorati_Agent]] — transport manbai
