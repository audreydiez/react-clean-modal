"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useModal = _interopRequireDefault(require("../utils/useModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test custom hook useModal', () => {
  test('should use counter', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    expect(result.current.isShowing).toBe(false);
    expect(result.current.isShowingSpinner).toBe(false);
    expect(typeof result.current.toggle).toBe('function');
    expect(typeof result.current.toggleSpinner).toBe('function');
  });
  test('should update isShowing to true - opening modal', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    (0, _reactHooks.act)(() => {
      result.current.toggle();
    });
    expect(result.current.isShowing).toBe(true);
    expect(result.current.isShowingSpinner).toBe(false);
  });
  test('should update isShowingSpinner to true - show spinner', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    (0, _reactHooks.act)(() => {
      result.current.toggleSpinner();
    });
    expect(result.current.isShowingSpinner).toBe(true);
  });
  test('should isShowingSpinner to false if modal close', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useModal.default)());
    (0, _reactHooks.act)(() => {
      result.current.toggleSpinner();
      result.current.toggle();
    });
    expect(result.current.isShowingSpinner).toBe(false);
  });
});