import Navigation from './Navigation'
import HeroImage from "../assets/Images/HeroImages/HeroSection.svg";

function HeroSection() {
  return (
    <div className='w-screen bg-furriesGreen' style={{ height: '88vh', minHeight: '88vh' }}>
        <Navigation />
        <div className='flex h-full  items-center justify-between text-white'>
            {/* Text Section */}
        <div className='flex w-full flex-col gap-4 px-16 py-4 font-medium lg:w-1/2'>
            <h1 className='text-4xl lg:text-6xl' style={{ fontFamily: "Playfair Display"}}>TREAT YOUR FURRY FRIENDS TO THE BEST</h1>
            <p className='text-lg font-light lg:whitespace-nowrap' style={{ fontFamily: "Urbanist"}}>Discover Toys treats and more for your beloved pets</p>
            <button className='mt-8 w-full sm:w-2/6 rounded-3xl bg-furriesOrange p-3 font-light' style={{ fontFamily: "Urbanist"}}>Shop Now</button>
        </div>

        {/* Image Section */}
        <img src={HeroImage} alt='Hero Image' className='absolute right-0 top-2 z-0 hidden size-full w-3/4 object-cover lg:block' />
        </div>
        

    </div>
  )
}

export default HeroSection