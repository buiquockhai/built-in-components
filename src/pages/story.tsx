import { Input } from '@component/base/input'
import { ClipBoardSvg } from '@component/icons'
import { Button } from '@component/base/button'
import { Tooltip } from '@component/base/tooltip'
import { Checkbox } from '@component/base/checkbox'
import { Radio } from '@component/base/radio'
import { RadioGroup } from '@component/base/radio-group'
import { Switch } from '@component/base/switch'
import { Autocomplete } from '@component/base/autocomplete'

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
    <div>
      <div className='min-h-screen'></div>

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
            <Button className='w-full'>Tooltip</Button>
          </Tooltip>
          <Autocomplete
            inputProps={{ label: 'Autocomplete', prefix: 'Prefix' }}
            options={radioGroups}
          />
        </div>

        <div className='flex flex-col gap-8'>
          <Checkbox>Checkbox</Checkbox>
          <Radio>Radio</Radio>
          <RadioGroup title='Gender' options={radioGroups} required />
          <Switch>Switch</Switch>
        </div>
      </form>

      <div className='min-h-screen'></div>
    </div>
  )
}
