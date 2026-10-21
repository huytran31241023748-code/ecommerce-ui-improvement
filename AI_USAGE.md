# AI Usage Log

## 1. Công cụ AI

- **Tên công cụ:** Codex.
- **Phạm vi hỗ trợ:** Khảo sát và phân tích giao diện, đề xuất phương án, tạo HTML/CSS, kiểm tra bản thực hành và soạn tài liệu.
- **Website tham khảo:** https://www.fahasa.com/
- **Dự án:** `ecommerce-ui-improvement` – Góc sách.
- **Repository:** https://github.com/huytran31241023748-code/ecommerce-ui-improvement
- **Website:** https://huytran31241023748-code.github.io/ecommerce-ui-improvement/

AI được sử dụng xuyên suốt các bước phân tích, thiết kế, xây dựng và kiểm tra. Phương án được trao đổi trước khi lập trình; sau khi lựa chọn thẻ dọc, yêu cầu triển khai được giới hạn vào một trang HTML/CSS có thể chạy trực tiếp.

## 2. Mục đích sử dụng

1. Phân tích yêu cầu bài tập và xác định sản phẩm cần hoàn thành.
2. Tổng hợp khảo sát năm khu vực: trang chủ, danh mục, chi tiết, tìm kiếm, giỏ hàng.
3. Phân biệt thông tin quan sát được, rủi ro suy luận và đề xuất cải tiến.
4. Đề xuất thẻ sách giúp đọc tên, so sánh giá và nhận biết thao tác tiếp theo.
5. Hỗ trợ tạo cấu trúc HTML5, CSS3 riêng và bố cục responsive.
6. Tạo bìa và dữ liệu sách mẫu phục vụ thiết kế giao diện.
7. Kiểm tra giao diện, giải thích mã và hỗ trợ chuẩn bị README, nhật ký AI.

| Giai đoạn | Nội dung cần AI hỗ trợ | Sản phẩm đầu ra |
| --- | --- | --- |
| Hiểu đề | Xác định yêu cầu, phạm vi và trình tự công việc. | Danh sách nhiệm vụ và sản phẩm cần hoàn thành. |
| Khảo sát | Đọc ảnh, kiểm tra trang và phân tích năm khu vực. | Bảng khảo sát, bằng chứng và giới hạn kiểm chứng. |
| Thiết kế | Phân tích tên dài, giá, ảnh, thao tác và responsive. | Phương án thẻ dọc được lựa chọn. |
| Lập trình | Xây dựng HTML/CSS theo phương án đã duyệt. | Trang Góc sách và tài nguyên ảnh. |
| Kiểm tra | Xem bố cục, tài nguyên, liên kết và bàn phím. | Kết quả tại các chiều rộng đã thử và một điều chỉnh căn giá. |
| Tài liệu | Tổng hợp khảo sát, mã nguồn và quá trình sử dụng AI. | README và AI_USAGE định dạng Markdown. |

## 3. Prompt đã sử dụng

Ba prompt chính dưới đây được chuẩn hóa từ các yêu cầu trong quá trình thực hiện, theo bố cục đề bài và nội dung dự án Góc sách.

### 3.1. Prompt 1 – Phân tích website Fahasa

**Mục đích:** Hỗ trợ phân tích nghiệp vụ và trải nghiệm người dùng, làm căn cứ lựa chọn khu vực cải tiến.

```text
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng
cho website thương mại điện tử.

Tôi đang khảo sát website: FAHASA – Nhà Sách Trực Tuyến Việt Nam.
URL: https://www.fahasa.com/

Hãy giúp tôi lập bảng phân tích các khu vực:
1. Trang chủ.
2. Danh mục sản phẩm.
3. Chi tiết sản phẩm.
4. Tìm kiếm.
5. Giỏ hàng.

Với mỗi khu vực, hãy nêu:
- Mục đích của chức năng.
- Thành phần giao diện cần có.
- Điểm thuận tiện đối với khách hàng.
- Một vấn đề có thể phát sinh.
- Một đề xuất cải tiến.

Sử dụng ảnh chụp tôi cung cấp và các trang có thể truy cập để làm căn cứ.
Chú ý cách hiển thị tên sách dài, hình ảnh, giá bán, giá gốc,
nhãn giảm giá và các thao tác trong hành trình mua sắm.

Không khẳng định những tính năng chưa được kiểm chứng.
Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.
Nếu chưa đủ dữ liệu hoặc không thực hiện được một thao tác,
hãy ghi rõ giới hạn kiểm chứng.
```

