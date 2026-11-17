/* code goes here */
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

document.getElementById("pageTitle").innerHTML = "Even newer title";
msg.value = document.getElementById("first").innerHTML;
msg.value = document.getElementById("first").innerText;
msg.value = "My class is " + msg.getAttribute("class");
// Chọn textarea và các thẻ span theo tên thẻ.
var textareas = document.getElementsByTagName("textarea");
textareas[0].value = "selected by tag name";

var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.length; i++) {
  msg.value += "\n" + spans[i].innerText;
}

// Chọn các bộ đếm theo class.
msg.value = "";
var counts = document.getElementsByClassName("count-number");
for (var i = 0; i < counts.length; i++) {
  msg.value += counts[i].innerText + "\n";
}

// Chọn đoạn văn đầu tiên, rồi thử chọn tất cả đoạn văn trong #first.
var firstParagraph = document.querySelector("#first p");
msg.value = firstParagraph.innerHTML;

var paragraphs = document.querySelectorAll("#first p");
msg.value = "";
for (var i = 0; i < paragraphs.length; i++) {
  msg.value += paragraphs[i].innerHTML + "\n";
}
msg.setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "green";