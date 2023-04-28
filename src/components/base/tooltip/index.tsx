import { ReactNode } from 'react'
import type { Placement } from '@floating-ui/react'
import classnames from 'classnames'
import { TooltipContext, useTooltip } from './context'
import { TooltipTrigger } from './trigger'
import { TooltipFloating } from './floating'
import { inter } from '@page/_app'

export type Tooltip = {
  children: ReactNode
  placement?: Placement
  className?: string
  label?: string
}

export function Tooltip({
  children,
  className,
  placement,
  label = '',
}: Tooltip) {
  const tooltip = useTooltip(placement)

  return (
    <TooltipContext.Provider value={tooltip}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipFloating
        className={classnames(
          `${inter.variable} bg-slate-900 text-gray-100 py-1 px-3 rounded font-sans text-sm`,
          className,
        )}
      >
        {label}
      </TooltipFloating>
    </TooltipContext.Provider>
  )
}
