import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar />
        {/* app/ */}
      {children}
    </div>
  )
}

export default layout
