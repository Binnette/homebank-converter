var PayMemo = [];

function convertFile(idBank, file) {
  var reader = new FileReader();
  reader.readAsText(file, banks[idBank].encoding);
  reader.onload = function(e) {
    // browser completed reading file - display it
    var inData = e.target.result;
    var outData = convertData(idBank, inData, file.name);
    if (outData) {
      var blob = new Blob([outData], {type: "text/plain;charset=utf-8"});
      filename = getNewFileName(file.name, "converted", ".csv");
      saveAs(blob, filename);
    } else {
      $("#dialog > p").html("File not supported.");
      $("#dialog").dialog("open");
    }
  };
}

function optimizeFile(file) {
  var reader = new FileReader();
  reader.readAsText(file, ENCODINGS[1]);
  reader.onload = function(e) {
    // browser completed reading file - display it
    var inData = e.target.result;
    var outData = optimizeData(inData);
    if (outData) {
      var blob = new Blob([outData], {type: "text/plain;charset=utf-8"});
      filename = getNewFileName(file.name, "optimized", ".xhb");
      saveAs(blob, filename);
    } else {
      $("#dialog > p").html("File not supported.");
      $("#dialog").dialog("open");
    }
  };
}

function getNewFileName(filename, suffix, extension) {
  var index = filename.lastIndexOf(".");
  if (index > 0) {
    var name = filename.substring(0, index);
    filename = name + "_" + suffix + extension;
  } else {
    filename = suffix + extension;
  }
  return filename;
}

function convertData(idBank, data, filename) {
  var bank = banks[idBank];
  if(bank){
    return bank.convert(data, filename);
  } else {
    return null;
  }
}

function optimizeData(data) {
var output = [];
  var lines = data.split("\n");
  for(var i = 0; i < lines.length; i++ ) {
    // remove duplicate spaces
    var line = lines[i].replace(/ +(?= )/g, '');
    // remove spaces after wording="
    line = line.replace(/wording=\"\s/g, 'wording=\"');
    if(line.match(/wording=\"[^\"]*\s\"/g)) {
      // remove spaces before "
      line = line.replace(/\s\"/g, '\"');
    }
    output.push(line);
  }
  return output.join('\n');
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

function initConverter(){
  loadPaymodeJson();
}