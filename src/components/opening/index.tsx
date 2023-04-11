import Image from 'next/image'
import { createRef } from 'react'

export function Opening() {
  const ref = createRef<HTMLDivElement>()

  const animationEnd = () => {
    if (ref.current) {
      ref.current.style.display = 'none'
    }
  }

  return (
    <div ref={ref} className='fixed inset-0 w-full h-full z-[1000] bg-white'>
      <Image
        src='/images/begin.webp'
        alt='begin-image'
        className='object-cover c-opening-bg'
        fill
        priority
        onAnimationEnd={animationEnd}
      />
      <div className='c-opening-cloud'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 c-opening-text text-gray-200'>
        <h1 className='text-4xl font-mono font-bold'>software engineer.</h1>
        <p className='mt-1 font-mono'>code and design</p>
      </div>
    </div>
  )
}