**Kết quả sử dụng:** Bảng phân tích năm khu vực và căn cứ chọn cải tiến thẻ sách. Nhận xét về tên dài bị rút gọn được lấy từ ảnh khảo sát; các ảnh hưởng đến khách hàng được trình bày là rủi ro có thể xảy ra.

### 3.2. Prompt 2 – Đề xuất cải tiến thẻ sản phẩm sách

**Mục đích:** Thống nhất phương án thiết kế trước khi tạo mã nguồn.

```text
Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử
bằng HTML5 và CSS3.

Website tham khảo: FAHASA – https://www.fahasa.com/

Tôi muốn cải tiến khu vực: thẻ sản phẩm trong một trang danh sách sách,
tập trung vào tên sách dễ đọc, giá dễ so sánh và nút thao tác rõ ràng.

Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.

Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.

Ưu tiên thẻ dọc dạng lưới với các thành phần:
ảnh bìa, tên sách đầy đủ, tác giả, giá bán,
giá gốc và mức giảm nếu có, liên kết Xem chi tiết.

Giải thích cách xử lý tên dài, giữ đúng tỷ lệ ảnh,
căn giá và liên kết nhất quán giữa các thẻ.
Đề xuất bố cục 4 cột trên máy tính, 2 cột trên máy tính bảng
và 1 cột trên điện thoại khi không gian phù hợp.

Phân biệt liên kết điều hướng với nút thực hiện hành động.
Phần Xem chi tiết có thể dẫn đến thông tin tương ứng trong cùng trang.
Ưu tiên HTML/CSS thuần, mã dễ đọc và dễ chỉnh sửa.

Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.
```

**Kết quả sử dụng:** Lựa chọn phương án A – thẻ dọc dạng lưới; tên được xuống dòng đầy đủ, nhóm giá phân cấp rõ, liên kết chi tiết ở cuối thẻ. Bố cục chuyển giữa 4, 2 và 1 cột theo chiều rộng màn hình.

### 3.3. Prompt 3 – Tạo giao diện Góc sách bằng HTML5/CSS3

**Mục đích:** Triển khai phương án A đã thống nhất thành một trang có thể chạy trên trình duyệt.

```text
Dựa trên phương án A đã thống nhất, hãy tạo một trang giao diện
thương mại điện tử bằng HTML5 và CSS3.

Tên trang: Góc sách.
Tiêu đề chính: Khám phá sách hay.
Website tham khảo: FAHASA – https://www.fahasa.com/
Khu vực cải tiến: thẻ sản phẩm sách dạng dọc trong danh sách dạng lưới.

Yêu cầu:
- Giao diện có tiêu đề và khu vực sản phẩm.
- Có tối thiểu 4 sản phẩm mẫu.
- Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Mã HTML có cấu trúc rõ ràng.
- CSS được tách thành file riêng.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện hoặc thành phần không cần thiết vào dự án.

Thực hiện cụ thể theo phương án đã chọn:
- Hiển thị tên sách đầy đủ, cho phép xuống dòng tự nhiên.
- Có tên sách ngắn và dài để kiểm tra cách trình bày.
- Ảnh bìa giữ đúng tỷ lệ, có văn bản thay thế alt.
- Giá bán nổi bật; giá gốc gạch ngang và nhãn giảm giá khi có dữ liệu.
- Có ít nhất một sách chỉ hiển thị giá bán.
- Giá và tỷ lệ giảm phải khớp nhau, định dạng tiền nhất quán.
- Nút thao tác trình bày dưới dạng liên kết Xem chi tiết,
  dẫn đến phần giới thiệu cùng cuốn sách ngay trong trang.
- Căn giá và liên kết nhất quán giữa các thẻ.
- Bố cục 4 cột từ 1100px, 2 cột từ 600px đến dưới 1100px,
  và 1 cột dưới 600px.
- Có trạng thái hover và focus rõ ràng.
- Sử dụng HTML5 và CSS3 thuần, không cần JavaScript.

Tổ chức tệp theo cấu trúc:
ecommerce-ui-improvement/
├── index.html
├── css/
│   └── style.css
└── images/

Liên kết CSS trong HTML phải là css/style.css.
Ảnh sử dụng đường dẫn tương đối trong thư mục images/.
Sử dụng dữ liệu sách mẫu và bìa phù hợp cho bài thực hành.

Cung cấp đầy đủ mã HTML và CSS.
Giải thích cách chạy trang web và những phần tôi cần kiểm tra.
Giải thích ngắn gọn cấu trúc HTML, Grid, Flexbox,
cách xử lý tên dài, giá và Media Queries.
Chỉ ghi nhận kết quả kiểm tra trình duyệt khi đã thực sự chạy thử.
```

