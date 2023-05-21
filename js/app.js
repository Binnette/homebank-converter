import $ from './jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import '../css/lavish-bootstrap.css';
import '../css/hc.css';

import {initConverter} from './converter.js';
import {initUi} from './converter-ui.js';

$(() => {
  initUi();
  initConverter();
});
