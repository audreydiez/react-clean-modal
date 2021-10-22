import { useState } from 'react'

const useModal = () => {
    const [isVisible, setIsVisible] = useState(false)

    function toggleModal() {
        setIsVisible(!isVisible)
        if (setIsVisible) {
            return (document.body.style.overflow = 'unset')
        }
        document.body.style.overflow = 'hidden'
    }

    return {
        isVisible,
        toggleModal
    }
}

export default useModal
