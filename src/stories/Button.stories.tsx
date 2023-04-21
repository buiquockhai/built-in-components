import { Button } from '@component/base/button'
import { ClipBoardSvg } from '@component/icons'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  argTypes: {
    startIcon: {
      control: false,
    },
    endIcon: {
      control: true,
    },
  },
  args: {
    children: 'Button',
  },
}

export const Disabled: Story = {
  argTypes: Primary.argTypes,
  args: {
    ...Primary.args,
    disabled: true,
  },
}

export const StartIcon: Story = {
  args: {
    ...Primary.args,
    startIcon: <ClipBoardSvg />,
  },
}

export const EndIcon: Story = {
  args: {
    ...Primary.args,
    endIcon: <ClipBoardSvg />,
  },
}

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
}
