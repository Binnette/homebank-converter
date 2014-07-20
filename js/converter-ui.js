var menuItem = {
  Other: { label: "Other banks", value: 100},
  Optimizer: { label: "XHB optimizer", value: 101},
  About: { label: "About", value: 200}
};

function getSelectedEncoding() {
  var index = $("#fileEncoding")[0].value;
  return ENCODINGS[index];
}

function setSelectedEncoding(e) {
  var index = ENCODINGS.indexOf(e);
  $("#fileEncoding")[0].value = index;
  $("#fileEncoding").selectmenu("refresh");
}

function getInputFile() {
  return $("#inputFile")[0].files[0];
}

function isFileValid(file) {
  try {
    return  file.size !== undefined && file.size > 0;
  } catch(ex) {
    return false;
  }
}

function onInputFileChange() {
  var file = getInputFile();
  if (isFileValid(file)) {
    $("#btnConvert").button("enable");
    $("#btnOptimize").button("enable");
  } else {
    $("#btnConvert").button("disable");
    $("#btnOptimize").button("disable");
  }
}

function convertClick(idBank) {
  var file = getInputFile();
  if (isFileValid(file)) {
    convertFile(idBank, file);
  } else {
    $("#dialog > p").html("No file selected.");
    $("#dialog").dialog("open");
  }
}

function optimizeClick() {
  var file = getInputFile();
  if (isFileValid(file)) {
    optimizeFile(file);
  } else {
    $("#dialog > p").html("No file selected.");
    $("#dialog").dialog("open");
  }
}

function initSelectEncoding() {
  var s = $("#fileEncoding");
  for (var e = 0; e < ENCODINGS.length; e++) {
    s.append("<option value='" + e + "'>" + ENCODINGS[e] + "</option>");
  }
  s.selectmenu();
}

function showConvertCriterias(display) {
  $("#encodingCriteria").css("display", display ? "" : "none");
  $("#convertCriteria").css("display", display ? "" : "none");
  $("#optimizeCriteria").css("display", display ? "none" : "");
  $("#criterias").show();
}

function menuItemClick(item) {
  menuItemSelect(item);
  $("#criterias").hide();
  $("#notsupported").hide();
  $("#optimizer").hide();
  $("#about").hide();
  $("#inputFile")[0].value = "";
  onInputFileChange();
  if(item >= 0 && item <= banks.length) {
    $("#btnConvert").attr("onclick", "convertClick("+item+")");
    setSelectedEncoding(banks[item].encoding);
    $("#bankName").html(banks[item].name);
    $("#supportedFiles").html(banks[item].getSupportedFiles());
    showConvertCriterias(true);
  } else if (item === menuItem.Optimizer.value) {
    $("#bankName").html("XHB Converter");
    $("#supportedFiles").html("xhb");
    showConvertCriterias(false);
  } else if (item === menuItem.About.value) {
    $("#about").show();
  } else {
    $("#notsupported").show();
  }
}

function menuItemSelect(i) {
  $("#menu > li > span").each(function() {
    $( this ).removeClass("ui-icon-triangle-1-e");
  });
  $("#menu > li[value='"+i+"'] > span").addClass("ui-icon-triangle-1-e");
}

function initItemMenu(val, label) {
  var m = $("#menu");
  var item = $("<li>").addClass("ui-corner-all")
  .attr({ value : val, onclick : "menuItemClick(this.value)" });
  item.append($("<span>").addClass("ui-icon ui-icon-blank"));
  item.append(label);
  m.append(item);
}

function initSeparatorMenu() {
  $("#menu").append($("<li>"));
}

function initMenu() {
  for (var idBank = 0; idBank < banks.length; idBank++) {
    initItemMenu(idBank, banks[idBank].name);
  }
  initItemMenu(menuItem.Other.value, menuItem.Other.label);
  initSeparatorMenu();
  initItemMenu(menuItem.Optimizer.value, menuItem.Optimizer.label);
  initItemMenu(menuItem.About.value, menuItem.About.label);
}

function initChangelog() {
  var file = "./res/changelog.json";
  $.getJSON(file, function(logs) {
    var changelog = $("#changelog");
    for(var i=0; i < logs.length; i++){
      var log = logs[i];
      changelog.append($("<li>").append(log.date + " " + log.version + ": " + log.comment));
    }
  });
}

function initUi() {
  initMenu();
  $("#menu").menu();
  $("#btnBrowse").button({ icons: { primary: "ui-icon-folder-open" } });
  $("#btnBrowseOpt").button({ icons: { primary: "ui-icon-folder-open" } });
  $("#inputFile").change(onInputFileChange);
  $("#inputFileOpt").change(onInputFileChange);
  $("#btnConvert").button({ disabled: true, icons: { primary: "ui-icon-gear" } });
  $("#btnOptimize").button({ disabled: true, icons: { primary: "ui-icon-gear" } });
  initSelectEncoding();
  initChangelog();
  $("#dialog").dialog({
    modal: true,
    autoOpen: false,
    title: "Error",
    buttons: [{
      text: "Ok",
      click: function() {
        $( this ).dialog("close");
      }
    }]
  });
}

$( document ).ready(function() {
  initUi();
  initConverter();
});