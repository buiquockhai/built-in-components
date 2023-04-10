import { MetaProps } from '@layout/meta'

export default function IndexPage() {
  return (
    <div className='bg-red-100 flex flex-col gap-4'>
      <p className='text-lg font-bold font-mono'>Montserrat font</p>
      <p>This is Inter font</p>
    </div>
  )
}

IndexPage.meta = {
  title: 'Developer portfolio',
  description: 'Checkout our cool page',
} as MetaProps
