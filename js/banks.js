import moment from 'moment/moment';
import {getPayModeFromMemo} from './converter';

// http://encoding.spec.whatwg.org/#names-and-labels
export const ENCODINGS = ['ascii', 'utf-8'];

export function getBankIndexByName(name) {
  let bank;
  banks.forEach((b, i) => {
    if (b.name === name) {
      bank = i;
    }
  });
  return bank;
}

function getSupportedFiles() {
  return Object.keys(this.separators).join(', ');
}

function getLineNumOfFirstDataRow(lines, header) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.indexOf(header) === 0) {
      return i + 1;
    }
  }

  return 0;
}

function addSymbol(str, symbol) {
  return (str.length > 0 ? str + symbol : '');
}

function trimSymbol(str, symbol) {
  const sl = symbol.length;
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
  return memo.trim();
}

function getSeparator(filename, separators) {
  const index = filename.lastIndexOf('.');
  if (index < 0) {
    throw new Error('Input file must have an extension. Ex: myfile.csv');
  }

  let extension = filename.substring(index + 1, filename.length);
  extension = extension.toLowerCase();
  const separator = separators[extension];
  if (separator) {
    return separator;
  }

  throw new Error('Input file must have a supported file extension');
}

function convert(data, filename) {
  let status = true;
  let outData = '';
  let message = '';
  const errors = [];
  try {
    data = data.replace(/\r\n/g, '\n');
    const lines = data.split('\n');
    const headSeparator = getSeparator(filename, this.headSeparators);
    const firstRow = getLineNumOfFirstDataRow(lines, this.firstField + headSeparator);
    // Loop through data rows
    const output = [];
    const separator = getSeparator(filename, this.separators);
    for (let i = firstRow; i < lines.length; i++) {
      if (!lines[i]) {
        continue;
      }

      try {
        const fields = lines[i].split(separator);
        if (fields.length >= this.minFieldCount) {
          output.push(this.convertLine(fields));
        } else {
          throw new Error('Line does not have enough fields. Found: ' + fields.length + '. Minimum: ' + this.minFieldCount + '.');
        }
      } catch (ex) {
        errors.push('Error on line: ' + (i + 1) + '. ' + ex);
      }
    }

    if (output.length <= 0) {
      throw new Error('No data was converted.');
    }

    output.unshift('date;paymode;info;payee;memo;amount;category;tags');
    outData = output.join('\n');
  } catch (ex) {
    status = false;
    message = ex;
  }

  return {
    status,
    data: outData,
    message,
    errors,
  };
}

export function convertBanquePostale(fields) {
  let date = moment(fields[0], 'DD/MM/YYYY');
  if (!date.isValid()) {
    throw new Error('Invalid date: ' + fields[0]);
  }

  date = date.format('MM-DD-YY');
  const memo = trimSymbol(fields[1], '"');
  const paymode = getPayModeFromMemo(memo.toUpperCase());
  const amount = fields[2];
  return (date + ';' + paymode + ';;;' + trimMemo(memo) + ';' + amount + ';;');
}

export function convertPaypal(fields) {
  let date = moment(fields[0], 'DD/MM/YYYY');
  if (!date.isValid()) {
    throw new Error('Invalid date: ' + fields[0]);
  }

  date = date.format('MM-DD-YY');
  let memo = '';
  memo += addSymbol(fields[15], ', ');
  memo += addSymbol(fields[4], ', ');
  memo += addSymbol(fields[3], ', ');
  memo += addSymbol(fields[12], ', ');
  memo += fields[6];
  const amount = fields[9];
  return (date + ';;;;' + trimMemo(memo) + ';' + amount + ';;');
}

export function convertBoobank(fields) {
  let date = moment(fields[1], 'YYYY-MM-DD');
  if (!date.isValid()) {
    throw new Error('Invalid date: ' + fields[1]);
  }

  date = date.format('MM-DD-YY');
  let memo = '';
  memo += fields[7];
  memo = trimMemo(memo);
  const amount = fields[8];
  return (date + ';;;;' + trimMemo(memo) + ';' + amount + ';;');
}

function convertBnpParibasFortis(fields) {
  let date = moment(fields[1], 'DD/MM/YYYY');
  if (!date.isValid()) {
    throw new Error('Invalid date: ' + fields[1]);
  }

  date = date.format('MM-DD-YY');
  let memo = '';
  memo += addSymbol(trimMemo(fields[5]), ', ');
  memo += fields[6];
  const paymode = getPayModeFromMemo(memo.toUpperCase());
  const amount = fields[3];
  return (date + ';' + paymode + ';;;' + trimMemo(memo) + ';' + amount + ';;');
}

class Bank {
  constructor(name, encoding, firstField, minFieldCount, convertLine, separators, headSeparators) {
    // Default
    this.convert = convert;
    this.getSupportedFiles = getSupportedFiles;
    // Customs
    this.name = name;
    this.encoding = encoding;
    this.firstField = firstField;
    this.minFieldCount = minFieldCount;
    this.convertLine = convertLine;
    this.separators = separators;
    this.headSeparators = separators;
    if (headSeparators) {
      this.headSeparators = headSeparators;
    }
  }
}

export const banks = [
  new Bank('Banque Postale', 'ascii', 'Date', 3, convertBanquePostale, {csv: ';', tsv: '\t'}, null),
  new Bank('BNP Paribas Fortis', 'ascii', 'Numéro de séquence', 8, convertBnpParibasFortis, {csv: ';'}, null),
  new Bank('Boobank', 'utf-8', 'id', 9, convertBoobank, {csv: ';'}, null),
  new Bank('PayPal', 'ascii', 'Date', 16, convertPaypal, {csv: '","', txt: '"\t"'}, {csv: ',', txt: '\t'}),
];
