QUnit.config.autostart = false;

initConverter(function () {
  QUnit.start();
});

QUnit.module("Convert singles lines");

QUnit.test("convertBanquePostale", function (assert) {
  console.log("tests")
  var line;
  line = convertBanquePostale([
      "25/01/2015", "TRANSACTION", "-500,00", ""
    ]);
  assert.deepEqual(line, "01-25-15;;;;TRANSACTION;-500,00;;", "Amount with a comma.");

  line = convertBanquePostale([
      "25/01/2015", "TRANSACTION", "1000.59", ""
    ]);
  assert.deepEqual(line, "01-25-15;;;;TRANSACTION;1000.59;;", "Amount with a dot.");

  line = convertBanquePostale([
      "25/13/2015", "TRANSACTION", "-500,00", ""
    ]);
  assert.deepEqual(line, undefined, "Wrong date 25/13/2015.");
});

QUnit.test("convertBanquePostale - pay modes", function (assert) {
  var line;
  line = convertBanquePostale([
      "15/12/2014", "CHEQUE N 2224444", "-100,99", ""
    ]);
  assert.deepEqual(line, "12-15-14;2;;;CHEQUE N 2224444;-100,99;;", "Cheque - CHEQUE N");

  line = convertBanquePostale([
      "11/10/2014", "VIREMENT DE JEAN DUPONT REFERENCE : 123456789", "11,70", "85,27"
    ]);
  assert.deepEqual(line, "10-11-14;4;;;VIREMENT DE JEAN DUPONT REFERENCE : 123456789;11,70;;", "Transfer - VIREMENT DE");

  line = convertBanquePostale([
      "25/10/2014", "VIREMENT EMIS PAR JEAN DUPONT", "101,70", "85,27"
    ]);
  assert.deepEqual(line, "10-25-14;4;;;VIREMENT EMIS PAR JEAN DUPONT;101,70;;", "Transfer - VIREMENT EMIS");

  line = convertBanquePostale([
      "25/10/1999", "VIREMENT POUR BINNETTE", "45,20", "85,27"
    ]);
  assert.deepEqual(line, "10-25-99;4;;;VIREMENT POUR BINNETTE;45,20;;", "Transfer - VIREMENT POUR");

  line = convertBanquePostale([
      "27/07/2013", "ACHAT CB GEANT CASINO     26.07.13 CARTE NUMERO                XYZ  ", "-18,26", "-23,54"
    ]);
  assert.deepEqual(line, "07-27-13;6;;;ACHAT CB GEANT CASINO 26.07.13 CARTE NUMERO XYZ;-18,26;;", "Debit card - ACHAT CB");

  line = convertBanquePostale([
      "27/07/2013", "COMMISSION PAIEMENT PAR CARTE USA SELLER", "-18,26", "-23,54"
    ]);
  assert.deepEqual(line, "07-27-13;6;;;COMMISSION PAIEMENT PAR CARTE USA SELLER;-18,26;;", "Debit card - COMMISSION PAIEMENT PAR CARTE");

  line = convertBanquePostale([
      "27/07/2013", "COMMISSION RETRAIT PAR CARTE DAB PARIS FRANCE", "-18,26", "-23,54"
    ]);
  assert.deepEqual(line, "07-27-13;6;;;COMMISSION RETRAIT PAR CARTE DAB PARIS FRANCE;-18,26;;", "Debit card - COMMISSION RETRAIT PAR CARTE");

  line = convertBanquePostale([
      "12/10/2014", "CARTE X1234    12/10/14 A 12H21 RETRAIT DAB LA BANQUE POSTALE  ", "-150,00", "-700,15"
    ]);
  assert.deepEqual(line, "10-12-14;6;;;CARTE X1234 12/10/14 A 12H21 RETRAIT DAB LA BANQUE POSTALE;-150,00;;", "Debit card - RETRAIT DAB");

  line = convertBanquePostale([
      "21/11/2014", "TELEREGLEMENT DE REGLEMENT IMPOT 1234", "-253,00", "-49,12"
    ]);
  assert.deepEqual(line, "11-21-14;6;;;TELEREGLEMENT DE REGLEMENT IMPOT 1234;-253,00;;", "Debit card - TELEREGLEMENT DE REGLEMENT IMPOT");

  line = convertBanquePostale([
      "21/11/2014", "CREDIT CARTE BANCAIRE CARREFOUR", "11,59", "-49,12"
    ]);
  assert.deepEqual(line, "11-21-14;6;;;CREDIT CARTE BANCAIRE CARREFOUR;11,59;;", "Debit card - CREDIT CARTE BANCAIRE");

  line = convertBanquePostale([
      "04/11/2014", "PRELEVEMENT DE OPERATEUR TELEPHONE MOBILE", "-10,00", "-22,44"
    ]);
  assert.deepEqual(line, "11-04-14;7;;;PRELEVEMENT DE OPERATEUR TELEPHONE MOBILE;-10,00;;", "Standing order - PRELEVEMENT");

  line = convertBanquePostale([
      "18/11/2014", "REMISE DE CHEQUE N  1114444 DE MR JEAN DUPONT", "100,00", ""
    ]);
  assert.deepEqual(line, "11-18-14;9;;;REMISE DE CHEQUE N 1114444 DE MR JEAN DUPONT;100,00;;", "Deposit - REMISE DE CHEQUE N");

  line = convertBanquePostale([
      "18/11/2014", "REMISE DE CHEQUES DE MR JEAN DUPONT", "100,00", ""
    ]);
  assert.deepEqual(line, "11-18-14;9;;;REMISE DE CHEQUES DE MR JEAN DUPONT;100,00;;", "Deposit - REMISE DE CHEQUE N");

  line = convertBanquePostale([
      "18/11/2014", "VERSEMENT EFFECTUE DE MR JEAN DUPONT", "100,00", ""
    ]);
  assert.deepEqual(line, "11-18-14;9;;;VERSEMENT EFFECTUE DE MR JEAN DUPONT;100,00;;", "Deposit - REMISE DE CHEQUE N");

  line = convertBanquePostale([
      "18/11/2014", "COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE", "1,00", ""
    ]);
  assert.deepEqual(line, "11-18-14;10;;;COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE;1,00;;", "FI fee - COTISATION TRIMESTRIELLE DE VOTRE FORMULE DE COMPTE");
});

