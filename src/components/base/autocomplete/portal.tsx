import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import { useAutocompleteContext } from './context'
import { AutocompleteItem, AutocompleteOption } from './item'
import { useDeferredValue, useEffect, useMemo } from 'react'

interface Props {
  options: AutocompleteOption[]
  value?: string
}

export function AutocompletePortal({ options, value }: Props) {
  const { setActiveId, open, ...context } = useAutocompleteContext()

  if (!open) return <FloatingPortal />

  const deferredInputValue = useDeferredValue(context.inputValue)

  const data = useMemo(() => {
    if (deferredInputValue.length > 0) {
      return options.filter((item) => {
        const inputValue = deferredInputValue.trim().toLocaleLowerCase()
        const labelValue = item.label.trim().toLowerCase()
        return labelValue.includes(inputValue)
      })
    }
    return options.slice(0, 5)
  }, [deferredInputValue, options])

  const isEmpty = data.length <= 0

  useEffect(() => {
    setActiveId(value)
  }, [value, open, setActiveId])

  return (
    <FloatingPortal>
      <FloatingFocusManager
        context={context.context}
        initialFocus={-1}
        visuallyHiddenDismiss
      >
        <div
          {...context.getFloatingProps({
            ref: context.refs.setFloating,
            style: {
              position: context.strategy,
              left: context.x ?? 0,
              top: context.y ?? 0,
            },
            className: isEmpty
              ? 'w-full flex items-center justify-center p-3 border rounded-md bg-white text-gray-400'
              : 'w-full p-1 border rounded-md bg-white',
          })}
        >
          {isEmpty
            ? 'Empty'
            : data.map((item, index) => (
                <AutocompleteItem
                  index={index}
                  id={item.id}
                  label={item.label}
                  key={item.id}
                />
              ))}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  )
}
