# Hướng dẫn Sử dụng Cốt lõi: SafeAI-Global PRD Agent

Tài liệu này cung cấp các hướng dẫn trực tiếp, dễ hiểu về các tác vụ (task) cốt lõi mà bạn có thể thực hiện với SafeAI-Global Agent. Dù bạn đang xây dựng một MVP nhanh chóng hay phần mềm doanh nghiệp phức tạp, tài liệu này sẽ giúp bạn kích hoạt trợ lý một cách chính xác.

---

## 🚀 Tác vụ 1: Tạo Nhanh một PRD MVP (Bỏ qua Pháp lý)

**Khi nào dùng:** Bạn đang xây dựng một công cụ nội bộ, dự án hackathon, hoặc MVP giai đoạn đầu cần tốc độ — bạn chưa cần một bản kiểm toán pháp lý nặng nề.

**Cách kích hoạt:**
Thêm từ khóa **"Standard PRD"** (PRD Tiêu chuẩn) hoặc **"bỏ qua pháp lý"** vào câu lệnh của bạn.

> **Ví dụ Prompt:**
> *"Hãy viết một Standard PRD cho ứng dụng web theo dõi thời gian nội bộ cho team Dev. Bỏ qua tất cả các phần kiểm tra tuân thủ pháp lý."*

**Điều gì xảy ra:**  
Agent sẽ bỏ qua bộ máy pháp lý/bảo mật và chỉ tập trung vào User Stories, Tính năng MVP, Yêu cầu UX/UI, và Kiến trúc Kỹ thuật.

---

## 🛡️ Tác vụ 2: Tự động Nhận diện Pháp lý Mạng lưới (Chế độ Smart)

**Khi nào dùng:** Bạn đang ra mắt sản phẩm cho một quốc gia cụ thể (ví dụ: Việt Nam, EU, Mỹ) và cần đảm bảo tuân thủ các luật cơ bản ở đó mà không làm phần mềm quá phức tạp.

**Cách kích hoạt:**
Chỉ cần nhắc đến **tên quốc gia/khu vực mục tiêu** một cách tự nhiên trong prompt của bạn. Đây là chế độ mặc định của Agent.

> **Ví dụ Prompt:**
> *"Viết PRD cho một ứng dụng gọi xe trên di động. Thị trường mục tiêu là **Việt Nam**."*

**Điều gì xảy ra:**  
Agent tự động nhận diện khu vực, truy xuất các luật địa phương phù hợp (ví dụ: Nghị định 13 về Dữ liệu cá nhân, Luật An ninh mạng), và nhúng các ràng buộc bảo mật cụ thể vào PRD của bạn.

---

## ⚡ Tác vụ 3: Dùng Bộ Khung (Template) Có Sẵn Theo Ngành

**Khi nào dùng:** Bạn bắt đầu từ con số không trong một ngành được quản lý nghiêm ngặt (Tài chính, Y tế, Giáo dục) và muốn có một bộ khung PRD chuẩn pháp lý ngay lập tức.

**Cách kích hoạt:**
Gõ lệnh `/template [ngành] [khu vực]`.

> **Ví dụ Prompt:**
>
> - `/template fintech eu` (Cho cổng thanh toán ở Châu Âu)
> - `/template healthcare us` (Cho ứng dụng y tế ở Mỹ)
> - `/template social vn` (Cho mạng xã hội ở Việt Nam)
> - `/template ai global` (Cho sản phẩm AI trên toàn cầu)

**Điều gì xảy ra:**  
Agent sẽ bỏ qua hội thoại thông thường và ngay lập tức nhả ra một bộ khung PRD đầy đủ, được thiết kế riêng cho ngành đó, điền sẵn các tiêu chuẩn ISO tương ứng và hàng rào rủi ro kỹ thuật.

---

## 🔒 Tác vụ 4: Kiểm Toán Doanh Nghiệp Chuyên Sâu (Full Audit)

