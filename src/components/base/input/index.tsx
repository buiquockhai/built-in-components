import classnames from 'classnames'
import { ComponentPropsWithoutRef, ReactNode, useId } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: Size
  label?: string
  leftSection?: ReactNode
  rightSection?: ReactNode
  error?: string
  description?: string
  prefix?: string
}

const sizes: Record<Size, string> = {
  xs: 'h-[32px] px-2 min-w-[100px] text-sm gap-2',
  sm: 'h-[36px] px-3 min-w-[100px] gap-2',
  md: 'h-[40px] px-3 min-w-[100px] gap-2',
  lg: 'h-[48px] px-3 min-w-[150px] text-md gap-3',
  xl: 'h-[56px] px-4 min-w-[150px] text-lg gap-3',
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
          'peer rounded flex border items-center focus-within:border-primary focus-within:ring-1',
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
          className={classnames(
            'w-full outline-none transition peer',
            className,
          )}
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