**Kết quả sử dụng:** Tạo trang Góc sách với bốn sách mẫu, bìa sách, phần thông tin chi tiết nội trang và CSS responsive. Mã ban đầu đặt CSS cạnh HTML; cấu trúc theo đề đặt CSS trong `css/`, nên đường dẫn stylesheet được nêu rõ trong prompt chuẩn hóa và tài liệu dự án.

## 4. Kết quả AI đề xuất

### 4.1. Mối liên hệ từ khảo sát đến sản phẩm

| Dữ liệu hoặc yêu cầu đầu vào | Phân tích của AI | Quyết định được sử dụng |
| --- | --- | --- |
| Một số tên dài bị rút gọn trong ảnh khảo sát. | Có thể che thông tin nhận diện sách hoặc phiên bản. | Cho tên đầy đủ và xuống dòng tự nhiên. |
| Website đã phân biệt giá bán và giá gốc. | Đây là điểm hữu ích có thể giữ lại. | Giá bán nổi bật, giá gốc gạch ngang và nhãn giảm riêng. |
| Cần so sánh nhiều sản phẩm cạnh nhau. | Vị trí giá và thao tác nhất quán hỗ trợ quét đọc. | Grid cho danh sách, Flexbox trong thẻ và nhóm giá ở cuối. |
| Chỉ dùng HTML/CSS. | Điều hướng nội trang thực hiện được, giỏ hàng cần thêm logic. | Dùng Xem chi tiết đến phần thông tin trong cùng trang. |
| Phải hỗ trợ màn hình nhỏ. | Thu nhỏ thẻ bốn cột sẽ làm nội dung chật. | Chuyển 4–2–1 cột theo chiều rộng. |
| Cần kiểm tra dữ liệu khác nhau. | Một bộ mẫu chỉ có tên và giá tương tự chưa bộc lộ hết tình huống. | Có tên dài, ngắn; ba sách giảm và một sách không giảm. |

### Kết quả phân tích

- Lập bảng khảo sát và phân tích năm khu vực chức năng.
- Ghi nhận tên dài bị rút gọn ở một số sản phẩm trong ảnh khảo sát.
- Xác định thẻ sách là khu vực cải tiến, dựa trên ghi nhận về cách hiển thị tên dài.

### Kết quả thiết kế và mã nguồn

- Trang Góc sách với bốn sách mẫu có độ dài tên khác nhau.
- Bốn sách mẫu có bìa sách, tên, tác giả, giá và mô tả.
- Thẻ có ảnh, thể loại, tên đầy đủ, tác giả, giá và liên kết **Xem chi tiết**.
- Giá gốc và mức giảm được thể hiện khi có dữ liệu; có một sách chỉ hiển thị giá bán.
- HTML5 ngữ nghĩa; CSS tách riêng; Grid cho danh sách, Flexbox trong thẻ.
- Bố cục 4 cột từ 1100px, 2 cột từ 600px đến dưới 1100px, 1 cột dưới 600px.
- Điều hướng chi tiết trong cùng trang bằng liên kết và ID.

