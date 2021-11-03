"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./ReactCleanModal.scss");

var _icon_close = _interopRequireDefault(require("../assets/icon_close.svg"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

const _excluded = ["hide", "isVisible", "customClass", "closeOnOverlayClick", "closeOnScroll", "animations", "closeOnTop", "ariaLabelledBy", "testId", "customFooter", "customFooterAlign", "showSpinner"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
const ReactCleanModal = _ref => {
  let {
    hide,
    isVisible,
    customClass,
    closeOnOverlayClick = false,
    closeOnScroll = false,
    animations = false,
    closeOnTop = false,
    ariaLabelledBy,
    testId,
    customFooter,
    customFooterAlign,
    showSpinner
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [animationsOnClose, setAnimationsOnClose] = (0, _react.useState)(false);
  let tempAnimationsOpen = animations;
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


  (0, _react.useEffect)(() => {
    window.addEventListener('keyup', e => {
      closeModalEvent(e);
    });

    if (closeOnScroll) {
      window.addEventListener('wheel', closeModalEvent);
    } // If Spinner, no need animation for modal overlay


    if (showSpinner) {
      tempAnimationsOpen = false;
    }

    return () => {
      window.removeEventListener('wheel', closeModalEvent);
      window.removeEventListener('keyup', closeModalEvent);
    };
  }, [isVisible]);
  /**
   * Create the custom footer if optional customFooter button are received
   * @returns {Array} arrayOfButton - ready to display in render
   */

  const createCustomFooter = () => {
    const arrayOfBtn = [];
    customFooter.map((btn, key) => {
      arrayOfBtn.push( /*#__PURE__*/_react.default.createElement('button', {
        className: btn.className,
        key: key,
        onClick: btn.eventHandling ? btn.eventHandling : closeModalEvent
      }, btn.text));
    });
    return arrayOfBtn;
  };

  return isVisible ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    id: "modal-root",
    className: "modal-overlay ".concat(tempAnimationsOpen && showSpinner === undefined ? 'open' : '', " ").concat(animationsOnClose ? 'close' : '', " ").concat(customClass ? 'modal-overlay-' + customClass : ''),
    onClick: closeOnOverlayClick ? closeModalEvent : undefined
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: "modal modal-container ".concat(animations ? 'open' : '', " ").concat(customClass ? 'modal-container-' + customClass : '', " "),
    "aria-labelledby": ariaLabelledBy,
    "data-testid": testId,
    onClick: e => e.stopPropagation()
  }, props.children, closeOnTop ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close ".concat(customClass ? 'modal-close-' + customClass : ''),
    onClick: closeModalEvent
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _icon_close.default,
    className: "modal-close-icon ".concat(customClass ? 'modal-close-icon-' + customClass : ''),
    alt: "Close modal"
  })) : '', customFooter ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer ".concat(customFooterAlign ? customFooterAlign : 'center', " ").concat(customClass ? 'modal-footer-' + customClass : '')
  }, createCustomFooter()) : '')), document.body) : showSpinner ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay spinner-overlay".concat(animations ? 'open' : '')
  }, /*#__PURE__*/_react.default.createElement(_Spinner.default, null)), document.body) : '';
};

var _default = ReactCleanModal;
exports.default = _default;