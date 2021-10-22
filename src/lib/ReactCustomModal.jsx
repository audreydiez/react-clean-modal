import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactCustomModal.scss'

// Mettre class optionnelles pour custom css

const ReactCustomModal = ({
    toggleModal,
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
            toggleModal()
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
                  onClick={closeOnOverlayClick ? toggleModal : undefined}>
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
