import { FloatingArrow, FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { useTooltipContext } from './context'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export const TooltipFloating = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, propRef) => {
  const context = useTooltipContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!context.open) return null

  const { children, ...more } = context.getFloatingProps(props) as any

  return (
    <FloatingPortal>
      <div
        ref={ref}
        style={{
          position: context.strategy,
          top: context.y ?? 0,
          left: context.x ?? 0,
          ...props.style,
        }}
        {...more}
      >
        <div>{children}</div>
        <FloatingArrow
          ref={context.arrowRef}
          context={context.context}
          width={16}
          height={16}
          className='fill-slate-900'
          d='M0 20C0 20 2.06906 19.9829 5.91817 15.4092C7.49986 13.5236 8.97939 12.3809 10.0002 12.3809C11.0202 12.3809 12.481 13.6451 14.0814 15.5472C17.952 20.1437 20 20 20 20H0Z'
        />
      </div>
    </FloatingPortal>
  )
})
