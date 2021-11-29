"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = require("@testing-library/react");

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

var _dom = require("@testing-library/dom");

var React = _interopRequireWildcard(require("react"));

require("@testing-library/jest-dom/extend-expect");

require("@testing-library/jest-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockFn = jest.fn();
test('Modal shows the children', function () {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReactCleanModal.default, {
    isVisible: true,
    closeOnOverlayClick: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "test"
    })
  })); // get element only in modal-root

  var _within = (0, _dom.within)(document.getElementById('modal-root')),
      getByTestId = _within.getByTestId;

  expect(getByTestId('test')).toBeInTheDocument();
});