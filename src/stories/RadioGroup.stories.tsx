import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from '@component/base/radio-group'

const radioGroups = [
  {
    id: 'male',
    label: 'Male',
  },
  {
    id: 'female',
    label: 'Female',
  },
  {
    id: 'other',
    label: 'Other',
  },
]

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Primary: Story = {
  render: () => <RadioGroup options={radioGroups} title='Gender' />,
}

export const Disabled: Story = {
  render: () => <RadioGroup options={radioGroups} title='Gender' disabled />,
}

export const Required: Story = {
  render: () => <RadioGroup options={radioGroups} title='Gender' required />,
}
