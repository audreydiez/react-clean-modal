import * as React from 'react'
import './Spinner.scss'

/**
 * Function component that render simple spinner
 *
 * @returns
 */
const Spinner = (props) => {

    return (
        <>
            <svg className="spinner" viewBox="0 0 50 50" title="Spinner">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
            </svg>
        </>
    )
}

export default Spinner
