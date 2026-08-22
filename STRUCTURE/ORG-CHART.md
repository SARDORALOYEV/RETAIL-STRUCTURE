---
aliases: [org-chart, tashkilot-tuzilmasi]
tags: [retail-it, organization, structure]
created: 2026-08-22
---

# 🏢 Tashkilot Tuzilmasi

```mermaid
graph TD
    %% Markaziy Boshqaruv
    CEO[CEO - Bosh Direktor] --> ASSISTANT[CEO Yordamchisi / Orchestrator AI]

    %% Yo'nalish Boshliqlari
    ASSISTANT --> KAMRON_FIN[Kamron: Moliya va Analitika]
    ASSISTANT --> ABDUVORIS[Abduvoris: Marketing va Sklad]
    ASSISTANT --> ABDULLOH[Abdulloh: Yuridik, Buxgalteriya, Import/Export]
    ASSISTANT --> KAMRON_OPS[Kamron: HR, Logistika va Ta'minot]
    ASSISTANT --> SARDOR[Sardor: Ishlab chiqarish va Sotuv]

    %% Kamron - Moliya & Analitika
    KAMRON_FIN --> Moliya[Moliya Bo'limi AI]
    KAMRON_FIN --> Analitika[Analitika va BI AI]

    %% Abduvoris - Marketing & Sklad
    ABDUVORIS --> Marketing[Marketing Bo'limi AI]
    ABDUVORIS --> Sklad[Omborxona / Sklad AI]

    %% Abdulloh - Legal, Accounting, TIF
    ABDULLOH --> Yuridik[Yuridik Bo'lim AI]
    ABDULLOH --> Buxgalteriya[Buxgalteriya AI]
    ABDULLOH --> Import[Import va Bojxona AI]
    ABDULLOH --> Export[Export Bo'limi AI]

    %% Kamron - HR, Logistika, Ta'minot
    KAMRON_OPS --> HR[HR / Inson Resurslari AI]
    KAMRON_OPS --> Logistika[Logistika Bo'limi AI]
    KAMRON_OPS --> Taminot[Ta'minot Bo'limi AI]

    %% Sardor - Production & Sales
    SARDOR --> Production[Ishlab chiqarish AI]
    SARDOR --> Sotuv[Sotuv Bo'limi AI]
```

## Qisqacha tavsif

| Lavozim | Mas'uliyat yo'nalishi |
|---|---|
| CEO | Umumiy boshqaruv |
| CEO Yordamchisi | Orchestrator AI — barcha yo'nalishlarni muvofiqlashtiradi |
| Kamron (1) | Moliya, Analitika, BI |
| Abduvoris | Marketing, Omborxona (Sklad) |
| Abdulloh | Yuridik, Buxgalteriya, Import/Export |
| Kamron (2) | HR, Logistika, Ta'minot |
| Sardor | Ishlab chiqarish, Sotuv |

## AI Botlar

Har bir bo'lim o'z AI botiga ega — ular CEO Yordamchisi (Orchestrator) orqali bog'lanadi va markazlashgan boshqaruvni ta'minlaydi.
