

// http://encoding.spec.whatwg.org/#names-and-labels
var ENCODINGS = [
"ascii" , "utf-8"
];

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
      filename = getConvertedFileName(file.name);
      saveAs(blob, filename);
    } else {
      $("#dialog > p").html("File not supported.");
      $("#dialog").dialog("option", "title", "Error").dialog("open");
    }
  };
}

function getConvertedFileName(filename) {
  var conv = "converted";
  var index = filename.lastIndexOf(".");
  if(index === 0) {
    filename = conv + filename;
  } else if (index > 0) {
    var name = filename.substring(0, index);
    filename = name + "_" + conv + ".csv";
  } else {
    filename += "_" + conv;
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