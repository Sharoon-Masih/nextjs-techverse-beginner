import Image from "next/image"

const Hero = () => {
  return (
    <>
      <section className='relative '>
        {/* hero section 1 */}
        <div className="w-full max-w-7xl flex flex-col  justify-between   md:items-center lg:mx-auto h-full lg:flex-row px-4 sm:px-6 md:px-8 xl:px-4 gap-20 lg:gap-0 mt-2">
          {/*For Punch line */}
          <div className="w-full lg:w-[429px] lg:h-[343.5px] flex flex-col gap-5 md:text-center lg:text-start md:items-center lg:items-start">
            <h1 className="text-[64px] font-bold text-[#000000] leading-normal ">Endless your
              Creativity!</h1>
            <p className="text-[20px] font-medium text-[#000000]">I will create something that will
              exceeding your expectation</p>
            <button className="rounded-full w-[220px] h-[60.21px] bg-[#75C310] p-3 text-[#FFFFFF] text-[20px] font-bold">
              Go to Portfolio
            </button>
          </div>
          {/* Image */}
          <Image src={'/img/Artboard2-02 1.png'} alt="Alien" width={514} height={513} className="" />
        </div>
      </section>
      {/* hero section 2 */}
      <section className="relative">
        <div className="w-full max-w-7xl flex flex-col  justify-between   md:items-center lg:mx-auto h-full lg:flex-row-reverse px-4 sm:px-6 md:px-8 xl:px-4 gap-20 lg:gap-0  ">
          {/*For Punch line */}
          <div className="w-full lg:w-[568px] lg:h-[343.5px] flex flex-col gap-5 items-end md:text-center lg:text-start md:items-center lg:items-end">
            <h1 className="text-[64px] font-bold text-[#000000] leading-normal text-end">Your Satisfaction
              Our Priority</h1>
            <p className="text-[20px] font-medium text-[#000000] text-end lg:w-[381px]">I will create What do you waiting for? let the result
              approve your doubt</p>
            <button className="rounded-full w-[220px] h-[60.21px] bg-[#75C310] p-3 text-[#FFFFFF] text-[20px] font-bold">
              Contact me!
            </button>
          </div>
          {/* Image */}
          <Image src={'/img/Artboard2-02 1.png'} alt="Alien" width={514} height={513} className="" />
        </div>
      </section>
    </>
  )
}

export default Hero

