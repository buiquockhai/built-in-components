import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@component/base/switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Primary: Story = {
  args: {
    children: 'Switch',
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
}
