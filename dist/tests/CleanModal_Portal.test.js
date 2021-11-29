"use strict";

var _react = require("@testing-library/react");

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

var _dom = require("@testing-library/dom");

var _react2 = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Modal shows the children', () => {
  (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_ReactCleanModal.default, {
    isVisible: true,
    closeOnOverlayClick: true
  }, /*#__PURE__*/_react2.default.createElement("div", {
    "data-testid": "test"
  }))); // get element only in modal-root

  const {
    getByTestId
  } = (0, _dom.within)(document.getElementById('modal-root'));
  expect(getByTestId('test')).toBeInTheDocument();
});