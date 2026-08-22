---
title: "Lead Baza CRM Agent"
aliases: [Lead_Baza_CRM_Agent, Lead_Baza_CRM, CRM_Lead_Bot]
tags: [retail-it, sotuv, crm, lead, makkajoxori]
role: "Supermarket, ulgurji bozor, distribyutor va dilerlar bazasini avtomatik yuritish hamda segmentatsiya qilish"
status: active
created: 2026-08-22
parent: [[Sotuv_Agent]]
---

# 📇 Lead Baza CRM Agent

## 📋 Vazifasi

- Yangi kelgan supermarket (KORZINKA, MAKRO, HAVAS), ulgurji bozor va distribyutor so'rovlarini qabul qilish
- Mijozlarni segmentlarga ajratish: zanjir supermarket, mahalliy do'kon, ulgurji distribyutor, eksport dileri
- Har bir mijoz kartasida qiziqish darajasi va aloqa tarixini yuritish (Yangi → Bog'lanildi → Shartnoma → Doimiy mijoz)
- Sovuq (yangi) leadlarni tegishli hududdagi torgoviy agentga biriktirish
- Yo'qotilgan yoki faolligi pasaygan mijozlarni qayta faollashtirish uchun belgilash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Marketing_Agent]] dan yangi supermarket/distribyutor so'rovi keladi.
2. Lead segmentga (zanjir supermarket, ulgurji, eksport dileri) ajratiladi va CRM bazasiga kiritiladi.
3. Hudud bo'yicha tegishli torgoviy agentga [[Torgoviy_Agent_Route_Agent]] orqali biriktiriladi.
4. Mijoz bilan aloqa natijasi (qiziqdi/rad etdi) CRM'da yangilanadi.
5. Qiziqqan mijoz [[KP_Shartnomalar_Agent]] ga uzatiladi — tijorat taklifi tayyorlash uchun.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Yangi lead: "MAKRO Supermarket, Toshkent" | [[Marketing_Agent]] | Qiziqqan mijozlar ro'yxati: 14 ta yangi do'kon | [[Sotuv_Agent]] |
| Kampaniya natijalari (qo'ng'iroq, ijtimoiy tarmoq) | [[Marketing_Departamenti]] | Hudud bo'yicha mijoz profili | [[Torgoviy_Agent_Route_Agent]] |
| — | — | Tayyor mijoz (shartnomaga tayyor) | [[KP_Shartnomalar_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Sales_Bot_Router]] — bot tuzilishi
- [[Marketing_Agent]] — lead manbai
- [[Torgoviy_Agent_Route_Agent]] — keyingi jarayon
