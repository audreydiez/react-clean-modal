import React from 'react'
import { render } from '@testing-library/react'
import ReactCustomModal from './ReactCustomModal'
import '@testing-library/jest-dom/extend-expect'
import { within } from '@testing-library/dom'

test('Modal shows the children', () => {
    render(
        <ReactCustomModal isVisible={true} closeOnOverlayClick={true}>
            <div data-testid="test" />
        </ReactCustomModal>
    )

    // get element only in modal-root
    const { getByTestId } = within(document.getElementById('modal-root'))
    expect(getByTestId('test')).toBeInTheDocument()
})