### 4.2. Cấu trúc và thứ bậc thông tin đã chọn

Một thẻ gồm ảnh bìa, thể loại, tên, tác giả, giá bán, thông tin giảm nếu có và liên kết chính. Ảnh hỗ trợ nhận diện; tên dùng để xác định cuốn sách; giá bán hỗ trợ so sánh; thông tin phụ có cỡ chữ nhỏ hơn để không tranh sự chú ý.

Mô tả được đặt ở phần chi tiết phía dưới. Cách tách này giữ thẻ gọn nhưng vẫn tạo được một luồng xem thông tin thực tế trong phạm vi một trang.

| Thành phần | Giải pháp được đề xuất và áp dụng |
| --- | --- |
| Tên sách | Chữ đậm 18px, chiều cao dòng 1,5; không cắt dòng hoặc đặt chiều cao cố định. |
| Ảnh bìa | Khung cùng chiều cao, căn giữa; dùng `object-fit: contain`. |
| Giá bán | Chữ đậm 24px, màu đỏ sẫm. |
| Giá gốc | Phần tử `del`, cỡ chữ nhỏ hơn và màu phụ. |
| Nhãn giảm | Đặt cạnh giá gốc; số liệu khớp giá mẫu. |
| Thao tác | Một liên kết Xem chi tiết; chiều cao tối thiểu 46px. |
| Phần chi tiết | Có ID riêng, tiêu đề sách, tác giả, thể loại và giới thiệu. |
| Trạng thái chọn | Hover, focus-visible và đường viền phần đích bằng `:target`. |

### 4.3. Dữ liệu sách sử dụng để kiểm tra bố cục

| Sách mẫu | Tình huống thiết kế | Giá bán / giá gốc | Mức giảm |
| --- | --- | --- | --- |
| Miền yên | Tên ngắn, có giảm giá. | 80.000 đ / 100.000 đ | 20% |
| Khu vườn nhỏ giữa những ngày bận rộn | Tên nhiều dòng, không có giá gốc. | 125.000 đ / — | — |
| Đi qua những vì sao — Hành trình khám phá bầu trời đêm | Tên dài có tên phụ. | 150.000 đ / 200.000 đ | 25% |
| Sổ tay sáng tạo mỗi ngày | Tên độ dài trung bình, có giảm giá. | 135.000 đ / 150.000 đ | 10% |

Các giá trị là dữ liệu sách mẫu. Phần trăm giảm được đối chiếu bằng `(giá gốc − giá bán) / giá gốc × 100`; HTML chỉ hiển thị giá trị đã nhập, không tự tính toán.

### Những phương án không đưa vào sản phẩm

- Thẻ ngang: thay bằng thẻ dọc để phù hợp bố cục lưới đã chọn.
- Cắt tên bằng dấu ba chấm: không chọn cho bản thực hành để ưu tiên đầy đủ thông tin.
- Nút thêm giỏ không có logic xử lý: thay bằng liên kết chi tiết có tác dụng thực tế.
- Backend, cơ sở dữ liệu, đăng nhập, thanh toán, framework và JavaScript: không đưa vào phạm vi giao diện này.

Các lựa chọn trên giúp giữ sản phẩm đúng phạm vi bài tập: cải tiến một thành phần giao diện, có thao tác điều hướng chạy được và mã nguồn đủ đơn giản để đọc, chỉnh sửa.

## 5. Kiểm tra và điều chỉnh

### 5.1. Phần kiểm tra do AI thực hiện

Các kết quả dưới đây là của bản gốc do AI xây dựng, được mở bằng trình duyệt qua máy chủ xem trước cục bộ.

| Nội dung | Kết quả |
| --- | --- |
| Màn hình 1366px | 4 cột; giá và liên kết căn nhau. |
| Màn hình 768px | 2 cột. |
| Màn hình 390px, 375px, 320px | 1 cột, không tràn ngang tại các mốc đã kiểm tra. |
| Hình ảnh | Bốn bìa tải thành công. |
| Liên kết thao tác | Chiều cao tối thiểu 46px tại các mốc đã thử. |
| Liên kết chi tiết | Đã xác nhận liên kết sách Miền yên đến đúng phần chi tiết và quay lại danh sách. |
| Bàn phím | Đã dùng Tab; tiêu điểm chuyển đến liên kết tiếp theo và có viền rõ. |