QUnit.test("convertBoobank", function (assert) {
  var line;
  line = convertBoobank([
      "", "2014-08-29", "", "", "", "", "", "memo1", "-11,20"
    ]);
  assert.deepEqual(line, "08-29-14;;;;memo1;-11,20;;", "Amount with a comma.");

  line = convertBoobank([
      "", "2014-08-29", "", "", "", "", "", "memo1", "12.20"
    ]);
  assert.deepEqual(line, "08-29-14;;;;memo1;12.20;;", "Amount with a dot.");

  line = convertBoobank([
      "", "2015-13-25", "", "", "memo2", "", "", "memo1", "-10,20"
    ]);
  assert.deepEqual(line, undefined, "Wrong date 25/13/2015.");
});

QUnit.test("convertPaypal", function (assert) {
  var line;
  line = convertPaypal([
      "25/01/2015", "", "", "memo3", "memo2", "", "memo5", "", "", "-200,39", "", "",
      "memo4", "", "", "memo1", "", "", "", "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "", "", "", ""
    ]);
  assert.deepEqual(line, "01-25-15;;;;memo1, memo2, memo3, memo4, memo5;-200,39;;", "Amount with a comma.");

  line = convertPaypal([
      "25/01/2015", "", "", "memo3", "memo2", "", "memo5", "", "", "1099.99", "", "",
      "memo4", "", "", "memo1", "", "", "", "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "", "", "", ""
    ]);
  assert.deepEqual(line, "01-25-15;;;;memo1, memo2, memo3, memo4, memo5;1099.99;;", "Amount with a dot.");

  line = convertPaypal([
      "25/13/2015", "", "", "memo3", "memo2", "", "memo5", "", "", "-200,39", "", "",
      "memo4", "", "", "memo1", "", "", "", "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "", "", "", ""
    ]);
  assert.deepEqual(line, undefined, "Wrong date 25/13/2015.");
});

QUnit.module("Convert whole files");

QUnit.test("Banque Postale - csv file", function (assert) {
  var done = assert.async();
  var inputFilename = "banquePostale.csv";
  var expectedFilename = "banquePostale_converted.csv";
  var converted, expected;

  $.when(
    $.get("res/tests/" + inputFilename, function (data) {
      converted = convertData(0, data, inputFilename);
    }),
    $.get("res/tests/" + expectedFilename, function (data) {
      expected = data;
    })
  ).then(function () {
    assert.deepEqual(converted.split("\n").length, 100, "converted.length = 100");
    assert.deepEqual(converted, expected, "Convert a file of 100 lines.");
    done();
  });
});

QUnit.test("Banque Postale - tsv file", function (assert) {
  var done = assert.async();
  var inputFilename = "banquePostale.tsv";
  var expectedFilename = "banquePostale_converted.csv";
  var converted, expected;

  $.when(
    $.get("res/tests/" + inputFilename, function (data) {
      converted = convertData(0, data, inputFilename);
    }),
    $.get("res/tests/" + expectedFilename, function (data) {
      expected = data;
    })
  ).then(function () {
    assert.deepEqual(converted.split("\n").length, 100, "converted.length = 100");
    assert.deepEqual(converted, expected, "Convert a file of 100 lines.");
    done();
  });
});

QUnit.test("Boobank - csv file", function (assert) {
  var done = assert.async();
  var inputFilename = "boobank.csv";
  var expectedFilename = "boobank_converted.csv";
  var converted, expected;

  $.when(
    $.get("res/tests/" + inputFilename, function (data) {
      converted = convertData(1, data, inputFilename);
    }),
    $.get("res/tests/" + expectedFilename, function (data) {
      expected = data;
    })
  ).then(function () {
    assert.deepEqual(converted.split("\n").length, 50, "converted.length = 50");
    assert.deepEqual(converted, expected, "Convert a file of 50 lines.");
    done();
  });
});

QUnit.test("Paypal - csv file", function (assert) {
  var done = assert.async();
  var inputFilename = "paypal.csv";
  var expectedFilename = "paypal_converted.csv";
  var converted, expected;

  $.when(
    $.get("res/tests/" + inputFilename, function (data) {
      converted = convertData(2, data, inputFilename);
    }),
    $.get("res/tests/" + expectedFilename, function (data) {
      expected = data;
    })
  ).then(function () {
    assert.deepEqual(converted.split("\n").length, 30, "converted.length = 30");
    assert.deepEqual(converted, expected, "Convert a file of 30 lines.");
    done();
  });
});

QUnit.test("Paypal - txt file", function (assert) {
  var done = assert.async();
  var inputFilename = "paypal.txt";
  var expectedFilename = "paypal_converted.csv";
  var converted, expected;

  $.when(
    $.get("res/tests/" + inputFilename, function (data) {
      converted = convertData(2, data, inputFilename);
    }),
    $.get("res/tests/" + expectedFilename, function (data) {
      expected = data;
    })
  ).then(function () {
    assert.deepEqual(converted.split("\n").length, 30, "converted.length = 30");
    assert.deepEqual(converted, expected, "Convert a file of 30 lines.");
    done();
  });
});