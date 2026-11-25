/* global jQuery, GOCSACH_BOOKS */
(function ($) {
  'use strict';
  var books = GOCSACH_BOOKS;
  var params = new URLSearchParams(location.search);
  var page = document.body.dataset.page;
  var memory = {};
  var selectedCover = 'Bìa mềm';
  function escape(value) { return $('<div>').text(String(value == null ? '' : value)).html(); }
  function money(value) { return new Intl.NumberFormat('vi-VN').format(value) + ' đ'; }
  function read(key, fallback) {
    try { var raw = localStorage.getItem('gocsach:v2:' + key); return raw ? JSON.parse(raw) : fallback; }
    catch (error) { return memory[key] || fallback; }
  }
  function write(key, value) {
    memory[key] = value;
    try { localStorage.setItem('gocsach:v2:' + key, JSON.stringify(value)); return true; }
    catch (error) { $('#storage-warning').addClass('alert alert-warning').text('Trình duyệt không cho phép lưu dữ liệu. Kết quả chỉ được giữ trong lần mở trang này.'); return false; }
  }
  function byId(id) { return books.find(function (b) { return b.id === id; }); }
  function cover(b) { return '../../images/' + b.id + '.jpg'; }
  function detailUrl(b) { return 'ecommerce-detail.html?id=' + encodeURIComponent(b.id); }
  function reviews(b) {
    var custom = read('reviews-' + b.id, []);
    if (!Array.isArray(custom)) { custom = []; }
    return [
      { name: 'Bạn đọc An · nhận xét mẫu', score: b.rating, text: 'Bìa sách dễ nhận diện, phần giới thiệu giúp lựa chọn chủ đề phù hợp.', date: 'Nhận xét minh họa' },
      { name: 'Bạn đọc Minh · nhận xét mẫu', score: b.rating, text: 'Một gợi ý cho thời gian đọc sách mỗi ngày.', date: 'Nhận xét minh họa' }
    ].concat(custom.filter(function (r) { return r && Number(r.score) > 0 && Number(r.score) <= 5 && typeof r.text === 'string'; }));
  }
  function average(b) { var r = reviews(b); return Math.round(r.reduce(function (sum, a) { return sum + Number(a.score); }, 0) / r.length * 10) / 10; }
  function stars(value, label) { return '<input class="display-stars" type="number" min="0" max="5" step="0.1" value="' + value + '" aria-label="' + escape(label) + '">'; }
  function activateStars() {
    $('.display-stars').not('.rating-input').rating({ displayOnly: true, showCaption: false, showClear: false, size: 'xs', theme: '', filledStar: '<span aria-hidden="true">★</span>', emptyStar: '<span aria-hidden="true">☆</span>' });
  }
  function stock(b) {
    return '<div class="stock-label"><span>Còn ' + b.stock + ' cuốn</span><span>' + b.stock + '/100</span></div><div class="progress"><div class="progress-bar progress-bar-' + (b.stock < 20 ? 'warning' : 'success') + '" role="progressbar" aria-label="Tồn kho ' + escape(b.name) + '" aria-valuenow="' + b.stock + '" aria-valuemin="0" aria-valuemax="100" style="width:' + b.stock + '%"><span class="sr-only">' + b.stock + '%</span></div></div>';
  }
  function card(b) {
    var discount = Math.round((b.original - b.price) / b.original * 100);
    return '<div class="col-sm-6 col-md-4 product-column"><article class="thumbnail product-card"><div class="product-badges">' + (discount ? '<span class="offer">−' + discount + '%</span>' : '<span></span>') + '<span class="status ' + (b.badge === 'NEW' ? 'new' : 'best') + '">' + b.badge + '</span></div><a class="product-image" href="' + detailUrl(b) + '"><img src="' + cover(b) + '" alt="Bìa sách ' + escape(b.name) + '" width="800" height="1120"></a><div class="caption"><p class="eyebrow">' + b.category + '</p><h3><a href="' + detailUrl(b) + '">' + escape(b.name) + '</a></h3><p class="muted author">' + b.author + '</p><p class="product-description">' + b.description + '</p><div class="ratings">' + stars(average(b), 'Đánh giá ' + b.name) + '<a href="' + detailUrl(b) + '#comments">' + reviews(b).length + ' nhận xét</a></div>' + stock(b) + '<div class="product-price"><strong>' + money(b.price) + '</strong>' + (discount ? '<del>' + money(b.original) + '</del>' : '<span>Giá niêm yết</span>') + '</div><div class="card-actions"><a class="btn btn-default" href="' + detailUrl(b) + '">Chi tiết</a><button type="button" class="btn btn-primary quick-add" data-book="' + b.id + '" data-toggle="tooltip" title="Thêm một cuốn vào giỏ"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span class="sr-only">Thêm ' + escape(b.name) + ' vào giỏ</span></button></div></div></article></div>';
  }
  function categoryList() {
    var selected = params.get('category') || '';
    var html = '<a class="list-group-item ' + (!selected ? 'active' : '') + '" href="ecommerce.html"><span class="badge">' + books.length + '</span>Tất cả sách</a>';
    ['Tản văn', 'Lối sống', 'Khám phá', 'Kỹ năng'].forEach(function (c) {
      html += '<a class="list-group-item ' + (c === selected ? 'active' : '') + '" href="ecommerce.html?category=' + encodeURIComponent(c) + '"><span class="badge">' + books.filter(function (b) { return b.category === c; }).length + '</span>' + c + '</a>';
    });
    $('#category-list').html(html);
  }
  function catalog() {
    var q = (params.get('q') || '').trim();
    var category = params.get('category') || '';
    function normalized(s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase(); }
    var filtered = books.filter(function (b) { return (!category || b.category === category) && (!q || normalized(b.name + ' ' + b.author).includes(normalized(q))); });
    $('#desktop-query,#mobile-query').val(q);
    $('.catalog-nav').addClass('active');
    $('#page-content').html('<div class="section-title"><div><p class="eyebrow">BỘ SƯU TẬP GÓC SÁCH</p><h1>' + (q ? 'Kết quả tìm sách' : category || 'Sách nổi bật') + '</h1></div><span>' + filtered.length + ' cuốn sách</span></div>' + (q ? '<p>Từ khóa: <strong>' + escape(q) + '</strong> · <a href="ecommerce.html">Xóa tìm kiếm</a></p>' : '') + '<p class="section-intro">Chọn một cuốn sách, mở thêm một góc nhìn.</p><div class="row products">' + filtered.map(card).join('') + '</div><p id="catalog-feedback" class="action-feedback" role="status"></p>' + (!filtered.length ? '<div class="well">Chưa tìm thấy sách phù hợp. <a href="ecommerce.html">Xem tất cả sách</a>.</div>' : ''));
  }
  function detail() {
    var id = params.get('id');
    var b = id ? byId(id) : books[0];
    if (!b) { $('#page-content').html('<h1>Không tìm thấy sách</h1><a href="ecommerce.html">Về danh sách</a>'); return; }
    document.title = b.name + ' | Góc sách';
    var images = [{ src: cover(b), label: 'Bìa sách' }, { src: 'images/' + b.id + '-info.svg', label: 'Thông tin' }, { src: 'images/' + b.id + '-intro.svg', label: 'Giới thiệu' }];
    $('#page-content').html('<ol class="breadcrumb"><li><a href="ecommerce.html">Khám phá sách</a></li><li class="active">' + escape(b.name) + '</li></ol><article class="thumbnail detail-card"><div class="row"><div class="col-md-5 col-sm-12"><div class="book-gallery"><div class="gallery-stage"><img class="xzoom" src="' + cover(b) + '" xoriginal="' + cover(b) + '" alt="Bìa sách ' + escape(b.name) + '" width="800" height="1120"></div><div class="gallery-thumbs">' + images.map(function (i) { return '<a href="' + i.src + '" aria-label="' + i.label + '"><img class="xzoom-gallery" src="' + i.src + '" xpreview="' + i.src + '" alt="' + i.label + '" width="45" height="63"><span>' + i.label + '</span></a>'; }).join('') + '</div><p class="muted small">Chọn ảnh để xem. Rê chuột trên ảnh lớn để zoom; trên màn hình cảm ứng, chạm vào ảnh.</p></div></div><div class="col-md-7 col-sm-12"><p class="eyebrow">' + b.category + '</p><h1>' + escape(b.name) + '</h1><p class="muted">' + b.author + '</p><div class="detail-rating">' + stars(average(b), 'Đánh giá trung bình') + '<a href="#comments">' + reviews(b).length + ' nhận xét</a></div><p>' + b.description + '</p><div class="detail-price"><strong>' + money(b.price) + '</strong>' + (b.original > b.price ? '<del>' + money(b.original) + '</del><span class="offer">Giảm ' + Math.round((b.original - b.price) / b.original * 100) + '%</span>' : '') + '</div>' + stock(b) + '<form id="purchase-form" data-book="' + b.id + '"><div class="form-row"><div class="form-group"><label for="quantity">Số lượng</label><input class="form-control" id="quantity" type="number" min="1" max="' + b.stock + '" value="1" required></div><div class="form-group"><label for="edition">Phiên bản</label><select class="form-control" id="edition"><option>Tiêu chuẩn</option><option>Quà tặng</option></select></div></div><div class="form-group"><label>Loại bìa</label><div class="cover-options"><button class="btn btn-default active cover-option" type="button" data-cover="Bìa mềm" aria-pressed="true">Bìa mềm</button><button class="btn btn-default cover-option" type="button" data-cover="Bìa cứng" aria-pressed="false">Bìa cứng</button></div></div><p class="muted small">Các lựa chọn là minh họa và áp dụng cùng giá bán.</p><div class="purchase-actions"><button class="btn btn-default" type="button" data-toggle="modal" data-target="#contact-modal">Liên hệ cửa hàng</button><button class="btn btn-primary" type="submit"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Thêm vào giỏ</button></div><p id="purchase-feedback" role="status" class="action-feedback"></p></form></div></div></article><section class="review-section" id="comments"><div class="section-title"><h2>Nhận xét bạn đọc</h2><a class="btn btn-default" href="#review-form">Viết nhận xét</a></div><div id="review-list"></div><form id="review-form" class="well"><h3>Chia sẻ cảm nhận của bạn</h3><div class="form-group"><label for="review-name">Tên hiển thị</label><input class="form-control" id="review-name" maxlength="40" value="' + escape(read('reader', 'Bạn đọc')) + '" required></div><label for="review-score">Đánh giá của bạn</label><input id="review-score" type="number" min="0" max="5" step="0.5" value="0"><div class="form-group"><label for="review-text">Nhận xét</label><textarea class="form-control" id="review-text" rows="3" maxlength="1000" required></textarea></div><button class="btn btn-primary" type="submit">Gửi nhận xét</button><p id="review-feedback" role="status" class="action-feedback"></p></form></section><section class="related-products"><h2>Có thể bạn cũng thích</h2><div class="row products">' + books.filter(function (other) { return other.id !== b.id; }).map(card).join('') + '</div></section>');
    var $image = $('.xzoom');
    $image.add($('.xzoom-gallery')).xzoom({ position: 'inside', hover: false, tint: '#fff', tintOpacity: 0.1 });
    $('.gallery-thumbs a').on('click', function () { $image.attr('alt', $(this).find('img').attr('alt')); });
    $('#review-score').rating({ min: 0, max: 5, step: 0.5, size: 'sm', showClear: true, theme: '', filledStar: '<span aria-hidden="true">★</span>', emptyStar: '<span aria-hidden="true">☆</span>', clearButton: '<span aria-hidden="true">×</span>', clearButtonTitle: 'Xóa đánh giá', clearCaption: 'Chưa chọn', starCaptions: function (n) { return n + '/5 sao'; } });
    function showReviews() {
      $('#review-list').html(reviews(b).map(function (r) { return '<article class="reader-review"><div>' + stars(r.score, 'Đánh giá của ' + r.name) + '<strong>' + escape(r.name) + '</strong><span class="muted review-date">' + escape(r.date) + '</span></div><p>' + escape(r.text) + '</p></article>'; }).join(''));
      activateStars();
    }
    showReviews();
    $('#review-form').on('submit', function (event) {
      event.preventDefault();
      var score = Number($('#review-score').val());
      if (!score || score < 0.5 || score > 5) { $('#review-feedback').text('Hãy chọn từ 0,5 đến 5 sao.'); return; }
      var text = $('#review-text').val().trim();
      var name = $('#review-name').val().trim();
      if (!text || !name) { $('#review-feedback').text('Hãy nhập tên hiển thị và nội dung nhận xét.'); return; }
      var list = read('reviews-' + b.id, []); if (!Array.isArray(list)) { list = []; }
      list.push({ name: name, text: text, score: score, date: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }) });
      var saved = write('reviews-' + b.id, list);
      showReviews();
      $('.detail-rating').html(stars(average(b), 'Đánh giá trung bình') + '<a href="#comments">' + reviews(b).length + ' nhận xét</a>'); activateStars();
      $('#review-text').val(''); $('#review-feedback').text(saved ? 'Đã lưu nhận xét trên trình duyệt này.' : 'Đã thêm nhận xét cho lần mở trang này.');
    });
  }
  function getCart() {
    var cart = read('cart', []);
    return Array.isArray(cart) ? cart.filter(function (i) { return i && byId(i.id) && Number.isInteger(i.qty) && i.qty > 0 && i.qty <= byId(i.id).stock; }) : [];
  }
  function cartKey(i) { return i.id + '|' + i.cover + '|' + i.edition; }
  function updateCount() { $('.cart-count').text(getCart().reduce(function (sum, i) { return sum + i.qty; }, 0)); }
  function add(id, qty, binding, edition, feedback) {
    var b = byId(id), cart = getCart();
    var count = cart.filter(function (i) { return i.id === id; }).reduce(function (sum, i) { return sum + i.qty; }, 0);
    if (!b || !Number.isInteger(qty) || qty < 1 || qty + count > b.stock) { $(feedback).text('Số lượng không hợp lệ hoặc vượt tồn kho (đã tính sách trong giỏ).'); return; }
    var entry = { id: id, qty: qty, cover: binding, edition: edition };
    var existing = cart.find(function (i) { return cartKey(i) === cartKey(entry); });
    if (existing) { existing.qty += qty; } else { cart.push(entry); }
    var saved = write('cart', cart); updateCount();
    $(feedback).text('Đã thêm ' + qty + ' cuốn “' + b.name + '” vào giỏ.' + (saved ? '' : ' Giỏ chưa được lưu lâu dài.'));
  }
  function drawCart() {
    var cart = getCart(), total = 0;
    $('#cart-items').html(cart.length ? cart.map(function (i, index) { var b = byId(i.id); total += i.qty * b.price; return '<div class="cart-row"><img src="' + cover(b) + '" alt="' + escape(b.name) + '"><div><strong>' + escape(b.name) + '</strong><p class="muted">' + escape(i.cover) + ' · ' + escape(i.edition) + '</p><span>' + i.qty + ' × ' + money(b.price) + '</span></div><strong>' + money(i.qty * b.price) + '</strong><button class="btn btn-default remove-cart" type="button" data-index="' + index + '" aria-label="Xóa ' + escape(b.name) + ' khỏi giỏ">Xóa</button></div>'; }).join('') : '<p class="well">Giỏ sách đang trống.</p>');
    $('.cart-total').text('Tổng cộng: ' + money(total)); $('#create-order').prop('disabled', !cart.length);
  }
  function orders() {
    $('.orders-nav').addClass('active');
    var list = read('orders', []); if (!Array.isArray(list)) { list = []; }
    var demo = { id: 'GS-MAU-01', date: 'Đơn minh họa ban đầu', status: 'Hoàn thành', message: 'Đơn mẫu đã hoàn thành. Đây là dữ liệu minh họa cho trang trạng thái đơn hàng.', items: [{ id: 'mien-yen', qty: 1, cover: 'Bìa mềm', edition: 'Tiêu chuẩn' }] };
    var all = list.concat([demo]);
    $('#page-content').html('<div class="section-title"><div><p class="eyebrow">GÓC SÁCH CỦA BẠN</p><h1>Trạng thái đơn hàng</h1></div></div><p class="section-intro">Xem sản phẩm, số lượng, thành tiền, trạng thái và thông báo của từng đơn minh họa.</p><p><a href="#cart-modal" data-toggle="modal" class="btn btn-default">Mở giỏ để tạo đơn minh họa</a></p><div id="orders-list">' + all.filter(function (o) { return o && Array.isArray(o.items); }).map(function (o) {
      var rows = o.items.filter(function (i) { return byId(i.id); }).map(function (i) { var b = byId(i.id); return '<div class="row order-product"><div class="col-sm-2 col-xs-3"><img src="' + cover(b) + '" alt="' + escape(b.name) + '"></div><div class="col-sm-4 col-xs-9"><a href="' + detailUrl(b) + '">' + escape(b.name) + '</a><p class="muted small">' + escape(i.cover) + ' · ' + escape(i.edition) + '</p></div><div class="col-sm-1 col-xs-3"><span class="small muted">SL</span><br>' + Number(i.qty) + '</div><div class="col-sm-2 col-xs-5">' + money(b.price * Number(i.qty)) + '</div><div class="col-sm-3 col-xs-4"><span class="label label-' + (o.status === 'Hoàn thành' ? 'success' : 'warning') + '">' + escape(o.status) + '</span></div></div>'; }).join('');
      return '<article class="thumbnail order-card"><div class="order-header"><div><h2>' + escape(o.id) + '</h2><p class="muted small">' + escape(o.date) + '</p></div><button class="btn btn-default order-message" type="button" data-message="' + escape(o.message) + '" data-toggle="modal" data-target="#message-modal">1 thông báo</button></div>' + rows + '</article>';
    }).join('') + '</div>');
  }
  $(function () {
    categoryList(); if (page === 'catalog') { catalog(); } else if (page === 'detail') { detail(); } else { orders(); }
    activateStars(); updateCount();
    $('.reader-name').text(read('reader', 'Đăng nhập thử'));
    $('[data-toggle="tooltip"]').tooltip();
    $(document).on('click', '.quick-add', function () { add($(this).data('book'), 1, 'Bìa mềm', 'Tiêu chuẩn', page === 'catalog' ? '#catalog-feedback' : '#purchase-feedback'); });
    $(document).on('click', '.cover-option', function () { selectedCover = $(this).data('cover'); $('.cover-option').removeClass('active').attr('aria-pressed', 'false'); $(this).addClass('active').attr('aria-pressed', 'true'); });
    $('#purchase-form').on('submit', function (event) { event.preventDefault(); add($(this).data('book'), Number($('#quantity').val()), selectedCover, $('#edition').val(), '#purchase-feedback'); });
    $('#cart-modal').on('show.bs.modal', function () { $('#cart-message').text(''); drawCart(); });
    $(document).on('click', '.remove-cart', function () { var cart = getCart(); cart.splice(Number($(this).data('index')), 1); write('cart', cart); updateCount(); drawCart(); });
    $('#create-order').on('click', function () {
      var cart = getCart(); if (!cart.length) { return; }
      var savedOrders = read('orders', []); if (!Array.isArray(savedOrders)) { savedOrders = []; }
      savedOrders.unshift({ id: 'GS-' + Date.now().toString(36).toUpperCase(), date: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }), status: 'Đang xử lý', message: 'Đã ghi nhận đơn minh họa. Không phát sinh thanh toán hoặc giao hàng thực tế.', items: cart });
      if (!write('orders', savedOrders)) { $('#cart-message').text('Không thể lưu đơn hàng. Giỏ sách vẫn được giữ.'); return; }
      write('cart', []); location.href = 'ecommerce-status.html';
    });
    $('#reader-form').on('submit', function (event) { event.preventDefault(); var name = $('#reader-input').val().trim(); if (!name) { return; } var saved = write('reader', name); $('.reader-name').text(name); if (saved) { $('#reader-modal').modal('hide'); } else { $('#reader-feedback').text('Tên chỉ được lưu trong lần mở trang này.'); } });
    $(document).on('click', '.order-message', function () { $('#order-message').text($(this).attr('data-message')); });
    $('#go-review').on('click', function () { location.hash = 'comments'; });
    $('#reader-modal').on('show.bs.modal', function () { $('#reader-input').val(read('reader', '')); });
  });
}(jQuery));
