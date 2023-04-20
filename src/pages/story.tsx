import { Input } from '@component/base/input'
import { ClipBoardSvg } from '@component/icons'

export default function StoryPage() {
  return (
    <form className='p-4 flex flex-col'>
      <Input
        // disabled
        required
        label='Address'
        // error='This is error message'
        // description='This is description message'
        // prefix='prefix'
        leftSection={<ClipBoardSvg />}
        rightSection={<ClipBoardSvg />}
      />
    </form>
  )
}
