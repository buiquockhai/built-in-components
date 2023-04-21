import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@component/base/tooltip'
import { Button } from '@component/base/button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  args: {
    label: 'Primary',
  },
  render: () => (
    <Tooltip label='This is auto placement tooltip'>
      <Button>Hover</Button>
    </Tooltip>
  ),
}
