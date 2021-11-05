import { useState } from 'react'
/**
 * A React hook that allows functional components modal
 * to open and close and optional hook for display spinner.
 *
 * @returns {boolean} isShowing - Modal showed
 * @returns {boolean} isShowingSpinner - Spinner showed
 * @returns {function} toggle - Modal toggle
 * @returns {function} toggleSpinner - Spinner toggle
 */
const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [isShowingSpinner, setIsShowingSpinner] = useState(false)
    /**
     * Function for toggle modal
     */
    function toggle() {
        setIsShowing(!isShowing)
        // Hide spinner when modal isShowing
        if (!isShowing) {
            setIsShowingSpinner(false)
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = '15px'
        }
        // Scroll management
        if (isShowing) {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
        }
    }
    /**
     * Function for toggle spinner
     */
    function toggleSpinner() {
        setIsShowingSpinner(!isShowingSpinner)

        // Scroll management
        if (!isShowing) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = '15px'
        }
        if (isShowing) {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
        }
    }
    return {
        isShowing,
        isShowingSpinner,
        toggle,
        toggleSpinner
    }
}
export default useModal
