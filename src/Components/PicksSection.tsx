import React, { useRef } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import BrushImage from "../assets/Images/PicksImages/PetBrush.svg"
import CastleImage from "../assets/Images/PicksImages/Castle.svg"
import ChewToysImage from "../assets/Images/PicksImages/ChewToys.svg"
import DogFoodImage from "../assets/Images/PicksImages/DogFood.svg"
import ScratchingPost from "../assets/Images/PicksImages/ScratchingPost.svg"
import PicksCard from './PicksCard'


function PicksSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
};

const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };


  return (
    <div className="relative flex flex-col gap-8 px-20  py-10">
        <h1 className='border text-center text-2xl text-furriesGreen' style={{ fontFamily: "Playfair Display"}}>Paw-some Picks For Your Pet</h1>
        <div ref={scrollContainerRef} className='flex gap-9 overflow-x-auto'>
        <PicksCard description="Pet Grooming Brush with Steam For Thick Furs" image={BrushImage} price="42 000" rating={4} />
        <PicksCard description="Wucin Gadi Resin Cartoon Castle Aquarium Jewelry" image={CastleImage} price="59 000" rating={5} />
        <PicksCard description="Soft and Durable Dog Chew Toys for Puppy Teething - 6..." image={ChewToysImage} price="108 000" rating={5} />
        <PicksCard description="Binggo Dog Food" image={DogFoodImage} price="15 000" rating={4} />
        <PicksCard description="Cat Scratching Post" image={ScratchingPost} price="240 000" rating={5} />

        <PicksCard description="Pet Grooming Brush with Steam For Thick Furs" image={BrushImage} price="42 000" rating={4} />
        <PicksCard description="Wucin Gadi Resin Cartoon Castle Aquarium Jewelry" image={CastleImage} price="59 000" rating={5} />
        <PicksCard description="Soft and Durable Dog Chew Toys for Puppy Teething - 6..." image={ChewToysImage} price="108 000" rating={5} />
        <PicksCard description="Binggo Dog Food" image={DogFoodImage} price="15 000" rating={4} />
        <PicksCard description="Cat Scratching Post" image={ScratchingPost} price="240 000" rating={5} />
        
        <PicksCard description="Pet Grooming Brush with Steam For Thick Furs" image={BrushImage} price="42 000" rating={4} />
        <PicksCard description="Wucin Gadi Resin Cartoon Castle Aquarium Jewelry" image={CastleImage} price="59 000" rating={5} />
        <PicksCard description="Soft and Durable Dog Chew Toys for Puppy Teething - 6..." image={ChewToysImage} price="108 000" rating={5} />
        <PicksCard description="Binggo Dog Food" image={DogFoodImage} price="15 000" rating={4} />
        <PicksCard description="Cat Scratching Post" image={ScratchingPost} price="240 000" rating={5} />

        <PicksCard description="Pet Grooming Brush with Steam For Thick Furs" image={BrushImage} price="42 000" rating={4} />
        <PicksCard description="Wucin Gadi Resin Cartoon Castle Aquarium Jewelry" image={CastleImage} price="59 000" rating={5} />
        <PicksCard description="Soft and Durable Dog Chew Toys for Puppy Teething - 6..." image={ChewToysImage} price="108 000" rating={5} />
        <PicksCard description="Binggo Dog Food" image={DogFoodImage} price="15 000" rating={4} />
        <PicksCard description="Cat Scratching Post" image={ScratchingPost} price="240 000" rating={5} />
    </div>
    <button onClick={scrollLeft} className="absolute left-10 top-1/2 -translate-y-1/2 rounded-full border-2 border-furriesGreen p-2 text-white">
        <FaArrowLeft className='text-furriesGreen' />
      </button>
      <button onClick={scrollRight} className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full border-2 border-furriesGreen p-2 text-white">
        <FaArrowRight className='text-furriesGreen' />
      </button>
    </div>
  )
}

export default PicksSection