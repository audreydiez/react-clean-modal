import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactCustomModal.scss'
import iconClose from './icon_close.svg'

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
    ...props
}) => {
    const [animationsOnClose, setAnimationsOnClose] = useState(false)

    // custom options CSS
    const modalOptions = [customClass ? customClass : ''].join(' ')

    function closeModalEvent(e) {
        console.log('a')
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

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            closeModalEvent(e)
        })

        if (closeOnScroll) {
            window.addEventListener('wheel', closeModalEvent)
        }

        return () => {
            window.removeEventListener('wheel', closeModalEvent)
            window.removeEventListener('keyup', closeModalEvent)
        }
    }, [isVisible])

    //console.log(customFooter)

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
                  className={`modal-overlay ${animations ? 'open' : ''} ${
                      animationsOnClose ? 'close' : ''
                  }`}
                  onClick={closeOnOverlayClick ? closeModalEvent : undefined}>
                  <div
                      role="dialog"
                      aria-modal="true"
                      className={`modal modal-container ${modalOptions}`}
                      aria-labelledby={ariaLabelledBy}
                      data-testid={testId}
                      onClick={(e) => e.stopPropagation()}>
                      {props.children}
                      {closeOnTop ? (
                          <div className="modal-close" onClick={closeModalEvent}>
                              <img src={iconClose} className="modal-close-icon" alt="" />
                          </div>
                      ) : (
                          ''
                      )}
                      {customFooter ? (
                          <div
                              className={`modal-footer ${
                                  customFooterAlign ? customFooterAlign : 'center'
                              } `}>
                              {createCustomFooter()}
                          </div>
                      ) : (
                          ''
                      )}
                  </div>
              </div>,
              document.body
          )
        : ''
}

export default ReactCustomModal
