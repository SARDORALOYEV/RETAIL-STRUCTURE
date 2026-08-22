---
aliases: [Qadoqlash_Markirovka, Qadoqlash_Agenti]
tags: [retail-it, production, qadoqlash, ziravorlash, makkajoxori]
created: 2026-08-22
status: active
parent: [[Ishlab_Chiqarish_Agent]]
---

# 📦 Qadoqlash va Markirovka Agenti

## 📋 Vazifasi

- Xom mahsulotni ziravorlash liniyasida yog'lash va ta'm beruvchi aralashmalarni (pishloqli, tuzli, shirin, barbekyu) qo'shish
- Ziravor va yog' sarfini retseptga muvofiq nazorat qilish (haddan tashqari yoki kam sarflanmasligi)
- Avtomatik qadoqlash apparatlarida mahsulotni og'irligi bo'yicha (30g, 70g, 150g) paketlash
- Har bir qadoqqa shtrix-kod, seriya raqami va yaroqlilik muddatini (6 oy) avtomatik bosib chiqarish
- Qutilarga joylash va paletlashni ombor talabiga moslab tashkil qilish
- Qadoqlash liniyasidagi tezlik va uzilishlarni kuzatib borish

## 🔄 Tizim Zanjiri (Workflow)

1. [[Ekstruziya_Liniya]] dan xom (ziravorlanmagan) mahsulot keladi.
2. Mahsulot turiga qarab (pishloqli, tuzli, shirin, barbekyu) tegishli ziravor va yog' aralashmasi qo'shiladi.
3. Ziravorlangan mahsulot avtomatik apparatda o'lchov bo'yicha paketlanadi.
4. Har qadoqqa shtrix-kod, seriya raqami va yaroqlilik muddati bosiladi.
5. Qadoqlangan mahsulot qutilarga joylanib, [[Sifat_Brak_Nazorati]] ga yakuniy tekshiruvga yuboriladi.
6. Tasdiqlangan partiya [[Sklad_Agent]] ga topshiriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Xom mahsulot: 10.8 tonna tayoqcha | [[Ekstruziya_Liniya]] | Qadoqlangan mahsulot: 36 000 dona (300g pishloqli) | [[Sifat_Brak_Nazorati]] |
| Retsept: pishloqli 8%, tuzli 5%, barbekyu 7% yog'-ziravor | Ishlab chiqarish standarti | Shtrix-kod va seriya raqami ro'yxati | [[Sklad_Agent]] |
| — | — | Qadoqlash liniyasi tezligi hisoboti | [[Ishlab_Chiqarish_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Agent]] — bosh agent
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Ekstruziya_Liniya]] — xom mahsulot manbai
- [[Sifat_Brak_Nazorati]] — yakuniy tekshiruv
- [[Sklad_Agent]] — tayyor mahsulot qabuli
