---
aliases: [Sardor, Sardor_General_Overview, Production_Sales]
tags: [retail-it, sardor, production, sales, overview]
created: 2026-08-22
status: active
---

# 🏭 Sardor — Ishlab chiqarish va Sotuv

## Umumiy Dashboard

Sardor tashkilotning **ishlab chiqarish** va **sotuv** yo'nalishlariga mas'ul. Ikkita katta tizimni boshqaradi:

1. **Ishlab chiqarish (Production)** — 6 ta agent orqali
2. **Sotuv (Sales)** — 6 ta bot router orqali

## Tizim Tuzilishi

```mermaid
graph TD
    SARDOR[🏭 Sardor - Ishlab chiqarish va Sotuv]

    %% Ishlab chiqarish
    SARDOR --> PROD[01_Ishlab_Chiqarish]
    PROD --> PF[01_Plan_Fakt]
    PROD --> XT[02_Xomashyo_Tayyorlov]
    PROD --> EL[03_Ekstruziya_Liniya]
    PROD --> QM[04_Qadoqlash_Markirovka]
    PROD --> SBN[05_Sifat_Brak_Nazorati]
    PROD --> PBA[06_Production_Bot_Agents]

    %% Sotuv
    SARDOR --> SALES[02_Sotuv]
    SALES --> LBC[01_Lead_Baza_CRM]
    SALES --> TAR[02_Torgoviy_Agent_Route]
    SALES --> KPS[03_KP_Shartnomalar]
    SALES --> ZK[04_Zakaz_Kassa]
    SALES --> QC[05_Qarzdorlik_CRM]
    SALES --> SBR[06_Sales_Bot_Router]

    %% Agentlar
    PBA --> A1[Plan-fakt agenti]
    PBA --> A2[Xom-ashyo agenti]
    PBA --> A3[Liniya agenti]
    PBA --> A4[Qadoqlash agenti]
    PBA --> A5[Brak & Sifat agenti]
    PBA --> A6[Tannarx & Hisobot agenti]

    %% Bot Router
    SBR --> B1[CRM & Lead bot]
    SBR --> B2[Torgoviy Agent bot]
    SBR --> B3[KP & Shartnoma bot]
    SBR --> B4[Zakaz & Kassa bot]
    SBR --> B5[Qarzdorlik bot]
    SBR --> B6[Analitika & KPI bot]
```

## Hamkorlik Bog'liqliklari

| Bo'lim | Qanday bog'langan | Qo'shimcha |
|--------|-------------------|------------|
| [[Abduvoris_Sklad_Marketing]] | Ombordagi qoldiq va leadlar | Marketing kampaniyalari |
| [[Kamron_HR_Logistika_Taminot]] | Xom-ashyo yetkazish va transport | HR — ishchi kuchi |
| [[Abdulloh_Legal_Buxgalteriya_TIF]] | Tannarx, shartnoma va eksport | Yuridik maslahat |
| [[Komron_Moliya_Analitika]] | KPI va sotuv dashboard | Moliyaviy hisobotlar |

## Ishlab chiqarish Oqimi

```mermaid
flowchart LR
    KAMRON[Komron: Moliya] -->|Budget| PF[Plan-Fakt]
    ABDUVORIS[Abduvoris: Sklad] -->|Qoldiq| PF[Plan-Fakt]
    PF -->|Reja| XT[Xom-ashyo]
    KAMRON_HR[Kamron: Logistika] -->|Xom-ashyo| XT
    XT -->|Tayyor| EL[Ekstruziya]
    EL -->|Tayyor mahsulot| QM[Qadoqlash]
    QM -->|Paketlangan| ABDUVORIS
    SBN -->|Brak akti| ABDULLOH[Abdulloh: Legal]
    SBN -->|Hisobot| CEO_YORDAMCHI[CEO Yordamchisi]
```

## Sotuv Oqimi

```mermaid
flowchart LR
    ABDUVORIS[Abduvoris: Marketing] -->|Leadlar| LBC[Lead Baza CRM]
    LBC -->|Lead| TAR[Torgoviy Agent]
    TAR -->|Taklif| KPS[KP & Shartnoma]
    KPS -->|Shartnoma| ZK[Zakaz & Kassa]
    ZK -->|Sotuv| QC[Qarzdorlik]
    QC -->|To'lov| KOMRON[Komron: Moliya]
```

## Keyinchalik Bog'liqlar

- [[CEO_Yordamchisi]] — topshiriqlar va hisobotlar
- [[Abduvoris_Sklad_Marketing]] — ombor va leadlar
- [[Kamron_HR_Logistika_Taminot]] — xom-ashyo va transport
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — tannarx va shartnomalar
- [[Komron_Moliya_Analitika]] — KPI va dashboard
