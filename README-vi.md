# SafeAI-Global Compliance Suite 🛡️

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)
> 📖 [Actionable User Guide](USER_GUIDE.md) | 🇻🇳 [Hướng dẫn Sử dụng](USER_GUIDE-vi.md)
>
> **9 Kỹ năng AI Hỗ trợ Tuân thủ Pháp lý cho Product Manager — bao phủ 35+ quốc gia, tiêu chuẩn ISO, và tuỳ chọn mức độ kiểm tra linh hoạt**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-4.2.0-blue.svg)](CHANGELOG.md)

---

## 🎯 Giá trị Doanh nghiệp dành cho Product Manager

Việc xây dựng phần mềm tuân thủ hệ thống pháp lý toàn cầu thường chậm chạp, tốn kém và nhiều rủi ro. **SafeAI-Global Compliance Suite** hoạt động như một chuyên gia Pháp lý & Bảo mật nhúng (embedded co-pilot), được thiết kế đặc biệt dành cho Product Manager.

- **⚡ Tăng tốc Time-to-Market**: Sinh ra các PRD chuẩn kỹ thuật và pháp lý chỉ trong vài phút thay vì chờ đợi hàng tuần để bộ phận pháp chế rà soát.
- **🔄 Sẵn sàng cho Agile (v4.0)**: Lệnh `/safeai export jira` và `/safeai export confluence` tự động bóc tách PRD thành Epics, User Stories tiêu chuẩn, đi thẳng vào Backlog.
- **🛡️ Giảm Rủi ro Phát hành**: Tự động nhận diện và vạch định rủi ro pháp lý (GDPR, CCPA, SEC, DORA, Nghị định 13) trước khi kỹ sư bắt đầu viết code.
- **💯 Chấm điểm SafeAI-Global Score**: Đánh giá nhanh mức độ sẵn sàng tuân thủ của PRD với điểm số 0-100 dựa trên 3 trụ cột: Quyền riêng tư, Bảo mật và Minh bạch.
- **🏗️ Thu hẹp Khoảng cách**: Dịch các thuật ngữ pháp lý khô khan thành các Checklist kỹ thuật hành động được, biểu đồ luồng dữ liệu Mermaid, và các tiêu chuẩn bảo mật ISO/SOC2.
- **📉 Tránh "Kỹ sư hoá quá mức"**: Đảm bảo sản phẩm của bạn chỉ áp dụng những luật thực sự cần thiết cho thị trường mục tiêu, không làm phần mềm trở nên cồng kềnh.

### 🚀 Tính năng nổi bật: Lệnh `/template`

Gõ `/template [ngành] [quốc gia]` để nhận ngay **khung PRD may đo sẵn** theo ngành và khu vực pháp lý:

| Lệnh | Ngành | Khu vực | Quy định áp dụng |
|---|---|---|---|
| `/template fintech eu` | Tài chính | 🇪🇺 EU | PSD2, GDPR, DORA |
| `/template fintech vn` | Tài chính | 🇻🇳 Việt Nam | NĐ 13/2023, Luật ANMVN, TT SBV 09 |
| `/template healthcare us` | Y tế | 🇺🇸 Mỹ | HIPAA, FDA SaMD |
| `/template social vn` | Mạng xã hội | 🇻🇳 Việt Nam | NĐ 13, NĐ 53, Luật ANMVN 2018 |
| `/template ai eu` | AI/ML | 🇪🇺 EU | EU AI Act, GDPR Art. 22, ISO 42001 |

> *Xem đầy đủ danh sách templates trong [SKILL.md](SKILL.md).*

### 🎛️ Bước 0: Chọn Mức Độ Kiểm Tra

| Mức | Chế độ | Phù hợp với | Kết quả |
|:---:|---|---|---|
| 🟢 | 📝 **PRD Tiêu chuẩn** | MVP, công cụ nội bộ | PRD sạch — **không quét tuân thủ**. |
| 🟡 | 🛡️ **Tuân thủ Thông minh** *(Mặc định)* | Sản phẩm production | Tự nhận diện khu vực và áp dụng **đúng** luật tương ứng. |
| 🔴 | 🔒 **Kiểm Toán Đầy Đủ** | Doanh nghiệp, ngành quản lý gắt | Kiểm toán toàn diện: **Tất cả khu vực + ISO + SOC 2 + WCAG**. |

---

## 📦 Các Kỹ năng Có Sẵn

