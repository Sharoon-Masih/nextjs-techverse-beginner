import { Icardprop } from '@/components/home-sections/quotes'
import React from 'react'

const SingleQuotePage = async ({ params }: { params: { id: string } }) => {
  const rawData = await fetch(`https://dummyjson.com/quotes/${params.id}`)
  const quote: Icardprop = await rawData.json()
  return (
    <section className='relative'>
      <div className="w-full max-w-7xl   lg:mx-auto h-full  px-4 sm:px-6 md:px-8 xl:px-4 mt-[80px]  gap-5 flex flex-col items-center">
        <span>{quote.id}</span>
        <p>{quote.quote}</p>
        <span>{quote.author}</span>
      </div>
    </section>
  )
}

export default SingleQuotePage
