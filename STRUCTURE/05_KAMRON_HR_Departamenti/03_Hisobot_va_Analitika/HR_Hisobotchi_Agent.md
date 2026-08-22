---
title: "HR Hisobotchi Agent"
aliases: [HR_Hisobotchi_Agent, HR_Hisobotchi]
tags: [retail-it, hr, hisobot, analitika]
role: "Kunlik, haftalik va oylik HR hisobotlarini shakllantiruvchi agent"
status: active
created: 2026-08-22
parent: [[HR_Agent]]
---

# 📑 HR Hisobotchi Agent

Barcha HR bo'limlaridan (Xodimlar Baza, Smena, Davomat, Medknijka) ma'lumot yig'ib, davriy hisobot tayyorlaydi.

## Hisobot tarkibi

| Element | Tavsif |
|---------|--------|
| Xodimlar soni | [[Xodimlar_Baza_Agent]] dan |
| Smena bandligi | [[Smena_Nazorati_Agent]] dan |
| Davomat statistikasi | [[Davomat_Nazorati_Agent]] dan |
| Medknijka qamrov foizi | [[Medknijka_Nazorati_Agent]] dan |

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Xodimlar_Baza_Agent]] | Xodimlar soni | Kunlik |
| [[Smena_Nazorati_Agent]] | Smena statistikasi | Kunlik |
| [[Davomat_Nazorati_Agent]] | Davomat statistikasi | Kunlik |
| [[Medknijka_Nazorati_Agent]] | Medknijka qamrov foizi | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[HR_Agent]] | Konsolidatsiyalangan HR hisobot | Kunlik |
| [[Analitika_Agent]] | HR KPI | Haftalik |
| [[CEO_AI_Yordamchisi_Agent]] | Umumiy HR xulosa (davomat, medknijka, xodim holati) | Kunlik |

## Keyinchalik Bog'liqlar

- [[HR_Agent]] — bosh agent
- [[HR_Departamenti]] — umumiy dashboard
- [[CEO_AI_Yordamchisi_Agent]] — CEO uchun xulosa
