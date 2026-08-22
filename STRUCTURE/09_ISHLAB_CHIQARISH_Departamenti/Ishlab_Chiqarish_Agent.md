---
aliases: [Ishlab_Chiqarish_Agent, Production_Agent]
tags: [retail-it, production, erp, agent, makkajoxori]
created: 2026-08-22
status: active
role: Makkajo'xori zavodi ishlab chiqarish jarayonini uchdan-uchga boshqaruvchi bosh agent
inputs_from:
  - [[Taminot_Agent]]
  - [[Sklad_Agent]]
  - [[Moliya_Agent]]
  - [[HR_Agent]]
outputs_to:
  - [[Sklad_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[Analitika_Agent]]
  - [[COO_Agent]]
parent: [[Ishlab_Chiqarish_Departamenti]]
---

# 🏭 Ishlab Chiqarish Agent

## 📋 Vazifasi

- Kunlik ishlab chiqarish rejasini (necha tonna kukuruz tayoqchasi, konserva, ziravorli kukuruz) shakllantirish va bajarilishini kuzatish
- Xom-ashyo (makkajo'xori doni), ziravor va qadoqlash materiallarining yetarliligini har smena boshida tekshirish
- Ekstruziya, ziravorlash va qadoqlash liniyalarining ishlash holatini real vaqtda monitoring qilish
- Har smenadagi brak foizini qabul qilish va normadan (5%) oshsa darhol ogohlantirish
- Tayyor mahsulotni omborga topshirish jarayonini rasmiylashtirish
- Smena yakunida tannarx va unumdorlik hisobotini shakllantirish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Taminot_Agent]] dan makkajo'xori doni, ziravorlar va qadoqlash materiali yetkazib berilgani haqida ma'lumot keladi.
2. [[Plan_Fakt]] kunlik ishlab chiqarish rejasini smena bo'yicha taqsimlaydi.
3. [[Xomashyo_Tayyorlov]] donni saralab, quritib, ekstruziyaga tayyor holatga keltiradi.
4. [[Ekstruziya_Liniya]] tayyor xom-ashyoni yuqori bosim ostida puflab, kukuruz tayoqchasi shakliga keltiradi.
5. [[Qadoqlash_Markirovka]] mahsulotni ziravorlaydi, yog'laydi, qadoqlaydi va shtrix-kod bilan markirovka qiladi.
6. [[Sifat_Brak_Nazorati]] har partiyani tekshirib, brakni ajratadi va sifat sertifikatini beradi.
7. Tayyor mahsulot [[Sklad_Agent]] ga topshiriladi, tannarx [[Buxgalteriya_Agent]] ga, KPI esa [[Analitika_Agent]] ga yuboriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Xom-ashyo va ziravor yetkazish jadvali | [[Taminot_Agent]] | Tayyor mahsulot (tayoqcha/konserva/ziravorli kukuruz) | [[Sklad_Agent]] |
| Ombor qoldig'i va talab prognozi | [[Sklad_Agent]] | Tannarx hisoboti | [[Buxgalteriya_Agent]] |
| Ishlab chiqarish budjeti | [[Moliya_Agent]] | Ishlab chiqarish KPI, brak foizi | [[Analitika_Agent]] |
| Smena ishchi kuchi ro'yxati | [[HR_Agent]] | Operatsion hisobot | [[COO_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Plan_Fakt]] — kunlik reja
- [[Xomashyo_Tayyorlov]] — xom-ashyo tayyorlash
- [[Ekstruziya_Liniya]] — ekstruziya jarayoni
- [[Qadoqlash_Markirovka]] — qadoqlash va markirovka
- [[Sifat_Brak_Nazorati]] — sifat nazorati
- [[Sifat_Nazorati_Agent]] — brak nazorati agenti
- [[Production_Bot_Agents]] — ishlab chiqarish botlari
- [[Sklad_Agent]] — tayyor mahsulot qabuli
- [[Taminot_Agent]] — xom-ashyo manbai
- [[Sotuv_Agent]] — mahsulot iste'molchisi
