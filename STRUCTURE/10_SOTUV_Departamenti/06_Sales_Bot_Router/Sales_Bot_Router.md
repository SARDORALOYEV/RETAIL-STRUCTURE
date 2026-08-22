---
aliases: [Sales_Bot_Router, Sotuv_Bot_Router]
tags: [retail-it, sales, bot, router, makkajoxori]
created: 2026-08-22
status: active
bot_router: "@zavod_sotuv_bot"
parent: [[Sotuv_Agent]]
---

# 🛒 Sales Bot Router — @zavod_sotuv_bot

`@zavod_sotuv_bot` — sotuv jarayonini boshqaruvchi Telegram bot. Ichida 6 ta bot router mavjud.

## 📋 Vazifasi

- Yangi supermarket/distribyutor leadlarini qabul qilib, [[Lead_Baza_CRM_Agent]] ga uzatish
- Torgoviy agentlarning kunlik GPS marshrutini va tashrif natijalarini bot orqali boshqarish
- Tijorat taklifi (KP) va shartnoma so'rovlarini bir necha soniyada shakllantirish
- Zakaz va kassa operatsiyalarini bot orqali real vaqtda amalga oshirish
- Qarzdorlik bo'yicha mijozlarga avtomatik eslatma yuborish
- Kunlik/haftalik/oylik sotuv va KPI hisobotlarini rahbariyatga yetkazish

## 🔄 Tizim Zanjiri (Workflow)

1. **CRM & Lead bot** — yangi leadlarni qabul qiladi, [[Lead_Baza_CRM_Agent]] ga uzatadi.
2. **Torgoviy Agent bot** — [[Torgoviy_Agent_Route_Agent]] bilan birga kunlik marshrutni yuboradi va tashrif natijasini qabul qiladi.
3. **KP & Shartnoma bot** — [[KP_Shartnomalar_Agent]] orqali tijorat taklifi va shartnoma faylini generatsiya qilib yuboradi.
4. **Zakaz & Kassa bot** — [[Zakaz_Kassa_Agent]] orqali buyurtmani qabul qilib, ombor va kassaga uzatadi.
5. **Qarzdorlik bot** — [[Qarzdorlik_CRM_Agent]] orqali muddati o'tgan to'lovlar haqida mijozga eslatma yuboradi.
6. **Analitika & KPI bot** — barcha yo'nalishlardan kelgan ma'lumotlarni yig'ib, kunlik/haftalik/oylik sotuv dashboardini shakllantiradi.

## 📊 ERP va Ma'lumotlar Almashinuvi

| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |
|---|---|---|---|
| Yangi lead: "KORZINKA, Yunusobod filiali" | [[Marketing_Agent]] | Leadlar ro'yxati, CRM hisoboti | [[Lead_Baza_CRM_Agent]] |
| Do'konlar ro'yxati va joylashuvi | [[Sklad_Agent]] | Marshrut rejasi, sotuv natijalari | [[Torgoviy_Agent_Route_Agent]] |
| Yuridik shablonlar | [[Yuridik_Agent]] | KP fayllari, shartnoma nusxalari | [[KP_Shartnomalar_Agent]] |
| Ombor qoldiqlari | [[Sklad_Agent]] | Zakazlar, kassa cheklari | [[Zakaz_Kassa_Agent]] |
| Moliyaviy ma'lumotlar | [[Moliya_Agent]] | Qarzdorlik ro'yxati, eslatmalar | [[Qarzdorlik_CRM_Agent]] |
| Barcha bot routerlardan hisobot | Ichki yig'indi | Sotuv dashboard, KPI hisobotlari | [[Analitika_Agent]] |

## 🔗 Bog'liq Agentlar

- [[Sotuv_Agent]] — bosh agent
- [[Sotuv_Departamenti]] — umumiy dashboard
- [[Lead_Baza_CRM_Agent]] — CRM & Lead bot
- [[Torgoviy_Agent_Route_Agent]] — Torgoviy Agent bot
- [[KP_Shartnomalar_Agent]] — KP & Shartnoma bot
- [[Zakaz_Kassa_Agent]] — Zakaz & Kassa bot
- [[Qarzdorlik_CRM_Agent]] — Qarzdorlik bot
- [[CEO_Yordamchisi]] — umumiy hisobotlar
