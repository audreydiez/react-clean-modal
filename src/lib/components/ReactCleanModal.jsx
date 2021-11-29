import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactCleanModal.scss'
import iconClose from '../assets/icon_close.svg'
import Spinner from './Spinner'

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
const ReactCleanModal = ({
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
    showSpinner,
    ...props
}) => {
    const [animationsOnClose, setAnimationsOnClose] = useState(false)

    let tempAnimationsOpen = animations

    /* istanbul ignore next */
    function closeModalEvent(e) {
        // When key press event
        if (e.key === 'Escape') {
            if (isVisible && !animations) {
                hide()
            }
            if (isVisible && animations) {
                setAnimationsOnClose(true)
                setTimeout(function () {
                    setAnimationsOnClose(false)
                    hide()
                }, 250)
            }
        }
        // When ordinary closing event
        if (isVisible && !animations) {
            hide()
        }
        if (isVisible && animations) {
            setAnimationsOnClose(true)
            setTimeout(function () {
                setAnimationsOnClose(false)
                hide()
            }, 250)
        }
    }

    /**
     * Add event listener when component is mount.
     * @callback Remove all event listener when unmount
     * @event closeModalEvent#Wheel
     * @event closeModalEvent#keyup
     */
    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            closeModalEvent(e)
        })

        if (closeOnScroll) {
            window.addEventListener('wheel', closeModalEvent)
        }

        // If Spinner, no need animation for modal overlay
        if (showSpinner) {
            tempAnimationsOpen = false
        }

        return () => {
            window.removeEventListener('wheel', closeModalEvent)
            window.removeEventListener('keyup', closeModalEvent)
        }
    }, [isVisible])

    /**
     * Create the custom footer if optional customFooter button are received
     * @returns {Array} arrayOfButton - ready to display in render
     */
    const createCustomFooter = () => {
        const arrayOfBtn = []
        customFooter.map((btn, key) => {
            arrayOfBtn.push(
                React.createElement(
                    'button',
                    {
                        className: btn.className + ' btn' + key,
                        key: key,
                        onClick: btn.eventHandling ? btn.eventHandling : closeModalEvent
                    },
                    btn.text
                )
            )
        })
        return arrayOfBtn
    }

    return isVisible
        ? ReactDOM.createPortal(
              <div
                  id="modal-root"
                  className={`modal-overlay ${
                      tempAnimationsOpen && showSpinner === undefined ? 'open' : ''
                  } ${animationsOnClose ? 'close' : ''} ${
                      customClass ? 'modal-overlay-' + customClass : ''
                  }`}
                  onClick={closeOnOverlayClick ? closeModalEvent : undefined}>
                  <div
                      role="dialog"
                      aria-modal="true"
                      className={`modal modal-container ${animations ? 'open' : ''} ${
                          customClass ? 'modal-container-' + customClass : ''
                      } `}
                      aria-labelledby={ariaLabelledBy}
                      data-testid={testId}
                      onClick={(e) => e.stopPropagation()}>
                      {props.children}
                      {closeOnTop ? (
                          <div
                              className={`modal-close ${
                                  customClass ? 'modal-close-' + customClass : ''
                              }`}
                              onClick={closeModalEvent}>
                              <img
                                  src={iconClose}
                                  className={`modal-close-icon ${
                                      customClass ? 'modal-close-icon-' + customClass : ''
                                  }`}
                                  alt="Close modal"
                              />
                          </div>
                      ) : (
                          ''
                      )}
                      {customFooter ? (
                          <div
                              className={`modal-footer ${
                                  customFooterAlign ? customFooterAlign : 'center'
                              } ${customClass ? 'modal-footer-' + customClass : ''}`}>
                              {createCustomFooter()}
                          </div>
                      ) : (
                          ''
                      )}
                  </div>
              </div>,
              document.body
          )
        : showSpinner
        ? ReactDOM.createPortal(
              <div
                  role="spinner"
                  className={`modal-overlay spinner-overlay ${animations ? 'open' : ''}`}>
                  <Spinner />
              </div>,
              document.body
          )
        : ''
}

export default ReactCleanModal
