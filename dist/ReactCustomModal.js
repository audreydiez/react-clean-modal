"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./ReactCustomModal.scss");

var _icon_close = _interopRequireDefault(require("./icon_close.svg"));

const _excluded = ["hide", "isVisible", "customClass", "closeOnOverlayClick", "closeOnScroll", "animations", "closeOnTop", "ariaLabelledBy", "testId", "customFooter", "customFooterAlign"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Mettre class optionnelles pour custom css
const ReactCustomModal = _ref => {
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
    customFooterAlign
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [animationsOnClose, setAnimationsOnClose] = (0, _react.useState)(false); // custom options CSS

  const modalOptions = [customClass ? customClass : ''].join(' ');

  function closeModalEvent(e) {
    console.log('a');

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
    }

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

  (0, _react.useEffect)(() => {
    window.addEventListener('keyup', e => {
      closeModalEvent(e);
    });

    if (closeOnScroll) {
      window.addEventListener('wheel', closeModalEvent);
    }

    return () => {
      window.removeEventListener('wheel', closeModalEvent);
      window.removeEventListener('keyup', closeModalEvent);
    };
  }, [isVisible]); //console.log(customFooter)

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
    className: "modal-overlay ".concat(animations ? 'open' : '', " ").concat(animationsOnClose ? 'close' : ''),
    onClick: closeOnOverlayClick ? closeModalEvent : undefined
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: "modal modal-container ".concat(modalOptions),
    "aria-labelledby": ariaLabelledBy,
    "data-testid": testId,
    onClick: e => e.stopPropagation()
  }, props.children, closeOnTop ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close",
    onClick: closeModalEvent
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _icon_close.default,
    className: "modal-close-icon",
    alt: ""
  })) : '', customFooter ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer ".concat(customFooterAlign ? customFooterAlign : 'center', " ")
  }, createCustomFooter()) : '')), document.body) : '';
};

var _default = ReactCustomModal;
exports.default = _default;