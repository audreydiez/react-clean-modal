import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactCustomModal.scss'

// Mettre class optionnelles pour custom css

const ReactCustomModal = ({
    hide,
    isVisible,
    customClass,
    closeOnOverlayClick,
    closeOnScroll= false,
    animations= false,
    ...props
}) => {

    const [animationsOnClose, setAnimationsOnClose] = useState(false);

    // custom options CSS
    const modalOptions = [customClass ? customClass : ''].join(' ')


    function closeModalEvent() {
        if (isVisible && !animations) {
            hide()
        }
        if (isVisible && animations) {
            console.log("a")
            setAnimationsOnClose (true)
            setTimeout(function() {
                setAnimationsOnClose (false)
                hide()
            }, 250)
        }
    }

    // If CloseOnScroll
    useEffect(() => {
        if (closeOnScroll){
            window.addEventListener('wheel', closeModalEvent)
            return () => window.removeEventListener('wheel', closeModalEvent)
        }
    }, [isVisible])

    return isVisible
        ? ReactDOM.createPortal(
              <div
                  className={`modal-overlay ${animations ? "open" : ""} ${animationsOnClose ? "close" : ""}`}
                  onClick={closeOnOverlayClick ? closeModalEvent : undefined}>
                  <div
                      className={`modal modal-container ${modalOptions}`}
                      onClick={(e) => e.stopPropagation()}>
                      {props.children}
                  </div>
                  <div className="modal-close" />
              </div>,
              document.body
          )
        : ''
}

export default ReactCustomModal
