import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactCustomModal.scss'
import iconClose from './icon_close.svg'
import Spinner from './Spinner'

// Mettre class optionnelles pour custom css

const ReactCustomModal = ({
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

    function closeModalEvent(e) {
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

    let tempAnimationsOpen = animations

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            closeModalEvent(e)
        })

        if (closeOnScroll) {
            window.addEventListener('wheel', closeModalEvent)
        }

        // Si spinner, pas d'animation d'entrée
        if (showSpinner) {
            tempAnimationsOpen = false
        }

        return () => {
            window.removeEventListener('wheel', closeModalEvent)
            window.removeEventListener('keyup', closeModalEvent)
        }
    }, [isVisible])

    const createCustomFooter = () => {
        const arrayOfBtn = []
        customFooter.map((btn, key) => {
            arrayOfBtn.push(
                React.createElement(
                    'button',
                    {
                        className: btn.className,
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
              <div className="modal-overlay">
                  <Spinner />
              </div>,
              document.body
          )
        : ''
}

export default ReactCustomModal
