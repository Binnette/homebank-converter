/* eslint-disable array-element-newline */
import $ from 'jquery';
import QUnit from 'qunit';
import {getBankIndexByName, convertBanquePostale, convertBoobank, convertPaypal} from './banks.js';
import {initConverter, convertData, optimizeData} from './converter.js';

QUnit.config.autostart = false;

initConverter(() => {
  QUnit.start();
});

QUnit.module('Convert singles lines');

QUnit.test('convertBanquePostale', assert => {
  let line;
  line = convertBanquePostale([
    '25/01/2015', 'TRANSACTION', '-500,00', '',
  ]);
  assert.deepEqual(line, '01-25-15;;;;TRANSACTION;-500,00;;', 'Amount with a comma.');

  line = convertBanquePostale([
    '25/01/2015', 'TRANSACTION', '1000.59', '',
  ]);
  assert.deepEqual(line, '01-25-15;;;;TRANSACTION;1000.59;;', 'Amount with a dot.');
});

QUnit.test('convertBanquePostale - pay modes', assert => {
  let line;
  line = convertBanquePostale([
    '15/12/2014', 'CHEQUE N 2224444', '-100,99', '',
  ]);
  assert.deepEqual(line, '12-15-14;2;;;CHEQUE N 2224444;-100,99;;', 'Cheque - CHEQUE N');

  line = convertBanquePostale([
    '11/10/2014', 'VIREMENT DE JEAN DUPONT REFERENCE : 123456789', '11,70', '85,27',
  ]);
  assert.deepEqual(line, '10-11-14;4;;;VIREMENT DE JEAN DUPONT REFERENCE : 123456789;11,70;;', 'Transfer - VIREMENT DE');

  line = convertBanquePostale([
    '25/10/2014', 'VIREMENT EMIS PAR JEAN DUPONT', '101,70', '85,27',
  ]);
  assert.deepEqual(line, '10-25-14;4;;;VIREMENT EMIS PAR JEAN DUPONT;101,70;;', 'Transfer - VIREMENT EMIS');

  line = convertBanquePostale([
    '25/10/1999', 'VIREMENT POUR BINNETTE', '45,20', '85,27',
  ]);
  assert.deepEqual(line, '10-25-99;4;;;VIREMENT POUR BINNETTE;45,20;;', 'Transfer - VIREMENT POUR');

  line = convertBanquePostale([
    '27/07/2013', 'ACHAT CB GEANT CASINO     26.07.13 CARTE NUMERO                XYZ  ', '-18,26', '-23,54',
  ]);
  assert.deepEqual(line, '07-27-13;6;;;ACHAT CB GEANT CASINO 26.07.13 CARTE NUMERO XYZ;-18,26;;', 'Debit card - ACHAT CB');

  line = convertBanquePostale([
    '27/07/2013', 'COMMISSION PAIEMENT PAR CARTE USA SELLER', '-18,26', '-23,54',
  ]);
  assert.deepEqual(line, '07-27-13;6;;;COMMISSION PAIEMENT PAR CARTE USA SELLER;-18,26;;', 'Debit card - COMMISSION PAIEMENT PAR CARTE');

  line = convertBanquePostale([
    '27/07/2013', 'COMMISSION RETRAIT PAR CARTE DAB PARIS FRANCE', '-18,26', '-23,54',
  ]);
  assert.deepEqual(line, '07-27-13;6;;;COMMISSION RETRAIT PAR CARTE DAB PARIS FRANCE;-18,26;;', 'Debit card - COMMISSION RETRAIT PAR CARTE');

  line = convertBanquePostale([
    '12/10/2014', 'CARTE X1234    12/10/14 A 12H21 RETRAIT DAB LA BANQUE POSTALE  ', '-150,00', '-700,15',
  ]);
  assert.deepEqual(line, '10-12-14;6;;;CARTE X1234 12/10/14 A 12H21 RETRAIT DAB LA BANQUE POSTALE;-150,00;;', 'Debit card - RETRAIT DAB');

  line = convertBanquePostale([
    '21/11/2014', 'TELEREGLEMENT DE REGLEMENT IMPOT 1234', '-253,00', '-49,12',
  ]);
  assert.deepEqual(line, '11-21-14;6;;;TELEREGLEMENT DE REGLEMENT IMPOT 1234;-253,00;;', 'Debit card - TELEREGLEMENT DE REGLEMENT IMPOT');

  line = convertBanquePostale([
    '21/11/2014', 'CREDIT CARTE BANCAIRE CARREFOUR', '11,59', '-49,12',
  ]);
  assert.deepEqual(line, '11-21-14;6;;;CREDIT CARTE BANCAIRE CARREFOUR;11,59;;', 'Debit card - CREDIT CARTE BANCAIRE');

  line = convertBanquePostale([
    '04/11/2018', 'RETRAIT THISBANK 04.11.18 EUR 20,00 CARTE NO 666', '20,00', '',
  ]);
  assert.deepEqual(line, '11-04-18;6;;;RETRAIT THISBANK 04.11.18 EUR 20,00 CARTE NO 666;20,00;;', 'Debit card - RETRAIT ');

  line = convertBanquePostale([
    '04/11/2018', 'COMMISSION PAIEMENT PAR CARTE 04.11.18 EUR 0,99 CARTE NO 777', '0,99', '',
  ]);
  assert.deepEqual(line, '11-04-18;6;;;COMMISSION PAIEMENT PAR CARTE 04.11.18 EUR 0,99 CARTE NO 777;0,99;;', 'Debit card - COMMISSION PAIEMENT PAR CARTE[space]');

  line = convertBanquePostale([
    '04/11/2018', 'COMMISSION PAIEMENT PAR CARTE', '0,99', '',
  ]);
  assert.deepEqual(line, '11-04-18;6;;;COMMISSION PAIEMENT PAR CARTE;0,99;;', 'Debit card - COMMISSION PAIEMENT PAR CARTE');

  line = convertBanquePostale([
    '04/11/2014', 'PRELEVEMENT DE OPERATEUR TELEPHONE MOBILE', '-10,00', '-22,44',
  ]);
  assert.deepEqual(line, '11-04-14;7;;;PRELEVEMENT DE OPERATEUR TELEPHONE MOBILE;-10,00;;', 'Standing order - PRELEVEMENT');

  line = convertBanquePostale([
    '18/11/2014', 'REMISE DE CHEQUE N  1114444 DE MR JEAN DUPONT', '100,00', '',
  ]);
  assert.deepEqual(line, '11-18-14;9;;;REMISE DE CHEQUE N 1114444 DE MR JEAN DUPONT;100,00;;', 'Deposit - REMISE DE CHEQUE N');

  line = convertBanquePostale([
    '18/11/2014', 'REMISE DE CHEQUES DE MR JEAN DUPONT', '100,00', '',
  ]);
  assert.deepEqual(line, '11-18-14;9;;;REMISE DE CHEQUES DE MR JEAN DUPONT;100,00;;', 'Deposit - REMISE DE CHEQUE N');

  line = convertBanquePostale([
    '18/11/2014', 'VERSEMENT EFFECTUE DE MR JEAN DUPONT', '100,00', '',
  ]);
  assert.deepEqual(line, '11-18-14;9;;;VERSEMENT EFFECTUE DE MR JEAN DUPONT;100,00;;', 'Deposit - REMISE DE CHEQUE N');

  line = convertBanquePostale([
    '18/11/2014', 'COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE', '1,00', '',
  ]);
  assert.deepEqual(line, '11-18-14;10;;;COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE;1,00;;', 'FI fee - COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE');
});

