import $ from 'jquery';
import {ENCODINGS, banks} from './banks';
import {saveAs} from 'file-saver';

let PayMemo = [];

export function convertFile(idBank, file, encoding, endConvertCallback) {
  const reader = new FileReader();
  reader.readAsText(file, encoding);
  reader.onload = function (e) {
    const result = convertData(idBank, e.target.result, file.name);
    if (result.status) {
      saveFile(result.data, file.name, 'converted', '.csv');
    }

    endConvertCallback(result);
  };
}

export function optimizeFile(file, errorCallback) {
  const reader = new FileReader();
  reader.readAsText(file, ENCODINGS[1]);
  reader.onload = function (e) {
    try {
      const outData = optimizeData(e.target.result);
      saveFile(outData, file.name, 'optimized', '.xhb');
    } catch (ex) {
      errorCallback(ex);
    }
  };
}

function saveFile(outData, curfilename, suffix, extension) {
  const blob = new Blob([outData], {
    type: 'text/plain;charset=utf-8',
  });
  const filename = getNewFileName(curfilename, suffix, extension);
  saveAs(blob, filename);
}

function getNewFileName(filename, suffix, extension) {
  const index = filename.lastIndexOf('.');
  if (index > 0) {
    const name = filename.substring(0, index);
    filename = name + '_' + suffix + extension;
  } else {
    filename = suffix + extension;
  }

  return filename;
}

export function convertData(idBank, data, filename) {
  const bank = banks[idBank];
  if (bank) {
    return bank.convert(data, filename);
  }

  throw new Error('Can not find bank for idBank=' + idBank);
}

export function optimizeData(data) {
  const output = [];
  const lines = data.split('\n');
  for (let i = 0; i < lines.length; i++) {
    // Remove duplicate spaces
    let line = lines[i].replace(/ +(?= )/g, '');
    // Remove spaces after wording="
    line = line.replace(/wording="\s/g, 'wording="');
    if (line.match(/wording="[^"]*\s"/g)) {
      // Remove spaces before "
      line = line.replace(/\s"/g, '"');
    }

    output.push(line);
  }

  return output.join('\n');
}

export function getPayModeFromMemo(memo) {
  let i;
  let j;
  for (i = 0; i < PayMemo.length; i++) {
    const {memos} = PayMemo[i];
    for (j = 0; j < memos.length; j++) {
      if (new RegExp(memos[j]).exec(memo)) {
        return PayMemo[i].Index;
      }
    }
  }

  return '';
}

function loadPaymodeJson(callback) {
  const file = './data/labelAndPaymode.json';
  $.getJSON(file, data => {
    PayMemo = data.PayMemo;
    if (callback && typeof (callback) === 'function') {
      callback();
    }
  });
}

export function initConverter(callback) {
  loadPaymodeJson(callback);
}
