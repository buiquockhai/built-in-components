import { MetaProps } from '@layout/meta'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div className='w-full h-screen relative'>
      <Image src='/images/begin.webp' alt='begin-image' fill />
      <Image src='/images/cloud_a.webp' alt='begin-image' fill />
      <Image src='/images/cloud_b.webp' alt='begin-image' fill />
    </div>
  )
}

IndexPage.meta = {
  title: 'Developer portfolio',
  description: 'Checkout our cool page',
} as MetaProps
