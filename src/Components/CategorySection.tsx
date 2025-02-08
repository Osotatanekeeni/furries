import React from 'react'
import CategoryCard from './CategoryCard'
import CatImage from "../assets/Images/CategoryImages/Cat.svg"
import DogImage from "../assets/Images/CategoryImages/Dog.svg"
import BirdImage from "../assets/Images/CategoryImages/Bird.svg"
import RodentImage from "../assets/Images/CategoryImages/Rodent.svg"

function CategorySection() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 p-20'>
        <h1 className='text-xl font-medium text-furriesGreen sm:text-2xl' style={{ fontFamily: "Playfair Display"}}>Shop By Pet Category</h1>
        <div className='flex flex-col items-center justify-center gap-10 space-x-4 sm:flex-row'>
            <CategoryCard name="Cat" image={CatImage} color="darkPeach" />
            <CategoryCard name="Dog" image={DogImage} color="teal" />
            <CategoryCard name="Bird" image={BirdImage} color="lightPeach" />
            <CategoryCard name="Rodent" image={RodentImage} color="lightBlue" />
            </div>
    </div>
  )
}

export default CategorySection