import React from 'react'

function Page() {
  return (
    <div className='flex justify-center items-center mt-14'>
        
        <div className="flex gap-4 mx-auto align-middle justify-center items-center">
                        {/* Box 1 */}
                        <div className="bg-[#fbebb5] px-4 py-2 rounded-md">1</div>

                        {/* Box 2 */}
                        <div className="bg-[#fff9e5] px-4 py-2 rounded-md">2</div>

                        {/* Box 3 */}
                        <div className="bg-[#fff9e5] px-4 py-2 rounded-md">3</div>

                        {/* Next Button */}
                        <div className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]">
                            Next
                        </div>
                    </div>
    </div>
  )
}

export default Page