| # | Kỹ năng | Chuyên về | Dành cho |
|---|---|---|---|
| 🌐 | **[SafeAI-Global PRD Agent](SKILL.md)** | 35+ quốc gia, luồng dữ liệu xuyên biên giới | Tất cả PM |
| 🇪🇺 | **[SafeAI GDPR Expert](skills/safeai-gdpr-expert/SKILL.md)** | GDPR từng Điều, EU AI Act | PM thị trường EU |
| 🏥 | **[SafeAI HIPAA Expert](skills/safeai-hipaa-expert/SKILL.md)** | HIPAA, FDA SaMD, PHI | PM HealthTech |
| 💳 | **[SafeAI FinTech Compliance](skills/safeai-fintech-compliance/SKILL.md)** | PCI-DSS v4.0, PSD2/SCA, AML/KYC | PM FinTech |
| 🌏 | **[SafeAI ASEAN Data Protection](skills/safeai-asean-data-protection/SKILL.md)** | VN, SG, TH, MY, ID, PH | Startup ASEAN |
| 🇺🇸 | **[SafeAI US State Privacy Expert](skills/safeai-us-privacy-expert/SKILL.md)** | CCPA, CPA, VCDPA, GPC | PM thị trường Mỹ |
| 👶 | **[SafeAI EdTech & Child Privacy Expert](skills/safeai-edtech-compliance/SKILL.md)** | COPPA, FERPA, AADC | PM EdTech |
| 🤖 | **[SafeAI Ethics & Risk Expert](skills/safeai-ai-ethics-expert/SKILL.md)** | NIST AI RMF, Bias Testing, HITL | PM AI/ML |
| 🛡️ | **[SafeAI Code Scanner](skills/safeai-code-scanner/SKILL.md)** | Quét lỗi Code — Vibe Coding, bảo vệ API Key | DevSecOps / Kỹ sư |

---

## 🚀 Cách Sử Dụng

### Cách 1: Cài qua CLI (Khuyến nghị)

```bash
npx skills add datht-work/safeai-global-agent
```

Hiển thị tất cả 9 kỹ năng — chọn những cái bạn cần.

### Cách 2: Sử dụng trực tiếp trong AI Chat (Không cần cài)

Dự án này sử dụng kiến trúc **Modular Knowledge Engine**. Để sử dụng trong giao diện web, bạn cần cung cấp cả File Chỉ thị (`SKILL.md`) và Tập Dữ Liệu (`knowledge/`).

| Công cụ AI | Cách thiết lập |
|---|---|
| **Google Gemini** | 1. Tạo *Gem* mới<br>2. Dán `SKILL.md` vào phần Instructions<br>3. Tải toàn bộ file trong thư mục `knowledge/` lên |
| **Claude** (Anthropic) | 1. Tạo *Project* mới<br>2. Dán `SKILL.md` vào *Project Instructions*<br>3. Tải thư mục `knowledge/` lên phần *Project Knowledge* |
| **ChatGPT** (OpenAI) | 1. Vào *Explore GPTs* → Create<br>2. Dán `SKILL.md` vào *Instructions*<br>3. Tải thư mục `knowledge/` vào phần *Knowledge* |
| **GitHub Copilot** | Lưu `SKILL.md` thành `.github/copilot-instructions.md` trong repo |
| **Cursor** | Đặt `SKILL.md` vào thư mục `.cursor/rules/` và đảm bảo có folder `knowledge/` trong Workspace |
| **Windsurf** | Đặt `SKILL.md` vào `.windsurfrules` và đảm bảo có folder `knowledge/` trong Workspace |

### Cách 3: Dùng lệnh `/template`

Dán prompt này vào bất kỳ công cụ AI chat nào:

```text
/template fintech vn
```

AI sẽ tự động tạo ra khung PRD tuân thủ pháp lý Việt Nam cho ngành FinTech.

---

## 🔧 SafeAI-Lint (Công cụ Kiểm tra PRD)

Chạy linter để kiểm tra PRD đã đạt chuẩn chưa:

```bash
node cli/safeai-lint.js docs/my-prd.md
```

Công cụ sẽ kiểm tra các mục: Security section, Encryption, Consent/DSAR, Data Flow, Audit logging, và Compliance checklist.

---

## 🌍 Khu Vực Pháp Lý Được Hỗ Trợ (35+)

### 🌏 Châu Á - Thái Bình Dương

🇻🇳 Việt Nam · 🇨🇳 Trung Quốc · 🇯🇵 Nhật Bản · 🇰🇷 Hàn Quốc · 🇮🇳 Ấn Độ · 🇸🇬 Singapore · 🇦🇺 Úc · 🇹🇭 Thái Lan · 🇲🇾 Malaysia · 🇮🇩 Indonesia · 🇵🇭 Philippines

### 🌍 Châu Âu, Trung Đông & Châu Phi

