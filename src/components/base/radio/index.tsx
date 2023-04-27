import { ComponentPropsWithoutRef, useId } from 'react'
import classnames from 'classnames'

export function Radio({
  children,
  className,
  ...more
}: ComponentPropsWithoutRef<'input'>) {
  const htmlId = more.id ?? useId()
  const disabled = more.disabled && 'text-gray-400 cursor-not-allowed'

  return (
    <label
      htmlFor={htmlId}
      className={classnames(
        'group flex gap-2 select-none items-center w-fit cursor-pointer',
        disabled,
        className,
      )}
    >
      <div className='flex items-center justify-center'>
        <input id={htmlId} type='radio' className='sr-only peer' {...more} />
        <div
          aria-hidden
          className='w-5 h-5 rounded-full transition border sm:group-hover:border-neutral-400 peer-checked:border-[5px] peer-checked:!border-primary peer-disabled:!border-neutral-300'
        ></div>
      </div>
      {children}
    </label>
  )
}
