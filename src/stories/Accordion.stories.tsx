import Accordion from '@component/base/accordion'
import type { Meta, StoryObj } from '@storybook/react'
import { ElementRef, createRef } from 'react'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  argTypes: {
    duration: { control: { type: 'number', min: 1, max: 30, step: 2 } },
  },
  args: {
    duration: 250,
  },
  render: () => {
    const accordion = createRef<ElementRef<typeof Accordion>>()

    return (
      <div className='flex flex-col gap-2'>
        <button
          type='button'
          className='outline-none border-none bg-slate-100 p-4 text-left rounded'
          onClick={() => accordion.current?.toggle?.()}
        >
          Accordion
        </button>
        <Accordion ref={accordion}>
          <div className='p-4 bg-slate-200 rounded'>This is accordion</div>
        </Accordion>
      </div>
    )
  },
}
