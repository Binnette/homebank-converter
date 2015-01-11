# homebank-converter #
Use the application:

* [homebank-converter (github.io)](http://binnette.github.io/homebank-converter/)
* [homebank-converter (rawgit.com)](https://rawgit.com/Binnette/homebank-converter/master/index.html)
* [homebank-converter (barmic.eu)](https://hbc.barmic.eu/)

Run unit tests:

1. Open the application
2. Go on about tab
3. Click on button run tests

## What ? ##
homebank-converter is a web app that aims to convert export bank file to compatible Homebank csv.

Homebank: http://homebank.free.fr/

### Convert export bank file ###
Supported files:

| Bank name         | File formats |
| ----------------- | ------------ |
| Banque Postale    | csv, tsv     |
| Boobank           | csv          |
| PayPal            | csv, txt     |

#### Example ####
1. Go on PayPal web site
2. Go to your PayPal history
3. Download your payment history (csv or txt file)
4. Go on homebank-converter application
5. Choose PayPal
6. Then select your PayPal file
7. Click on Convert
8. You will get a csv file readable by Homebank

### Optimize xhb file ###
Optimize xhb file by removing useless spaces.

## Why ? ##
Because your bank doesn't export files compatible with Homebank :)

## How ? ##
This application use Html/Javascript/Css and is under the terms of the licence GNU AGPL.

Javascript libraries:

| Library                                                  | version    |
| -------------------------------------------------------- | ---------- |
| [jQuery](https://jquery.com/)                            | 2.1.3      |
| [Bootstrap](http://getbootstrap.com/)                    | 3.3.1      |
| [FileSaver.js](https://github.com/eligrey/FileSaver.js/) | 2015-01-04 |
| [Moment.js](http://momentjs.com/)                        | 2.9.0      |
| [QUnit](http://qunitjs.com/)                             | 1.16.0     |

## Who ? ##
Developper(s):

* Binnette <binnette[at]gmail[dot]com>
  * https://github.com/Binnette
  * https://bitbucket.org/Binnette
