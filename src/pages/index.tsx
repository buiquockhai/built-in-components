import { Opening } from '@component/opening'
import { MetaProps } from '@layout/meta'

export default function IndexPage() {
  return (
    <div className='relative'>
      <Opening />
    </div>
  )
}

IndexPage.meta = {
  title: 'Developer portfolio',
  description: 'Checkout our cool page',
} as MetaProps
