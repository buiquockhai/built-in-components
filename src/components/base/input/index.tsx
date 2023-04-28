import classnames from 'classnames'
import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: Size
  label?: string
  leftSection?: ReactNode
  rightSection?: ReactNode
  error?: string
  description?: string
  prefix?: string
}

const sizes: Record<Size, string> = {
  xs: 'h-[32px] min-w-[100px] text-sm gap-2',
  sm: 'h-[36px] min-w-[100px] gap-2',
  md: 'h-[40px] min-w-[100px] gap-2',
  lg: 'h-[48px] min-w-[150px] text-md gap-3',
  xl: 'h-[56px] min-w-[150px] text-lg gap-3',
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    size = 'md',
    label,
    leftSection,
    rightSection,
    error,
    description,
    prefix,
    ...more
  } = props
  const htmlId = more.id ?? useId()

  const required = more.required && `after:content-['_*'] after:text-red-500`
  const disabled = more.disabled && 'bg-gray-100 text-gray-500'
  const prefixed = prefix && 'pl-0'

  return (
    <label htmlFor={htmlId} className='flex flex-col w-full gap-1'>
      <span className={classnames('empty:hidden select-none', required)}>
        {label}
      </span>
      <div
        className={classnames(
          'peer px-3 rounded flex border items-center focus-within:border-primary focus-within:ring-1',
          sizes[size],
          disabled,
          prefixed,
        )}
      >
        <span className='empty:hidden bg-gray-100 text-neutral-700 border-r px-3 h-full rounded-l grid place-content-center'>
          {prefix}
        </span>
        {leftSection}
        <input
          id={htmlId}
          className={classnames(
            'w-full outline-none transition peer',
            className,
          )}
          type='text'
          ref={ref}
          {...more}
        />
        {rightSection}
      </div>
      <span className='text-sm text-slate-500 empty:hidden'>{description}</span>
      <span className='text-sm text-red-500 empty:hidden'>{error}</span>
    </label>
  )
})
