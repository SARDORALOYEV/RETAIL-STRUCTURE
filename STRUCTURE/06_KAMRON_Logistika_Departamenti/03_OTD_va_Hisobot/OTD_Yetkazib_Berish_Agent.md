---
title: "OTD Yetkazib Berish Agent"
aliases: [OTD_Yetkazib_Berish_Agent, OTD_Agent]
tags: [retail-it, logistika, otd, hisobot]
role: "O'z vaqtida yetkazish (OTD) va logistika hisobotlari agenti"
status: active
target: "OTD >= 96%"
created: 2026-08-22
parent: [[Logistika_Agent]]
---

# 📈 OTD Yetkazib Berish Agent

> **Target KPI:** OTD >= 96%

On-Time Delivery (OTD) foizini hisoblaydi va logistika bo'yicha davriy hisobot tayyorlaydi.

## Vazifalari

- OTD foizini kunlik hisoblash (o'z vaqtida yetkazilgan / jami buyurtma)
- Kechikish sabablarini tahlil qilish
- Haftalik/oylik logistika hisobotini shakllantirish
- OTD 96% dan pastga tushsa darhol xabar berish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Marshrut_Nazorati_Agent]] | Marshrut bajarilishi holati | Kunlik |
| [[Kechikish_Ogohlantirish_Agent]] | Kechikish statistikasi | Kunlik |
| [[Yuk_Holati_Agent]] | Yetkazilgan yuk holati | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Logistika_Agent]] | OTD hisobot | Kunlik |
| [[Analitika_Agent]] | Logistika KPI | Haftalik |
| [[CEO_AI_Yordamchisi_Agent]] | OTD foizi va kechikishlar xulosasi | Kunlik |

## Alert

OTD 96% dan past tushsa → [[COO_Agent]] ga shoshilinch hisobot.

## Keyinchalik Bog'liqlar

- [[Logistika_Agent]] — bosh agent
- [[Logistika_Departamenti]] — umumiy dashboard
- [[Kechikish_Ogohlantirish_Agent]] — kechikish manbai
- [[CEO_AI_Yordamchisi_Agent]] — CEO uchun xulosa
