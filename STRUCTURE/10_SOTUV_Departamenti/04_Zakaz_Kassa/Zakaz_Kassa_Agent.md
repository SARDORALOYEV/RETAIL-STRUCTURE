---
title: "Zakaz Kassa Agent"
aliases: [Zakaz_Kassa_Agent, Zakaz_Kassa, Zakaz_Kassa_Bot]
tags: [retail-it, sotuv, zakaz, kassa]
role: "Zakazlarni qabul qilish va kassa operatsiyalarini boshqarish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 💳 Zakaz Kassa Agent

`@zavod_sotuv_bot` ichidagi **Zakaz & Kassa** routeri — zakazlarni qabul qiladi va kassa operatsiyalarini boshqaradi.

## Vazifalari

- Zakazlarni ro'yxatga olish
- Ombordagi mavjudlikni tekshirish
- Kassa operatsiyalarini boshqarish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[KP_Shartnomalar_Agent]] | Tasdiqlangan shartnoma | Kerak bo'lganda |
| [[Sklad_Departamenti]] | Ombor qoldiqlari | Real vaqt |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Sklad_Agent]] | Zakazlar — mahsulot chiqarish | Real vaqt |
| [[Qarzdorlik_CRM_Agent]] | Kassa cheklari, to'lov holati | Kunlik |

## Keyinchalik Bog'liqlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Sklad_Agent]] — ombor mavjudligi
