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
  } else {
    $("#btnConvert").button("disable");
  }
}

function convertClick(idBank) {
  var file = getInputFile();
  if (isFileValid(file)) {
    convertFile(idBank, file);
  } else {
    $("#dialog > p").html("No file selected.");
    $("#dialog").dialog("option", "title", "Error").dialog("open");
  }
}

function initSelectEncoding() {
  var s = $("#fileEncoding");
  for (var e = 0; e < ENCODINGS.length; e++) {
    s.append("<option value='" + e + "'>" + ENCODINGS[e] + "</option>");
  }
  s.selectmenu();
}

function menuItemClick(item) {
  menuItemSelect(item);
  $("#notsupported").hide();
  $("#criterias").hide();
  $("#about").hide();
  if(item >= 0 && item <= banks.length) {
    setSelectedEncoding(banks[item].encoding);
    $("#btnConvert").attr("onclick", "convertClick("+item+")");
    $("#bankName").html(banks[item].name);
    $("#supportedFiles").html(banks[item].getSupportedFiles());
    $("#criterias").show();
  } else if (item === 99) {
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

function initMenu() {
  for (var idBank = 0; idBank < banks.length; idBank++) {
    initItemMenu(idBank, banks[idBank].name);
  }
  initItemMenu("98", "Other bank");
  initItemMenu("99", "About");
}

function initChangelog() {
  var file = "changelog.txt";
  $.get(file, function( data ) {
    var lines = data.split("\r");
    var changelog = $("#changelog");
    for(var i=0; i < lines.length; i++){
      changelog.append($("<li>").append(lines[i]));
    }
  });
}

function initUi() {
  initMenu();
  $("#menu").menu();
  $("#btnBrowse").button({ icons: { primary: "ui-icon-folder-open" } });
  $("#inputFile").change(onInputFileChange);
  $("#btnConvert").button({ disabled: true, icons: { primary: "ui-icon-gear" } });
  initSelectEncoding();
  initChangelog();
  $("#dialog").dialog({
    modal: true,
    autoOpen: false,
    //width: 260,
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