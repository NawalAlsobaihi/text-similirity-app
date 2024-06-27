"use client"

import { FC, useState } from 'react'
import { Button } from '@/ui/Button'
import { toast } from '@/ui/Toast'
import { signOut } from 'next-auth/react'

interface SignOutButton {
  
}

const SignOutButton: FC<SignOutButton> = ({}) => {

    const[isLoading, setisLoading] = useState<boolean>(false)


    const signUserOut = async() => {
      setisLoading(true)  

      try {
        await signOut()
      } catch (error) {
        toast({
            title : 'Error signing in',
            message :'Please try again later',
            type :'error'
        })
      }
    }

  return( <Button onClick={signUserOut} isLoading={isLoading}>
    Sign out
  </Button>)
}

export default SignOutButton