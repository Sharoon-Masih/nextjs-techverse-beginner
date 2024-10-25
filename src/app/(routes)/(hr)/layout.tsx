import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <div className='h-20 flex justify-center items-center bg-green-800 text-gray-50 font-semibold text-lg'>
            HR Department pages
        </div>
      {children}
    </div>
  )
}

export default layout
