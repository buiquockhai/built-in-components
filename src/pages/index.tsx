import { Layout } from '@layout/main'
import { MetaProps } from '@layout/meta'

export default function IndexPage() {
  return <div>top</div>
}

IndexPage.meta = {
  title: 'Developer portfolio',
  description: 'Checkout our cool page',
} as MetaProps

IndexPage.layout = Layout
