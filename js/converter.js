var PayMemo = [];

function convertFile(idBank, file, endConvertCallback) {
  var reader = new FileReader();
  reader.readAsText(file, banks[idBank].encoding);
  reader.onload = function (e) {
      var result = convertData(idBank, e.target.result, file.name);
      if (result.status) {
        saveFile(result.data, file.name, "converted", ".csv");
      }
      endConvertCallback(result);
  };
}

function optimizeFile(file, errorCallback) {
  var reader = new FileReader();
  reader.readAsText(file, ENCODINGS[1]);
  reader.onload = function (e) {
    try {
      var outData = optimizeData(e.target.result);
      saveFile(outData, file.name, "optimized", ".xhb");
    } catch (ex) {
      errorCallback(ex); 
    }
  };
}

function saveFile(outData, curfilename, suffix, extension) {
    var blob = new Blob([outData], {
      type: "text/plain;charset=utf-8"
    });
    var filename = getNewFileName(curfilename, suffix, extension);
    saveAs(blob, filename);
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
  if (bank) {
    return bank.convert(data, filename);
  }
  throw "Can not find bank for idBank=" + idBank;
}

function optimizeData(data) {
  var output = [];
  var lines = data.split("\n");
  for (var i = 0; i < lines.length; i++) {
    // remove duplicate spaces
    var line = lines[i].replace(/ +(?= )/g, '');
    // remove spaces after wording="
    line = line.replace(/wording=\"\s/g, 'wording=\"');
    if (line.match(/wording=\"[^\"]*\s\"/g)) {
      // remove spaces before "
      line = line.replace(/\s\"/g, '\"');
    }
    output.push(line);
  }
  return output.join('\n');
}

function getPayModeFromMemo(memo) {
  var i, j;
  for (i = 0; i < PayMemo.length; i++) {
    var memos = PayMemo[i].memos;
    for (j = 0; j < memos.length; j++) {
      if (new RegExp(memos[j]).exec(memo)) {
        return PayMemo[i].Index;
      }
    }
  }
  return "";
}

function loadPaymodeJson(callback) {
  var file = "./res/labelAndPaymode.json";
  $.getJSON(file, function (data) {
    PayMemo = data.PayMemo;
    if (callback && typeof (callback) === "function") {
      callback();
    }
  });
}

function initConverter(callback) {
  loadPaymodeJson(callback);
}
