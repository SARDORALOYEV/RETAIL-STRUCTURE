---
aliases: [HR_Departamenti, HR_Department, Kamron_HR, Kamron_HR_Logistika_Taminot]
tags: [retail-it, department, hr, index]
created: 2026-08-22
status: active
---

# 👥 HR Departamenti

**Rahbar:** Kamron
**Roli:** Inson resurslari — xodimlar bazasi, smena, davomat, tibbiyot nazorati
**Bot Router:** `@xamxam_hr_bot`
**Target KPI:** 100% Medknijka Nazorati

## Departament Agentlari

| Agent | Fayl | vazifa |
|-------|------|--------|
| HR Agent | [[HR_Agent]] | Ishchi kuchi, ishga qabul qilish, o'qitish |

## Bo'limlar

| # | Bo'lim | Fayl |
|---|--------|------|
| 1 | Xodimlar Baza | [[Xodimlar_Baza_Agent]] |
| 2 | Smena Nazorati | [[Smena_Nazorati_Agent]] |
| 3 | Davomat Nazorati | [[Davomat_Nazorati_Agent]] |
| 4 | Medknijka Nazorati | [[Medknijka_Nazorati_Agent]] |
| 5 | HR Hisobotchi | [[HR_Hisobotchi_Agent]] |

## Kirish (inputs_from)

| Manba | Ma'lumot |
|-------|----------|
| [[Ishlab_Chiqarish_Agent]] | Ishchi kuchi kerakligi |
| [[Sotuv_Agent]] | Sotuv jamoasi kerakligi |
| [[COO_Agent]] | Umumiy kadrlar rejasi |
| [[Buxgalteriya_Agent]] | Ish haqi hisoboti |

## Chiqish (outputs_to)

| Qabul qiluvchi | Ma'lumot |
|----------------|----------|
| [[Ishlab_Chiqarish_Agent]] | Ishchi kuchi ro'yxati |
| [[Sotuv_Agent]] | Sotuv jamoasi |
| [[Analitika_Agent]] | HR KPI |
| [[CEO_AI_Yordamchisi_Agent]] | HR umumiy xulosa |

## Cascade Rules

| Holat | Harakat | Mas'ul |
|-------|---------|--------|
| Ishchi kamchiligi 10% dan oshsa | [[COO_Agent]] ga xabar | HR |
| Medknijka muddati o'tsa | Xodimni ishdan chetlashtirish alerti | HR |

## Bog'liqliklar

- [[Logistika_Departamenti]] — haydovchilar
- [[Taminot_Departamenti]] — ta'minot xodimlari
- [[Moliya_Departamenti]] — ish haqi xarajatlari
- [[CEO_AI_Yordamchisi_Agent]] — umumiy hisobot
- [[COO_Agent]] — operatsion boshqaruv
