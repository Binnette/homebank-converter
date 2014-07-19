// http://encoding.spec.whatwg.org/#names-and-labels
var ENCODINGS = ["ascii", "utf-8"];

function Bank(name, encoding, firstField, minFieldCount, separators, convertLine){
  this.name = name;
  this.encoding = encoding;
  this.firstField = firstField;
  this.minFieldCount = minFieldCount;
  this.separators = separators;
  this.convert = convert;
  this.convertLine = convertLine;
  this.getSupportedFiles = getSupportedFiles;
}

var banks = [];
banks.push(new Bank("Banque Postale", "ascii", "Date", 3, { "csv": ";", "tsv": "\t"}, convertBanquePostale));
banks.push(new Bank("PayPal", "ascii", "Date", 16, { "csv": '","', "txt": '"\t"'}, convertPaypal));

function getSupportedFiles() {
  var supp = "";
  for (var id in this.separators) {
    if (this.separators.hasOwnProperty(id)) {
      supp += addSymbol(id, ", ");
    }
  }
  return trimSymbol(supp, ", ");
}

function formatDate(d) {
  d = trimSymbol(d, '"');
  var date = d.substring(0, 2);
  date += "-" + d.substring(3, 5);
  date += "-" + d.substring(8, 10);
  return date;
}

function getLineNumOfFirstDataRow(lines, header) {
  for(var i = 0 ; i < lines.length ; i++ ) {
    var line = lines[i];
    if (line.indexOf(header) === 0){
      return i+1;
    }
  }
  return 0;
}

function trimSymbol(str, symbol) {
  var sl = symbol.length;
  if(str.indexOf(symbol) === 0) {
    str = str.substring(sl, str.length);
  }
  if(str.lastIndexOf(symbol) === str.length - sl) {
    str = str.substring(0, str.length - sl);
  }
  return str;
}

function getSeparator(filename, separators) {
  var index = filename.lastIndexOf(".");
  if(index >=0) {
    var extension = filename.substring(index+1, filename.length);
    extension = extension.toLowerCase();
    var separator = separators[extension];
    if(separator) {
      return separator;
    }
  }
  return "";
}

function convert(data, filename) {
  var output = [];
  output.push("date;paymode;info;payee;memo;amount;category;tags");
  var lines = data.split("\r\n");
  var separator = getSeparator(filename, this.separators);
  if (separator === undefined || separator.length <= 0) {
    return;
  }
  var first = getLineNumOfFirstDataRow(lines, this.firstField + separator);
  // Loop through data rows
  for(var i = first; i < lines.length; i++ ) {
    var fields = lines[i].split(separator);
    if(fields.length >= this.minFieldCount) {
      output.push(this.convertLine(fields));
    }
  }
  return output.join('\r\n');
}

function convertBanquePostale(fields) {
  var date = formatDate(fields[0]);
  var memo = trimSymbol(fields[1], '"');
  var paymode = getPayModeFromMemo(memo.toUpperCase());
  memo = memo.replace(/ +(?= )/g,'');
  memo = $.trim(memo);
  var amount = fields[2];
  return (date + ";" + paymode + ";;;" + memo + ";" + amount + ";;");
}

function addSymbol(str, symbol) {
  return (str.length > 0 ? str + symbol : "");
}

function convertPaypal(fields) {
  var date = formatDate(fields[0]);
  var memo = "";
  memo += addSymbol(fields[15], ", ");
  memo += addSymbol(fields[4], ", ");
  memo += addSymbol(fields[3], ", ");
  memo += addSymbol(fields[12], ", ");
  memo += fields[6];
  memo = memo.replace(/ +(?= )/g,'');
  memo = $.trim(memo);
  var amount = fields[9];
  return (date + ";;;;" + memo + ";" + amount + ";;");
}