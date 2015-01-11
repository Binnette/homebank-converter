// http://encoding.spec.whatwg.org/#names-and-labels
var ENCODINGS = ["ascii", "utf-8"];

function getSupportedFiles() {
  var supp = "";
  for (var id in this.separators) {
    if (this.separators.hasOwnProperty(id)) {
      supp += addSymbol(id, ", ");
    }
  }
  return trimSymbol(supp, ", ");
}

function getLineNumOfFirstDataRow(lines, header) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.indexOf(header) === 0) {
      return i + 1;
    }
  }
  return 0;
}

function addSymbol(str, symbol) {
  return (str.length > 0 ? str + symbol : "");
}

function trimSymbol(str, symbol) {
  var sl = symbol.length;
  if (str.indexOf(symbol) === 0) {
    str = str.substring(sl, str.length);
  }
  if (str.lastIndexOf(symbol) === str.length - sl) {
    str = str.substring(0, str.length - sl);
  }
  return str;
}

function trimMemo(memo) {
  memo = memo.replace(/ +(?= )/g, '');
  return $.trim(memo);
}

function getSeparator(filename, separators) {
  var index = filename.lastIndexOf(".");
  if (index >= 0) {
    var extension = filename.substring(index + 1, filename.length);
    extension = extension.toLowerCase();
    var separator = separators[extension];
    if (separator) {
      return separator;
    }
  }
  return;
}

function convert(data, filename) {
  var output = [];
  output.push("date;paymode;info;payee;memo;amount;category;tags");
  var lines = data.split(this.lineBreak);
  var separator = getSeparator(filename, this.separators);
  if (separator === undefined || separator.length <= 0) {
    return;
  }
  var first = getLineNumOfFirstDataRow(lines, this.firstField + separator);
  // Loop through data rows
  for (var i = first; i < lines.length; i++) {
    var fields = lines[i].split(separator);
    if (fields.length >= this.minFieldCount) {
      output.push(this.convertLine(fields));
    }
  }
  return output.join('\r\n');
}

function convertBanquePostale(fields) {
  var date = moment(fields[0], 'DD/MM/YYYY');
  if (!date.isValid()) {
    return;
  }
  date = date.format('MM-DD-YY');
  var memo = trimSymbol(fields[1], '"');
  var paymode = getPayModeFromMemo(memo.toUpperCase());
  var amount = fields[2];
  return (date + ";" + paymode + ";;;" + trimMemo(memo) + ";" + amount + ";;");
}

function convertPaypal(fields) {
  var date = moment(fields[0], 'DD/MM/YYYY');
  if (!date.isValid()) {
    return;
  }
  date = date.format('MM-DD-YY');
  var memo = "";
  memo += addSymbol(fields[15], ", ");
  memo += addSymbol(fields[4], ", ");
  memo += addSymbol(fields[3], ", ");
  memo += addSymbol(fields[12], ", ");
  memo += fields[6];
  var amount = fields[9];
  return (date + ";;;;" + trimMemo(memo) + ";" + amount + ";;");
}

function convertBoobank(fields) {
  var date = moment(fields[1], 'YYYY-MM-DD');
  if (!date.isValid()) {
    return;
  }
  date = date.format('MM-DD-YY');
  var memo = "";
  memo += fields[7];
  memo = trimMemo(memo);
  var amount = fields[8];
  return (date + ";;;;" + trimMemo(memo) + ";" + amount + ";;");
}

function bank(name, encoding, firstField, minFieldCount, lineBreak, separators, convertLine) {
  this.name = name;
  this.encoding = encoding;
  this.firstField = firstField;
  this.minFieldCount = minFieldCount;
  this.lineBreak = lineBreak;
  this.separators = separators;
  this.convert = convert;
  this.convertLine = convertLine;
  this.getSupportedFiles = getSupportedFiles;
}

var banks = [];
banks.push(new bank("Banque Postale", "ascii", "Date", 3, "\r\n", {
  "csv": ";",
  "tsv": "\t"
}, convertBanquePostale));
banks.push(new bank("Boobank", "utf-8", "id", 9, "\n", {
  "csv": ";"
}, convertBoobank));
banks.push(new bank("PayPal", "ascii", "Date", 16, "\r\n", {
  "csv": '","',
  "txt": '"\t"'
}, convertPaypal));