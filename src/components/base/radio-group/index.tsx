import { ComponentPropsWithoutRef, ReactNode, useId } from 'react'
import { Radio } from '../radio'
import classnames from 'classnames'

type Option = {
  id: string | number
  label: ReactNode
}

interface Props extends Omit<ComponentPropsWithoutRef<'fieldset'>, 'title'> {
  options?: Option[]
  title?: ReactNode
  required?: boolean
}

export function RadioGroup({
  options,
  title,
  required = false,
  ...more
}: Props) {
  const htmlId = more.name ?? useId()
  const requireClass =
    required && `after:content-['*'] after:text-red-500 after:ml-1`

  return (
    <fieldset id={htmlId} {...more}>
      <legend className={classnames('empty:hidden mb-2', requireClass)}>
        {title}
      </legend>
      <div className='flex flex-col gap-2'>
        {options?.map((option) => (
          <Radio key={option.id} name={htmlId} disabled={more.disabled}>
            {option.label}
          </Radio>
        ))}
      </div>
    </fieldset>
  )
}
