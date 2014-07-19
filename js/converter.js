var BANKS = [
{ "name" : "Banque Postale", "encoding" : "ascii"  },
{ "name" : "Other"        , "encoding" : "ascii"  }
];

// http://encoding.spec.whatwg.org/#names-and-labels
var ENCODINGS = [
"ascii" , "utf-8"
];

var PayMemo = [];

var curBank = 0;

function setCurrentBank(bank) {
  curBank = bank;
}

function convertFile(bank, file) {
  var reader = new FileReader();
  reader.readAsText(file, BANKS[bank].encoding);
  reader.onload = function(e) {
    // browser completed reading file - display it
    var inData = e.target.result;
    var separator = getSeparator(file.name);
    var outData = convertData(bank, inData, separator);
    var blob = new Blob([outData], {type: "text/plain;charset=utf-8"});
    filename = getConvertedFileName(file.name);
    saveAs(blob, filename);
  };
}

function getSeparator(filename) {
  var index = filename.lastIndexOf(".");
  if(index >=0) {
    var extension = filename.substring(index+1, filename.length);
    extension = extension.toUpperCase();
    switch (extension) {
      case "TSV" :
        return '\t';
      case "CSV" :
      default :
        return ";";
    }
  }
}

function getConvertedFileName(filename) {
  var conv = "converted";
  var index = filename.lastIndexOf(".");
  if(index === 0) {
    filename = conv + filename;
  } else if (index > 0) {
    var name = filename.substring(0, index);
    var extension = filename.substring(index, filename.length);
    filename = name + "_" + conv + extension;
  } else {
    filename += "_" + conv;
  }
  return filename;
}

function convertData(bank, data, separator) {
  switch(bank) {
    case 0 :
      return convertBanquePostale(data, separator);
    default:
      $("#dialog > p").html("File not supported.");
      $("#dialog").dialog("option", "title", "Error").dialog("open");
      break;
  }
}

function getPayModeFromMemo(memo) {
  for(var i=0; i<PayMemo.length; i++){
    var memos = PayMemo[i].memos;
    for(var j=0; j<memos.length; j++) {
      if(memo.indexOf(memos[j]) > -1){
        return PayMemo[i].Index;
      }
    }
  }
  return "";
}

function loadPaymodeJson(){
  var file = "res/labelAndPaymode.json";
  $.getJSON(file, function(data) {
    PayMemo = data.PayMemo;
  });
}

function trimQuotes(str) {
  if(str.indexOf('"') === 0) {
    str = str.substring(1, str.length);
  }
  if(str.indexOf('"') === str.length-1) {
    str = str.substring(0, str.length-1);
  }
  return str;
}

function convertBanquePostale(data, separator) {
  var output = [];
  output.push("date;paymode;info;payee;memo;amount;category;tags");
  // Obtain the read file data
  var lines = data.split("\r\n");
  var line = "";
  var state = 1;
  // 1 -> read untill headers
  // 0 -> read transaction line
  for(var i = 0 ; i < lines.length ; i++ ) {
    line = lines[i];
    if(state) {
      if (line.indexOf("Date"+separator) === 0){
        state = 0;
      }
    }
    else if (line.length > 0)
    {
      var fields = line.split(separator);
      var date = fields[0].substring(0, 2);
      date += "-" + fields[0].substring(3, 5);
      date += "-" + fields[0].substring(8, 10);
      var memo = trimQuotes(fields[1]);
      var paymode = getPayModeFromMemo(memo.toUpperCase());
      memo = memo.replace(/ +(?= )/g,'');
      memo = $.trim(memo);
      var amount = fields[2];
      output.push(date + ";" + paymode + ";;;" + memo + ";" + amount + ";;");
    }
  }
  return output.join('\r\n');
}

function initConverter(){
  loadPaymodeJson();
}