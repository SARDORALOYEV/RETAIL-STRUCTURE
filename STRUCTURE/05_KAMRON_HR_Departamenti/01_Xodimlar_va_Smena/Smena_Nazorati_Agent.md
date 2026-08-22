---
title: "Smena Nazorati Agent"
aliases: [Smena_Nazorati_Agent, Smena_Nazorati]
tags: [retail-it, hr, smena]
role: "Smena rejalashtirish va xodim yetishmovchiligini aniqlovchi agent"
status: active
created: 2026-08-22
parent: [[HR_Agent]]
---

# 🕒 Smena Nazorati Agent

Har bir smena uchun kerakli xodimlar sonini rejalashtiradi va yetishmovchilikni aniqlaydi.

## Vazifalari

- Smenalar jadvalini tuzish
- Har smena uchun minimal xodim sonini belgilash
- Yetishmovchilikni aniqlash va HR ga xabar berish
- [[Ishlab_Chiqarish_Agent]] bilan smena rejasini moslashtirish

## Alert

Smenada xodim yetishmasa → [[HR_Agent]] ga shoshilinch xabar.

## ERP Kiruvchi (Inputs)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Xodimlar_Baza_Agent]] | Xodimlar ro'yxati va lavozimlar | Kunlik |
| [[Ishlab_Chiqarish_Agent]] | Smena bo'yicha ishchi kuchi talabi | Kunlik |

## ERP Chiquvchi (Outputs)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[HR_Agent]] | Smena yetishmovchiligi alerti | Kunlik |
| [[HR_Hisobotchi_Agent]] | Smena bandligi statistikasi | Kunlik |
| [[CEO_AI_Yordamchisi_Agent]] | Smena holati xulosasi | Haftalik |

## Keyinchalik Bog'liqlar

- [[HR_Agent]] — bosh agent
- [[HR_Departamenti]] — umumiy dashboard
- [[Xodimlar_Baza_Agent]] — xodimlar manbai
