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
  return file.type.length > 0 && file.size > 0;
}

function onInputFileChange() {
  var file = getInputFile();
  if (isFileValid(file)) {
    $("#btnConvert").button("enable");
  } else {
    $("#btnConvert").button("disable");
  }
}

function convertClick() {
  var file = getInputFile();
  if (isFileValid(file)) {
    convertFile(curBank, file);
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
  switch(item){
    case 0:
      $("#criterias").show();
      setSelectedEncoding(BANKS[0].encoding);
      break;
    case 99:
      $("#about").show();
      break;
    default:
      $("#notsupported").show();
      break;
  }
  setCurrentBank(item);
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
  for (var b = 0; b < BANKS.length; b++) {
    initItemMenu(b, BANKS[b].name);
  }
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