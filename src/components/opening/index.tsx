import Image from 'next/image'

export function Opening() {
  return (
    <div className='w-full h-full fixed inset-0 z-[1000]'>
      <Image
        src='/images/begin.webp'
        alt='begin-image'
        className='object-cover'
        fill
        priority
      />
      <div className='c-opening-cloud'></div>
    </div>
  )
}
