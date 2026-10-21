# E-commerce UI Improvement

**Dự án:** Góc sách – Cải tiến giao diện thẻ sản phẩm sách  
**Môn học:** Phát triển ứng dụng WEB/TMĐT  
**Giảng viên:** TS Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn

## 1. Giới thiệu

Dự án thực hành cải tiến giao diện dựa trên khảo sát website thương mại điện tử **Fahasa**. Khu vực được lựa chọn là **thẻ sản phẩm trong danh sách sách**, với ba mục tiêu:

- Hiển thị đầy đủ tên sách để người dùng nhận diện sản phẩm.
- Phân biệt rõ giá bán, giá gốc và mức giảm để dễ so sánh.
- Bố trí liên kết thao tác rõ ràng, nhất quán giữa các thẻ.

Sản phẩm là một trang **HTML5/CSS3** mang tên **Góc sách**, có bốn sách mẫu và bố cục thích ứng với máy tính, máy tính bảng, điện thoại. Phương án được chọn là **thẻ dọc dạng lưới**.

> Tên sách, tác giả, giá, mô tả và bìa trong bản thực hành là dữ liệu minh họa được tạo riêng cho bài tập. Đây không phải thông tin sản phẩm hoặc khuyến mãi đã xác minh của Fahasa. Trang là thiết kế minh họa độc lập, không phải website chính thức của Fahasa.

## 2. Website tham khảo

- **Tên website:** FAHASA – Nhà Sách Trực Tuyến Việt Nam.
- **URL:** https://www.fahasa.com/
- **Trang danh mục tham khảo:** https://www.fahasa.com/sach-trong-nuoc.html
- **Nhóm sản phẩm:** Sách trong nước, sách ngoại văn, văn phòng phẩm, dụng cụ học tập, đồ chơi và sản phẩm giáo dục.
- **Khách hàng mục tiêu dự kiến:** Học sinh, sinh viên, phụ huynh, giáo viên, người yêu sách và người mua dụng cụ học tập; được nhận định từ các nhóm hàng quan sát được.
- **Khu vực đã khảo sát:** Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.

### Tóm tắt kết quả khảo sát

| Khu vực | Nội dung ghi nhận | Cơ hội cải tiến |
| --- | --- | --- |
| Trang chủ | Có banner, Flash Sale, danh mục và các khối giới thiệu sản phẩm; nhiều nội dung quảng bá nổi bật. | Điều chỉnh mức độ nổi bật của banner phụ để giảm cạnh tranh sự chú ý. |
| Danh mục sản phẩm | Có menu phân cấp và các nhóm lọc; một số nhãn dài bị rút gọn. | Hiển thị nhãn rõ hơn và ưu tiên tiêu chí theo nhóm hàng. |
| Chi tiết sản phẩm | Có hình ảnh, giá, mô tả, thông tin sách và nút mua; một số nhãn ưu đãi bị rút gọn trong ảnh khảo sát. | Tóm tắt mức giảm và điều kiện chính để dễ đánh giá ưu đãi. |
| Tìm kiếm | Ảnh khảo sát cho thấy gợi ý từ khóa và sản phẩm; một số tên dài bị cắt ngắn. | Bổ sung không gian cho tên và thông tin giúp phân biệt sản phẩm. |
| Giỏ hàng | Có sản phẩm, số lượng và tổng tiền; trong khung xem hẹp đã kiểm tra, các khối ưu đãi đứng trước danh sách hàng. | Ưu tiên phần rà soát sản phẩm trên màn hình hẹp. |

**Cơ sở chọn cải tiến:** Một số tên sản phẩm dài trong ảnh Flash Sale bị rút gọn bằng dấu ba chấm. Điều này có thể che thông tin nhận diện sách hoặc phiên bản. Dự án tập trung giải quyết khả năng đọc tên, đồng thời giữ cách phân biệt giá đang hữu ích.

**Giới hạn khảo sát:** Phân biệt nội dung nhìn thấy với thao tác đã kiểm chứng. Chưa kiểm chứng đầy đủ bộ lọc, sắp xếp, xử lý kết quả tìm kiếm, cập nhật số lượng, xóa hàng và giỏ trống. Không kết luận các chức năng này có lỗi; không thực hiện đặt hàng hoặc thanh toán. Chưa có căn cứ để kết luận giao diện điện thoại của Fahasa gặp vấn đề.

## 3. Chức năng

- Hiển thị danh sách bốn sách mẫu, có tên ngắn và tên dài.
- Mỗi thẻ có ảnh bìa, thể loại, tên sách, tác giả, giá bán và liên kết **Xem chi tiết**.
- Hiển thị giá gốc gạch ngang và nhãn giảm giá khi có dữ liệu tương ứng.
- Sản phẩm không giảm giá chỉ hiển thị giá bán.
- Liên kết **Xem chi tiết** dẫn tới phần giới thiệu sách tương ứng trong cùng trang.
- Có liên kết quay lại danh sách, liên kết bỏ qua phần đầu trang và viền tiêu điểm khi sử dụng bàn phím.
- Bố cục hỗ trợ nhiều kích thước màn hình:

