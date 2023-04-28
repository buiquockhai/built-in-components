import { ChangeEvent } from 'react'
import { Input, InputProps } from '../input'
import { useAutocompleteContext } from './context'

export function AutocompleteInput(props: InputProps) {
  const context = useAutocompleteContext()

  const onFocus = () => {
    context.setOpen(true)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    context.setInputValue(event.target.value)
  }

  return (
    <Input
      {...props}
      {...context.getReferenceProps({
        ref: context.refs.setReference,
        'aria-autocomplete': 'list',
        onFocus,
        onChange,
      })}
    />
  )
}
