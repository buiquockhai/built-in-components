import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@component/base/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {
    children: 'Checkbox',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled checkbox',
    disabled: true,
    checked: true,
  },
}
