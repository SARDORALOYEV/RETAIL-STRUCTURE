---
title: "Lead Baza CRM Agent"
aliases: [Lead_Baza_CRM_Agent, Lead_Baza_CRM, CRM_Lead_Bot]
tags: [retail-it, sotuv, crm, lead]
role: "Mijozlar va Leadlar bazasini avtomatik yuritish hamda segmentatsiya qilish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 📇 Lead Baza CRM Agent

`@zavod_sotuv_bot` ichidagi **CRM & Lead** routeri — yangi leadlarni qabul qiladi, holatini yangilaydi va CRM bazasini saqlaydi.

## Vazifalari

- Yangi leadlarni qabul qilish
- Lead holatini yangilash (Yangi → Bog'lanildi → Sotildi)
- CRM bazasini saqlash va segmentatsiya qilish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Marketing_Agent]] | Yangi leadlar | Real vaqt |
| [[Marketing_Departamenti]] | Kampaniya natijalari | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Sotuv_Agent]] | Qiziqqan mijozlar | Kunlik |
| [[Torgoviy_Agent_Route_Agent]] | Mijoz manzili va profili | Kunlik |

## Keyinchalik Bog'liqlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Marketing_Agent]] — lead manbai