**Khi nào dùng:** Bạn đang chuẩn bị khởi chạy phần mềm doanh nghiệp (Enterprise), xử lý dữ liệu nhạy cảm cực cao (Y tế/Tài chính), hoặc đang tích cực chuẩn bị thi lấy chứng chỉ ISO 27001 / SOC 2.

**Cách kích hoạt:**
Yêu cầu rõ ràng từ khóa **"Full Compliance Audit"** (Kiểm toán Pháp lý Toàn diện) hoặc nhắc đến **"ISO/SOC2"**.

> **Ví dụ Prompt:**
> *"Tôi cần một PRD **Full Compliance Audit** cho nền tảng trả lương SaaS B2B tại Singapore. Hãy bao gồm ánh xạ ISO 27001 và các tiêu chuẩn tiếp cận (accessibility)."*

**Điều gì xảy ra:**  
Agent sẽ kích hoạt *tất cả* các module tuân thủ có sẵn. Nó đối chiếu các luật địa phương (SG PDPA) với các tiêu chuẩn toàn cầu (ISO/IEC 27001, SOC 2, WCAG 2.2) và tạo ra một Checklist Kỹ thuật cực kỳ chi tiết, khắt khe.

---

## 💯 Tác vụ 5: Đọc Hiểu Điểm Số "SafeAI-Global Score"

**Khi nào dùng:** Bạn đã tạo xong một PRD và cần báo cáo mức độ rủi ro với team Dev hoặc bộ phận Pháp chế của công ty.

**Cách kích hoạt:**
Việc này diễn ra tự động trong mọi PRD hợp lệ, nằm ở **Mục 4.2**.

**Cách đọc hiểu:**

- Nhìn vào Điểm số (0–100) trong tài liệu được tạo.
- **Nếu Điểm < 80:** Agent sẽ liệt kê top 2 lý do bạn bị trừ điểm (ví dụ: *"Chưa định nghĩa rõ chuẩn mã hoá đầu cuối (E2EE)"* hoặc *"Thiếu cổng lọc độ tuổi cho người dùng dưới 16"*).
- **Hành động của bạn:** Bổ sung các tính năng kỹ thuật còn thiếu vào tài liệu cho đến khi Agent nâng điểm của bạn lên mức 🟢 (Sẵn sàng Dev).

---

## 🔍 Tác vụ 6: Hỏi Đáp Pháp Lý / Bảo Mật Trực Tiếp

**Khi nào dùng:** Bạn đã có sẵn PRD và chỉ muốn hỏi Agent một câu cụ thể về lưu trữ dữ liệu (data residency) hoặc một luật mới ra mắt.

**Cách kích hoạt:**
Chỉ cần hỏi trực tiếp như thể bạn đang trò chuyện với một kỹ sư Pháp chế / Security.

> **Ví dụ Prompt:**
>
> - *"Đạo luật AI của EU (EU AI Act) có áp dụng cho một chatbot chỉ đơn thuần tóm tắt tài liệu của người dùng không?"*
> - *"Theo Nghị định 53, nếu tôi dùng AWS khu vực ap-southeast-1 (Singapore) để lưu trữ dữ liệu người dùng Việt Nam thì bộ công an có phạt không?"*

**Điều gì xảy ra:**  
Agent đóng vai trò như một bộ máy Q&A, trực tiếp trả lời câu hỏi của bạn dựa trên kho kiến thức (Knowledge Engine) của nó kèm theo trích dẫn nguồn luật cụ thể, thay vì sinh ra một PRD dài dòng.

---

## 📄 Tác vụ 7: Đánh Giá Tuân Thủ Một PRD hoặc Tài Liệu Có Sẵn

**Khi nào dùng:** Bạn đã tự viết xong bản nháp PRD, tài liệu thiết kế kiến trúc, hoặc trang Confluence và cần một chuyên gia rà soát trước khi gửi cho sếp hoặc bộ phận pháp chế.

