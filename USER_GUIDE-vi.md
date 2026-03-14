# Hướng dẫn Sử dụng Cốt lõi: SafeAI-Global PRD Agent

Tài liệu này cung cấp các hướng dẫn trực tiếp, dễ tra cứu về các tính năng cốt lõi của SafeAI-Global Agent. Dù bạn đang xây dựng một MVP nhanh chóng hay phần mềm doanh nghiệp phức tạp, cấu trúc lệnh dưới đây sẽ giúp bạn thao tác chính xác.

---

## ⚡ Bảng Tra Cứu Lệnh Nhanh (Cheat Sheet)

| Lệnh | Hành động / Phản hồi của hệ thống |
|---|---|
| *(Gõ tự nhiên)* | **Tự động Tuân thủ Quốc gia**: Nhắc đến tên quốc gia (VD: "Việt Nam"), Agent tự động áp dụng bộ luật tương ứng. |
| **"Standard PRD"** | **MVP Nhanh**: Bỏ qua quá trình quét kiểm duyệt pháp lý để tập trung viết tính năng thần tốc. |
| **"Full Audit"** | **Kiểm toán Doanh nghiệp**: Bật chế độ quét pháp lý khắc nghiệt nhất, rà soát dữ liệu nhạy cảm (ISO 27001/SOC 2). |
| `/template [ngành] [khu vực]`| **Khung Template Ngành**: Nhả ngay bộ khung PRD chuẩn chỉ cho ngành (VD: `/template fintech eu`). |
| `/safeai lang [Ngôn ngữ]` | **Đa Ngôn Ngữ**: Dịch PRD sang ngôn ngữ khác nhưng giữ nguyên thuật ngữ pháp lý gốc (VD: `/safeai lang japanese`). |
| `/safeai export jira` | **Trích xuất Agile (Jira)**: Xé nhỏ PRD thành các Epics/User Stories + Acceptance Criteria chuẩn Gherkin BDD. |
| `/safeai export confluence`| **Trích xuất Wiki**: Bố cục lại PRD thành các bảng biểu, macro thân thiện với Wiki/Confluence. |
| `/safeai export opa` | **Code OPA (Rego)**: Dịch các ràng buộc trong PRD thành code kiểm tra đường ống CI/CD. |
| `/safeai export terraform`| **Code HCL (Terraform)**: Tạo snippet cấu hình máy chủ Cloud đúng luật bảo vệ dữ liệu. |
| `/safeai inject [Luật]: [Nội dung]`| **Nạp Luật Nội Bộ**: Ép Agent phải tuân thủ nghiêm ngặt các tiêu chuẩn riêng rẽ của công ty bạn lên trên cả luật quốc tế. |

---

## 🟢 1. Tính Năng Cơ Bản (Prompt Tự Nhiên)

Các tính năng này hoạt động tự động dựa trên từ khóa ngữ cảnh.

### Tự động Nhận diện Pháp lý Mạng lưới (Smart Mode)

**Khi nào dùng:** Bạn ra mắt sản phẩm cho một quốc gia cụ thể (ví dụ: Việt Nam, Mỹ, EU).
**Cách kích hoạt:** Chỉ cần nhắc đến tên quốc gia một cách tự nhiên.
> *"Viết PRD cho một ứng dụng gọi xe trên di động. Thị trường mục tiêu là **Việt Nam**."*

**Điều gì xảy ra:** Agent tự động nhúng các ràng buộc bảo mật cụ thể theo đúng luật sở tại vào PRD (ví dụ: Nghị định 13 🇻🇳).

### Tạo Nhanh một PRD MVP (Bỏ qua Pháp lý)

**Khi nào dùng:** Dự án hackathon, xây dựng tool nội bộ cần tốc độ — bạn chưa cần audit pháp lý nặng.
**Cách kích hoạt:** Thêm từ khóa **"Standard PRD"** hoặc **"bỏ qua pháp lý"** vào lệnh.
**Điều gì xảy ra:** Bỏ qua hệ thống bảo mật để tập trung toàn lực viết User Stories và Kiến trúc Kỹ thuật.

### Kiểm Toán Doanh Nghiệp Chuyên Sâu (Full Audit)

**Khi nào dùng:** Chuẩn bị khởi chạy phần mềm doanh nghiệp, rà soát dữ liệu Y tế/Tài chính nhạy cảm.
**Cách kích hoạt:** Đưa từ khóa **"Full Audit"** vào câu lệnh.
> *"Hãy chạy Full Audit cho PRD này nhắm tới thị trường Bắc Mỹ."*

