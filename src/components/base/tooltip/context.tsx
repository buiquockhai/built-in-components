import {
  Placement,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { createContext, useContext, useMemo, useRef, useState } from 'react'

export function useTooltip(placement: Placement = 'top') {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const arrowRef = useRef(null)

  const data = useFloating({
    placement,
    open: uncontrolledOpen,
    onOpenChange: setUncontrolledOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
  })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return useMemo(
    () => ({
      open: uncontrolledOpen,
      setOpen: setUncontrolledOpen,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [uncontrolledOpen, setUncontrolledOpen, interactions, data, arrowRef],
  )
}

type ContextType = ReturnType<typeof useTooltip> | null

export const TooltipContext = createContext<ContextType>(null)

export const useTooltipContext = () => {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}
