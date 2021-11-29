"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useModal = _interopRequireDefault(require("../utils/useModal"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Test on useModal Hook
 */
describe('Test custom hook useModal', function () {
  test('should use counter', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _useModal.default)();
    }),
        result = _renderHook.result;

    expect(result.current.isShowing).toBe(false);
    expect(result.current.isShowingSpinner).toBe(false);
    expect(_typeof(result.current.toggle)).toBe('function');
    expect(_typeof(result.current.toggleSpinner)).toBe('function');
  });
  test('should update isShowing to true - opening modal', function () {
    var _renderHook2 = (0, _reactHooks.renderHook)(function () {
      return (0, _useModal.default)();
    }),
        result = _renderHook2.result;

    (0, _reactHooks.act)(function () {
      result.current.toggle();
    });
    expect(result.current.isShowing).toBe(true);
    expect(result.current.isShowingSpinner).toBe(false);
  });
  test('should update isShowingSpinner to true - show spinner', function () {
    var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return (0, _useModal.default)();
    }),
        result = _renderHook3.result;

    (0, _reactHooks.act)(function () {
      result.current.toggleSpinner();
    });
    expect(result.current.isShowingSpinner).toBe(true);
  });
  test('should isShowingSpinner to false if modal close', function () {
    var _renderHook4 = (0, _reactHooks.renderHook)(function () {
      return (0, _useModal.default)();
    }),
        result = _renderHook4.result;

    (0, _reactHooks.act)(function () {
      result.current.toggleSpinner();
      result.current.toggle();
    });
    expect(result.current.isShowingSpinner).toBe(false);
  });
});