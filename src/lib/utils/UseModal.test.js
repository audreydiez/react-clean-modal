import { renderHook, act } from '@testing-library/react-hooks'
import useModal from './useModal'

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
})
