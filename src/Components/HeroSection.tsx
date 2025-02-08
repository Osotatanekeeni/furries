import Navigation from './Navigation'
import HeroImage from "../assets/Images/HeroImages/HeroSection.svg";

function HeroSection() {
  return (
    <div className='w-screen bg-furriesGreen' style={{ height: '88vh', minHeight: '88vh' }}>
        <Navigation />
        <div className='flex h-full  items-center justify-between text-white'>
            {/* Text Section */}
        <div className='flex w-full lg:w-1/2 flex-col gap-4 px-16 py-4 font-medium'>
            <h1 className='text-4xl lg:text-6xl' style={{ fontFamily: "Playfair Display"}}>TREAT YOUR FURRY FRIENDS TO THE BEST</h1>
            <p className='lg:whitespace-nowrap text-lg font-light' style={{ fontFamily: "Urbanist"}}>Discover Toys treats and more for your beloved pets</p>
            <button className='mt-8 w-2/6 rounded-3xl bg-furriesOrange p-3 font-light' style={{ fontFamily: "Urbanist"}}>Shop Now</button>
        </div>

        {/* Image Section */}
        {/* <div className='w-1/2 h-full size-full object-cover' style={{ backgroundImage: `url(${HeroImage})` }}> */}
        <img src={HeroImage} alt='Hero Image' className='hidden lg:block absolute right-0 top-2 z-0 size-full w-3/4 object-cover' />
        {/* <div className='w-1/2 h-full bg-cover bg-bottom-right' style={{ backgroundImage: `url(${HeroImage})`, backgroundPosition: 'bottom right' }}> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className='border'>
        <img className='w-screen h-screen' src={HeroImage}/>
        </div> */}
        </div>
        

    </div>
  )
}

export default HeroSection