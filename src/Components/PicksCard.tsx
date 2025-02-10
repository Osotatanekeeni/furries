import React from 'react'
import { FaPaw } from 'react-icons/fa';

interface IPicksCard {
  description: string;
  image: string;
  price: string;
  rating: number;
}
function PicksCard({ description, image, price, rating}: IPicksCard) {
  return (
    <div className='flex w-60 border border-cardBorder flex-col justify-between gap-4 rounded-xl bg-white p-3'>
        <div className='flex size-40 items-center justify-center'>
        <img src={image} alt={description} className='size-40'/>
        </div>
        <p className='text-xs font-light' style={{ fontFamily: "Urbanist"}}>{description}</p>
        <p className='text-xs font-medium' style={{ fontFamily: "Urbanist"}}>NGN {price}</p>
        <button className='rounded-3xl bg-button-gradient p-2 px-3 text-sm text-white'>Add to Cart</button>
        {/* Rating container */}
        <div className='flex gap-2'>
        {Array.from({ length: rating }, (_, index) => (
          <FaPaw key={index} className='text-furriesOrange' />
        ))}
      </div>
    </div>
  )
}

export default PicksCard