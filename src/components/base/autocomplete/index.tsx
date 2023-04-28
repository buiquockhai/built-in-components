import { InputProps } from '../input'
import { AutocompleteContext, useAutocomplete } from './context'
import { AutocompleteInput } from './input'
import { AutocompletePortal } from './portal'
import { AutocompleteOption } from './item'

export interface AutocompleteProps {
  inputProps?: InputProps
  options: AutocompleteOption[]
  value?: string
}

export function Autocomplete({
  inputProps,
  value,
  options,
}: AutocompleteProps) {
  const autocomplete = useAutocomplete()

  return (
    <AutocompleteContext.Provider value={autocomplete}>
      <AutocompleteInput {...inputProps} />
      <AutocompletePortal options={options} value={value} />
    </AutocompleteContext.Provider>
  )
}
