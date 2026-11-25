# Chương 6 – Advanced FrontEnd, Nhóm 2

Tiếp tục sử dụng repository và giao diện bán sách Góc sách của học phần.

## Các chặng thực hiện

1. **E-commerce**: bổ sung xZoom (chọn/zoom ảnh), Bootstrap progress (tồn kho), nhãn giảm giá ở góc trái, New/Best seller ở góc phải, bootstrap-star-rating.
2. **jQuery trên LMS UEH**: in bài tập thứ 5; liệt kê chủ đề, bài tập và hạn nộp từ trang môn học thực tế. Chưa thực hiện; cần truy cập trang LMS.
3. **Flappy Bird**: thay hình chim và ống; level ở điểm 5, 20, 40; tốc độ interval 40, 30, 25, 20; thắng ở điểm 50; phím ArrowDown. Chưa thực hiện; chưa có mã mẫu theo hướng dẫn.
4. **Kiểm tra và minh chứng**: lưu ảnh thật từ trình duyệt, đánh số theo yêu cầu; soạn Word ở bước sau.

## Chặng 1: e-commerce

- Trang thực hành: `ecommerce/index.html`.
- Trang học phần cũ được giữ lại; chỉ thêm liên kết ở chân trang.
- Tái sử dụng ảnh bìa, nội dung và CSS có sẵn. Thêm stylesheet và JavaScript riêng.
- Mỗi sách có 3 ảnh: bìa gốc và hai trang thông tin minh họa do dự án tạo.
- Giá, đánh giá mẫu và tồn kho là dữ liệu thực hành.
- Đánh giá cá nhân được lưu trên trình duyệt; không gửi lên máy chủ.

## Thư viện

Các file được lưu tại `vendor/` để bài thực hành không phụ thuộc CDN khi chạy.

| Thư viện | Phiên bản | Nguồn |
| --- | --- | --- |
| jQuery | 3.7.1 | https://jquery.com/ |
| Bootstrap | 3.4.1 theo đề | https://getbootstrap.com/docs/3.4/components/#progress |
| xZoom | 1.0.15 | https://payalord.github.io/xZoom/ |
| bootstrap-star-rating | 4.1.2 | https://github.com/kartik-v/bootstrap-star-rating |

Giữ giấy phép từng thư viện trong thư mục tương ứng.

## Minh chứng cần chụp

- Giao diện trước khi nâng cấp.
- Danh sách sản phẩm: nhãn giảm/New/Best seller, tồn kho, đánh giá sao.
- Gallery sau khi chọn ảnh khác.
- Ảnh đang được xZoom phóng to.
- Đánh giá sao sau thao tác chọn và sau tải lại trang.
- Mã HTML/CSS/JavaScript liên quan.
- Bản triển khai GitHub Pages sau khi cập nhật thành công.

Không tính ảnh bản xem thử là ảnh đã triển khai lên GitHub Pages.

## Kiểm tra bản xem thử ngày 25/11/2026

- Không thiếu ảnh hoặc tài nguyên HTML được tham chiếu.
- Không trùng ID; JavaScript qua kiểm tra cú pháp.
- Bốn thanh tồn kho có giá trị 72, 35, 12, 58.
- Đánh giá sao thao tác bằng bàn phím được và còn sau khi tải lại.
- Gallery chuyển sang ảnh thông tin đúng.
- xZoom tạo vùng phóng to khi rê chuột.
- Ảnh minh chứng chụp 1360 × 765 px (16:9).
- Chưa cập nhật GitHub do phiên làm việc chưa đăng nhập.
