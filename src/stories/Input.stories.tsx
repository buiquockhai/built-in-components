import { Input } from '@component/base/input'
import type { Meta, StoryObj } from '@storybook/react'
import { ClipBoardSvg, EyeSvg } from '@component/icons'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    label: 'Primary',
    defaultValue: 'default value',
    size: 'md',
  },
  argTypes: {
    leftSection: {
      control: false,
    },
    rightSection: {
      control: true,
    },
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    label: 'Disabled',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    ...Primary.args,
    label: 'Required',
    required: true,
  },
}

export const WithIcons: Story = {
  args: {
    ...Primary.args,
    label: 'With icons',
    leftSection: <ClipBoardSvg />,
    rightSection: <EyeSvg />,
  },
}

export const WithMessage: Story = {
  args: {
    ...Primary.args,
    label: 'With message',
    error: 'Error message',
    description: 'Description message',
  },
}

export const WithPrefix: Story = {
  args: {
    ...Primary.args,
    label: 'With prefix',
    prefix: 'Prefix',
  },
}
