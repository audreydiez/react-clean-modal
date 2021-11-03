"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Spinner.scss");

/* istanbul ignore next */

/**
 * Function component that render simple spinner
 *
 * @returns
 */
const Spinner = () => {
  return /*#__PURE__*/React.createElement("svg", {
    className: "spinner",
    viewBox: "0 0 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "path",
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    strokeWidth: "5"
  }));
};

var _default = Spinner;
exports.default = _default;