import './App.scss'
import React from 'react'

import ReactCustomModal from './lib/ReactCustomModal'
import useModal from './lib/useModal'

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
            <h1>Hello React </h1>
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
            <br />
            <br />

            <ReactCustomModal isVisible={showClassic} hide={toggleClassic}>
                <h1>HAHA</h1>
                <button type="button" className="btn-clean-modal" onClick={toggleClassic}>
                    Close
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showOverlay}
                closeOnOverlayClick={true}
                hide={toggleOverlay}>
                <h1>HAHA</h1>
                <button type="button" className="btn-clean-modal" onClick={toggleOverlay}>
                    Close
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showScroll}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleScroll}
                customClass={'my-class'}>
                <h1>HAHA</h1>
                <button type="button" className="btn-clean-modal" onClick={toggleScroll}>
                    Close
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showCloseOnTop}
                closeOnTop={true}
                closeOnOverlayClick={true}
                animations={true}
                hide={toggleCloseOnTop}
                customClass={'my-class'}>
                <h1>HAHA</h1>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showTestId}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleTestId}
                ariaLabelledBy={'dialog1_label'}
                testId={'modal-test'}>
                <h1 aria-describedby="dialog1_label">HAHA</h1>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showCustomFooter}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleCustomFooter}
                customFooter={arrayOfBtn}
                customFooterAlign={'left'}>
                <h1>HAHA</h1>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showClassicModal}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                showSpinner={showSpinner}
                hide={toggleClassicModal}
                animations={true}
                key={key}>
                <h1>HAHA</h1>
            </ReactCustomModal>
        </div>
    )
}

export default App
