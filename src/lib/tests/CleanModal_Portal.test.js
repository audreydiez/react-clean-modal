

import { render } from '@testing-library/react'
import ReactCleanModal from '../components/ReactCleanModal'
import { fireEvent, within } from '@testing-library/dom'
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'


const mockFn = jest.fn()

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