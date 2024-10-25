import React from 'react'
import Card from '../card';
import Link from 'next/link';

export interface Icardprop {
    id: number;
    quote: string;
    author: string;
}
const Quotes = async () => {
    const rawData = await fetch('https://dummyjson.com/quotes');

    const quotesData = await rawData.json()
    // console.log(quotesData)
    return (
        <section className='relative'>
            <div className="w-full max-w-7xl   lg:mx-auto h-full  px-4 sm:px-6 md:px-8 xl:px-4 mt-[80px] grid grid-cols-3 gap-5">
                {
                    quotesData.quotes.map((item: Icardprop) =>
                        <Link href={`/quotes/${item.id}`} key={item.id}>
                            <Card id={item.id} quote={item.quote} key={item.id} />
                        </Link>)
                }
            </div>
        </section>
    )
}

export default Quotes
