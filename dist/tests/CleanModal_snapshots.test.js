"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

require("@testing-library/jest-dom/extend-expect");

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mockFn = jest.fn();

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

var arrayOfBtn = [{
  text: 'Close modal',
  className: 'btn-clean-modal-one',
  eventHandling: mockFn
}, {
  text: 'Alert me!',
  className: 'btn-clean-modal-two',
  eventHandling: mockFn
}];
/**
 * Test on ReactCustomModal with Snapshots
 */

test('Render portal with children inside', function () {
  var subject = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ReactCleanModal.default, {
    isVisible: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Modal title"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      className: "btn-clean-modal",
      onClick: mockFn,
      children: "Close"
    })]
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render modal with custom class', function () {
  var subject = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReactCleanModal.default, {
    isVisible: true,
    customClass: 'my-class'
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render spinner before modal', function () {
  var subject = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReactCleanModal.default, {
    isVisible: false,
    showSpinner: true
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render modal with custom button and custom function', function () {
  var subject = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReactCleanModal.default, {
    isVisible: true,
    customFooter: arrayOfBtn
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render modal with aria label attribute', function () {
  var subject = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReactCleanModal.default, {
    isVisible: true,
    ariaLabelledBy: 'dialog1_label',
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      "aria-describedby": "dialog1_label",
      children: "Modal title"
    })
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});