import classnames from 'classnames'
import { ComponentPropsWithoutRef, ReactNode, useId } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: Size
  label?: ReactNode
  leftSection?: ReactNode
  rightSection?: ReactNode
  error?: ReactNode
  description?: ReactNode
  prefix?: string
}

const sizes: Record<Size, string> = {
  xs: 'h-8 px-2 text-sm',
  sm: 'h-9 px-3',
  md: 'h-10 px-3',
  lg: 'h-12 px-3',
  xl: 'h-14 px-4',
}

export function Input({
  className,
  size = 'md',
  label,
  leftSection,
  rightSection,
  error,
  description,
  prefix,
  ...more
}: Props) {
  const id = useId()

  const required = more.required && `after:content-['_*'] after:text-red-500`
  const disabled = more.disabled && 'bg-gray-100 text-gray-500'
  const prefixed = prefix && 'pl-0'

  return (
    <label htmlFor={id} className='flex flex-col w-full gap-1'>
      <span className={classnames('empty:hidden select-none', required)}>
        {label}
      </span>
      <div
        className={classnames(
          'peer rounded flex border items-center gap-2 focus-within:border-primary focus-within:ring-1',
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
          id={id}
          className={classnames('w-full outline-none transition', className)}
          type='text'
          {...more}
        />
        {rightSection}
      </div>
      <span className='text-sm text-slate-500 empty:hidden'>{description}</span>
      <span className='text-sm text-red-500 empty:hidden'>{error}</span>
    </label>
  )
}
