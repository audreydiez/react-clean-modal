"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

var _dom = require("@testing-library/dom");

var _react = _interopRequireDefault(require("react"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('Close functions', () => {
  test('Close modal is called when button click', () => {
    const mockCloseFn = jest.fn();
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      hide: mockCloseFn
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn-clean-modal",
      onClick: mockCloseFn
    }, "Close")));
    const firstButton = wrapper.find('.btn-clean-modal');
    firstButton.simulate('click');
    expect(mockCloseFn).toHaveBeenCalled();
  });
  test('tester fonction interieur ', () => {
    const wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      closeOnOverlayClick: true
    }));
    const overlay = wrapper.find('.modal-overlay');
    console.log(overlay.debug()); //overlay.simulate('click')

    _dom.fireEvent.click(overlay); //const overlayClicked = wrapper.find('.modal-overlay')
    //expect(overlayClicked).toHaveClass('close')

  });
});