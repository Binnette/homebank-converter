function hideAll() {
  $("#home").hide();
  $("#converter").hide();
  $("#otherbanks").hide();
  $("#optimizer").hide();
  $("#menuOptimizer").removeClass("active");
  $("#about").hide();
  $("#menuAbout").removeClass("active");
}
function onHomeClick() {
  hideAll();
  $("#home").show();
}
function onOtherBanksClick() {
  hideAll();
  $("#otherbanks").show();
}
function onOptimizerClick() {
  hideAll();
  $("#optimizer").show();
  $("#menuOptimizer").addClass("active");
}
function onAboutClick() {
  hideAll();
  $("#about").show();
  $("#menuAbout").addClass("active");
}