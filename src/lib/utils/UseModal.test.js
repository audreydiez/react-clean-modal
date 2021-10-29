import { renderHook, act } from '@testing-library/react-hooks'
import useModal from './useModal'

describe('Test custom hook useModal', () => {
    test('should use counter', () => {
        const { result } = renderHook(() => useModal())

        expect(result.current.isShowing).toBe(false)
        expect(result.current.isShowingSpinner).toBe(false)

        expect(typeof result.current.toggle).toBe('function')
        expect(typeof result.current.toggleSpinner).toBe('function')
    })

    test('should update isShowing to true - opening modal', () => {
        const { result } = renderHook(() => useModal())

        act(() => {
            result.current.toggle()
        })
        expect(result.current.isShowing).toBe(true)
        expect(result.current.isShowingSpinner).toBe(false)
    })

    test('should update isShowingSpinner to true - show spinner', () => {
        const { result } = renderHook(() => useModal())

        act(() => {
            result.current.toggleSpinner()
        })
        expect(result.current.isShowingSpinner).toBe(true)
    })

    test('should isShowingSpinner to false if modal close', () => {
        const { result } = renderHook(() => useModal())

        act(() => {
            result.current.toggleSpinner()
            result.current.toggle()
        })
        expect(result.current.isShowingSpinner).toBe(false)
    })
})
