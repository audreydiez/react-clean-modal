"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

/**
 * A React hook that allows functional components modal
 * to open and close and optional hook for display spinner.
 *
 * @returns {boolean} isShowing - Modal showed
 * @returns {boolean} isShowingSpinner - Spinner showed
 * @returns {function} toggle - Modal toggle
 * @returns {function} toggleSpinner - Spinner toggle
 */
const useModal = () => {
  const [isShowing, setIsShowing] = (0, _react.useState)(false);
  const [isShowingSpinner, setIsShowingSpinner] = (0, _react.useState)(false);
  /**
   * Function for toggle modal
   */

  function toggle() {
    setIsShowing(!isShowing); // Hide spinner when modal isShowing

    if (!isShowing) {
      setIsShowingSpinner(false);
    }
  }
  /**
   * Function for toggle spinner
   */


  function toggleSpinner() {
    setIsShowingSpinner(!isShowingSpinner);
  }

  return {
    isShowing,
    isShowingSpinner,
    toggle,
    toggleSpinner
  };
};

var _default = useModal;
exports.default = _default;