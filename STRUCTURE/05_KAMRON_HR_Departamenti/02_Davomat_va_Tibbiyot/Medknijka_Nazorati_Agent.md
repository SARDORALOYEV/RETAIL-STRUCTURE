---
title: "Medknijka Nazorati Agent"
aliases: [Medknijka_Nazorati_Agent, Medknijka_Nazorati]
tags: [retail-it, hr, medknijka, tibbiyot]
role: "Tibbiy ruxsatnomalar (medknijka) muddati va nazorati agenti"
status: active
target: "100% Medknijka Nazorati"
created: 2026-08-22
parent: [[HR_Agent]]
---

# 🩺 Medknijka Nazorati Agent

> **Target KPI:** 100% Medknijka Nazorati

Ishlab chiqarish va oziq-ovqat bilan bog'liq xodimlarning tibbiy ruxsatnomasi (medknijka) muddatini kuzatadi.

## Vazifalari

- Har bir xodimning medknijka muddatini kuzatish
- Muddati tugashiga 30/14/7 kun qolganda eslatma yuborish
- Muddati o'tgan xodimni ishdan chetlashtirish alerti
- 100% qamrov statistikasini yuritish

## Alert

Medknijka muddati o'tsa → [[HR_Agent]] ga darhol xabar, xodim vaqtincha ishdan chetlashtiriladi.

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Xodimlar_Baza_Agent]] | Xodimlar ro'yxati | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[HR_Agent]] | Muddati o'tgan medknijkalar alerti | Kunlik |
| [[HR_Hisobotchi_Agent]] | Medknijka qamrov foizi | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | 100% Medknijka Nazorati holati | Kunlik |

## Keyinchalik Bog'liqlar

- [[HR_Agent]] — bosh agent
- [[HR_Departamenti]] — umumiy dashboard
- [[Davomat_Nazorati_Agent]] — davomat bilan bog'liq
