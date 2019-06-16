// http://encoding.spec.whatwg.org/#names-and-labels
var ENCODINGS = ["ascii", "utf-8"];

function getBankIndexByName(name) {
  var res;
  banks.forEach(function(b, i) {
    if (b.name === name) {
      res = i;
    }
  });
  return res;
}

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
  if (index < 0) {
    throw "Input file must have an extension. Ex: myfile.csv";
  }
  var extension = filename.substring(index + 1, filename.length);
  extension = extension.toLowerCase();
  var separator = separators[extension];
  if (separator) {
    return separator;
  }
  throw "Input file must have a supported file extension";
}

function convert(data, filename) {
  var status = true, outData = "", message = "", errors = [];
  try {
    data = data.replace(/\r\n/g, "\n");
    var lines = data.split("\n");
    var headSeparator = getSeparator(filename, this.headSeparators);
    var firstRow = getLineNumOfFirstDataRow(lines, this.firstField + headSeparator);
    // Loop through data rows
    var output = [];
    var separator = getSeparator(filename, this.separators);
    for (var i = firstRow; i < lines.length; i++) {
      try {
        if(lines[i]) {
          var fields = lines[i].split(separator);
          if (fields.length >= this.minFieldCount) {
            output.push(this.convertLine(fields));
          } else {
            throw "Line does not have enough fields. Found: " + fields.length + ". Minimum: " + this.minFieldCount + ".";
          }
        }
      } catch (ex) {
        errors.push("Error on line: " + (i + 1) + ". " + ex);
      }
    }

    if (output.length <= 0) {
      throw "No data was converted.";
    }
    output.unshift("date;paymode;info;payee;memo;amount;category;tags");
    outData = output.join('\n');
  } catch (ex){
    status = false;
    message = ex;
  }
  return {
        status: status,
        data: outData,
        message: message,
        errors: errors
      };
}

function convertBanquePostale(fields) {
  var date = moment(fields[0], 'DD/MM/YYYY');
  if (!date.isValid()) {
    throw new Error("Invalid date: " + fields[0]);
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
    throw new Error("Invalid date: " + fields[0]);
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
    throw new Error("Invalid date: " + fields[1]);
  }
  date = date.format('MM-DD-YY');
  var memo = "";
  memo += fields[7];
  memo = trimMemo(memo);
  var amount = fields[8];
  return (date + ";;;;" + trimMemo(memo) + ";" + amount + ";;");
}

function convertBnpParibasFortis(fields) {
  var date = moment(fields[1], 'DD/MM/YYYY');
  if (!date.isValid()) {
    throw new Error("Invalid date: " + fields[1]);
  }
  date = date.format('MM-DD-YY');
  var memo = "";
  memo += addSymbol(trimMemo(fields[5]), ", ");
  memo += fields[6]
  var paymode = getPayModeFromMemo(memo.toUpperCase());
  var amount = fields[3];
  return (date + ";" + paymode + ";;;" + trimMemo(memo) + ";" + amount + ";;");
}

function bank(name, encoding, firstField, minFieldCount, convertLine, separators, headSeparators) {
  // default
  this.convert = convert;
  this.getSupportedFiles = getSupportedFiles;
  // customs
  this.name = name;
  this.encoding = encoding;
  this.firstField = firstField;
  this.minFieldCount = minFieldCount;
  this.convertLine = convertLine;
  this.separators = separators;
  this.headSeparators = separators;
  if (headSeparators) this.headSeparators = headSeparators;
}

var banks = [];
banks.push(new bank("Banque Postale", "ascii", "Date", 3, convertBanquePostale, { "csv": ";", "tsv": "\t" }, null));
banks.push(new bank("BNP Paribas Fortis", "ascii", "Numéro de séquence", 8, convertBnpParibasFortis, { "csv": ";" }, null));
banks.push(new bank("Boobank", "utf-8", "id", 9, convertBoobank, { "csv": ";" }, null));
banks.push(new bank("PayPal", "ascii", "Date", 16, convertPaypal, { "csv": '","', "txt": '"\t"' }, { "csv": ',', "txt": '\t' }));
