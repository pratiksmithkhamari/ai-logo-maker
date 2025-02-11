import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='px-10 md:px-24 lg:px-44 sm:px-32 p-6 shadow-md  flex items-center justify-between '>
      <Link href={'/'} ><Image alt='logo here' src={'/logo.svg'}  height={100} width={190} className='sm:h-full h-8 w-24 sm:w-full '/></Link>
      <Button className="bg-[#4e8e20] hover:bg-[#3c661d]">Get Started</Button>
    </div>
  )
}

export default Navbar
