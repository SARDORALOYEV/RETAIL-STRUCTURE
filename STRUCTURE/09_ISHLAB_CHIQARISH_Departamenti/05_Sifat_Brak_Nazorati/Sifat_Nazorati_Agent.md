---
aliases: [Sifat_Nazorati_Agent, Quality_Control_Agent, Sifat]
tags: [retail-it, sifat, erp, agent]
created: 2026-08-22
status: active
role: Sifat va brak nazorati — laboratoriya, brak akti, sifat standartlari
inputs_from:
  - [[Ishlab_Chiqarish_Agent]]
  - [[Sklad_Agent]]
outputs_to:
  - [[Ishlab_Chiqarish_Agent]]
  - [[Buxgalteriya_Agent]]
  - [[COO_Agent]]
  - [[CEO_Agent]]
cascade_rules:
  trigger: Brak 5% dan oshishi yoki sifat standartdan tashqari
  action:
    - Brak 5% dan oshsa → [[Ishlab_Chiqarish_Agent]] ga to'xtatish buyrug'i
    - Sifat 3 marta standartdan tashqari → [[CEO_Agent]] ga hisobot
    - Yangi sifat standarti → [[COO_Agent]] ga tasdiqlash
  escalate_to: [[COO_Agent]]
parent: [[Sardor_General_Overview]]
---

# 🔬 Sifat Nazorati Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Ishlab_Chiqarish_Agent]] | Ishlab chiqarilgan mahsulot namunalari | Har smena |
| [[Sklad_Agent]] | Ombordagi mahsulot sifati | Haftalik |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Ishlab_Chiqarish_Agent]] | Sifat natijalari, ogohlantirishlar | Har smena |
| [[Buxgalteriya_Agent]] | Brak hisoboti, yo'qotishlar | Oylik |
| [[COO_Agent]] | Sifat hisoboti | Haftalik |
| [[CEO_Agent]] | Strategik sifat hisoboti | Oylik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    BRAK[Brak 5% dan oshsa] -->|trigger| PROD[Ishlab Chiqarish Agent]
    PROD -->|to'xtatish buyrug'i| SIFAT
    SIFAT_3[Sifat 3 marta standartdan tashqari] -->|trigger| CEO[CEO Agent]
    YANGI[Yangi sifat standarti] -->|trigger| COO[COO Agent]
    SIFAT[Sifat Nazorati] -->|sifat natijalari| PROD
    SIFAT -->|brak hisoboti| BUX[Buxgalteriya Agent]
    SIFAT -->|hisobot| COO
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Brak > 5% | [[Ishlab_Chiqarish_Agent]] ga to'xtatish buyrug'i | Sifat |
| Sifat 3 marta past | [[CEO_Agent]] ga strategik hisobot | Sifat |
| Yangi sifat standarti | [[COO_Agent]] ga tasdiqlash | Sifat |
| Audit | [[Yuridik_Agent]] bilan hamkorlik | Sifat |

## Keyinchalik Bog'liqlar

- [[Sardor_General_Overview]] — umumiy dashboard
- [[Ishlab_Chiqarish_Agent]] — mahsulot manbai
- [[Sklad_Agent]] — ombor mahsuloti
- [[Buxgalteriya_Agent]] — brak hisoboti
- [[COO_Agent]] — operatsion boshqaruv
- [[CEO_Agent]] — strategik hisobot
- [[Yuridik_Agent]] — sifat standartlari
