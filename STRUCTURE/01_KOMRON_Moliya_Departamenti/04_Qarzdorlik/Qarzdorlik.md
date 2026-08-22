---
aliases: [Qarzdorlik, Debt]
tags: [retail-it, moliya, qarzdorlik]
created: 2026-08-22
status: active
parent: [[Moliya_Agent]]
---

# 📑 Qarzdorlik

Moliya Agent'ning qarzdorlik bloki — debitor va kreditor monitoring.

## Elementlar

| Element | Tavsif |
|---------|--------|
| Mijozlar qarzdorligi | Debitor qarz |
| Muddati o'tgan qarzdorlik | Overdue |
| Yetkazib beruvchilarga qarz | Kreditor qarz |
| To'lov muddati yaqin majburiyatlar | Yaqinlashayotgan to'lovlar |

## Alertlar

| Holat | Harakat |
|-------|---------|
| Mijoz to'lovi kechikdi | [[Yuridik_Agent]] ga xabar |
| Mijoz kredit limiti oshdi | [[COO_Agent]] ga alert |
| Katta to'lov muddati yaqinlashdi | [[COO_Agent]] ga eslatma |

## Keyinchalik Bog'liqlar

- [[Moliya_Agent]] — bosh agent
- [[Moliya_Departamenti]] — umumiy dashboard
- [[Sotuv_Agent]] — mijoz to'lov muddati
- [[Yuridik_Agent]] — yuridik chora
