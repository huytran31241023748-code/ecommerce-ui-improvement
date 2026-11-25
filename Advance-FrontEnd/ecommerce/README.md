# E-commerce Góc sách – Bootstrap và Front-end nâng cao

## Căn cứ thực hiện

- Hướng dẫn gốc: [HuongDanLamWebsiteBangBootstrap.pdf](https://drive.google.com/file/d/1PO0UX2Wnx7u4Q1acoCDxlQumsNo0hO8s/view).
- Yêu cầu bổ sung: [BaiThucHanh_Responsive_JQuery.pdf](https://drive.google.com/file/d/1PRxaYmj2HKGV0JK9pFLqhHTWJs_ohsBp/view).
- Kế thừa thương hiệu Góc sách, bốn sách mẫu và ảnh bìa của bài trước.
- Bootstrap 3.4.1, cùng dòng Bootstrap 3 với tài liệu gốc; bổ sung Bootstrap JS để navbar, dropdown, modal, carousel và tooltip hoạt động.

## Bảng 1. Đối chiếu hướng dẫn gốc

| Mục tài liệu | Nội dung đã thực hiện | Vị trí |
| --- | --- | --- |
| 1.1 | UTF-8, viewport, Bootstrap CSS/JS và jQuery | Cả ba trang |
| 2.1.1 | Navbar, dropdown và ô tìm kiếm | Đầu trang |
| 2.1.2 | Logo cá nhân hóa, biểu tượng giỏ và badge số lượng, cửa sổ tài khoản trải nghiệm | Navbar |
| 2.1.2 | Tìm kiếm riêng cho mobile; menu collapse | Navbar, visible-xs-inline-block và hidden-xs |
| 2.1.3 | Carousel ba banner, nút trước/sau và indicators | ecommerce.html |
| 2.1.4 | Sidebar col-sm-4/col-md-3, danh sách col-sm-8/col-md-9 | Cả ba trang |
| 2.1.4 | List group danh mục có badge; thumbnail sản phẩm, tên, giá, mô tả, nhận xét, tooltip và thêm giỏ | ecommerce.html |
| 2.2.1–2.2.3 | Trang chi tiết riêng; ảnh và mô tả chia cột; ảnh lớn và ảnh nhỏ | ecommerce-detail.html |
| 2.2.4 | Số lượng, phiên bản, loại bìa, liên hệ và thêm giỏ | purchase-form |
| 2.2.5–2.2.6 | Điểm trung bình, số nhận xét, viết nhận xét và danh sách nhận xét có tên/ngày | comments |
| 2.2.7 | Ba sản phẩm khác, liên kết đúng trang chi tiết | Cuối trang chi tiết |
| 2.3 | Ảnh/tên sản phẩm, số lượng, thành tiền, trạng thái và thông báo | ecommerce-status.html |

Với loại hình bán sách, các lựa chọn Color/Size của ví dụ được cá nhân hóa thành Phiên bản/Loại bìa. Tài khoản dùng tên hiển thị trong cửa sổ modal thay cho liên kết account.html mẫu; không giả lập xác thực bằng mật khẩu.

## Bảng 2. Đối chiếu yêu cầu bổ sung

| Yêu cầu | Thành phần |
| --- | --- |
| Chọn loại hình kinh doanh | Cửa hàng sách Góc sách |
| Hiển thị, chọn, zoom ảnh bằng xZoom | Gallery ba ảnh cho từng sách |
| Tồn kho bằng Bootstrap progress | Thẻ sản phẩm và trang chi tiết |
| Giảm giá ở góc trái, New/Best seller góc phải | product-badges |
| Thay toàn bộ glyphicon-star bằng bootstrap-star-rating | Điểm ở danh sách, chi tiết, nhận xét và form viết nhận xét |

## Các trang và cách chạy

- `ecommerce.html`: danh sách, tìm kiếm và lọc thể loại.
- `ecommerce-detail.html?id=mien-yen`: chi tiết sách; tham số id hỗ trợ cả bốn sách.
- `ecommerce-status.html`: trạng thái đơn.
- `index.html`: cùng giao diện trang danh sách để giữ đường dẫn thư mục đã dùng.
- Mở bằng máy chủ tĩnh hoặc GitHub Pages. Tài nguyên thư viện được lưu trong `../vendor/`.

## Dữ liệu và phạm vi thực hành

Giá, tồn kho và nhận xét ban đầu là dữ liệu mẫu. Giỏ hàng, đơn minh họa, tên bạn đọc và nhận xét mới lưu bằng localStorage, không gửi đến máy chủ. Tạo đơn không có thanh toán, giao hàng hoặc thông tin cá nhân thực. Tồn kho là số lượng mẫu cố định; khi thêm giỏ, tổng số sách cùng sản phẩm không được vượt số này. Hai loại bìa/phiên bản dùng cùng giá minh họa. Nếu trình duyệt chặn lưu trữ, trang thông báo và không xóa giỏ khi chưa lưu được đơn.

## Bảng 3. Kiểm tra bản sửa

| Tình huống | Kết quả kiểm tra |
| --- | --- |
| Tìm Miền yên | 1 sản phẩm |
| Tìm từ khóa không tồn tại | 0 sản phẩm và hướng dẫn quay lại |
| Lọc Tản văn | 1 sản phẩm |
| Dropdown và Carousel | Menu mở được; ba banner và nút chuyển hoạt động |
| Chọn ảnh thông tin | Gallery đổi đúng ảnh SVG tương ứng |
| Thêm 2 Miền yên, bìa cứng, quà tặng | Badge 2; giỏ đúng tùy chọn, tổng 160.000đ |
| Tạo đơn minh họa | Trang trạng thái có đơn Đang xử lý, đúng sản phẩm/giá; giỏ về 0 |
| Thông báo đơn | Mở được modal nội dung đúng đơn |
| Viết nhận xét có sao và tải lại | Nhận xét vẫn còn, tổng số nhận xét cập nhật |
| Khung iframe 390px, thanh cuộn làm vùng nội dung còn 375px | Cả ba trang không tràn ngang; menu mở và tìm kiếm cho 1 kết quả |
| HTML và JavaScript | Không thiếu đường dẫn tĩnh, không trùng ID tĩnh; node --check qua |

Ảnh e-commerce của phiên bản một trang trước đây không được dùng để khẳng định hoàn thành tài liệu gốc. Bộ ảnh mới được chụp sau khi sửa và kiểm tra ba trang.
