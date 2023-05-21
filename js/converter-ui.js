import $ from './jquery';
import {ENCODINGS, banks} from './banks.js';
import {convertFile, optimizeFile} from './converter.js';

/* Common functions */
function formatErrors(result) {
  if (result.errors.length <= 0) {
    return result.message;
  }

  let br = '';
  if (result.message) {
    br = '<br/>';
  }

  return result.message + br + 'Errors:<ul><li>' + result.errors.join('</li><li>') + '</li></ul>';
}

function showError(error) {
  $('#modal-title').html('Error');
  $('#modal-body p').html(error);
  $('#modal').modal('show');
}

function onConvertEnd(result) {
  const title = result.status ? 'Warning' : 'Error';
  $('#modal-title').html(title);
  const body = formatErrors(result);
  if (body) {
    $('#modal-body p').html(body);
    $('#modal').modal('show');
  }
}

function resetInputFiles() {
  $('#inputOptimize')[0].value = '';
  onInputOptimizeChange();
  $('#inputConvert')[0].value = '';
  onInputConvertChange();
}

function getInputFile(inputId) {
  return $(inputId)[0].files[0];
}

function isFileValid(file) {
  try {
    if (!file) {
      return false;
    }

    return file.size !== undefined && file.size > 0;
  } catch (ex) {
    console.error(ex);
    return false;
  }
}

function getSelectedEncoding() {
  const index = $('#fileEncoding')[0].value;
  return ENCODINGS[index];
}

function setSelectedEncoding(e) {
  const index = ENCODINGS.indexOf(e);
  $('#fileEncoding')[0].value = index;
}

/* Menu event functions */
function hideAll() {
  if ($('.navbar-toggle').css('display') !== 'none') {
    $('.navbar-collapse').collapse('hide');
  }

  $('#home').hide();
  $('#converter').hide();
  $('#otherbanks').hide();
  $('#optimizer').hide();
  $('#about').hide();
  $('#menuOptimizer').removeClass('active');
  $('#menuAbout').removeClass('active');
}

function onHomeClick() {
  hideAll();
  $('#home').show();
  return true;
}

function onBankMenuItemClick(id) {
  hideAll();
  resetInputFiles();
  if (id >= 0 && id < banks.length) {
    setSelectedEncoding(banks[id].encoding);
    $('#btnConvert').on('click', () => convertClick(id));
    $('#bankName').html(banks[id].name);
    $('#supportedFiles').html(banks[id].getSupportedFiles());
    $('#converter').show();
  } else {
    onOtherBanksClick();
  }

  return true;
}

function onOtherBanksClick() {
  hideAll();
  $('#otherbanks').show();
  return true;
}

function onOptimizerClick() {
  hideAll();
  resetInputFiles();
  $('#optimizer').show();
  $('#menuOptimizer').addClass('active');
  return true;
}

function onAboutClick() {
  hideAll();
  $('#about').show();
  $('#menuAbout').addClass('active');
  loadChangelog();
}

/* Optimizer functions */
function onInputOptimizeChange() {
  const file = getInputFile('#inputOptimize');
  const isValid = isFileValid(file);
  $('#btnOptimize').prop('disabled', !isValid);
}

function optimizeClick() {
  const file = getInputFile('#inputOptimize');
  if (isFileValid(file)) {
    optimizeFile(file, showError);
  } else {
    showError('No file selected or selected file is empty.');
  }

  resetInputFiles();
}

/* Converter functions */
function onInputConvertChange() {
  const file = getInputFile('#inputConvert');
  const isValid = isFileValid(file);
  $('#btnConvert').prop('disabled', !isValid);
}

function convertClick(idBank) {
  const file = getInputFile('#inputConvert');
  const encoding = getSelectedEncoding();
  if (isFileValid(file)) {
    convertFile(idBank, file, encoding, onConvertEnd);
  } else {
    showError('No file selected or selected file is empty.');
  }

  resetInputFiles();
}

/* UI init functions */
function loadChangelog() {
  if ($('#changelog li').length > 0) {
    return;
  }

  $.getJSON('../data/changelog.json', logs => {
    const changelog = $('#changelog');
    for (let i = 0; i < logs.length; i++) {
      const log = logs[i];
      changelog.append($('<li>').append(log.date + ' ' + log.version + ': ' + log.comment));
    }
  });
}

function addBankMenuItem(val, label) {
  const m = $('#dropdownMenu');
  const item = $('<a href="#">');
  item.on('click', () => onBankMenuItemClick(val));
  item.append(label);
  m.prepend($('<li>').append(item));
}

function initMenu() {
  for (let idBank = banks.length - 1; idBank >= 0; idBank--) {
    addBankMenuItem(idBank, banks[idBank].name);
  }
}

function initSelectEncoding() {
  const s = $('#fileEncoding');
  for (let e = 0; e < ENCODINGS.length; e++) {
    s.append('<option value=\'' + e + '\'>' + ENCODINGS[e] + '</option>');
  }
}

function initHandlers() {
  $('#btnHome').on('click', () => onHomeClick());
  $('#btnOptimizer').on('click', () => onOptimizerClick());
  $('#btnOptimize').on('click', () => optimizeClick());
  $('#btnAbout').on('click', () => onAboutClick());
  $('#menuOtherBanks').on('click', () => onOtherBanksClick());
  $('#inputConvert').on('change', () => onInputConvertChange());
  $('#inputOptimize').on('change', () => onInputOptimizeChange());
  $('#btnBrowseConvert').on('click', () => $('#inputConvert').trigger('click'));
  $('#btnBrowseOptimize').on('click', () => $('#inputOptimize').trigger('click'));
}

export function initUi() {
  initMenu();
  initSelectEncoding();
  initHandlers();
}
