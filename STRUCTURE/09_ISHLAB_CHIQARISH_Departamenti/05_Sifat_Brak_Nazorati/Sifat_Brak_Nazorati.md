---
aliases: [Sifat_Brak_Nazorati, Quality_Control]
tags: [retail-it, production, sifat, brak, makkajoxori]
created: 2026-08-22
status: active
parent: [[Ishlab_Chiqarish_Agent]]
---

# 🔍 Sifat va Brak Nazorati

## 📋 Vazifasi

- Har partiyadan namuna olib, ta'm, rang, hajm va qadoqlash sifatini standart bilan solishtirish
- Pishmay qolgan, kuydirilgan yoki ziravori yetarli qo'yilmagan mahsulotni brak sifatida ajratish
- Har smena bo'yicha brak foizini hisoblash va 5% chegara bilan solishtirish
- Brak sababini (xom-ashyo, uskuna, retsept xatosi) aniqlab, tegishli liniyaga qaytarish
- Sifat sertifikati va laboratoriya tahlil natijalarini arxivlash
- Yaroqlilik muddati va saqlash sharoitlariga rioya etilishini nazorat qilish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Qadoqlash_Markirovka]] dan qadoqlangan partiya namunasi keladi.
2. [[Sifat_Nazorati_Agent]] ta'm, rang, og'irlik va qadoqlash sifatini tekshiradi.
3. Standartga mos kelmagan mahsulot brak sifatida ajratiladi, sababi aniqlanadi.
4. Brak foizi hisoblanadi; 5% dan oshsa tegishli liniyaga (Ekstruziya yoki Qadoqlash) signal yuboriladi.
5. Tasdiqlangan (sifatli) partiya [[Sklad_Agent]] ga o'tkazishga ruxsat beriladi.
6. Sifat hisoboti [[Ishlab_Chiqarish_Agent]] va [[Analitika_Agent]] ga yuboriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Qadoqlangan partiya namunasi: 36 000 dona | [[Qadoqlash_Markirovka]] | Sifat sertifikati (tasdiqlangan): 35 280 dona | [[Sklad_Agent]] |
| — | — | Brak akti: 720 dona (2% — kuydirilgan) | [[Ishlab_Chiqarish_Agent]] |
| — | — | Sifat va brak KPI hisoboti | [[Analitika_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Agent]] — bosh agent
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Sifat_Nazorati_Agent]] — tekshiruv agenti
- [[Qadoqlash_Markirovka]] — namuna manbai
- [[Sklad_Agent]] — tasdiqlangan mahsulot qabuli
