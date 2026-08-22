---
aliases: [Ishlab_Chiqarish_Departamenti, Production_Department, Ishlab_Chiqarish]
tags: [retail-it, department, production, index, makkajoxori]
created: 2026-08-22
status: active
---

# 🏭 Ishlab Chiqarish Departamenti (Makkajo'xori Zavodi)

**Rahbar:** Sardor
**Roli:** Makkajo'xori tayoqchalari, konservalangan kukuruz va ziravorli kukuruz mahsulotlarini ishlab chiqarish — xomashyodan tayyor mahsulotgacha to'liq nazorat

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Ishlab Chiqarish Agent | [[Ishlab_Chiqarish_Agent]] | Zavod jarayonini boshqarish — reja, xomashyo, liniya, sifat |
| Sifat Nazorati Agent | [[Sifat_Nazorati_Agent]] | Har smenadagi brak foizini nazorat qilish |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Plan-Fakt | [[Plan_Fakt]] |
| 2 | Xom-ashyo Tayyorlov | [[Xomashyo_Tayyorlov]] |
| 3 | Ekstruziya Liniyasi | [[Ekstruziya_Liniya]] |
| 4 | Qadoqlash va Markirovka | [[Qadoqlash_Markirovka]] |
| 5 | Sifat va Brak Nazorati | [[Sifat_Brak_Nazorati]] |
| 6 | Production Bot Agents | [[Production_Bot_Agents]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Taminot_Agent]] | Makkajo'xori doni, ziravorlar, qadoqlash materiali |
| [[Sklad_Agent]] | Ombor qoldig'i va talab prognozi |
| [[Moliya_Agent]] | Ishlab chiqarish budjeti |
| [[HR_Agent]] | Smena ishchi kuchi ro'yxati |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Sklad_Agent]] | Tayyor mahsulot (tayoqcha, konserva, ziravorli kukuruz) |
| [[Buxgalteriya_Agent]] | Tannarx hisoboti |
| [[Analitika_Agent]] | Ishlab chiqarish KPI, brak foizi |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Xom-ashyo namligi normadan yuqori | [[Xomashyo_Tayyorlov]] qayta quritish, [[Taminot_Agent]] ga xabar | Ishlab Chiqarish |
| Ekstruder bosimi tushib ketsa | Liniyani to'xtatish, texnik xizmatga chaqirish | Ishlab Chiqarish |
| Brak foizi 5% dan oshsa | [[Sifat_Nazorati_Agent]] to'liq tekshiruv, [[COO_Agent]] ga xabar | Sifat |

## Bog'liqliklar

- [[Sotuv_Departamenti]] — tayyor mahsulotni sotish
- [[Analitika_Departamenti]] — ishlab chiqarish KPI
- [[Abduvoris_Sklad_Marketing]] — ombor va marketing
- [[Kamron_HR_Logistika_Taminot]] — xom-ashyo va HR
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — tannarx va shartnomalar
- [[COO_Agent]] — operatsion boshqaruv
