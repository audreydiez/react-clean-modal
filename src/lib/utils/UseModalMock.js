import useModal from './useModal'

const SignOut = () => {
    const { isShowing, toggle } = useModal()
    return (
        <button data-testid="show-modal" onClick={() => toggle()}>
            Launch modal
        </button>
    )
}

export default SignOut
