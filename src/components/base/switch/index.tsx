import classnames from 'classnames'
import { ComponentPropsWithoutRef, useId } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: Size
}

export function Switch({ size = 'md', className, children, ...more }: Props) {
  const htmlId = more.id ?? useId()

  const trackSize: Record<Size, string> = {
    xs: 'w-[32px] h-[18px]',
    sm: 'w-[36px] h-[22px]',
    md: 'w-[40px] h-[24px]',
    lg: 'w-[44px] h-[26px]',
    xl: 'w-[48px] h-[28px]',
  }

  const ballSize: Record<Size, string> = {
    xs: 'w-[12px] h-[12px] translate-x-[4px] peer-checked:translate-x-[16px]',
    sm: 'w-[14px] h-[14px] translate-x-[4px] peer-checked:translate-x-[18px]',
    md: 'w-[16px] h-[16px] translate-x-[4px] peer-checked:translate-x-[20px]',
    lg: 'w-[18px] h-[18px] translate-x-[4px] peer-checked:translate-x-[22px]',
    xl: 'w-[20px] h-[20px] translate-x-[4px] peer-checked:translate-x-[24px]',
  }

  const disabled = more.disabled && 'text-gray-400 !cursor-not-allowed'

  return (
    <label
      htmlFor={htmlId}
      className={classnames(
        'flex items-center gap-2 select-none cursor-pointer w-fit',
        className,
        disabled,
      )}
    >
      <div className='relative flex items-center'>
        <input
          hidden
          type='checkbox'
          id={htmlId}
          className='peer sr-only'
          {...more}
        />
        <div
          aria-hidden
          className={classnames(
            'rounded-full bg-gray-300 peer-checked:bg-primary peer-disabled:bg-neutral-300',
            trackSize[size],
          )}
        ></div>
        <div
          aria-hidden
          className={classnames(
            'absolute bg-white rounded-full transition transform',
            ballSize[size],
          )}
        ></div>
      </div>
      {children}
    </label>
  )
}
