import './App.scss'
import React from 'react'

import ReactCustomModal from './lib/ReactCustomModal'
import useModal from './lib/useModal'

function App() {
    const { isVisible, toggleModal } = useModal()

    return (
        <div style={{ width: 640, margin: '15px auto' }}>
            <h1>Hello React</h1>
            <button type="button" className="btn" onClick={toggleModal}>
                Open me !
            </button>
            <ReactCustomModal
                isVisible={isVisible}
                hide={toggleModal}
                label="Email Address"
                placeholder="name@example.com">
                <h1>HAHA</h1>
                <button type="button" className="" onClick={toggleModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ReactCustomModal>
        </div>
    )
}

export default App
