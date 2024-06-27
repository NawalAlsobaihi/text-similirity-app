import { Metadata } from 'next'
import { FC } from 'react'
import LargeHeading from "@/components/ui/largeHeading"
import Paragraph from '@/components/ui/paragraph'
import DocumentionTabs from '@/components/DocumentionTabs'



export const metadata : Metadata ={
    title:'similarity API | Documentation',
    description :'Free and open-source text similirty API',
  }

const page: FC = ({}) => {
  return <div className='container max-w-7xl mx-auto mt-12'>
    <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
        
        <DocumentionTabs />
    </div>
  </div>
}

export default page