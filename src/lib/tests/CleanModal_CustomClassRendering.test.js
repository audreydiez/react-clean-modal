import Enzyme, { shallow } from 'enzyme'
import ReactCleanModal from '../components/ReactCleanModal'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

const mockFn = jest.fn()

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

describe('Custom Class rendering', () => {
    test('Render modal with custom class', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} customClass={'my-class'} />)
        expect(wrapper.exists('div.modal-overlay-my-class')).toEqual(true)
        expect(wrapper.exists('div.modal-container-my-class')).toEqual(true)
    })
    test('Render modal with custom class and Icon close', () => {
        const wrapper = shallow(
            <ReactCleanModal isVisible={true} closeOnTop={true} customClass={'my-class'} />
        )
        expect(wrapper.exists('div.modal-close-my-class')).toEqual(true)
        expect(wrapper.exists('img.modal-close-icon-my-class')).toEqual(true)
    })
    test('Render modal with custom class and Custom footer', () => {
        const wrapper = shallow(
            <ReactCleanModal isVisible={true} customClass={'my-class'} customFooter={arrayOfBtn} />
        )
        expect(wrapper.exists('div.modal-footer-my-class')).toEqual(true)
    })
})
