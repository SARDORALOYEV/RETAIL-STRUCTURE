---
aliases: [Production_Bot_Agents, Zavod_Bot]
tags: [retail-it, production, bot, telegram, makkajoxori]
created: 2026-08-22
status: active
bot_router: "@zavod_production_bot"
parent: [[Ishlab_Chiqarish_Agent]]
---

# 🤖 Production Bot Agents — @zavod_production_bot

`@zavod_production_bot` — zavod ichidagi barcha ishlab chiqarish jarayonlarini boshqaruvchi Telegram bot. Ichida 6 ta yo'nalish mavjud.

## 📋 Vazifasi

- Smena boshlanishi va tugashi haqida barcha liniya operatorlariga avtomatik bildirishnoma yuborish
- Ekstruder va qadoqlash uskunalarining real vaqtdagi holatini (ishlayapti/to'xtagan) ko'rsatish
- Uskuna nosozligi yuzaga kelganda texnik xizmat jamoasiga darhol signal yuborish
- Smena boshlig'idan kunlik hajm va brak ma'lumotlarini bot orqali qabul qilish
- Xom-ashyo qoldig'i kamayganda [[Taminot_Agent]] ga avtomatik so'rov yuborish
- Kunlik ishlab chiqarish hisobotini rahbariyatga bot orqali yetkazish

## 🔄 Tizim Zanjiri (Workflow)

1. Har liniya operatori (Plan-Fakt, Xom-ashyo, Ekstruziya, Qadoqlash, Sifat) smena ma'lumotlarini botga kiritadi.
2. Bot ma'lumotlarni tegishli agentga (masalan [[Ekstruziya_Liniya]] yoki [[Sifat_Brak_Nazorati]]) uzatadi.
3. Uskuna to'xtashi aniqlansa, bot texnik xizmat jamoasiga darhol xabar yuboradi.
4. Smena yakunida bot barcha liniyalardan konsolidatsiyalangan hisobotni [[Ishlab_Chiqarish_Agent]] ga jo'natadi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Smena hajmi va brak ma'lumotlari | Liniya operatorlari (bot orqali) | Konsolidatsiyalangan smena hisoboti | [[Ishlab_Chiqarish_Agent]] |
| Uskuna holati (ishlayapti/to'xtagan) | [[Ekstruziya_Liniya]] | Texnik xizmat chaqiruvi | Texnik xizmat jamoasi |
| Xom-ashyo qoldig'i past | [[Xomashyo_Tayyorlov]] | Shoshilinch xarid so'rovi | [[Taminot_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Ishlab_Chiqarish_Agent]] — bosh agent
- [[Ishlab_Chiqarish_Departamenti]] — umumiy dashboard
- [[Ekstruziya_Liniya]] — uskuna monitoring
- [[Sifat_Brak_Nazorati]] — sifat hisoboti
- [[Taminot_Agent]] — xom-ashyo so'rovi
