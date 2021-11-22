import React from 'react'
import ReactCleanModal from '../components/ReactCleanModal'
import '@testing-library/jest-dom/extend-expect'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import EnzymeToJson from 'enzyme-to-json'

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

/**
 * Test on ReactCustomModal with Snapshots
 */

test('Render portal with children inside', () => {
    const subject = mount(
        <ReactCleanModal isVisible={true}>
            <h1>Modal title</h1>
            <button type="button" className="btn-clean-modal" onClick={mockFn}>
                Close
            </button>
        </ReactCleanModal>
    )
    expect(EnzymeToJson(subject)).toMatchSnapshot()
})

test('Render modal with custom class', () => {
    const subject = mount(<ReactCleanModal isVisible={true} customClass={'my-class'} />)
    expect(EnzymeToJson(subject)).toMatchSnapshot()
})

test('Render spinner before modal', () => {
    const subject = mount(<ReactCleanModal isVisible={false} showSpinner={true} />)
    expect(EnzymeToJson(subject)).toMatchSnapshot()
})

test('Render modal with custom button and custom function', () => {
    const subject = mount(<ReactCleanModal isVisible={true} customFooter={arrayOfBtn} />)
    expect(EnzymeToJson(subject)).toMatchSnapshot()
})

test('Render modal with aria label attribute', () => {
    const subject = mount(
        <ReactCleanModal isVisible={true} ariaLabelledBy={'dialog1_label'}>
            <h1 aria-describedby="dialog1_label">HAHA</h1>
        </ReactCleanModal>
    )
    expect(EnzymeToJson(subject)).toMatchSnapshot()
})