**Cách kích hoạt:**
Dán nội dung tài liệu của bạn vào prompt hoặc tải file lên, và yêu cầu rà soát tuân thủ.

> **Ví dụ Prompt:**
>
> *"Dưới đây là bản nháp PRD cho tính năng nhắn tin mới của chúng tôi: [dán mã/nội dung]. Hãy chạy rà soát Smart Compliance cho thị trường EU, chỉ ra những điểm còn thiếu hụt và chấm điểm SafeAI-Global Score giúp tôi."*

**Điều gì xảy ra:**  
Agent sẽ KHÔNG tự viết lại một PRD mới từ đầu. Thay vào đó, nó sẽ đọc hiểu tài liệu sẵn có của bạn, chấm điểm dựa trên Quyền riêng tư, Bảo mật và Tính minh bạch, đồng thời liệt kê chính xác những lỗ hổng bạn cần khắc phục để đạt chuẩn.

---

## 📁 Tác vụ 8: Kiểm Tra Tuân Thủ Toàn Bộ Dự Án (CI/CD)

**Khi nào dùng:** Đội ngũ kỹ thuật muốn tự động kiểm tra xem tài liệu hệ thống hoặc dự án có đạt chuẩn tuân thủ hay không ngay trong quy trình CI/CD.

**Cách kích hoạt:**
Sử dụng công cụ CLI linter `safeai-lint` đi kèm trong kho dự án (repo) của bạn.

> **Lệnh thao tác:**
>
> ```bash
> node cli/safeai-lint.js docs/**/*.md
> ```

**Điều gì xảy ra:**  
Công cụ CLI sẽ quét toàn bộ tài liệu trong dự án của bạn ở môi trường local. Nó kiểm tra xem các phần bắt buộc (Bảo mật, Mã hoá, Biểu đồ luồng dữ liệu, và Log hệ thống) đã có hay chưa. Nếu thiếu các rào chắn an toàn trọng yếu, nó sẽ báo lỗi và ngăn chặn quá trình tự động triển khai (CI/CD build) để tránh rủi ro.

> 🤖 **Tích hợp Agent Nội bộ (Cursor, Claude, Antigravity):**
> Nếu bạn đang dùng một Agentic IDE có cấp quyền gõ lệnh Terminal (như Antigravity hoặc Cursor), bạn có thể nhờ Agent tự động quét luôn toàn bộ dự án đang mở bằng prompt:
> *"Hãy chạy script `cli/safeai-lint.js` trên toàn bộ dự án này, sau đó đọc log và tự động sửa các lỗi tuân thủ (ví dụ: thiếu mục bảo mật, thiếu chuẩn mã hoá) mà linter báo về."*

---

## 👤 Tác vụ 9: Nạp Quy định Cá nhân / Tùy chỉnh (v3.2.0)

**Khi nào dùng:** Team bạn có những tiêu chuẩn nội bộ riêng (ví dụ: *"Mọi API phải dùng OAuth2"*) hoặc bạn có những ràng buộc dự án đặc thù không nằm trong luật quốc tế.

**Cách kích hoạt:**
Sử dụng lệnh `/inject-policy [Tên luật]: [Nội dung]`.

> **Ví dụ Prompt:**
> *"/inject-policy AuthStandard: Mọi API phía người dùng phải triển khai OAuth 2.0 kèm theo PKCE."*

**Điều gì xảy ra:**  
Agent lưu quy tắc này vào thư mục `knowledge/custom/`. Từ thời điểm này, mọi PRD được tạo ra sẽ coi quy tắc này là **ưu tiên cao nhất**. Nếu luật quốc tế (như GDPR) và Quy tắc riêng của bạn cùng áp dụng, Agent sẽ kết hợp cả hai. Nếu có xung đột, quy tắc của bạn sẽ thắng (được đánh dấu là `⚠️ CUSTOM OVERRIDE`).
