import { useState } from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [isShowingSpinner, setIsShowingSpinner] = useState(false)

    function toggle() {
        setIsShowing(!isShowing)
        if (!isShowing) {
            setIsShowingSpinner(false)
        }
    }

    function toggleSpinner() {
        setIsShowingSpinner(!isShowingSpinner)
    }

    return {
        isShowing,
        isShowingSpinner,
        toggle,
        toggleSpinner
    }
}

export default useModal
