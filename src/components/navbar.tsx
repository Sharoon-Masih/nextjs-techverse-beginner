'use client'
import { navItem } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const pathname = usePathname()
   console.log('welcome to navbar')
   return (
<header className=" h-[85px] bg-[#FFFFFF] drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)]">
<div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 w-full max-w-7xl ">
   <div className="flex gap-2 ">
      <h1 className="text-[#75C310] font-bold text-[24px]">Techverse51</h1>
      <span className="text-[#000000] font-bold text-[24px]">Portfolio</span>
   </div>
   <nav className=" h-[44.54px] hidden md:block">
      <ul className="flex h-full  items-center justify-between gap-[46px] text-[#75C310] text-[20px] font-medium ">
         {
            navItem.map((item) =>
               <Link href={item.link} key={item.title}>
                  <li className={ item.link ===  pathname ? 'text-black' : 'text-[#75C310] hover:text-black'}>{item.title}</li>
               </Link>)
         }
      </ul>
   </nav>
</div>
</header>
   )
}