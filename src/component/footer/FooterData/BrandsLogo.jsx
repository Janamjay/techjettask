import React from 'react'

function BrandsLogo({imgUrl}) {
  return (
    <div className='bg-white rounded-full flex justify-center items-center w-[60px] h-[60px]'>  
      <img src={imgUrl} alt="" className='h-[60%] w-[60%] filter invert' />
    </div>
  )
}

export default BrandsLogo