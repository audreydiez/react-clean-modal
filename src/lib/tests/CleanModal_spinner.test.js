import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactCleanModal from '../components/ReactCleanModal'

import { waitFor } from '@babel/core/lib/gensync-utils/async'
import Spinner from '../components/Spinner'
import { render } from '@testing-library/react'

describe('Spinner', () => {
    test('Render spinner before modal', () => {
        const { getByRole } = render(<ReactCleanModal isVisible={false} showSpinner={true} />)
        const spinner = getByRole('spinner')
        expect(spinner).toBeInTheDocument()
    })

    test('Remove spinner after async function', async () => {
        const { getByRole } = render(<ReactCleanModal isVisible={false} showSpinner={true} />)
        const spinner = getByRole('spinner')

        await waitFor(() => {
            expect(spinner).not.toBeInTheDocument()
        })
    })
})
