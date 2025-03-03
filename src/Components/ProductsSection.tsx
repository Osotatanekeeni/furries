import { useRef, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import BrushImage from "../assets/Images/PicksImages/PetBrush.svg"
import CastleImage from "../assets/Images/PicksImages/Castle.svg"
import ChewToysImage from "../assets/Images/PicksImages/ChewToys.svg"
import DogFoodImage from "../assets/Images/PicksImages/DogFood.svg"
import ScratchingPost from "../assets/Images/PicksImages/ScratchingPost.svg"
import PicksCard from './PicksCard'

function ProductsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPetToysClicked, setIsPetToysClicked] = useState(false);
    const [isPetFoodClicked, setIsPetFoodClicked] = useState(false);
    const [isPetProductsClicked, setIsPetProductsClicked] = useState(false);
    const [showAllProducts, setShowAllProducts] = useState(true);
    
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

      const handleProductsClick = () => {
        setIsPetProductsClicked(true);
        setIsPetToysClicked(false);
        setIsPetFoodClicked(false);
        setShowAllProducts(false);
      }

        const handlePetToysClick = () => {
            setIsPetToysClicked(true);
            setIsPetFoodClicked(false);
            setIsPetProductsClicked(false);
            setShowAllProducts(false);
        }

        const handlePetFoodClick = () => {
            setIsPetFoodClicked(true);
            setIsPetToysClicked(false);
            setIsPetProductsClicked(false);
            setShowAllProducts(false);
        }
  return (
    <div className="relative flex flex-col gap-8 px-20 py-10">
        <div className='flex w-full flex-col  gap-2 sm:flex-row sm:gap-6'>
            <button className={`rounded-xl border border-buttonBorder p-2 text-lg font-medium ${isPetToysClicked ? "border-none text-furriesGreen" : "text-black"}`} style={{ fontFamily: "Playfair Display"}} onClick={handlePetToysClick}>Pet Toys</button>
            <button className={`rounded-xl border border-buttonBorder p-2 text-lg font-medium ${isPetFoodClicked ? "border-none text-furriesGreen" : "text-black"}`} style={{ fontFamily: "Playfair Display"}} onClick={handlePetFoodClick}>Pet Food</button>
            <button className={`rounded-xl border border-buttonBorder p-2 text-lg font-medium ${isPetProductsClicked ? "border-none text-furriesGreen" : "text-black"}`} style={{ fontFamily: "Playfair Display"}} onClick={handleProductsClick}>Pet Accessories</button>
        </div>
        <div ref={scrollContainerRef} className='flex gap-9 overflow-x-auto'>

        {isPetToysClicked && (
            <>
            <PicksCard description="Soft and Durable Dog Chew Toys for Puppy Teething - 6..." image={ChewToysImage} price="108 000" rating={5} />
            </>
        )}

        {isPetFoodClicked && (
            <>
            <PicksCard description="Binggo Dog Food" image={DogFoodImage} price="15 000" rating={4} />
            </>
        )}

        {isPetProductsClicked && (
            <>
            <PicksCard description="Pet Grooming Brush with Steam For Thick Furs" image={BrushImage} price="42 000" rating={4} />
            <PicksCard description="Wucin Gadi Resin Cartoon Castle Aquarium Jewelry" image={CastleImage} price="59 000" rating={5} />
            <PicksCard description="Cat Scratching Post" image={ScratchingPost} price="240 000" rating={5} />
            </>
        )}
        {showAllProducts && (
            <>
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
        <PicksCard description="Cat Scratching Post" image={ScratchingPost} price="240 000" rating={5} /></>
        )}
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

export default ProductsSection