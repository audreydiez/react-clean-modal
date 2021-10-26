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
            <ReactCustomModal
                isVisible={showCloseOnTop}
                closeOnOverlayClick={true}
                closeOnScroll={true}
                closeOnTop={true}
                hide={toggleCloseOnTop}>
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleCloseOnTop}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>
        </div>
    )
}

export default App
