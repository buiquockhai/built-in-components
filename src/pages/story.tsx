import { Input } from '@component/base/input'
import { ClipBoardSvg, EyeSvg } from '@component/icons'
import { Button } from '@component/base/button'
import { Tooltip } from '@component/base/tooltip'
import { Checkbox } from '@component/base/checkbox'
import { Radio } from '@component/base/radio'
import { RadioGroup } from '@component/base/radio-group'
import { Switch } from '@component/base/switch'

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

export default function StoryPage() {
  return (
    <form className='p-4 grid grid-cols-2 gap-8'>
      <div className='flex flex-col gap-8'>
        <Button startIcon={<ClipBoardSvg />} loading>
          Button
        </Button>
        <Input
          required
          label='Address'
          error='This is error message'
          description='This is description message'
          prefix='prefix'
          leftSection={<ClipBoardSvg />}
          rightSection={<ClipBoardSvg />}
        />
        <Tooltip label='This is tooltip'>
          <Button>Tooltip</Button>
        </Tooltip>
      </div>

      <div className='flex flex-col gap-8'>
        <Checkbox>Checkbox</Checkbox>
        <Radio>Radio</Radio>
        <RadioGroup title='Gender' options={radioGroups} required />
        <Switch disabled>Switch</Switch>
      </div>
      <div className='min-h-screen'></div>
    </form>
  )
}