QUnit.test('convertBoobank', assert => {
  let line;
  line = convertBoobank([
    '', '2014-08-29', '', '', '', '', '', 'memo1', '-11,20',
  ]);
  assert.deepEqual(line, '08-29-14;;;;memo1;-11,20;;', 'Amount with a comma.');

  line = convertBoobank([
    '', '2014-08-29', '', '', '', '', '', 'memo1', '12.20',
  ]);
  assert.deepEqual(line, '08-29-14;;;;memo1;12.20;;', 'Amount with a dot.');
});

QUnit.test('convertPaypal', assert => {
  let line;
  line = convertPaypal([
    '25/01/2015', '', '', 'memo3', 'memo2', '', 'memo5', '', '', '-200,39', '', '',
    'memo4', '', '', 'memo1', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '',
  ]);
  assert.deepEqual(line, '01-25-15;;;;memo1, memo2, memo3, memo4, memo5;-200,39;;', 'Amount with a comma.');

  line = convertPaypal([
    '25/01/2015', '', '', 'memo3', 'memo2', '', 'memo5', '', '', '1099.99', '', '',
    'memo4', '', '', 'memo1', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '',
  ]);
  assert.deepEqual(line, '01-25-15;;;;memo1, memo2, memo3, memo4, memo5;1099.99;;', 'Amount with a dot.');
});

QUnit.module('Convert single lines with errors');

