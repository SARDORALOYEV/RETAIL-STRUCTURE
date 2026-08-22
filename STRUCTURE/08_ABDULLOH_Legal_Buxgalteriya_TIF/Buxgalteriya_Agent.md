---
aliases: [Buxgalteriya_Agent, Accounting_Agent, Buxgalteriya]
tags: [retail-it, buxgalteriya, erp, agent]
created: 2026-08-22
status: active
role: Buxgalteriya hisoblari — hisob-kitob, soliq, moliyaviy hisobotlar
inputs_from:
  - [[Ishlab_Chiqarish_Agent]]
  - [[Sotuv_Agent]]
  - [[Taminot_Agent]]
  - [[Marketing_Agent]]
  - [[Sklad_Agent]]
  - [[HR_Agent]]
  - [[Import_Agent]]
  - [[Export_Agent]]
outputs_to:
  - [[Moliya_Agent]]
  - [[COO_Agent]]
  - [[Yuridik_Agent]]
  - [[Analitika_Agent]]
cascade_rules:
  trigger: Soliq muddati yaqinlashishi yoki xato topilishi
  action:
    - Soliq muddatiga 5 kun qolganda → [[COO_Agent]] ga eslatma
    - Hisob-kitobda xato → [[Yuridik_Agent]] ga tekshiruv
    - Xarajat oshishi 10% → [[Moliya_Agent]] ga hisobot
  escalate_to: [[COO_Agent]]
parent: [[Abdulloh_Legal_Buxgalteriya_TIF]]
---

# 📊 Buxgalteriya Agent

## ERP输入 (inputs_from)

| Manba | Ma'lumot turi | chastotasi |
|-------|---------------|------------|
| [[Ishlab_Chiqarish_Agent]] | Tannarx hisoboti | Oylik |
| [[Sotuv_Agent]] | Sotuv hisoboti | Kunlik |
| [[Taminot_Agent]] | Xarajat hisoboti | Oylik |
| [[Marketing_Agent]] | Marketing xarajatlari | Oylik |
| [[Sklad_Agent]] | Ombor qiymati | Oylik |
| [[HR_Agent]] | Ish haqi va imtiyozlar | Oylik |
| [[Import_Agent]] | Import xarajatlari | Kerak bo'lganda |
| [[Export_Agent]] | Export tushumlari | Kerak bo'lganda |

## ERP输出 (outputs_to)

| Qabul qiluvchi | Ma'lumot turi | chastotasi |
|----------------|---------------|------------|
| [[Moliya_Agent]] | Umumiy hisob-kitob | Oylik |
| [[COO_Agent]] | Moliyaviy hisobot | Oylik |
| [[Yuridik_Agent]] | Soliq hujjatlari | Oylik |
| [[Analitika_Agent]] | Buxgalteriya KPI | Haftalik |

## Cascade Rules (Zanjirli Bog'liqliklar)

```mermaid
flowchart TD
    SOLIQ[Solig' muddatiga 5 kun] -->|trigger| COO[COO Agent]
    XATO[Hisob-kitobda xato] -->|trigger| LEGAL[Yuridik Agent]
    XARAJAT[Xarajat +10%] -->|trigger| MOLIYA[Moliya Agent]
    BUX[Buxgalteriya Agent] -->|hisob-kitob| MOLIYA
    BUX -->|hisobot| COO
    BUX -->|soliq hujjatlari| LEGAL
    PROD[Ishlab Chiqarish] -->|tannarx| BUX
    SOTUV[Sotuv] -->|sotuv hisoboti| BUX
    TAMINOT[Ta'minot] -->|xarajat| BUX
    HR[HR] -->|ish haqi| BUX
```

| holat | Harakat | Mas'ul |
|-------|---------|--------|
| Soliq muddatiga 5 kun | [[COO_Agent]] ga eslatma | Buxgalteriya |
| Hisob-kitobda xato | [[Yuridik_Agent]] ga tekshiruv | Buxgalteriya |
| Xarajat +10% | [[Moliya_Agent]] ga hisobot | Buxgalteriya |
| Audit | [[Yuridik_Agent]] bilan hamkorlik | Buxgalteriya |

## Keyinchalik Bog'liqlar

- [[Abdulloh_Legal_Buxgalteriya_TIF]] — umumiy dashboard
- [[Moliya_Agent]] — moliyaviy boshqaruv
- [[COO_Agent]] — operatsion boshqaruv
- [[Yuridik_Agent]] — soliq va audit
- [[Analitika_Agent]] — buxgalteriya KPI
- [[Ishlab_Chiqarish_Agent]] — tannarx manbai
- [[Sotuv_Agent]] — sotuv hisoboti
- [[Taminot_Agent]] — xarajat manbai
- [[Sklad_Agent]] — ombor qiymati
- [[HR_Agent]] — ish haqi
- [[Import_Agent]] — import xarajatlari
- [[Export_Agent]] — export tushumlari
