import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='  bg-[#f5f5f5] laptop:h-[1100px] '>
    <div className='   flex justify-center items-center flex-col m-auto '>
        <h1 className='marcellus-regular  text-[72px] mt-10 tablet:text-[48px] mobile:text-[32px] '>New Collections</h1>
        <div className='w-[32.8rem] mt-4 mobile:w-[20rem] '>
        <p className='jost-medium text-[18px]  text-center text-[#8F8F8F] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!</p>
        </div>
    </div>
    <div className="flex justify-center items-center gap-6 mt-10 mobile:flex-wrap tablet:flex-wrap">
        <div className='m-auto'>
            <img className='hover:transition-transform hover:duration-300 hover:scale-90' src='https://themewagon.github.io/kaira/images/banner-image-6.jpg '/>
            <h5 className='uppercase marcellus-regular text-center pt-6 text-[22.4px] '>Soft leather jackets</h5>
            <p className='jost-medium text-[18px]  text-center text-[#8F8F8F] p-4'>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
            <div className='flex justify-center mt-2'>
            <a className="jost-medium text-[16px]  relative before:absolute before:content-[''] before:w-full before:h-1 before:bottom-[-7px] before:left-0 before:text-black before:bg-black " href='#'  >Discover Now</a>
            </div>
        </div>
        <div>
            <img className='hover:transition-transform hover:duration-300 hover:scale-90' src='https://themewagon.github.io/kaira/images/banner-image-1.jpg'/>
            <h5 className='uppercase marcellus-regular text-center pt-6 text-[22.4px] '>Soft leather jackets</h5>
            <p className='jost-medium text-[18px]  text-center text-[#8F8F8F] p-4'>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
            <div className='flex justify-center mt-2'>
            <a className="jost-medium text-[16px]  relative before:absolute before:content-[''] before:w-full before:h-[3px] before:bottom-[-7px] before:left-0 before:text-black before:bg-black " href='#'  >Discover Now</a>
            </div>
        </div>
        <div className=''>
            <img className='hover:transition-transform hover:duration-300 hover:scale-90' src='	https://themewagon.github.io/kaira/images/banner-image-2.jpg'/>
            <h5 className='uppercase marcellus-regular text-center pt-6 text-[22.4px] '>Soft leather jackets</h5>
            <p className='jost-medium text-[18px]  text-center text-[#8F8F8F] p-4'>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
            <div className='flex justify-center mt-2'>
            <a className="jost-medium text-[16px]  relative before:absolute before:content-[''] before:w-full before:h-1 before:bottom-[-7px] before:left-0 before:text-black before:bg-black " href='#'  >Discover Now</a>
            </div>
        </div>

    </div>
    </section>
    </>
  )
}

export default Hero