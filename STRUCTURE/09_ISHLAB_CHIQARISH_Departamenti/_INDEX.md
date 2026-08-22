---
aliases: [Ishlab_Chiqarish_Departamenti, Production_Department, Ishlab_Chiqarish]
tags: [retail-it, department, production, index]
created: 2026-08-22
status: active
---

# 🏭 Ishlab Chiqarish Departamenti (Production)

**Rahbar:** Sardor
**Roli:** Mahsulot ishlab chiqarish — zavod, liniyalar, sifat nazorati

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Ishlab Chiqarish Agent | [[Ishlab_Chiqarish_Agent]] | Zavod jarayonini boshqarish |
| Sifat Nazorati Agent | [[Sifat_Nazorati_Agent]] | Sifat va brak nazorati |

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
| [[Taminot_Agent]] | Xom-ashyo yetkazish |
| [[Sklad_Agent]] | Ombor qoldig'i va talab |
| [[Moliya_Agent]] | Ishlab chiqarish budjeti |
| [[HR_Agent]] | Ishchi kuchi ro'yxati |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Sklad_Agent]] | Tayyor mahsulot |
| [[Sifat_Nazorati_Agent]] | Namuna va sifat ma'lumotlari |
| [[Buxgalteriya_Agent]] | Tannarx hisoboti |
| [[Analitika_Agent]] | Ishlab chiqarish KPI |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Xom-ashyo yetishmasligi | [[Taminot_Agent]] ga shoshilinch buyurtma | Ishlab Chiqarish |
| Liniya to'xtashi | [[COO_Agent]] ga xabar | COO |
| Brak > 5% | [[Sifat_Nazorati_Agent]] to'liq tekshiruv | Sifat |
| Budjet +10% | [[Moliya_Agent]] ga hisobot | Moliya |

## Bog'liqliklar

- [[Sotuv_Departamenti]] — mahsulot sotish
- [[Kamron_Moliya_Analitika]] — KPI va moliya
- [[Abduvoris_Sklad_Marketing]] — ombor va marketing
- [[Kamron_HR_Logistika_Taminot]] — xom-ashyo va HR
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — tannarx va shartnomalar
- [[COO_Agent]] — operatsion boshqaruv
