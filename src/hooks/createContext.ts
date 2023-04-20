import {
  createContext as createContextNative,
  useContext as useContextNative,
} from 'react'

type Props = {
  name?: string
}

export default function createContext<T>({
  name,
}: Props): [React.Provider<T>, () => T, React.Context<T>] {
  const context = createContextNative<T>({} as T)
  context.displayName = name
  const useContext = () => {
    const isContext = useContextNative<T>(context)
    if (!isContext) throw new Error('Context outside provider')
    return isContext
  }
  return [context.Provider, useContext, context]
}
