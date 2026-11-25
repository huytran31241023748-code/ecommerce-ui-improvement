/* Chạy trên trang môn học Moodle đã đăng nhập, trong Console.
 * Mã chỉ đọc tên chủ đề, tên bài tập và ngày Due; không nộp bài,
 * không đổi trạng thái hoàn thành, không gửi dữ liệu ra ngoài.
 */
(function () {
  'use strict';

  function run($) {
    function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
    function assignmentName(element) {
      var $item = $(element);
      var declared = $item.find('[data-activityname]').first().attr('data-activityname');
      if (declared) { return clean(declared); }
      var $name = $item.find('.instancename').first().clone();
      $name.find('.accesshide, .sr-only').remove();
      return clean($name.text());
    }
    function deadline(element) {
      var dates = [];
      $(element).find('[data-region="activity-dates"] > div').each(function () {
        var label = clean($(this).find('strong').first().text());
        if (/^(Due|Đến hạn|Hạn nộp)\s*:/i.test(label)) {
          dates.push(clean($(this).text()).replace(/^(Due|Đến hạn|Hạn nộp)\s*:\s*/i, ''));
        }
      });
      return dates.join('; ') || 'Không hiển thị hạn nộp trên trang môn học';
    }

    // eq() đếm từ 0: phần tử có chỉ số 4 là bài nộp thứ 5.
    var $allAssignments = $('.modtype_assign');
    var $fifth = $allAssignments.eq(4);
    console.log('YÊU CẦU 1 — Bài nộp thứ 5:',
      $fifth.length ? assignmentName($fifth) : 'Trang có ít hơn 5 bài tập');

    var rows = [];
    $('li.section').each(function () {
      var $section = $(this);
      var title = clean($section.find('.sectionname').first().text()) || this.id;
      var $assignments = $section.find('.modtype_assign');
      if (!$assignments.length) {
        rows.push({ 'Chủ đề': title, 'Có bài tập': 'Không', 'Tên bài tập': '—', 'Hạn nộp': '—' });
        return;
      }
      $assignments.each(function () {
        rows.push({
          'Chủ đề': title,
          'Có bài tập': 'Có',
          'Tên bài tập': assignmentName(this),
          'Hạn nộp': deadline(this)
        });
      });
    });
    console.log('YÊU CẦU 2 — Chủ đề, bài tập và hạn nộp');
    console.table(rows);
    console.log('Tổng số bài tập theo .modtype_assign:', $allAssignments.length);
    console.log('Không hiển thị hạn nộp không đồng nghĩa với không có hạn nộp.');
    return { fifthAssignment: $fifth.length ? assignmentName($fifth) : null, rows: rows };
  }

  if (typeof window.jQuery === 'function') {
    run(window.jQuery);
  } else if (typeof window.require === 'function') {
    // Moodle thường quản lý jQuery bằng AMD thay vì biến $ toàn cục.
    window.require(['jquery'], run, function (error) {
      console.error('Không nạp được jQuery qua Moodle AMD:', error);
    });
  } else {
    console.error('Trang chưa có jQuery hoặc bộ nạp AMD. Hãy mở đúng trang môn học Moodle.');
  }
}());
