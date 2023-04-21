import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { useTooltipContext } from './context'
import { useMergeRefs } from '@floating-ui/react'

export const TooltipTrigger = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'div'>
>(({ children, ...props }, propRef) => {
  const context = useTooltipContext()
  const childrenRef = (children as any).ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  return (
    <div
      ref={ref}
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </div>
  )
})
