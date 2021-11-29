"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

require("@testing-library/jest-dom/extend-expect");

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mockFn = jest.fn();

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

const arrayOfBtn = [{
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

test('Render portal with children inside', () => {
  const subject = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
    isVisible: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Modal title"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-clean-modal",
    onClick: mockFn
  }, "Close")));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render modal with custom class', () => {
  const subject = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
    isVisible: true,
    customClass: 'my-class'
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render spinner before modal', () => {
  const subject = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
    isVisible: false,
    showSpinner: true
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render modal with custom button and custom function', () => {
  const subject = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
    isVisible: true,
    customFooter: arrayOfBtn
  }));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});
test('Render modal with aria label attribute', () => {
  const subject = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
    isVisible: true,
    ariaLabelledBy: 'dialog1_label'
  }, /*#__PURE__*/_react.default.createElement("h1", {
    "aria-describedby": "dialog1_label"
  }, "Modal title")));
  expect((0, _enzymeToJson.default)(subject)).toMatchSnapshot();
});