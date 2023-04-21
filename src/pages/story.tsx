import { Input } from '@component/base/input'
import { ClipBoardSvg, EyeSvg } from '@component/icons'
import { Button } from '@component/base/button'

export default function StoryPage() {
  return (
    <form className='p-4 flex flex-col gap-8'>
      <Button startIcon={<ClipBoardSvg />} loading>
        Button
      </Button>
      <Input
        // disabled
        required
        label='Address'
        error='This is error message'
        description='This is description message'
        prefix='prefix'
        leftSection={<ClipBoardSvg />}
        rightSection={<ClipBoardSvg />}
      />
    </form>
  )
}
