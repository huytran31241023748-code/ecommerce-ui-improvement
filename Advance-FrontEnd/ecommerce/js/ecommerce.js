/* global jQuery */
(function ($) {
  'use strict';

  $(function () {
    $('.book-gallery').each(function () {
      var $gallery = $(this);
      var $image = $gallery.find('.xzoom');
      var $thumbs = $gallery.find('.xzoom-gallery');
      $image.add($thumbs).xzoom({
        position: 'inside',
        tint: '#ffffff',
        tintOpacity: 0.15,
        hover: false,
        lens: true,
        zoomWidth: 300,
        zoomHeight: 400
      });

      // Đồng bộ ảnh lớn với thao tác chọn bằng chuột hoặc bàn phím.
      $gallery.find('.gallery-thumbs a').on('click', function (event) {
        event.preventDefault();
        var $thumb = $(this).find('img');
        var full = $(this).attr('href');
        var api = $image.data('xzoom');
        if (api) { api.closezoom(); }
        $image.attr('alt', $thumb.attr('alt'));
        $thumbs.removeClass('xactive');
        $thumb.addClass('xactive');
        $gallery.find('.full-image-link').attr('href', full);
      });
      $thumbs.first().addClass('xactive');
    });

    // Dùng bootstrap-star-rating để tạo toàn bộ các cụm sao.
    $('.sample-stars').rating({
      displayOnly: true,
      showCaption: false,
      showClear: false,
      size: 'xs',
      theme: '',
      filledStar: '<span aria-hidden="true">★</span>',
      emptyStar: '<span aria-hidden="true">☆</span>'
    });

    $('.user-stars').each(function () {
      var $input = $(this);
      var book = $input.attr('data-book');
      var key = 'gocsach:rating:' + book;
      var $feedback = $('#feedback-' + book);
      var saved = null;
      try { saved = localStorage.getItem(key); } catch (error) { /* Cho phép dùng khi chặn lưu trữ. */ }
      if (saved !== null && Number.isFinite(Number(saved)) && Number(saved) >= 0 && Number(saved) <= 5) {
        $input.val(saved);
        $feedback.text('Đánh giá đã lưu trên trình duyệt: ' + saved.replace('.', ',') + '/5 sao.');
      }
      $input.rating({
        min: 0, max: 5, step: 0.5, size: 'sm', theme: '',
        filledStar: '<span aria-hidden="true">★</span>',
        emptyStar: '<span aria-hidden="true">☆</span>',
        showClear: true, clearButtonTitle: 'Xóa đánh giá',
        clearButton: '<span aria-hidden="true">×</span>',
        starCaptions: function (value) { return String(value).replace('.', ',') + '/5 sao'; },
        clearCaption: 'Chưa đánh giá'
      }).on('rating:change', function (event, value) {
        var message = 'Bạn đã chọn ' + String(value).replace('.', ',') + '/5 sao.';
        try {
          localStorage.setItem(key, String(value));
          message += ' Đã lưu trên trình duyệt này.';
        } catch (error) { message += ' Trình duyệt hiện không cho phép lưu đánh giá.'; }
        $feedback.text(message);
      }).on('rating:clear', function () {
        try { localStorage.removeItem(key); } catch (error) { /* Không chặn thao tác xóa. */ }
        $feedback.text('Đã xóa đánh giá của bạn.');
      });
    });
  });
}(jQuery));
