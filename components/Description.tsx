import React from 'react'
import Image from 'next/image'

const Description = () => {
  return (
    <div className='px-5 py-10 mt-5'>
        <div className='lg:flex justify-center items-center gap-10 text-[24px] md:flex-col md:mx-auto '>
            <h2>Description</h2>
            <h2 className='text-[#9F9F9F]'>Additional Information</h2>
            <h2 className='text-[#9F9F9F]'>Reviews [5]</h2>
        </div>

        <div className='flex mx-auto gap-10 mt-10 flex-col lg:w-[1026px] text-[#9F9F9F] text-[16px]'>
            <p className='text-start justify-center items-center'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
      

      <div className='lg:flex lg:flex-row md:flex-col mx-auto mt-5 lg:gap-3 md:gap-5 lg:mb-10 '>
        <Image
        src="/des1.svg"
        alt="image"
        width={657}
        height={436}
        className='bg-[#D9D9D9]'
        />


<Image
        src="/des2.svg"
        alt="image"
        width={657}
        height={436}
         className='bg-[#D9D9D9]'
        />
      </div>
    </div>
  )
}

export default Description
