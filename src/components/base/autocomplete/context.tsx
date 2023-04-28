import {
  autoUpdate,
  flip,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

export function useAutocomplete() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [activeId, setActiveId] = useState<string | undefined>('')

  const listRef = useRef<Array<HTMLElement | null>>([])

  const setRefs = useCallback((node, index) => {
    listRef.current[index] = node
  }, [])

  const data = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(14),
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width + 24}px`,
            maxHeight: `${availableHeight}px`,
          })
        },
      }),
    ],
  })

  const context = data.context

  const role = useRole(context, { role: 'listbox' })
  const dismiss = useDismiss(context)

  const interactions = useInteractions([role, dismiss])

  return useMemo(
    () => ({
      open,
      inputValue,
      activeId,
      setInputValue,
      setActiveId,
      setOpen,
      setRefs,
      ...interactions,
      ...data,
    }),
    [
      open,
      interactions,
      data,
      inputValue,
      activeId,
      setOpen,
      setRefs,
      setInputValue,
      setActiveId,
    ],
  )
}

type ContextType = ReturnType<typeof useAutocomplete> | null

export const AutocompleteContext = createContext<ContextType>(null)

export const useAutocompleteContext = () => {
  const context = useContext(AutocompleteContext)

  if (context == null) {
    throw new Error(
      'Autocomplete components must be wrapped in <Autocomplete />',
    )
  }

  return context
}
