import Link from 'next/link'

export function Header() {
  return (
    <header className='px-12 py-6'>
      <nav className='flex mt-2 items-baseline justify-between'>
        <div className='font-bold font-mono text-2xl'>Developer</div>
        <ul className='flex list-none text-sm font-semibold gap-8'>
          <li className='hover:text-gray-500 transition-all duration-300'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='hover:text-gray-500 transition-all duration-300'>
            <Link href='/'>BUSINESS</Link>
          </li>
          <li className='hover:text-gray-500 transition-all duration-300'>
            <Link href='/'>WORKS</Link>
          </li>
          <li className='hover:text-gray-500 transition-all duration-300'>
            <Link href='/'>COMPANY</Link>
          </li>
          <li className='hover:text-gray-500 transition-all duration-300'>
            <Link href='/'>CAREER</Link>
          </li>
          <li className='hover:text-gray-500 transition-all duration-300'>
            <Link href='/'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