| Chiều rộng màn hình | Số cột sản phẩm |
| --- | ---: |
| Từ 1100px | 4 |
| Từ 600px đến dưới 1100px | 2 |
| Dưới 600px | 1 |

### Dữ liệu mẫu

| Sách minh họa | Tác giả minh họa | Giá bán | Giá gốc | Giảm giá |
| --- | --- | ---: | ---: | ---: |
| Miền yên | An Nhiên | 80.000 đ | 100.000 đ | 20% |
| Khu vườn nhỏ giữa những ngày bận rộn | Minh Hà | 125.000 đ | — | — |
| Đi qua những vì sao — Hành trình khám phá bầu trời đêm | Hải Đăng | 150.000 đ | 200.000 đ | 25% |
| Sổ tay sáng tạo mỗi ngày | Thanh Mai | 135.000 đ | 150.000 đ | 10% |

Trang chưa có chức năng tìm kiếm, lưu giỏ hàng, đăng nhập, đặt hàng hoặc thanh toán. Đây là phạm vi giao diện của bài thực hành.

## 4. Công nghệ

- **HTML5:** Cấu trúc nội dung bằng các thẻ ngữ nghĩa `header`, `main`, `section`, `article`; khai báo tiếng Việt, UTF-8 và viewport.
- **CSS3:** Định dạng giao diện trong tệp riêng; dùng CSS Grid, Flexbox, biến CSS và Media Queries.
- **SVG:** Bốn bìa sách vector tự thiết kế, lưu cục bộ trong `images/` và hiển thị bằng thẻ `img`.
- Không sử dụng JavaScript, framework, thư viện CSS, backend hoặc cơ sở dữ liệu.

### Cấu trúc thư mục

```text
ecommerce-ui-improvement/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── mien-yen.svg
│   ├── khu-vuon.svg
│   ├── vi-sao.svg
│   └── sang-tao.svg
├── README.md
└── AI_USAGE.md
```

| Thành phần | Vai trò |
| --- | --- |
| `index.html` | Cấu trúc trang, dữ liệu sách và phần chi tiết trong cùng trang. |
| `css/style.css` | Màu sắc, kiểu chữ, bố cục thẻ và quy tắc responsive. |
| `images/` | Bìa minh họa của bốn sách. |
| `README.md` | Giới thiệu, khảo sát, chức năng, cách chạy và kết quả cải tiến. |
| `AI_USAGE.md` | Nhật ký sử dụng AI và phần cần tự kiểm tra, giải thích. |

## 5. Cách chạy

1. Tải mã nguồn hoặc tạo thư mục theo cấu trúc trên.
2. Đặt `index.html` ở thư mục gốc, CSS trong `css/` và ảnh trong `images/`.
3. Kiểm tra trong phần `head` của `index.html` có liên kết:

   ```html
   <link rel="stylesheet" href="css/style.css">
   ```

4. Mở `index.html` bằng Google Chrome, Microsoft Edge hoặc Firefox.
5. Chọn **Xem chi tiết** và **Quay lại danh sách sách** để kiểm tra điều hướng.

Nội dung chính dùng tài nguyên cục bộ, không cần cài server hoặc kết nối Internet. Liên kết đến Fahasa cần Internet.

**Nếu mất định dạng:** Kiểm tra tên và vị trí `css/style.css`. Bản mã đầu tiên từng đặt CSS cạnh HTML; khi chuyển CSS vào thư mục `css/`, phải cập nhật liên kết như trên.

**Nếu mất ảnh:** Kiểm tra tên tệp và đường dẫn dạng `images/mien-yen.svg`. Giữ đúng chữ hoa/chữ thường để tránh lỗi khi đưa lên hosting.

## 6. Cải tiến đã thực hiện

| Nội dung | Cơ sở hoặc mục tiêu | Thay đổi trong bản thực hành |
| --- | --- | --- |
| Tên sách | Một số tên dài bị rút gọn trong ảnh khảo sát. | Cho tên xuống dòng đầy đủ; không dùng giới hạn dòng hoặc dấu ba chấm. |
| Hình ảnh | Cần một mẫu thẻ nhất quán. | Đặt ảnh trong khung cùng chiều cao; `object-fit: contain` giữ tỷ lệ bìa. |
| Giá bán | Giữ khả năng nhận biết giá hiện tại. | Dùng chữ lớn, đậm, màu đỏ sẫm; bố trí cùng hàng giữa các thẻ. |
| Giá gốc và mức giảm | Cần rõ nghĩa và khớp dữ liệu. | Dùng `del` cho giá gốc; nhãn giảm chỉ xuất hiện khi có dữ liệu hợp lệ. |
| Thao tác | Cần một bước tiếp theo rõ ràng. | Một liên kết chính **Xem chi tiết**, nằm ở cuối mỗi thẻ và dẫn đúng phần sách. |
| Màn hình nhỏ | Yêu cầu của bản thiết kế mới, chưa phải lỗi được xác nhận của Fahasa. | Chuyển từ 4 sang 2 rồi 1 cột bằng Media Queries. |
| Bàn phím | Cần nhận biết vị trí đang chọn. | Thêm `:focus-visible`, nhãn liên kết phân biệt sách và liên kết đến nội dung chính. |

