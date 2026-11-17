
/* add code here */
var daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri"];
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write('<table border="1" cellpadding="6">');
document.write("<thead><tr>");

for (var column = 0; column < daysOfWeek.length; column++) {
  var dayName = daysOfWeek[column];

  if (dayName.length > 3) {
    dayName = "<em>" + dayName + "</em>";
  }

  document.write('<th scope="col">' + dayName + "</th>");
}

document.write("</tr></thead><tbody>");

for (var weekStart = 1; weekStart <= 30; weekStart += daysOfWeek.length) {
  document.write("<tr>");

  for (var dayOffset = 0; dayOffset < daysOfWeek.length; dayOffset++) {
    var date = weekStart + dayOffset;
    document.write("<td>" + (date <= 30 ? date : "") + "</td>");
  }

  document.write("</tr>");
}

document.write("</tbody></table>");