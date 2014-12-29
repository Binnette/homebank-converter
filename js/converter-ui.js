/* Menu event functions */
function hideAll() {
  if ($(".navbar-toggle").css("display") != "none") {
    $('.navbar-collapse').collapse('hide');
  }
  $("#home").hide();
  $("#converter").hide();
  $("#otherbanks").hide();
  $("#optimizer").hide();
  $("#about").hide();
  $("#menuOptimizer").removeClass("active");
  $("#menuAbout").removeClass("active");
}

function onHomeClick() {
  hideAll();
  $("#home").show();
}

function onBankMenuItemClick(id) {
  hideAll();
  resetInputFiles();
  if (id >= 0 && id < banks.length) {
    setSelectedEncoding(banks[id].encoding);
    $("#btnConvert").attr("onclick", "convertClick(" + id + ")");
    $("#bankName").html(banks[id].name);
    $("#supportedFiles").html(banks[id].getSupportedFiles());
    $("#converter").show();
  } else {
    onOtherBanksClick();
  }
}

function onOtherBanksClick() {
  hideAll();
  $("#otherbanks").show();
}

function onOptimizerClick() {
  hideAll();
  resetInputFiles();
  $("#optimizer").show();
  $("#menuOptimizer").addClass("active");
}

function onAboutClick() {
  hideAll();
  $("#about").show();
  $("#menuAbout").addClass("active");
  loadChangelog();
}
/* Common functions */
function resetInputFiles() {
  $("#inputOptimize")[0].value = "";
  onInputOptimizeChange();
  $("#inputConvert")[0].value = "";
  onInputConvertChange();
}

function getInputFile(inputId) {
  return $(inputId)[0].files[0];
}

function isFileValid(file) {
  try {
    return file.size !== undefined && file.size > 0;
  } catch (ex) {
    return false;
  }
}
/* Optimizer functions */
function onInputOptimizeChange() {
  var file = getInputFile("#inputOptimize");
  if (isFileValid(file)) {
    $("#btnOptimize").prop("disabled", false);
  } else {
    $("#btnOptimize").prop("disabled", true);
  }
}

function optimizeClick() {
  var file = getInputFile("#inputOptimize");
  if (isFileValid(file)) {
    optimizeFile(file);
    resetInputFiles();
  } else {
    $("#modalContent p").html("No file selected or selected file is empty.");
    $('#modal').modal();
  }
}
/* Converter functions */
function onInputConvertChange() {
  var file = getInputFile("#inputConvert");
  if (isFileValid(file)) {
    $("#btnConvert").prop("disabled", false);
  } else {
    $("#btnConvert").prop("disabled", true);
  }
}

function getSelectedEncoding() {
  var index = $("#fileEncoding")[0].value;
  return ENCODINGS[index];
}

function setSelectedEncoding(e) {
  var index = ENCODINGS.indexOf(e);
  $("#fileEncoding")[0].value = index;
}

function convertClick(idBank) {
  var file = getInputFile("#inputConvert");
  if (isFileValid(file)) {
    convertFile(idBank, file);
    resetInputFiles()
  } else {
    $("#modalContent p").html("No file selected or selected file is empty.");
    $('#modal').modal();
  }
}
/* UI init functions */
function loadChangelog() {
  if ($("#changelog li").length > 0) {
    return;
  }
  $.getJSON("./res/changelog.json", function (logs) {
    var changelog = $("#changelog");
    for (var i = 0; i < logs.length; i++) {
      var log = logs[i];
      changelog.append($("<li>").append(log.date + " " + log.version + ": " + log.comment));
    }
  });
}

function addBankMenuItem(val, label) {
  var m = $("#dropdownMenu");
  var item = $('<a href="#">');
  item.attr({
    onclick: "onBankMenuItemClick(" + val + "); return false;"
  });
  item.append(label);
  m.prepend($("<li>").append(item));
}

function initMenu() {
  for (var idBank = banks.length - 1; idBank >= 0; idBank--) {
    addBankMenuItem(idBank, banks[idBank].name);
  }
}

function initSelectEncoding() {
  var s = $("#fileEncoding");
  for (var e = 0; e < ENCODINGS.length; e++) {
    s.append("<option value='" + e + "'>" + ENCODINGS[e] + "</option>");
  }
}

function initUi() {
  initMenu();
  initSelectEncoding();
}
$(document).ready(function () {
  initUi();
  initConverter();
});