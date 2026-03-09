# SafeAI-Global Compliance Suite 🛡️

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)

> **8 Kỹ năng AI Hỗ trợ Tuân thủ Pháp lý cho Product Manager — bao phủ 35+ quốc gia, tiêu chuẩn ISO, và tuỳ chọn mức độ kiểm tra linh hoạt**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg)](CHANGELOG.md)

---

## 🎯 Đây là gì?

Một bộ **8 kỹ năng tuân thủ chuyên biệt** biến bất kỳ trợ lý AI nào (Gemini, Claude, ChatGPT, Copilot, Cursor...) thành một **Product Manager có ý thức về pháp lý**. Nó tạo ra PRD với kiểm tra bảo mật tích hợp, ánh xạ quy định, và checklist hành động cụ thể cho đội kỹ thuật.

### 🚀 Tính năng mới: Lệnh `/template`

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
| 🇪🇺 | **[SafeAI GDPR Expert](safeai-gdpr-expert/SKILL.md)** | GDPR từng Điều, EU AI Act | PM thị trường EU |
| 🏥 | **[SafeAI HIPAA Expert](safeai-hipaa-expert/SKILL.md)** | HIPAA, FDA SaMD, PHI | PM HealthTech |
| 💳 | **[SafeAI FinTech Compliance](safeai-fintech-compliance/SKILL.md)** | PCI-DSS v4.0, PSD2/SCA, AML/KYC | PM FinTech |
| 🌏 | **[SafeAI ASEAN Data Protection](safeai-asean-data-protection/SKILL.md)** | VN, SG, TH, MY, ID, PH | Startup ASEAN |
| 🇺🇸 | **[SafeAI US State Privacy Expert](safeai-us-privacy-expert/SKILL.md)** | CCPA, CPA, VCDPA, GPC | PM thị trường Mỹ |
| 👶 | **[SafeAI EdTech & Child Privacy Expert](safeai-edtech-compliance/SKILL.md)** | COPPA, FERPA, AADC | PM EdTech |
| 🤖 | **[SafeAI Ethics & Risk Expert](safeai-ai-ethics-expert/SKILL.md)** | NIST AI RMF, Bias Testing, HITL | PM AI/ML |

---

## 🚀 Cách Sử Dụng

### Cách 1: Cài qua CLI (Khuyến nghị)

```bash
npx skills add datht-work/safeai-global-agent
```

Hiển thị tất cả 8 kỹ năng — chọn những cái bạn cần.

### Cách 2: Sử dụng trực tiếp trong AI Chat (Không cần cài)

Sao chép nội dung thô của SKILL.md và dán vào phần System Prompt của trợ lý AI:

| Công cụ AI | Cách thiết lập |
|---|---|
| **Google Gemini** | *Gems* → Tạo Gem → Dán SKILL.md vào Instructions |
| **Claude** (Anthropic) | *Projects* → Tạo Project → Dán vào *Project Instructions* |
| **ChatGPT** (OpenAI) | *Explore GPTs* → Tạo → Dán vào *Instructions* |
| **GitHub Copilot** | Lưu thành `.github/copilot-instructions.md` trong repo |
| **Cursor** | Đặt SKILL.md vào thư mục `.cursor/rules/` |

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

🇺🇸 Mỹ (Liên bang + CA, CO, TX, VA, NY) · 🇨🇦 Canada · 🇧🇷 Brazil · 🇲🇽 Mexico · 🇦🇷 Argentina · 🇨🇴 Colombia · 🇵🇪 Peru

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

*Được xây dựng với ❤️ bởi [SafeAI-Global Team](https://www.linkedin.com/in/dat-huynh-vn/) · v2.4.0 · Tháng 3/2026*
