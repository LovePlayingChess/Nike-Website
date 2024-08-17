import {Button} from "../components";
import {arrowRight} from "../assets/icons";
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section className = 'flex justify-between items-center gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className = 'font-palanquin text-4xl font-bold'>
          <span>We Provide You </span> 
          <span className='text-coral-red'>Super</span>
          <br />
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
        <p className = 'mt-6 info-text'> Our dedication to detail and excellence ensures your satisfaction</p>
      
        <div className='mt-11'>
          <Button label = 'View Details' iconURL={arrowRight} />
        </div>
      </div>

      <div className = 'flex-1 flex justify-center items-center'>
        <img 
        src = {shoe8} 
        alt = "shoe"
        width={570}
        height={522}
        />
      </div>
    </section>
  )
}

export default SuperQuality