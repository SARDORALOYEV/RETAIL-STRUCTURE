---
title: "Qarzdorlik CRM Agent"
aliases: [Qarzdorlik_CRM_Agent, Qarzdorlik_CRM, Qarzdorlik_Bot]
tags: [retail-it, sotuv, qarzdorlik]
role: "Mijozlar qarzdorligini nazorat qilish va to'lov eslatmalarini yuborish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 💰 Qarzdorlik CRM Agent

`@zavod_sotuv_bot` ichidagi **Qarzdorlik** routeri — qarzdorlikni nazorat qiladi va eslatmalar yuboradi.

## Vazifalari

- Qarzdorliklar ro'yxatini saqlash
- To'lov eslatmalarini yuborish
- Qarz yuritishni boshqarish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Zakaz_Kassa_Agent]] | Kassa cheklari, to'lov holati | Kunlik |
| [[Moliya_Departamenti]] | Moliyaviy ma'lumotlar | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Moliya_Agent]] | Qarzdorlik ro'yxati | Kunlik |
| [[Yuridik_Agent]] | Muddati o'tgan qarzdorlik | Kerak bo'lganda |

## Alert

Qarzdorlik 50 kundan oshsa → [[Yuridik_Agent]] ga yuridik chora ko'rish alerti.

## Keyinchalik Bog'liqlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Moliya_Agent]] — qarzdorlik nazorati