QUnit.test('convertBanquePostale', assert => {
  assert.throws(() => {
    convertBanquePostale([
      '25/13/2015', 'TRANSACTION', '-500,00', '',
    ]);
  },
  new Error('Invalid date: 25/13/2015'),
  'Wrong date 25/13/2015.');
});

QUnit.test('convertBoobank', assert => {
  assert.throws(() => {
    convertBoobank([
      '', '2015-13-20', '', '', 'memo2', '', '', 'memo1', '-10,20',
    ]);
  },
  new Error('Invalid date: 2015-13-20'),
  'Wrong date 2015-13-20.');
});

QUnit.test('convertPaypal', assert => {
  assert.throws(() => {
    convertPaypal([
      '30/13/2015', '', '', 'memo3', 'memo2', '', 'memo5', '', '', '-200,39', '', '',
      'memo4', '', '', 'memo1', '', '', '', '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '', '', '', '',
    ]);
  },
  new Error('Invalid date: 30/13/2015'),
  'Wrong date 30/13/2015.');
});

QUnit.module('Convert whole files');

QUnit.test('Banque Postale - csv file', assert => {
  const done = assert.async();
  const inputFilename = 'banquePostale.csv';
  const expectedFilename = 'banquePostale_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('Banque Postale');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 100, 'converted.length = 100');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.test('Banque Postale - tsv file', assert => {
  const done = assert.async();
  const inputFilename = 'banquePostale.tsv';
  const expectedFilename = 'banquePostale_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('Banque Postale');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 100, 'converted.length = 100');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.test('BNP Paribas Fortis - csv file', assert => {
  const done = assert.async();
  const inputFilename = 'bnpParibasFortis.csv';
  const expectedFilename = 'bnpParibasFortis_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('BNP Paribas Fortis');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 17, 'converted.length = 17');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.test('Boobank - csv file', assert => {
  const done = assert.async();
  const inputFilename = 'boobank.csv';
  const expectedFilename = 'boobank_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('Boobank');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 50, 'converted.length = 50');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.test('Paypal - csv file', assert => {
  const done = assert.async();
  const inputFilename = 'paypal.csv';
  const expectedFilename = 'paypal_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('PayPal');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 30, 'converted.length = 30');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.test('Paypal - txt file', assert => {
  const done = assert.async();
  const inputFilename = 'paypal.txt';
  const expectedFilename = 'paypal_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('PayPal');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 30, 'converted.length = 30');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.module('Convert whole files with errors');

QUnit.test('Banque Postale - csv file', assert => {
  const done = assert.async();
  const inputFilename = 'banquePostaleWithErrors.csv';
  const expectedFilename = 'banquePostaleWithErrors_converted.csv';
  let converted;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      const index = getBankIndexByName('Banque Postale');
      converted = convertData(index, data, inputFilename);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = {
        status: true,
        data,
        message: '',
        errors: [
          'Error on line: 38. Error: Invalid date:            "SANS DATE NI COMA    "',
          'Error on line: 58. Error: Line does not have enough fields. Found: 2. Minimum: 3.',
          'Error on line: 65. Error: Line does not have enough fields. Found: 1. Minimum: 3.',
          'Error on line: 80. Error: Invalid date:           ',
          'Error on line: 98. Error: Invalid date: 29/02/2003',
        ],
      };
    }),
  ).then(() => {
    assert.deepEqual(converted.data.split('\n').length, 100, 'converted.length = 100');
    assert.deepEqual(converted.status, expected.status, 'Status is true');
    assert.deepEqual(converted.data.replaceAll('\r\n', '\n').split('\n'), expected.data.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    assert.deepEqual(converted.message, expected.message, 'Message is empty');
    assert.deepEqual(converted.errors, expected.errors, 'No errors');
    done();
  });
});

QUnit.module('Optimize XHB');

QUnit.test('Example - XHB file', assert => {
  const done = assert.async();
  const inputFilename = 'example.xhb';
  const expectedFilename = 'example_optimized.xhb';
  let optimized;
  let expected;

  $.when(
    $.get('data/tests/' + inputFilename, data => {
      optimized = optimizeData(data);
    }),
    $.get('data/tests/' + expectedFilename, data => {
      expected = data;
    }),
  ).then(() => {
    assert.deepEqual(optimized.split('\n').length, expected.split('\n').length, 'Same length');
    assert.deepEqual(optimized.replaceAll('\r\n', '\n').split('\n'), expected.replaceAll('\r\n', '\n').split('\n'), 'Same data');
    done();
  });
});