**Điều gì xảy ra:** Kích hoạt chế độ phòng ngừa rủi ro đỉnh cao toàn khu vực (GDPR + HIPAA + ISO 42001).

---

## 🟡 2. Lệnh Nâng Cao (Slash Commands - `/safeai`)

Dùng các lệnh chủ động này để can thiệp và ép Agent xuất file theo đúng ý định thiết kế.

### Dùng Bộ Khung Template Ngành Có Sẵn

**Khi nào dùng:** Bạn thiết kế module trong một ngành quản trị rủi ro cao.
**Cách kích hoạt:** `/template [ngành] [khu vực]`
> `/template fintech eu` hoặc `/template healthcare us`

**Điều gì xảy ra:** Đưa ra một khung PRD chuyên dụng cho ngành với các điều khoản bảo mật ngầm định.

### Trích xuất Mẫu Tickets Agile

**Khi nào dùng:** Bàn giao liền PRD cho Dev, loại bỏ các bước Copy/Paste sang thẻ thao tác.
**Cách kích hoạt:** `/safeai export jira` hoặc `/safeai export confluence`
**Điều gì xảy ra:** Agent khóa chặt các yêu cầu tuân thủ rủi ro và cấy thẳng chúng vào phần `Acceptance Criteria` của từng ticket kỹ thuật. Trả về cấu trúc bảng phân tách.

### Viết PRD Đa Ngôn Ngữ

**Khi nào dùng:** Làm việc với ban lãnh đạo quốc tế nhưng không muốn lỗi trôi luật chuẩn.
**Cách kích hoạt:** `/safeai lang [Ngôn ngữ]`
> `/safeai lang japanese Hãy viết PRD phân tích rủi ro hệ thống.`

**Điều gì xảy ra:** Dịch toàn bộ nhưng luôn đi kèm `(Thuật ngữ gốc Tiếng Anh)` để pháp chế dễ dàng đối chiếu.

### Trích xuất Hạ tầng DevSecOps (Policy-as-Code)

**Khi nào dùng:** Bạn là Tech Lead muốn tự động hóa các ràng buộc bảo mật mà PRD sinh ra, ngăn không cho Server vi phạm luật ngay từ lúc Config bằng DevOps CI/CD.
**Cách kích hoạt:** `/safeai export opa` hoặc `/safeai export terraform`
**Điều gì xảy ra:** Agent trả về khối mã thô Open Policy Agent (`.rego`) hoặc Terraform HCL (`main.tf`) chứa quy định chặn port, mã hoá Storage, và giới hạn Data Localization thay vì chữ nghĩa đơn thuần.

### Nạp Luật Nội Bộ Doanh Nghiệp (Inject Policy)

**Khi nào dùng:** Doanh nghiệp có khung tiêu chuẩn vận hành riêng ngoài luật định.
**Cách kích hoạt:** `/safeai inject [Tên luật]: [Nội dung]`
> `/safeai inject AuthStandard: Mọi API phía người dùng phải dùng OAuth 2.0 kèm PKCE.`

**Điều gì xảy ra:** Quy chuẩn bảo mật này trở thành kim chỉ nam cho các PRD kế tiếp và được đóng dấu quyền cao nhất (`⚠️ CUSTOM OVERRIDE`).

---

## 🔴 3. Dành Cho Kỹ Sư & Tích Hợp (CI/CD)

### Chạy CLI Linter Local

**Khi nào dùng:** Bạn là Software Engineer muốn cài cắm bộ rà soát SafeAI-Global trực tiếp vào Workflow CI/CD (GitHub Actions / GitLab CI).
**Cách kích hoạt:** Mở Terminal và gõ:

```bash
npx safeai-lint .
```

**Điều gì xảy ra:** Linter quét xem tài liệu PRD hoặc Codebase của bạn có thiếu phần Bảo mật hay Sơ đồ dữ liệu không. Giúp ngăn chặn các phần mềm sai quy định trước lúc Product Manager duyệt Deploy.

> 🤖 **Tích hợp Agent IDE (Cursor, Antigravity):**
> Bạn có thể yêu cầu IDE Agent hỗ trợ bạn: *"Hãy chạy script `cli/safeai-lint.js` trên toàn bộ dự án này, sau đó đọc log và tự động sửa các lỗi linter báo về."*

---
<small>Chịu trách nhiệm phát triển bởi nhóm SafeAI-Global Team · Cập nhật Version 4.1.0 · Tháng 03/2026</small>
