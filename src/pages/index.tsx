import { Opening } from '@component/opening'
import { MetaProps } from '@layout/meta'

export default function IndexPage() {
  return (
    <div className='relative'>
      <Opening />
      <div>
        The will-change CSS property hints to browsers how an element is
        expected to change. Browsers may set up optimizations before an element
        is actually changed. These kinds of optimizations can increase the
        responsiveness of a page by doing potentially expensive work before they
        are actually required.
      </div>
    </div>
  )
}

IndexPage.meta = {
  title: 'Developer portfolio',
  description: 'Checkout our cool page',
} as MetaProps
