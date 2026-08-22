---
aliases: [Analitika_Departamenti, Analytics_Department, Komron_Analitika]
tags: [retail-it, department, analytics, index]
created: 2026-08-22
status: active
---

# 📊 Analitika Departamenti (Analytics)

**Rahbar:** Komron
**Roli:** Biznesning qaysi bo'limida muammo borligini ko'rsatish — KPI, prognoz, Company Health Score

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Analitika Agent | [[Analitika_Agent]] | KPI hisoblash, muammo aniqlash, Company Health Score |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Sotuv Analitikasi | [[Sotuv_Analitikasi]] |
| 2 | Ishlab Chiqarish Analitikasi | [[Ishlab_Chiqarish_Analitikasi]] |
| 3 | Sklad Analitikasi | [[Sklad_Analitikasi]] |
| 4 | Ta'minot / Import Analitikasi | [[Taminot_Import_Analitikasi]] |
| 5 | Marketing Analitikasi | [[Marketing_Analitikasi]] |
| 6 | HR Analitikasi | [[HR_Analitikasi]] |
| 7 | Export Analitikasi | [[Export_Analitikasi]] |

## Analitika Dashboard

- Umumiy Company Health Score
- Sotuv reja/fakt
- Ishlab chiqarish reja/fakt
- Ombor qoldig'i
- Xomashyo yetishmovchiligi
- Marketing leadlari
- HR davomat va xodim soni
- Import/Export holati
- Ochiq alertlar soni

## Kirish (inputs_from)

| Manba | Analitika uchun asosiy ma'lumot |
|-------|----------------------------------|
| [[Marketing_Agent]] | Lead, reklama, kampaniya |
| [[Sotuv_Agent]] | Buyurtma, tushum, mijoz, prognoz |
| [[Ishlab_Chiqarish_Agent]] | Reja/fakt, brak, tannarx |
| [[Sklad_Agent]] | Qoldiq, kirim/chiqim, zaxira |
| [[Taminot_Agent]] | Xarid, narx, kechikish |
| [[Moliya_Agent]] | Cash Flow, foyda, xarajat |
| [[Buxgalteriya_Agent]] | Faktik to'lov va xarajat |
| [[HR_Agent]] | Xodim, davomat, smena |
| [[Yuridik_Agent]] | Shartnoma va sertifikat riski |
| [[Import_Agent]] | Yuk, bojxona, logistika |
| [[Export_Agent]] | Eksport buyurtmasi va tushum |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[COO_Agent]] | Umumiy operatsion xulosa |
| [[CEO_Agent]] | Muhim insight va risklar |

## Cascade Rules (Alertlar)

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Sotuv reja ortda qoldi | [[Sotuv_Agent]] ga xabar | Analitika |
| Ishlab chiqarish reja ortda qoldi | [[Ishlab_Chiqarish_Agent]] ga xabar | Analitika |
| Omborda mahsulot kam | [[Sklad_Agent]] ga xabar | Analitika |
| Xomashyo 7 kundan kamga yetadi | [[Taminot_Agent]] ga shoshilinch buyurtma | Analitika |
| Brak foizi oshdi | [[Ishlab_Chiqarish_Agent]] ga xabar | Analitika |
| Marketing konversiyasi tushdi | [[Marketing_Agent]] ga xabar | Analitika |
| Import yuki kechikdi | [[Import_Agent]] ga xabar | Analitika |
| Xodim yetishmovchiligi ishlab chiqarishga ta'sir qilyapti | [[HR_Agent]] ga xabar | Analitika |

## Bog'liqliklar

- [[Moliya_Departamenti]] — pul va foyda holati
- [[Sotuv_Departamenti]] — sotuv KPI
- [[Ishlab_Chiqarish_Departamenti]] — ishlab chiqarish KPI
- [[Abduvoris_Sklad_Marketing]] — sklad va marketing KPI
- [[Kamron_HR_Logistika_Taminot]] — HR va ta'minot KPI
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — import/export va yuridik risk
- [[COO_Agent]] — operatsion boshqaruv
- [[CEO_Agent]] — strategik qarorlar
