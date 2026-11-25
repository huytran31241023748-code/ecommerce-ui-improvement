# jQuery trên LMS UEH

## Cách chạy

1. Đăng nhập LMS và mở trang môn học `course/view.php?id=43861`.
2. Mở Console của công cụ phát triển trình duyệt.
3. Chạy nội dung file `lms-assignments.js`.
4. Chụp dòng bài nộp thứ 5 và bảng chủ đề/bài tập/hạn nộp.

Moodle có thể không cung cấp biến `$` hoặc `jQuery` toàn cục. Mã hỗ trợ bộ nạp AMD `require(['jquery'], ...)` của Moodle.

## Đối chiếu dữ liệu trang môn học ngày 25/11/2026

- Bài thứ 5 theo `.modtype_assign`: **Bài tập nhóm chương 1 - Về nhà**.
- Hạn nộp hiển thị: **Wednesday, 21 October 2026, 11:00 PM**.
- Chủ đề **Tài liệu tham khảo** không chứa bài tập thuộc `.modtype_assign`.
- Đọc đủ các chủ đề hiển thị, kể cả chủ đề chưa mở.
- Chỉ đọc `Due`, không nhầm `Opened` hoặc `Opens` thành hạn nộp.
- Bài không có dòng Due được ghi là **Không hiển thị hạn nộp trên trang môn học**.
- Theo đúng đề, bộ chọn không tính hoạt động Turnitin là `.modtype_assign`.

Đã đối chiếu dữ liệu bằng cách đọc DOM trực tiếp trên LMS. Chưa xác nhận chạy file này trong Console của LMS; ảnh nguồn LMS không thay thế minh chứng Console.
