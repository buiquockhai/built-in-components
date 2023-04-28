import { forwardRef, useId } from 'react'
import { useAutocompleteContext } from './context'
import classnames from 'classnames'

export type AutocompleteOption = {
  id: string
  label: string
}

interface Props extends AutocompleteOption {
  index: number
}

export const AutocompleteItem = forwardRef<HTMLDivElement, Props>(
  ({ index, id, label }, ref) => {
    const htmlId = id ?? useId()
    const context = useAutocompleteContext()

    const onClick = () => {
      const parentRef = context.refs.domReference.current
      if (parentRef) {
        parentRef.focus()
        parentRef.value = label
        context.setActiveId(id)
      }
    }

    const active =
      context.activeId === id && 'bg-primary text-white hover:bg-primary'

    return (
      <div
        role='option'
        className={classnames(
          'hover:bg-gray-50 p-3 cursor-pointer rounded-md transition',
          active,
        )}
        {...context.getItemProps({
          key: htmlId,
          ref: (node) => context.setRefs(node, index),
          onClick,
        })}
        ref={ref}
        id={htmlId}
      >
        {label}
      </div>
    )
  },
)
