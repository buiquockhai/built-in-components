import { Header } from '@component/header'
// import { Opening } from '@component/opening'
import { ComponentPropsWithRef } from 'react'

export function Layout({ children, ...more }: ComponentPropsWithRef<'div'>) {
  return (
    <div className='relative' {...more}>
      {/* <Opening /> */}
      <Header />
      {children}
    </div>
  )
}
