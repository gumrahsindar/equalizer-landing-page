import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Pricing />
      </main>
      <footer id='footer' className='mx-auto mb-28 px-6  max-w-6xl md:px-10'>
        {/* footer flex container */}
        <div className='flex flex-col space-y-16 md:flex-row md:space-y-0 md:justify-between'>
          {/* footer logo & copyright container */}
          <div className='flex flex-col space-y-8 lg:w-2/3 lg:flex-row lg:space-y-0 lg:justify-between'>
            <img src='/logo.svg' alt='logo' className='w-36 h-8' />
            <p className='text-sm text-clr-black leading-7 max-w-sm'>
              All rights reserved © Equalizer 2021 Have any problems? Contact
              us via social media or email us at{' '}
              <Link href='mailto:equalizer@example.com' className='font-bold'>
                equalizer@example.com
              </Link>
            </p>
          </div>

          {/* social icons */}
          <div className='flex space-x-5 items-center'>
            <Link href='#'>
              <Image
                width={20}
                height={20}
                src='/icon-facebook.svg'
                alt='facebook icon'
                className='ficon'
              />
            </Link>
            <Link href='#'>
              <Image
                width={20}
                height={20}
                src='/icon-instagram.svg'
                alt='instagram icon'
                className='ficon'
              />
            </Link>
            <Link href='#'>
              <Image
                width={20}
                height={20}
                src='/icon-twitter.svg'
                alt='twitter icon'
                className='ficon'
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
