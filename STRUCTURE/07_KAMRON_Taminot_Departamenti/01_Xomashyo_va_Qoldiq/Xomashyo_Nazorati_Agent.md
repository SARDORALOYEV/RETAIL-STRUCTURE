---
title: "Xomashyo Nazorati Agent"
aliases: [Xomashyo_Nazorati_Agent, Xomashyo_Nazorati]
tags: [retail-it, taminot, xomashyo]
role: "Xomashyo kelishi va sifat nazorati agenti"
status: active
created: 2026-08-22
parent: [[Taminot_Agent]]
---

# 🌾 Xomashyo Nazorati Agent

Kelayotgan xomashyoning miqdori va sifatini tekshiradi.

## Vazifalari

- Xomashyo yetkazib berilishini kuzatish
- Sifat nazoratidan o'tkazish (namuna tekshiruvi)
- Sifatsiz xomashyoni qaytarish jarayonini boshlash
- [[Qoldiq_Nazorati_Agent]] ga qabul qilingan miqdorni uzatish

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Taminot_Agent]] | Xarid buyurtmasi | Kerak bo'lganda |
| [[Import_Agent]] | Import xomashyosi | Kerak bo'lganda |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Qoldiq_Nazorati_Agent]] | Qabul qilingan xomashyo miqdori | Kunlik |
| [[Ishlab_Chiqarish_Agent]] | Sifat tekshiruvi natijasi | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Xomashyo sifat holati | Haftalik |

## Keyinchalik Bog'liqlar

- [[Taminot_Agent]] — bosh agent
- [[Taminot_Departamenti]] — umumiy dashboard
- [[Qoldiq_Nazorati_Agent]] — keyingi jarayon
