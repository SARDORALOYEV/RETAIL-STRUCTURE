---
aliases: [Sklad_Hisobotchi, Warehouse_Reporter]
tags: [retail-it, sklad, hisobot]
created: 2026-08-22
status: active
parent: [[Sklad_Agent]]
---

# 📑 Sklad Hisobotchi — Kunlik Otchet

Kunlik ombor faoliyati bo'yicha hisobot tayyorlaydi.

## Hisobot tarkibi

| Element | Tavsif |
|---------|--------|
| Kunlik kirim/chiqim | Miqdor va summa |
| Joriy qoldiq | Har bir mahsulot bo'yicha |
| Reviziya natijalari | Aniqlangan farqlar |
| Alertlar xulosasi | Kun davomidagi ogohlantirishlar |

## Chiqish (outputs_to)

- [[Analitika_Agent]] — ombor KPI
- [[Buxgalteriya_Agent]] — ombor qiymati
- [[Sklad_Bot]] — Telegram orqali yuborish

## Keyinchalik Bog'liqlar

- [[Sklad_Agent]] — bosh agent
- [[Sklad_Departamenti]] — umumiy dashboard
- [[Reviziya]] — hisobot manbai
- [[Qoldiq_Nazorati]] — hisobot manbai