### Cách tổ chức HTML/CSS

- `.book-grid` dùng **CSS Grid** để chia cột; các thẻ cùng hàng giãn theo chiều cao lớn nhất.
- `.book-card` và `.book-card__body` dùng **Flexbox dọc**; tên dài được xuống dòng tự nhiên.
- `.book-card__purchase` dùng `margin-top: auto` để đưa nhóm giá và thao tác xuống cuối thẻ. Flexbox bên trong vùng này tránh hiện tượng gộp lề làm lệch giá giữa sản phẩm có và không có giảm giá.
- `.book-card__image img` dùng `object-fit: contain`, hiển thị bìa đầy đủ.
- Biến trong `:root` quản lý màu và khoảng cách dùng chung.
- Liên kết dùng `href="#detail-..."` khớp với ID phần chi tiết; không cần JavaScript.

### Kiểm tra trên bản do AI xây dựng

AI đã mở bản giao diện gốc bằng trình duyệt qua máy chủ xem trước cục bộ và ghi nhận:

| Kiểm tra | Kết quả ghi nhận |
| --- | --- |
| 1366px | 4 cột; giá và liên kết của bốn thẻ căn nhau. |
| 768px | 2 cột. |
| 390px, 375px, 320px | 1 cột; không tràn ngang tại các mốc đã thử. |
| Hình ảnh | Bốn ảnh tải thành công. |
| Liên kết chính | Chiều cao tối thiểu 46px trong các mốc đã thử. |
| Điều hướng | Liên kết chi tiết sách Miền yên và liên kết quay lại hoạt động. |
| Bàn phím | Tab chuyển đến liên kết sách tiếp theo và có viền focus. |

Các kết quả trên áp dụng cho bản gốc được AI kiểm tra, không thay thế kiểm tra bản tự tạo trên máy hoặc bản đưa lên GitHub. Chưa xác nhận thử trên điện thoại vật lý, trình đọc màn hình, mức zoom 200% hoặc tệp mở trực tiếp trên máy người học.

## 7. Hỗ trợ từ AI

**Công cụ:** Codex.

AI hỗ trợ:

- Tổng hợp khảo sát năm khu vực từ ảnh và phiên truy cập, phân biệt quan sát với suy luận.
- Đề xuất phương án thẻ dọc và giải thích cách tổ chức thông tin.
- Tạo HTML/CSS, bìa SVG và dữ liệu mẫu được ghi rõ là minh họa.
- Kiểm tra bản giao diện như mô tả ở mục 6.
- Phát hiện và sửa lệch giá ở thẻ không giảm giá bằng cách điều chỉnh Flexbox trong vùng giá/thao tác.
- Soạn hướng dẫn và tài liệu dự án.

Phần đã được người học xác nhận trong quá trình trao đổi: chọn Fahasa, cung cấp ảnh khảo sát, lựa chọn và duyệt phương án A, chuẩn bị repository có tên `ecommerce-ui-improvement`.

**Phần người học tự kiểm tra và điều chỉnh:** Chưa có thông tin xác nhận trong nhật ký hiện tại. Cần bổ sung sau khi tự chạy, phát hiện và sửa ít nhất một điểm. Không ghi lỗi do AI phát hiện thành phần tự phát hiện của người học.

Chi tiết prompt và quá trình sử dụng AI: [AI_USAGE.md](AI_USAGE.md).

## 8. Checklist trước khi nộp

- [ ] Repository ở chế độ Public và có đầy đủ mã nguồn.
- [ ] `index.html` nằm ở thư mục gốc; liên kết CSS khớp cấu trúc thực tế.
- [ ] Có đủ bốn ảnh trong `images/`.
- [ ] Tự mở trang, kiểm tra tên sách, giá và liên kết chi tiết.
- [ ] Tự kiểm tra ở 1366px, 768px và 375–390px.
- [ ] Kiểm tra không tràn ngang; ảnh không méo; tên dài không mất thông tin.
- [ ] Dùng Tab và Enter để kiểm tra liên kết, viền focus.
- [ ] Tự phát hiện, sửa ít nhất một điểm và ghi lại trước/sau.
- [ ] Giải thích được đoạn HTML/CSS đã sửa.
- [ ] Cập nhật phần tự kiểm tra trong README và nhật ký AI.

## 9. Tài liệu tham khảo

- [Website Fahasa](https://www.fahasa.com/).
- [Danh mục sách trong nước](https://www.fahasa.com/sach-trong-nuoc.html).
- Báo cáo cá nhân **NHIỆM VỤ 1 – KHẢO SÁT WEBSITE FAHASA**.
- Đề bài **Bài tập cá nhân Chương 1**, môn Phát triển ứng dụng WEB/TMĐT.

