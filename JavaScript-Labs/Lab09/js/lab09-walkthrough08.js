/* code goes here */
window.addEventListener("load", function () {
  var form = document.getElementById("sampleForm");
  form.addEventListener("submit", checkForEmptyFields);
});

function checkForEmptyFields(event) {
    var errorArea = document.getElementById("errors");
errorArea.className = "hidden";
  var fields = event.currentTarget.querySelectorAll(
    'input[type="text"], input[type="password"]'
  );
  var emptyFields = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value.trim() === "") {
      emptyFields.push(fields[i].id);
    }
  }

  if (emptyFields.length > 0) {
    event.preventDefault();
    errorArea.innerHTML =
  "<p>The following fields can't be empty: " + emptyFields.join(", ") + "</p>";
errorArea.className = "visible";
  }
}