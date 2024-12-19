$(document).ready(function () {
  $("#academic-timeline").hide();

  $("#academic-timeline-btn").click(function () {
    $("#academic-timeline").show();
    $("#laboral-timeline").hide();
  });

  $("#laboral-timeline-btn").click(function () {
    $("#academic-timeline").hide();
    $("#laboral-timeline").show();
  });
});
