"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./ReactCleanModal.scss");

var _icon_close = _interopRequireDefault(require("../assets/icon_close.svg"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["hide", "isVisible", "customClass", "closeOnOverlayClick", "closeOnScroll", "animations", "closeOnTop", "ariaLabelledBy", "testId", "customFooter", "customFooterAlign", "showSpinner"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Function component that render modal with multiple optionals params
 * @listens {hide} hide - Handle state from parent for hide the modal component
 * @param {boolean} isVisible - State for modal visibility
 * @param {string} customClass - Optional additional css class for all HTML elements
 * @param {boolean} closeOnOverlayClick - Allow close modal on overlay click (not in the modal box)
 * @param {boolean} closeOnScroll - Allow close modal when user scroll (not in the modal box)
 * @param {boolean} animations - Animate the modal ans spinner opening
 * @param {boolean} closeOnTop - Add a svg button at the top with close function
 * @param {string} ariaLabelledBy - Add ariaLabelledBy HTML attribute to modal and title
 * @param {string} testId - add data-testid attribute to the modal container for tests
 * @param {Array.<Object>} customFooter - Array of custom buttons for the footer of the modal
 * @param {string} customFooterAlign - Align the modal footer button to left, right or center
 * @param {boolean} showSpinner - Show spinner before render modal
 * @param {props} props for the component Modal
 *
 * @returns
 */
var ReactCleanModal = function ReactCleanModal(_ref) {
  var hide = _ref.hide,
      isVisible = _ref.isVisible,
      customClass = _ref.customClass,
      _ref$closeOnOverlayCl = _ref.closeOnOverlayClick,
      closeOnOverlayClick = _ref$closeOnOverlayCl === void 0 ? false : _ref$closeOnOverlayCl,
      _ref$closeOnScroll = _ref.closeOnScroll,
      closeOnScroll = _ref$closeOnScroll === void 0 ? false : _ref$closeOnScroll,
      _ref$animations = _ref.animations,
      animations = _ref$animations === void 0 ? false : _ref$animations,
      _ref$closeOnTop = _ref.closeOnTop,
      closeOnTop = _ref$closeOnTop === void 0 ? false : _ref$closeOnTop,
      ariaLabelledBy = _ref.ariaLabelledBy,
      testId = _ref.testId,
      customFooter = _ref.customFooter,
      customFooterAlign = _ref.customFooterAlign,
      showSpinner = _ref.showSpinner,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      animationsOnClose = _useState2[0],
      setAnimationsOnClose = _useState2[1];

  var tempAnimationsOpen = animations;
  /* istanbul ignore next */

  function closeModalEvent(e) {
    // When key press event
    if (e.key === 'Escape') {
      if (isVisible && !animations) {
        hide();
      }

      if (isVisible && animations) {
        setAnimationsOnClose(true);
        setTimeout(function () {
          setAnimationsOnClose(false);
          hide();
        }, 250);
      }
    } // When ordinary closing event


    if (isVisible && !animations) {
      hide();
    }

    if (isVisible && animations) {
      setAnimationsOnClose(true);
      setTimeout(function () {
        setAnimationsOnClose(false);
        hide();
      }, 250);
    }
  }
  /**
   * Add event listener when component is mount.
   * @callback Remove all event listener when unmount
   * @event closeModalEvent#Wheel
   * @event closeModalEvent#keyup
   */


  (0, _react.useEffect)(function () {
    window.addEventListener('keyup', function (e) {
      closeModalEvent(e);
    });

    if (closeOnScroll) {
      window.addEventListener('wheel', closeModalEvent);
    } // If Spinner, no need animation for modal overlay


    if (showSpinner) {
      tempAnimationsOpen = false;
    }

    return function () {
      window.removeEventListener('wheel', closeModalEvent);
      window.removeEventListener('keyup', closeModalEvent);
    };
  }, [isVisible]);
  /**
   * Create the custom footer if optional customFooter button are received
   * @returns {Array} arrayOfButton - ready to display in render
   */

  var createCustomFooter = function createCustomFooter() {
    var arrayOfBtn = [];
    customFooter.map(function (btn, key) {
      arrayOfBtn.push( /*#__PURE__*/_react.default.createElement('button', {
        className: btn.className + ' btn' + key,
        key: key,
        onClick: btn.eventHandling ? btn.eventHandling : closeModalEvent
      }, btn.text));
    });
    return arrayOfBtn;
  };

  return isVisible ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "modal-root",
    className: "modal-overlay ".concat(tempAnimationsOpen && showSpinner === undefined ? 'open' : '', " ").concat(animationsOnClose ? 'close' : '', " ").concat(customClass ? 'modal-overlay-' + customClass : ''),
    onClick: closeOnOverlayClick ? closeModalEvent : undefined,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      role: "dialog",
      "aria-modal": "true",
      className: "modal modal-container ".concat(animations ? 'open' : '', " ").concat(customClass ? 'modal-container-' + customClass : '', " "),
      "aria-labelledby": ariaLabelledBy,
      "data-testid": testId,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [props.children, closeOnTop ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal-close ".concat(customClass ? 'modal-close-' + customClass : ''),
        onClick: closeModalEvent,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _icon_close.default,
          className: "modal-close-icon ".concat(customClass ? 'modal-close-icon-' + customClass : ''),
          alt: "Close modal"
        })
      }) : '', customFooter ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal-footer ".concat(customFooterAlign ? customFooterAlign : 'center', " ").concat(customClass ? 'modal-footer-' + customClass : ''),
        children: createCustomFooter()
      }) : '']
    })
  }), document.body) : showSpinner ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "spinner",
    className: "modal-overlay spinner-overlay ".concat(animations ? 'open' : ''),
    children: ["/* istanbul ignore next */", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spinner.default, {})]
  }), document.body) : '';
};

var _default = ReactCleanModal;
exports.default = _default;