**Điều chỉnh của AI:** Thẻ không giảm giá ban đầu có vị trí giá lệch so với các thẻ còn lại. AI bổ sung `display: flex` và `flex-direction: column` cho `.book-card__purchase` để tránh gộp lề; sau đó kiểm tra lại giá và liên kết đã căn nhau.

#### Phân tích điều chỉnh căn giá

| Nội dung | Ghi nhận |
| --- | --- |
| Tình huống | Bốn thẻ cùng hàng ở chiều rộng 1366px; một thẻ không có giá gốc và nhãn giảm. |
| Trước chỉnh sửa | Giá của thẻ không giảm nằm lệch so với ba thẻ còn lại, dù liên kết chính đã căn nhau. |
| Phần mã liên quan | `.book-card__purchase`, khoảng cách dưới giá và trên liên kết. |
| Cách sửa | Tổ chức vùng giá/thao tác bằng Flexbox dọc để các lề không bị gộp như bố cục khối thông thường. |
| Sau chỉnh sửa | Kiểm tra lại vị trí giá và liên kết, xác nhận bốn thẻ căn nhau ở màn hình máy tính. |
| Nguồn thực hiện | AI phát hiện và sửa trong quá trình xây dựng. |

```css
.book-card__purchase {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}
```

`margin-top: auto` đưa nhóm này về cuối vùng nội dung thẻ. Hai thuộc tính Flexbox kiểm soát cách xếp giá, giá phụ và liên kết theo chiều dọc. Việc sửa nằm trong CSS dùng chung nên áp dụng cho cả bốn thẻ.

**Phạm vi kiểm tra:** Bản giao diện cục bộ trên trình duyệt; chưa kiểm tra điện thoại vật lý, trình đọc màn hình hoặc mức phóng to 200%.

#### Kiểm tra nội dung tài liệu

- Đối chiếu thông tin website và bảng khảo sát với báo cáo cá nhân.
- Giữ riêng bằng chứng tên bị rút gọn và nhận định về tác động có thể xảy ra.
- Đối chiếu tên lớp, đường dẫn ảnh, giá và mốc responsive với bản mã đã tạo.
- Ghi kết quả kiểm tra trình duyệt theo các tình huống thực sự đã thực hiện.
- Kiểm tra cấp tiêu đề, khối mã và liên kết giữa README với nhật ký AI.
- Thay các đoạn giải thích dài, câu nhắc soạn thảo bằng mô tả trực tiếp về dự án.

#### Những điểm cần đối chiếu khi thay đổi vị trí tệp

Bản giao diện đầu tiên đặt `style.css` cạnh `index.html`. Cấu trúc theo đề được chọn sau đó đặt CSS trong `css/`, nên liên kết cần tương ứng:

```html
<link rel="stylesheet" href="css/style.css">
```

Đường dẫn ảnh dùng dạng `images/mien-yen.jpg`. Sau khi đưa tệp lên repository và triển khai GitHub Pages, sinh viên đã kiểm tra và xác nhận ảnh, CSS cùng nội dung hiển thị đúng trên bản trực tuyến.

Ảnh bìa được chuyển sang JPG theo yêu cầu, kích thước 800 × 1120px; đường dẫn ảnh trong HTML được cập nhật tương ứng.

### 5.2. Phần lựa chọn và bổ sung cá nhân

- Chọn website Fahasa.
- Cung cấp ảnh chụp phục vụ khảo sát.
- Chọn và duyệt phương án A.
- Chọn thực hiện theo cấu trúc dự án có `css/style.css`, `images/`, README và nhật ký AI.

### 5.3. Kết quả tự kiểm tra và chỉnh sửa cá nhân

Sau khi triển khai, sinh viên xác nhận đã kiểm tra và các nội dung hoạt động đúng.

