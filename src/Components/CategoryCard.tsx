import React from 'react'

interface ICategoryCard {
    name: string;
    image: string;
    color: string;
}


function CategoryCard({ name, image, color}: ICategoryCard) {
    const bgColor = {
        darkPeach: "rgba(255, 183, 176, 1)",
        lightPeach: "rgba(255, 206, 201, 1)",
        teal: "rgba(77, 182, 177, 1)",
        lightBlue: "rgba(200, 233, 233, 1)"
    }[color];

    console.log(color)
  return (
    <div className=''>
        <div className={`bg-${color}`} style={{ backgroundColor: bgColor }}>
            
            <img src={image} alt={name} className='h-60 w-40'/>
        </div>
        <p className='text-center font-light' style={{ fontFamily: "Urbanist"}}>{name}</p>
    </div>
  )
}

export default CategoryCard