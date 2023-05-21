import $ from './jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../css/lavish-bootstrap.css';
import '../css/hc.css';

import {initConverter} from './converter.js';
import {initUi} from './converter-ui.js';

$(() => {
  initUi();
  initConverter();
});
