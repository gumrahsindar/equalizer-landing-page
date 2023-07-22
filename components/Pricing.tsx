import Image from 'next/image'
import { Button } from './ui/button'

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='relative mx-auto max-w-6xl items-center flex md:justify-evenly flex-col md:flex-row mb-16 '
    >
      {/* image */}

      <div className='px-20 md:px-0 md:ml-20 z-20 -translate-y-28  md:max-w-sm mx-auto '>
        <Image src='/illustration-app.png' alt='' width={500} height={500} />
      </div>

      {/* pricing container */}
      <div className='py-12 px-9 bg-clr-orange md:mr-20 text-clr-white z-50 rounded-lg w-full -translate-y-10 md:absolute md:right-10 md:top-72 md:w-fit   md:px-12 lg:px-14 lg:py-16 md:-translate-y-0 '>
        <h2 className='font-bold text-lg mb-3 lg:mb-6 lg:text-xl'>
          Premium EQ
        </h2>
        <p className='text-base mb-9 max-w-xs lg:max-w-sm lg:text-md lg:mb-12 '>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        {/* price container */}
        <div className='flex items-center mb-10 lg:mb-12'>
          <strong className='text-price font-bold mr-4'>$4</strong>
          <p className='text-md font-normal self'> / month</p>
        </div>
        {/* button container */}
        <div className='flex flex-col space-y-4 '>
          <Button className='py-8 rounded-2xl flex space-x-3 items-center justify-center hover:bg-clr-cyan'>
            <img src='/icon-apple.svg' alt='' />

            <p className='text-btn font-bold tracking-tight'>iOS Download</p>
          </Button>
          <Button
            variant='secondary'
            className=' py-8 rounded-2xl flex space-x-3 items-center justify-center hover:bg-clr-yellow'
          >
            <img src='/icon-android.svg' alt='' />

            <p className='text-btn font-bold tracking-tight'>
              Android Download
            </p>
          </Button>
        </div>
      </div>
    </section>
  )
}
export default Pricing
