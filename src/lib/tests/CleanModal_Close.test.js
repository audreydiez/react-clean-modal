import Enzyme, { mount, shallow } from 'enzyme'
import ReactCleanModal from '../components/ReactCleanModal'
import { fireEvent } from '@testing-library/dom'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('Close functions', () => {
    test('Close modal is called when button click', () => {
        const mockCloseFn = jest.fn()

        const wrapper = shallow(
            <ReactCleanModal isVisible={true} hide={mockCloseFn}>
                <button type="button" className="btn-clean-modal" onClick={mockCloseFn}>
                    Close
                </button>
            </ReactCleanModal>
        )
        const firstButton = wrapper.find('.btn-clean-modal')
        firstButton.simulate('click')
        expect(mockCloseFn).toHaveBeenCalled()
    })
    test('tester fonction interieur ', () => {
        const wrapper = mount(<ReactCleanModal isVisible={true} closeOnOverlayClick={true} />)

        const overlay = wrapper.find('.modal-overlay')

        console.log(overlay.debug())

        //overlay.simulate('click')
        fireEvent.click(overlay)

        //const overlayClicked = wrapper.find('.modal-overlay')

        //expect(overlayClicked).toHaveClass('close')
    })
})
