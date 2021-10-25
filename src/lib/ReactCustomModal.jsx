import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactCustomModal.scss'

// Mettre class optionnelles pour custom css

const ReactCustomModal = ({
    hide,
    isVisible,
    customClass,
    closeOnOverlayClick,
    closeOnScroll,
    ...props
}) => {
    // custom options CSS
    const modalOptions = [customClass ? 'modal-custom' : ''].join(' ')

    function closeModalEvent() {
        if (isVisible && closeOnScroll) {
            hide()
        }
    }

    useEffect(() => {
        window.addEventListener('wheel', closeModalEvent)
        return () => window.removeEventListener('wheel', closeModalEvent)
    }, [isVisible])

    return isVisible
        ? ReactDOM.createPortal(
              <div
                  className="modal-overlay"
                  onClick={closeOnOverlayClick ? hide : undefined}>
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
