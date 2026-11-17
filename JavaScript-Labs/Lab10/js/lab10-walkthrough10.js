$(function () {
  var loading = $(".animLoading").hide();
  var list = $("#results ul");

  $("#consume").on("click", function () {
    var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
    loading.show();
    list.empty();

    $.get(url, null, null, "json")
      .done(function (cities) {
        $.each(cities, function (index, city) {
          $("<li>").text(city.name).appendTo(list);
        });
      })
      .fail(function (xhr, status) {
        alert("Failed loading data - status=" + status);
      })
      .always(function () {
        loading.fadeOut("slow");
      });
  });
});