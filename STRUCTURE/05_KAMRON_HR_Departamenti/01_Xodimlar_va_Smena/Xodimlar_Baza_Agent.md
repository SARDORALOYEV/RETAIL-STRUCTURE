---
title: "Xodimlar Baza Agent"
aliases: [Xodimlar_Baza_Agent, Xodimlar_Baza]
tags: [retail-it, hr, xodimlar, smena]
role: "Xodimlar bazasi, lavozimlar va smena biriktiruvchi agent"
status: active
created: 2026-08-22
parent: [[HR_Agent]]
---

# 🧑‍💼 Xodimlar Baza Agent

Barcha xodimlar haqidagi ma'lumotlarni (lavozim, bo'lim, smena) yagona bazada yuritadi.

## Vazifalari

- Xodimlar bazasini yuritish (F.I.Sh, lavozim, bo'lim)
- Yangi xodimni ro'yxatga olish
- Lavozim va smenaga biriktirish
- [[Smena_Nazorati_Agent]] uchun boshlang'ich ma'lumot berish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[HR_Agent]] | Yangi ishga qabul qilingan xodimlar | Kerak bo'lganda |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Smena_Nazorati_Agent]] | Xodimlar ro'yxati va lavozimlar | Kunlik |
| [[HR_Hisobotchi_Agent]] | Xodimlar soni | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Umumiy xodimlar bazasi holati | Haftalik |

## Keyinchalik Bog'liqlar

- [[HR_Agent]] — bosh agent
- [[HR_Departamenti]] — umumiy dashboard
- [[Smena_Nazorati_Agent]] — keyingi jarayon
