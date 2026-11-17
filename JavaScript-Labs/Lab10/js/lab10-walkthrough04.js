/* put your event code here */
$(function () {
  $(".panel")
    .on("mousemove", function (event) {
      $("#message").html("x=" + event.pageX + " y=" + event.pageY);
    })
    .on("mouseleave", function () {
      $("#message").html("goodbye!");
    })
    .on("click", function () {
      $("#message").html("stopped move reporting");
      $(this).off("mousemove");
    });
});