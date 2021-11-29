"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ReactCleanModal = _interopRequireDefault(require("../components/ReactCleanModal"));

require("@testing-library/jest-dom/extend-expect");

var _dom = require("@testing-library/dom");

var _enzyme = _interopRequireWildcard(require("enzyme"));

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
describe('Modal rendering options', () => {
  test('Render modal with animations', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      animations: true
    }));
    const modalOverlay = wrapper.find('.modal-overlay');
    const modalContainer = wrapper.find('.modal-container');
    expect(modalOverlay.exists('.open')).toEqual(true);
    expect(modalContainer.exists('.open')).toEqual(true);
  });
  test('Render modal with custom button', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      customFooter: arrayOfBtn
    }));
    expect(wrapper.exists('.btn-clean-modal-one')).toEqual(true);
    expect(wrapper.exists('.btn-clean-modal-two')).toEqual(true);
    const firstButton = wrapper.find('.btn-clean-modal-one');
    firstButton.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  test('Render modal with custom button and custom function', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      customFooter: arrayOfBtn
    }));
    const firstButton = wrapper.find('.btn-clean-modal-one');
    firstButton.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  test('Render modal with aria label attribute', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      ariaLabelledBy: 'dialog1_label'
    }, /*#__PURE__*/_react.default.createElement("h1", {
      "aria-describedby": "dialog1_label"
    }, "HAHA")));
    expect(wrapper.find('div.modal-container').props()).toHaveProperty('aria-labelledby', 'dialog1_label');
  });
  test('Render modal with data-testid attribute', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReactCleanModal.default, {
      isVisible: true,
      testId: 'modal-test'
    }));
    expect(wrapper.find('div.modal-container').props()).toHaveProperty('data-testid', 'modal-test');
  });
  test('tester fonction interieur ', () => {//const wrapper = shallow(<ReactCleanModal isVisible={true} closeOnOverlayClick={true} />)
    // const overlay = wrapper.find('.modal-overlay')
    //overlay.simulate('click')
    //const overlayClicked = wrapper.find('.modal-overlay')
    //expect(overlayClicked).toHaveClass('close')
  });
});