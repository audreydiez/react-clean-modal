import { render } from '@testing-library/react'
import ReactCleanModal from '../components/ReactCleanModal'
import { within } from '@testing-library/dom'
import React from 'react'

describe('Portal Children test', () => {
    test('Modal shows the children', () => {
        render(
            <ReactCleanModal isVisible={true} closeOnOverlayClick={true}>
                <div data-testid="test" />
            </ReactCleanModal>
        )

        // get element only in modal-root
        const { getByTestId } = within(document.getElementById('modal-root'))
        expect(getByTestId('test')).toBeInTheDocument()
    })
})