🇪🇺 EU · 🇬🇧 Anh · 🇨🇭 Thụy Sĩ · 🇹🇷 Thổ Nhĩ Kỳ · 🇦🇪 UAE · 🇸🇦 Ả Rập Saudi · 🇮🇱 Israel · 🇳🇬 Nigeria · 🇿🇦 Nam Phi · 🇰🇪 Kenya · 🇪🇬 Ai Cập

### 🌎 Châu Mỹ

🇺🇸 Mỹ (Liên bang + CA, CO, TX, VA, NY) · 🇨🇦 Canada · 🇧🇷 Brazil (LGPD, Digital ECA) · 🇲🇽 Mexico · 🇦🇷 Argentina · 🇨🇴 Colombia · 🇵🇪 Peru

---

## 🔒 Bảo Mật

- ✅ **Không có mã thực thi** — Chỉ là file Markdown
- ✅ **Không có phụ thuộc runtime** — Không rủi ro chuỗi cung ứng
- ✅ **Không gọi mạng** — Không kết nối bên ngoài
- ✅ **Không thu thập dữ liệu** — Hoạt động không trạng thái
- ✅ **CI/CD kiểm tra** — Pipeline bảo mật GitHub Actions

Xem [SECURITY.md](SECURITY.md) để biết chi tiết chính sách bảo mật.

---

## 📋 Lịch Sử Phiên Bản

Xem [CHANGELOG.md](CHANGELOG.md) để biết chi tiết đầy đủ.

| Phiên bản | Ngày | Nổi bật |
|---|---|---|
| **v4.2.0** | 2026-03-18 | **Kỹ năng mới**: SafeAI Code Scanner hỗ trợ rà soát rủi ro bảo mật cho Vibe Coding. |
| **v4.1.0** | 2026-03-14 | Tòa nhà hạ tầng DevSecOps: Thêm lệnh `/safeai export opa` và `/safeai export terraform`. Đặc tả An toàn bảo mật. |
| **v4.0.0** | 2026-03-14 | Agile Engine & Multilingual: Thêm lệnh xuất form `/safeai export jira` và `/safeai export confluence`. Tự động nhận diện chủ đích Đa ngôn ngữ và lệnh `/safeai lang`. |
| **v3.2.0** | 2026-03-13 | Custom Policy Injection — Giới thiệu lệnh `/safeai inject` và chế độ Hybrid Compliance |
| **v3.1.0** | 2026-03-12 | Scoring Ecosystem — Ra mắt tính năng tự động chấm điểm SafeAI-Global Score (0-100) cho PRD |
| **v3.0.0** | 2026-03-11 | Kiến trúc Modular Knowledge Engine: Tách toàn bộ luật cứng tĩnh thành kho dữ liệu có thể tìm kiếm trong thư mục `knowledge/` |
| **v2.5.0** | 2026-03-10 | Thêm luật Digital ECA của Brazil (Age Signals API, cấm Loot Box) |
| **v2.4.0** | 2026-03-09 | Lệnh `/template`, Compliance Visualizer (sơ đồ Mermaid chú thích), CLI Linter, README Tiếng Việt |
| **v2.3.0** | 2026-03-08 | 3 kỹ năng Spoke mới: US Privacy, EdTech/Child Privacy, AI Ethics |
| **v2.2.0** | 2026-03-06 | Bộ chọn mức độ tuân thủ, ISO 27001/27701/42001, SOC 2, Accessibility, Disclaimer |
| **v2.1.0** | 2026-03-06 | Kiến trúc đa kỹ năng, liên kết chéo, hướng dẫn sử dụng AI |
| **v2.0.0** | 2026-03-05 | 35+ khu vực pháp lý, Kiểm toán bảo mật |
| **v1.0.0** | 2026-03-05 | Phiên bản đầu tiên (VN, EU, US, CN) |

---

## 🤝 Đóng Góp

Chúng tôi hoan nghênh đóng góp! Đặc biệt:

- 🌍 Quy định quốc gia mới
- 🔄 Cập nhật quy định
- 🐛 Sửa lỗi trích dẫn
- 📝 Cải thiện mẫu PRD
- 📄 Đóng góp `/template` mới vào thư mục `templates/`

Xem [SECURITY.md](SECURITY.md) để biết hướng dẫn đóng góp liên quan đến bảo mật.

---

## 📄 Giấy Phép

Giấy phép MIT — xem [LICENSE](LICENSE) để biết chi tiết.

---

> ⚠️ **Tuyên bố từ chối:** Bộ công cụ này cung cấp hướng dẫn tuân thủ, không phải tư vấn pháp lý. Luôn tham khảo luật sư có chuyên môn cho các quyết định tuân thủ cuối cùng.

*Được xây dựng với ❤️ bởi [SafeAI-Global Team](https://www.linkedin.com/in/dat-huynh-vn/) · v4.2.0 · Tháng 3/2026*

---
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/datht)
