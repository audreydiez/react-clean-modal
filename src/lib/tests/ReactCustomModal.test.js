import React from 'react'
import { render } from '@testing-library/react'
import ReactCleanModal from '../components/ReactCleanModal'
import '@testing-library/jest-dom/extend-expect'
import { within } from '@testing-library/dom'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('Children test', () => {
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

describe('Modal rendering', () => {
    test('Render modal with custom class', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} customClass={'my-class'} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.exists('div.modal-overlay-my-class')).toEqual(true)
    })

    test('Render spinner before modal', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={false} showSpinner={true} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.exists('div.spinner-overlay')).toEqual(true)
    })

    test('Render modal with animations', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} animations={true} />)
        expect(wrapper).toMatchSnapshot()
        const modalOverlay = wrapper.find('.modal-overlay')
        const modalContainer = wrapper.find('.modal-container')
        expect(modalOverlay.exists('.open')).toEqual(true)
        expect(modalContainer.exists('.open')).toEqual(true)
    })

    test('Render modal with custom button and custom function', () => {
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

        const wrapper = shallow(<ReactCleanModal isVisible={true} customFooter={arrayOfBtn} />)
        expect(wrapper).toMatchSnapshot()

        expect(wrapper.exists('.btn-clean-modal-one')).toEqual(true)
        expect(wrapper.exists('.btn-clean-modal-two')).toEqual(true)

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
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('div.modal-container').props()).toHaveProperty(
            'aria-labelledby',
            'dialog1_label'
        )
    })
    test('Render modal with data-testid attribute', () => {
        const wrapper = shallow(<ReactCleanModal isVisible={true} testId={'modal-test'} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('div.modal-container').props()).toHaveProperty(
            'data-testid',
            'modal-test'
        )
    })
})
