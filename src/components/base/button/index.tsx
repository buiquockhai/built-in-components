import { ComponentPropsWithoutRef, ReactNode } from 'react'
import classnames from 'classnames'
import { LoadingSvg } from '@component/icons'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Variant = 'fill' | 'outlined' | 'light' | 'subtle'
type Rounded = 'normal' | 'full'

export interface Props extends ComponentPropsWithoutRef<'button'> {
  size?: Size
  variant?: Variant
  rounded?: Rounded
  truncate?: boolean
  loading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: () => void
}

export function Button({
  children,
  className,
  startIcon,
  endIcon,
  size = 'md',
  variant = 'fill',
  rounded = 'normal',
  loading = false,
  truncate = true,
  disabled = false,
  onClick,
  ...more
}: Props) {
  const sizes: Record<Size, string> = {
    xs: 'h-[32px] px-2 min-w-[100px] text-sm gap-2',
    sm: 'h-[36px] px-3 min-w-[100px] gap-2',
    md: 'h-[40px] px-3 min-w-[100px] gap-3',
    lg: 'h-[48px] px-3 min-w-[150px] text-md gap-4',
    xl: 'h-[56px] px-4 min-w-[150px] text-lg gap-4',
  }

  const variants: Record<Variant, string> = {
    fill: 'bg-primary border-primary text-gray-100 sm:hover:enabled:brightness-95 sm:active:enabled:brightness-90',
    outlined:
      'bg-white border-primary text-primary sm:hover:enabled:bg-gray-50 sm:active:enabled:bg-white',
    light:
      'bg-light border-light text-primary sm:hover:enabled:brightness-[0.98] sm:active:enabled:brightness-[0.99]',
    subtle:
      'bg-white border-white text-primary sm:hover:enabled:bg-light sm:active:enabled:brightness-[0.99]',
  }

  const rounds: Record<Rounded, string> = {
    normal: 'rounded',
    full: 'rounded-full',
  }

  const loadingStyle = loading
    ? 'disabled:brightness-95 disabled:opacity-50 disabled:cursor-progress'
    : 'disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-300 disabled:cursor-not-allowed'

  const handleClick = () => {
    if (!loading) onClick?.()
  }

  return (
    <button
      type='button'
      className={classnames(
        'flex justify-center items-center animate border truncate select-none',
        sizes[size],
        variants[variant],
        rounds[rounded],
        loadingStyle,
        className,
      )}
      disabled={disabled || loading}
      onClick={handleClick}
      {...more}
    >
      {loading ? <LoadingSvg /> : startIcon}
      {children}
      {endIcon}
    </button>
  )
}
