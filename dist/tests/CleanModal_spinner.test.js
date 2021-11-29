"use strict";

require("core-js/modules/es.promise.js");

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

var _react = _interopRequireDefault(require("react"));

var _async = require("@babel/core/lib/gensync-utils/async");

var _Spinner = _interopRequireDefault(require("../components/Spinner"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Spinner', () => {
  test('Render spinner before modal', () => {
    const {
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: false,
      showSpinner: true
    }));
    const spinner = getByRole('spinner');
    expect(spinner).toBeInTheDocument();
  });
  test('Remove spinner after async function', async () => {
    const {
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: false,
      showSpinner: true
    }));
    const spinner = getByRole('spinner');
    await (0, _async.waitFor)(() => {
      expect(spinner).not.toBeInTheDocument();
    });
  });
});