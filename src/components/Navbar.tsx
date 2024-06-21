import { getServerSession } from 'next-auth'
import { FC } from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
interface NavbarProps {
  
}

const Navbar = async ({}) => {

    const session = await getServerSession()


  return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
    <div className='container max-w-7x1 mx-auto w-full flex  justify-between items-center'>
        <Link href='/' className={buttonVariants({variant: 'link'})}>Text Similarity 1.0</Link>



        <div className='md:hidden'>
            <ThemeToggle />
        </div>


        <div className='hidden md:flex  gap-4'>
        <ThemeToggle />
        <Link href='/documentation' className={buttonVariants({variant: 'link'})}>
        Documention
        </Link>


        {session ? (
            <>
              <Link className={buttonVariants({variant: 'ghost'})} href='/dashborad'>
              Dashboard
              </Link>

              <SingOutButton />
            
            </>
        ) : <SignInButton />}
        </div>



    </div>
  </div>
}

export default Navbar