---
aliases: [Sardor, Sardor_General_Overview, Production_Sales]
tags: [retail-it, sardor, production, sales, overview, makkajoxori]
created: 2026-08-22
status: active
---

# 🌽 Sardor — Ishlab Chiqarish va Sotuv (Makkajo'xori Zavodi)

## 📋 Vazifasi

- Makkajo'xori zavodining ikkita asosiy yo'nalishini — Ishlab Chiqarish va Sotuv — yagona strategiya ostida boshqarish
- Ishlab chiqarish hajmi va sotuv rejasini muvofiqlashtirish (ortiqcha yoki yetishmovchilik bo'lmasligi uchun)
- Ikkala yo'nalish o'rtasidagi ma'lumot almashinuvini (buyurtma → ishlab chiqarish rejasi, tayyor mahsulot → sotuv) nazorat qilish
- Haftalik umumiy operatsion hisobotni [[CEO_Yordamchisi]] orqali CEO'ga taqdim etish
- Ishlab chiqarish va sotuv o'rtasidagi uzilishlarni (kechikish, yetishmovchilik) oldindan aniqlash

## 🔄 Tizim Zanjiri (Workflow)

1. [[Sotuv_Agent]] supermarketlar va distribyutorlardan kelgan buyurtmalarni yig'adi.
2. Buyurtma hajmi [[Ishlab_Chiqarish_Agent]] ga uzatiladi va u asosida haftalik ishlab chiqarish rejasi tuziladi.
3. [[Ishlab_Chiqarish_Agent]] mahsulotni ishlab chiqarib, [[Sklad_Agent]] ga topshiradi.
4. Ombor qoldig'i haqida ma'lumot qaytadan [[Sotuv_Agent]] ga boradi — savdo jamoasi mavjud mahsulotni sotishni davom ettiradi.
5. Har ikkala yo'nalishning KPI'lari [[Analitika_Agent]] orqali yig'ilib, umumiy hisobot [[CEO_Yordamchisi]] ga yuboriladi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Buyurtmalar hajmi | [[Sotuv_Agent]] | Ishlab chiqarish rejasi | [[Ishlab_Chiqarish_Agent]] |
| Ombor qoldig'i | [[Sklad_Agent]] | Mahsulot mavjudligi | [[Sotuv_Agent]] |
| KPI va moliyaviy hisobot | [[Analitika_Agent]], [[Moliya_Agent]] | Umumiy operatsion hisobot | [[CEO_Yordamchisi]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Departamenti]] — ishlab chiqarish yo'nalishi
- [[Sotuv_Departamenti]] — sotuv yo'nalishi
- [[CEO_Yordamchisi]] — topshiriqlar va hisobotlar
- [[Abduvoris_Sklad_Marketing]] — ombor va leadlar
- [[Kamron_HR_Logistika_Taminot]] — xom-ashyo va transport
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — tannarx va shartnomalar
- [[Komron_Moliya_Analitika]] — KPI va dashboard
