---
title: "Torgoviy Agent Route Agent"
aliases: [Torgoviy_Agent_Route_Agent, Torgoviy_Agent_Route, Torgoviy_Agent_Bot]
tags: [retail-it, sotuv, marshrut, torgoviy-agent]
role: "Torgoviy agentlarning kunlik marshruti va do'konlarga tashrifini boshqarish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 🚗 Torgoviy Agent Route Agent

`@zavod_sotuv_bot` ichidagi **Torgoviy Agent** routeri — torgoviy agentlarning marshrutini boshqaradi.

## Vazifalari

- Torgoviy agentlarning kunlik marshrutini tuzish
- Do'konlarga tashrif jadvalini belgilash
- Sotuv natijalarini qabul qilish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Lead_Baza_CRM_Agent]] | Mijoz manzili va profili | Kunlik |
| [[Sklad_Departamenti]] | Do'konlar ro'yxati | Haftalik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Sotuv_Agent]] | Marshrut rejasi, sotuv natijalari | Kunlik |

## Keyinchalik Bog'liqlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Lead_Baza_CRM_Agent]] — mijoz manbai
