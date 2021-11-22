import React from 'react'
import { render } from '@testing-library/react'
import ReactCleanModal from '../components/ReactCleanModal'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, within } from '@testing-library/dom'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

const mockFn = jest.fn()
Enzyme.configure({ adapter: new Adapter() })

const arrayOfBtn = [
    {
        text: 'Close modal',
        className: 'btn-clean-modal-one',
        eventHandling: mockFn
    },
    {
        text: 'Alert me!',
        className: 'btn-clean-modal-two',
        eventHandling: mockFn
    }
]

describe('Modal rendering options', () => {
    test('Render modal with animations', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} animations={true} />)
        const modalOverlay = wrapper.find('.modal-overlay')
        const modalContainer = wrapper.find('.modal-container')
        expect(modalOverlay.exists('.open')).toEqual(true)
        expect(modalContainer.exists('.open')).toEqual(true)
    })

    test('Render modal with custom button', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} customFooter={arrayOfBtn} />)

        expect(wrapper.exists('.btn-clean-modal-one')).toEqual(true)
        expect(wrapper.exists('.btn-clean-modal-two')).toEqual(true)

        const firstButton = wrapper.find('.btn-clean-modal-one')
        firstButton.simulate('click')
        expect(mockFn).toHaveBeenCalled()
    })

    test('Render modal with custom button and custom function', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} customFooter={arrayOfBtn} />)

        const firstButton = wrapper.find('.btn-clean-modal-one')
        firstButton.simulate('click')
        expect(mockFn).toHaveBeenCalled()
    })

    test('Render modal with aria label attribute', () => {
        const wrapper = shallow(
            <ReactCleanModal isVisible={true} ariaLabelledBy={'dialog1_label'}>
                <h1 aria-describedby="dialog1_label">HAHA</h1>
            </ReactCleanModal>
        )
        expect(wrapper.find('div.modal-container').props()).toHaveProperty(
            'aria-labelledby',
            'dialog1_label'
        )
    })
    test('Render modal with data-testid attribute', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} testId={'modal-test'} />)
        expect(wrapper.find('div.modal-container').props()).toHaveProperty(
            'data-testid',
            'modal-test'
        )
    })

    test('tester fonction interieur ', () => {
        //const wrapper = shallow(<ReactCleanModal isVisible={true} closeOnOverlayClick={true} />)
        // const overlay = wrapper.find('.modal-overlay')
        //overlay.simulate('click')
        //const overlayClicked = wrapper.find('.modal-overlay')
        //expect(overlayClicked).toHaveClass('close')
    })
})
