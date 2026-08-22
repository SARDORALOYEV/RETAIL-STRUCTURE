---
aliases: [CEO_Yordamchisi, Orchestrator, AI_Orchestrator]
tags: [retail-it, rahbariyat, orchestrator]
created: 2026-08-22
status: active
---

# 🤖 CEO Yordamchisi — Orchestrator AI

## Roll va Mas'uliyat

CEO Yordamchisi — **Orchestrator AI**. CEO topshiriqlarini barcha bo'limlarga taqsimlaydi va haftalik otchetlarni yig'adi.

| Vazifa | Tavsif |
|--------|--------|
| Topshiriq taqsimlash | CEO'dan kelgan topshiriqlarni tegishli bo'limga yo'naltirish |
| Haftalik otchet yig'ish | Barcha bo'limlardan ma'lumot to'plash va birlashtirish |
| Muvofiqlashtirish | Bo'limlararo hamkorlikni tashkillashtirish |
| Nazorat | Topshiriqlar bajarilishini kuzatish |

## Bo'limlararo Bog'liqlik

```mermaid
graph TD
    ASSISTANT[🤖 CEO Yordamchisi] --> KAMRON[Komron: Moliya va Analitika]
    ASSISTANT --> ABDUVORIS[Abduvoris: Sklad va Marketing]
    ASSISTANT --> ABDULLOH[Abdulloh: Legal, Buxgalteriya, TIF]
    ASSISTANT --> KAMRON_HR[Kamron: HR, Logistika, Ta'minot]
    ASSISTANT --> SARDOR[Sardor: Production va Sales]

    KAMRON -->|Moliyaviy hisobot| ASSISTANT
    ABDUVORIS -->|Sklad va marketing hisoboti| ASSISTANT
    ABDULLOH -->|Yuridik va buxgalteriya hisoboti| ASSISTANT
    KAMRON_HR -->|HR va logistika hisoboti| ASSISTANT
    SARDOR -->|Ishlab chiqarish va sotuv hisoboti| ASSISTANT
```

## Topshiriqlarni Taqsimlash Logikasi

| Bo'lim | Mas'uliyat | Rahbar |
|--------|-----------|--------|
| Moliya va Analitika | Budjet, hisobot, KPI | [[Komron_Moliya_Analitika]] |
| Sklad va Marketing | Ombor, leadlar, reklama | [[Abduvoris_Sklad_Marketing]] |
| Legal, Buxgalteriya, TIF | Shartnomalar, hisob-kitob, import/export | [[Abdulloh_Legal_Buxgalteriya_TIF]] |
| HR, Logistika, Ta'minot | Kadr, transport, xom-ashyo | [[Kamron_HR_Logistika_Taminot]] |
| Ishlab chiqarish va Sotuv | Zavod, sotuv, CRM | [[Sardor_General_Overview]] |

## Haftalik Otchet Shabloni

1. **Dushanba**: Har bir bo'limdan maqsadlar olindi
2. **Chorshanba**: Oraliq nazorat — bajarilish darajasi
3. **Juma**: Yakuniy hisobot — barcha bo'limlardan natijalar

## Keyinchalik Bog'liqlar

- [[CEO]] — strategik topshiriqlar manbai
- [[Komron_Moliya_Analitika]] — moliyaviy analitika
- [[Abduvoris_Sklad_Marketing]] — ombor va marketing
- [[Abdulloh_Legal_Buxgalteriya_TIF]] — yuridik va buxgalteriya
- [[Kamron_HR_Logistika_Taminot]] — HR va logistika
- [[Sardor_General_Overview]] — ishlab chiqarish va sotuv
