import '../css/hc.scss';

import $ from './jquery';
import 'bootstrap';

import {initConverter} from './converter.js';
import {initUi} from './converter-ui.js';

$(() => {
  initUi();
  initConverter();
});
