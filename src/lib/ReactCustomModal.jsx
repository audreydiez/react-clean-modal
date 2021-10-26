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
    ...props
}) => {
    const [animationsOnClose, setAnimationsOnClose] = useState(false)

    // custom options CSS
    const modalOptions = [customClass ? customClass : ''].join(' ')

    function closeModalEvent() {
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

    // If CloseOnScroll
    useEffect(() => {
        if (closeOnScroll) {
            window.addEventListener('wheel', closeModalEvent)
            return () => window.removeEventListener('wheel', closeModalEvent)
        }
    }, [isVisible])

    return isVisible
        ? ReactDOM.createPortal(
              <div
                  className={`modal-overlay ${animations ? 'open' : ''} ${
                      animationsOnClose ? 'close' : ''
                  }`}
                  onClick={closeOnOverlayClick ? closeModalEvent : undefined}>
                  <div
                      className={`modal modal-container ${modalOptions}`}
                      onClick={(e) => e.stopPropagation()}>
                      {props.children}
                      {closeOnTop ? (
                          <div className="modal-close">
                              <img src={iconClose} className="modal-close-icon" alt="" />
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