| Nội dung | Kết quả tự kiểm tra |
| --- | --- |
| GitHub Pages | Trang truy cập được bằng đường dẫn website. |
| Nội dung | Đủ bốn sách; tên, giá, giá gốc và mức giảm đúng bộ mẫu. |
| Ảnh | Bốn bìa JPG hiển thị đúng, không mất ảnh. |
| Bố cục | Hiển thị phù hợp ở giao diện máy tính và điện thoại, không tràn ngang. |
| Liên kết | Xem chi tiết đến đúng phần sách; quay lại danh sách hoạt động. |
| Tài nguyên | Đường dẫn `css/style.css` và `images/*.jpg` hoạt động trên bản triển khai. |

**Điều chỉnh theo lựa chọn cá nhân:** Chọn chuyển bìa SVG sang JPG và cập nhật đường dẫn ảnh, tổ chức CSS trong thư mục `css`. AI hỗ trợ chuyển đổi ảnh và bản mã; sinh viên thực hiện các bước quản lý tệp và kiểm tra bản triển khai.

Việc tự kiểm tra đã được xác nhận. Minh chứng về một lỗi do bản thân phát hiện và trực tiếp sửa HTML/CSS được ghi riêng khi có nội dung cụ thể.

### 5.4. Tổng hợp phạm vi kiểm tra

| Tình huống | Mục tiêu đối chiếu | Trạng thái |
| --- | --- | --- |
| Điều hướng chi tiết và quay lại | Đối chiếu phần sách được mở. | Sinh viên xác nhận hoạt động đúng. |
| Mở `index.html` trực tiếp trên máy cá nhân | Kiểm tra đường dẫn CSS/ảnh trong cấu trúc tự tạo. | Chưa cập nhật. |
| Xem bản trên GitHub Pages | Kiểm tra ảnh, CSS, bố cục và điều hướng sau triển khai. | Sinh viên xác nhận hoạt động đúng. |
| Phóng to 200% | Xác định chữ và thao tác có bị che hoặc tràn. | Chưa kiểm tra. |
| Thêm sách thứ năm, giá dài hoặc ảnh khác tỷ lệ | Đánh giá khả năng dùng lại mẫu thẻ với dữ liệu mới. | Chưa kiểm tra. |
| Giao diện điện thoại | Đánh giá tên, ảnh, giá, bố cục và liên kết ở màn hình nhỏ. | Sinh viên xác nhận giao diện đúng; không ghi riêng thiết bị cụ thể. |

Bảng phân biệt các kết quả đã xác nhận với những tình huống mở rộng chưa thực hiện.

## 6. Phần tôi hiểu và có thể giải thích

Các thành phần mã nguồn trọng tâm:

- `header`, `main`, `section`, `article` tổ chức nội dung trang và từng thẻ sách.
- Thứ tự `h1`, `h2`, `h3` thể hiện cấp tiêu đề.
- `img`, `src`, `alt` và đường dẫn tương đối giúp hiển thị, mô tả ảnh.
- `del` biểu thị giá gốc; phần trăm giảm phải khớp với giá mẫu.
- `a` phù hợp điều hướng; `href="#detail-..."` phải khớp ID phần chi tiết.
- `.book-grid` dùng CSS Grid để chia danh sách thành các cột.
- Flexbox và `margin-top: auto` giúp nhóm giá và thao tác nằm ở cuối thẻ.
- Tên xuống dòng tự nhiên, không cố định chiều cao hoặc cắt dòng.
- `object-fit: contain` giữ tỷ lệ và nội dung bìa trong khung ảnh.
- Media Queries chuyển giữa 4, 2 và 1 cột theo chiều rộng.
- `:hover` và `:focus-visible` phản hồi thao tác chuột, bàn phím.
- Biến CSS trong `:root` giúp thay đổi màu và khoảng cách dùng chung.

**Phần giải thích mã nguồn:** Các nội dung kỹ thuật được trình bày ở mục 6.1–6.6. Minh chứng giải thích đoạn mã do cá nhân trực tiếp sửa chưa được bổ sung.

### 6.1. Cấu trúc trang và liên kết nội bộ

