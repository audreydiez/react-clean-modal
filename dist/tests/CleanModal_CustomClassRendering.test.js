"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

var _react = _interopRequireDefault(require("react"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

const mockFn = jest.fn();
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
 * Test on ReactCustomModal with custom class
 */

describe('Custom Class rendering', () => {
  test('Render modal with custom class', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      customClass: 'my-class'
    }));
    expect(wrapper.exists('div.modal-overlay-my-class')).toEqual(true);
    expect(wrapper.exists('div.modal-container-my-class')).toEqual(true);
  });
  test('Render modal with custom class and Icon close', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      closeOnTop: true,
      customClass: 'my-class'
    }));
    expect(wrapper.exists('div.modal-close-my-class')).toEqual(true);
    expect(wrapper.exists('img.modal-close-icon-my-class')).toEqual(true);
  });
  test('Render modal with custom class and Custom footer', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      customClass: 'my-class',
      customFooter: arrayOfBtn
    }));
    expect(wrapper.exists('div.modal-footer-my-class')).toEqual(true);
  });
});