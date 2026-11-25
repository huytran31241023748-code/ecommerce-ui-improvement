# Góc sách trên mây – Flappy Bird

Nguồn hướng dẫn đã đọc: https://freetuts.net/viet-game-flappy-bird-don-gian-voi-html-css-va-jquery-713.html

Giữ cấu trúc container, bird, pole_1/pole_2 và ý tưởng va chạm của bài hướng dẫn; vòng lặp được viết lại, không sao chép toàn bộ mã. Hai ảnh SVG cục bộ: chim đưa sách và cột gáy sách được cá nhân hóa theo Góc sách.

| Điểm | Level | Interval |
| --- | --- | --- |
| 0–4 | 1 | 40 ms |
| 5–19 | 2 | 30 ms |
| 20–39 | 3 | 25 ms |
| 40–49 | 4 | 20 ms |
| 50 | Dừng và báo chiến thắng | Dừng timer và animation |

Giữ ArrowDown để bay lên, nhả để rơi. P tạm dừng/tiếp tục. Không dùng mousedown để điều khiển chim.

Cải tiến: requestAnimationFrame cho chuyển động theo thời gian; giới hạn vận tốc; khe cột rộng hơn; tạm dừng khi mất focus; không tạo timer trùng; chơi lại không reload; lưu kỷ lục trên thiết bị.

Đã kiểm tra thực tế bằng bàn phím: bắt đầu, bay, va chạm, chơi lại, tạm dừng/tiếp tục; chơi qua 5 điểm (Level 2 / 30 ms), 20 điểm (Level 3 / 25 ms), 40 điểm (Level 4 / 20 ms), 50 điểm (Chiến thắng). Sau chiến thắng, vị trí chim, cột và điểm giữ nguyên qua hai lần quan sát. Có ảnh chụp thật 1360×765 cho từng mốc. Không có chức năng cộng điểm hoặc bỏ va chạm.
