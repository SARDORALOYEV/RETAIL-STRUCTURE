---
aliases: [Moliya_Departamenti, Finance_Department, Komron_Moliya, Komron_Moliya_Analitika, Kamron_Moliya_Analitika]
tags: [retail-it, department, finance, index]
created: 2026-08-22
status: active
---

# 💰 Moliya Departamenti (Finance)

**Rahbar:** Komron
**Roli:** Pul va foyda holatini ko'rsatish — Cash Flow, tushum, xarajat, qarzdorlik

Komron boshqa bo'limlarning ichki jarayonlarini boshqarmaydi. Ular ma'lumot yuboradi, Moliya ularni yig'ib, hisoblab, dashboard va agent orqali COO/CEO'ga chiqaradi.

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| Moliya Agent | [[Moliya_Agent]] | Cash Flow, budjet, qarzdorlik, alertlar |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Cash Flow | [[Cash_Flow]] |
| 2 | Tushum va Foyda | [[Tushum_va_Foyda]] |
| 3 | Xarajatlar | [[Xarajatlar]] |
| 4 | Qarzdorlik | [[Qarzdorlik]] |

## Moliya Dashboard

- Jami pul qoldig'i
- Oylik tushum
- Oylik xarajat
- Sof foyda / zarar
- Debitor qarzdorlik
- Kreditor qarzdorlik
- Budjet reja/fakt
- 7 / 14 / 30 kunlik Cash Flow prognozi

## Kirish (inputs_from)

| Manba | Keladigan ma'lumot |
|-------|---------------------|
| [[Sotuv_Agent]] | Buyurtma, narx, mijoz, to'lov muddati |
| [[Buxgalteriya_Agent]] | Invoice, real to'lov, xarajat, soliq |
| [[Taminot_Agent]] | Xarid so'rovi, xarid summasi |
| [[Ishlab_Chiqarish_Agent]] | Tannarx, xomashyo sarfi |
| [[Import_Agent]] | Kontrakt, bojxona va logistika xarajati |
| [[Export_Agent]] | Valyuta tushumi, eksport to'lovi |
| [[HR_Agent]] | Ish haqi va bonus xarajatlari |
| [[Marketing_Agent]] | Reklama budjeti va sarfi |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[COO_Agent]] | Moliyaviy alertlar |
| [[CEO_Agent]] | Qisqa moliyaviy xulosa |

## Cascade Rules (Alertlar)

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Cash Flow 7 kundan kam qoldi | [[COO_Agent]] ga shoshilinch alert | Moliya |
| Budjet 10% dan ko'p oshdi | [[COO_Agent]] ga hisobot | Moliya |
| Mijoz to'lovi kechikdi | Qarzdorlik eslatmasi yuborish | Moliya |
| Mijoz kredit limiti oshdi | [[Sotuv_Agent]] ga xabar | Moliya |
| Import xarajati rejadan oshdi | [[COO_Agent]] ga hisobot | Moliya |

## Bog'liqliklar

- [[Analitika_Departamenti]] — KPI va biznes holati
- [[Sotuv_Departamenti]] — buyurtma va tushum
- [[Abduvoris_Sklad_Marketing]] — reklama budjeti
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — invoice, soliq, import/export xarajati
- [[Kamron_HR_Logistika_Taminot]] — ish haqi va xarid summasi
- [[Ishlab_Chiqarish_Departamenti]] — tannarx
- [[COO_Agent]] — operatsion boshqaruv
- [[CEO_Agent]] — strategik qarorlar
