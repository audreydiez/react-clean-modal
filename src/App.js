import './App.scss'
import React from 'react'

import ReactCustomModal from './lib/ReactCustomModal'
import useModal from './lib/useModal'

function App() {
    const { isShowing: showClassic, toggle: toggleClassic } = useModal()
    const { isShowing: showOverlay, toggle: toggleOverlay } = useModal()
    const { isShowing: showScroll, toggle: toggleScroll } = useModal()
    const { isShowing: showAnimated, toggle: toggleAnimated } = useModal()
    const { isShowing: showCloseOnTop, toggle: toggleCloseOnTop } = useModal()
    const { isShowing: showTestId, toggle: toggleTestId } = useModal()
    const { isShowing: showCustomFooter, toggle: toggleCustomFooter } = useModal()

    const customEvent = () => {
        alert('Ah')
    }

    const arrayOfBtn = [
        {
            text: 'Close modal',
            className: 'modal-btn-custom'
        },
        {
            text: 'Alert me!',
            className: 'modal-btn-custom',
            eventHandling: customEvent
        }
    ]

    return (
        <div style={{ width: 640, margin: '15px auto' }}>
            <h1>Hello React</h1>
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
                Open me! (on scroll)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleAnimated}>
                Open me! (animated)
            </button>
            <br />
            <br />
            <button type="button" className="btn" onClick={toggleCloseOnTop}>
                Open me! (close on top)
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

            <ReactCustomModal isVisible={showClassic} hide={toggleClassic}>
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleClassic}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showOverlay}
                closeOnOverlayClick={true}
                hide={toggleOverlay}
                animations={true}>
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleOverlay}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showScroll}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleScroll}
                customClass={'custom-modal-class'}>
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleScroll}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showAnimated}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleAnimated}
                customClass={'custom-modal-class'}
                animations={true}>
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleAnimated}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>

            <ReactCustomModal isVisible={showCloseOnTop} closeOnTop={true} hide={toggleCloseOnTop}>
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleCloseOnTop}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showTestId}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleTestId}
                ariaLabelledBy={'dialog1_label'}
                testId={'modal-test'}>
                <h1 aria-describedby="dialog1_label">HAHA</h1>
                <button type="button" className="" onClick={toggleTestId}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>

            <ReactCustomModal
                isVisible={showCustomFooter}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                hide={toggleCustomFooter}
                customFooter={arrayOfBtn}>
                <h1>HAHA</h1>
            </ReactCustomModal>
        </div>
    )
}

export default App
