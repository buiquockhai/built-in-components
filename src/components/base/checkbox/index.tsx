import { ComponentPropsWithoutRef, useId } from 'react'
import classnames from 'classnames'

export function Checkbox({
  children,
  className,
  ...more
}: ComponentPropsWithoutRef<'input'>) {
  const id = useId()
  const disabled = more.disabled && 'text-gray-400 cursor-not-allowed'

  return (
    <label
      htmlFor={id}
      className={classnames(
        'group flex gap-2 select-none items-center w-fit cursor-pointer',
        disabled,
        className,
      )}
    >
      <div className='flex items-center justify-center'>
        <input id={id} type='checkbox' className='sr-only peer' {...more} />
        <div className='w-5 h-5 rounded transition border sm:group-hover:border-neutral-400 peer-checked:bg-primary peer-checked:!border-primary peer-disabled:!border-neutral-300 peer-disabled:peer-checked:bg-neutral-300'></div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4 absolute transition delay-150 opacity-0 peer-checked:opacity-100 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12.75l6 6 9-13.5'
          />
        </svg>
      </div>
      {children}
    </label>
  )
}
