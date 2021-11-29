"use strict";
import React from 'react';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _ReactCleanModal.default;
  }
});
Object.defineProperty(exports, "useModal", {
  enumerable: true,
  get: function get() {
    return _useModal.default;
  }
});

var _ReactCleanModal = _interopRequireDefault(require("./components/ReactCleanModal"));

var _useModal = _interopRequireDefault(require("./utils/useModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }