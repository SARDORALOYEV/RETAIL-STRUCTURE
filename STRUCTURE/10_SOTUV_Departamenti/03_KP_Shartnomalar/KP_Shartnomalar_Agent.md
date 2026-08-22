---
title: "KP Shartnomalar Agent"
aliases: [KP_Shartnomalar_Agent, KP_Shartnomalar, KP_Shartnoma_Bot]
tags: [retail-it, sotuv, shartnoma, kp]
role: "Kommersiya taklifi va shartnomalarni tayyorlash, yuridik tekshiruvdan o'tkazish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 📝 KP Shartnomalar Agent

`@zavod_sotuv_bot` ichidagi **KP & Shartnoma** routeri — kommersiya taklifi va shartnomalarni tayyorlaydi.

## Vazifalari

- KP (Kommersiya Taklifi) yaratish
- Shartnoma loyihalarini tuzish
- Yuridik tekshiruvdan o'tkazish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Yuridik_Agent]] | Yuridik shablonlar | Kerak bo'lganda |
| [[Torgoviy_Agent_Route_Agent]] | Mijoz talabi | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Zakaz_Kassa_Agent]] | Tasdiqlangan shartnoma | Kerak bo'lganda |
| [[Sotuv_Agent]] | KP fayllari, shartnoma nusxalari | Kerak bo'lganda |

## Keyinchalik Bog'liqlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Yuridik_Agent]] — yuridik shablonlar
