import './App.scss'
import React from 'react'

import ReactCleanModal from './lib/components/ReactCleanModal'
import useModal from './lib/utils/useModal'

function App() {
    const { isShowing: showClassic, toggle: toggleClassic } = useModal()
    const { isShowing: showOverlay, toggle: toggleOverlay } = useModal()
    const { isShowing: showScroll, toggle: toggleScroll } = useModal()
    const { isShowing: showCloseOnTop, toggle: toggleCloseOnTop } = useModal()
    const { isShowing: showTestId, toggle: toggleTestId } = useModal()
    const { isShowing: showCustomFooter, toggle: toggleCustomFooter } = useModal()
    const {
        isShowing: showClassicModal,
        toggle: toggleClassicModal,
        isShowingSpinner: showSpinner,
        toggleSpinner: toggleSpinner
    } = useModal()

    let key = 1

    const customEvent = () => {
        alert('Ah')
    }

    const arrayOfBtn = [
        {
            text: 'Close modal',
            className: 'btn-clean-modal'
        },
        {
            text: 'Alert me!',
            className: 'btn-clean-modal',
            eventHandling: customEvent
        }
    ]

    const launchModalTimer = () => {
        toggleSpinner()

        setTimeout(() => {
            toggleClassicModal()
        }, 3000)
    }

    return (
        <div style={{ width: 640, margin: '15px auto' }}>
            <h1>React Clean Modal </h1>
            <button type="button" className="btn" onClick={toggleClassic}>
                Open me! (classic)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleOverlay}>
                Open me! (overlay)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleScroll}>
                Open me! (on scroll with custom modal class)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleCloseOnTop}>
                Open me! (close on top with animation)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleTestId}>
                Open me! (testing friendly with aria)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleCustomFooter}>
                Open me! (Custom footer buttons with custom event)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={launchModalTimer}>
                Open me! (3s after spinner)
            </button>

            <ReactCleanModal isVisible={showClassic} hide={toggleClassic}>
                <h1>Modal title</h1>
                <button type="button" className="btn-clean-modal" onClick={toggleClassic}>
                    Close
                </button>
            </ReactCleanModal>
            <ReactCleanModal
                isVisible={showOverlay}
                closeOnOverlayClick={true}
                hide={toggleOverlay}>
                <h1>Modal title</h1>
                <button type="button" className="btn-clean-modal" onClick={toggleOverlay}>
                    Close
                </button>
            </ReactCleanModal>
            <ReactCleanModal
                isVisible={showScroll}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleScroll}
                customClass={'my-class'}>
                <h1>Modal title</h1>
                <button type="button" className="btn-clean-modal" onClick={toggleScroll}>
                    Close
                </button>
            </ReactCleanModal>
            <ReactCleanModal
                isVisible={showCloseOnTop}
                closeOnTop={true}
                closeOnOverlayClick={true}
                animations={true}
                hide={toggleCloseOnTop}
                customClass={'my-class'}>
                <h1>Modal title</h1>
            </ReactCleanModal>
            <ReactCleanModal
                isVisible={showTestId}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleTestId}
                ariaLabelledBy={'dialog1_label'}
                testId={'modal-test'}>
                <h1 aria-describedby="dialog1_label">Modal title with Aria label</h1>
            </ReactCleanModal>
            <ReactCleanModal
                isVisible={showCustomFooter}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleCustomFooter}
                customFooter={arrayOfBtn}
                customFooterAlign={'left'}>
                <h1>With custom buttons</h1>
            </ReactCleanModal>
            <ReactCleanModal
                isVisible={showClassicModal}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                showSpinner={showSpinner}
                hide={toggleClassicModal}
                animations={true}
                key={key}>
                <h1>Modal title after some work stuff</h1>
            </ReactCleanModal>
        </div>
    )
}

export default App