`main` chứa nội dung chính. Hai khu vực danh sách và thông tin chi tiết dùng `section`; mỗi sách được bao bởi `article`. Các cấp `h1`, `h2`, `h3` lần lượt biểu thị trang, khu vực và tên sách.

Liên kết `href="#detail-mien-yen"` dẫn đến phần tử có `id="detail-mien-yen"`. Khi tên sách thay đổi, nội dung hiển thị, mô tả ảnh và nhãn liên kết cần được cập nhật nhất quán. Mỗi ID trong một trang phải duy nhất.

### 6.2. Grid và Flexbox

Grid quản lý bố cục giữa nhiều sản phẩm. Quy tắc `repeat(4, minmax(0, 1fr))` tạo bốn cột cùng độ rộng, cho phép cột thu theo vùng chứa. Khoảng cách giữa thẻ dùng biến `--gap`.

Flexbox quản lý nội dung bên trong một thẻ. Vùng thân thẻ giãn để các thẻ trong cùng hàng bằng nhau; `margin-top: auto` đẩy nhóm giá xuống cuối. Nhờ đó, tên dài không bị cắt mà nhóm thao tác vẫn nhất quán.

### 6.3. Ảnh và tên dài

Khung ảnh có chiều cao xác định, còn ảnh dùng `width: 100%`, `height: 100%` và `object-fit: contain`. Ảnh được giữ nguyên tỷ lệ trong vùng chứa; nền có thể còn khoảng trống để bìa không bị cắt.

Tên không bị cố định số dòng. `overflow-wrap: anywhere` xử lý chuỗi dài vượt chiều rộng. Cách này ưu tiên đọc đầy đủ; chiều cao hàng có thể tăng theo sách có nội dung dài nhất.

### 6.4. Giá và giảm giá

Giá bán nằm trong `.book-card__price`. Giá gốc dùng `del`, mức giảm dùng `.discount`. Khi sản phẩm chỉ có giá bán, bỏ phần thông tin giảm, đồng thời giữ cách căn nhóm giá và thao tác.

Nếu đổi giá gốc hoặc giá bán, mức giảm phải được tính và cập nhật cùng lúc. CSS chỉ thay đổi cách trình bày, không kiểm tra tính đúng của số liệu.

### 6.5. Responsive và trạng thái tương tác

Media Queries đổi số cột khi chiều rộng xuống dưới 1100px và 600px. Trên màn hình nhỏ, một cột dành nhiều không gian hơn cho tên và liên kết; khoảng cách ngoài trang cũng giảm.

`:hover` phản hồi khi dùng chuột. `:focus-visible` đánh dấu phần tử đang được chọn bằng bàn phím. `:target` đổi đường viền phần chi tiết vừa được điều hướng tới. Các trạng thái này dùng CSS, không xử lý việc mua hàng.

### 6.6. Các vị trí có thể chỉnh sửa

| Muốn thay đổi | Vị trí liên quan | Nội dung cần kiểm tra lại |
| --- | --- | --- |
| Tên và tác giả | HTML trong thẻ và phần chi tiết. | Nhãn liên kết, alt và thông tin hai khu vực khớp nhau. |
| Hình ảnh | `src` và tệp trong `images/`. | Tải được ảnh, đúng đường dẫn và giữ tỷ lệ. |
| Giá và giảm giá | `.book-card__price`, `del`, `.discount`. | Mức giảm khớp dữ liệu và giá không tràn trên điện thoại. |
| Màu chủ đạo | Biến `--accent`, `--accent-dark` trong `:root`. | Chữ, nền và focus còn dễ phân biệt. |
| Khoảng cách | Biến `--gap`, padding và margin. | Thẻ cân đối ở cả ba bố cục. |
| Số sản phẩm | Thêm cùng mẫu article trong danh sách và chi tiết. | ID duy nhất, liên kết đúng và lưới xuống hàng. |

Các giải thích trên mô tả mã nguồn của dự án; phần tự diễn giải và minh chứng chỉnh sửa cá nhân được ghi riêng sau khi thực hiện.
