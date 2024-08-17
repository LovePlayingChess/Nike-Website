import {arrowRight} from "../assets/icons";
import {Button} from "../components";
import {offer} from "../assets/images";

const SpecialOffer = () => {
  return (
    <header className='flex justify-between items-center max-xl:flex-col gap-10 max-container'>
      <div className = "flex flex-1 flex-col">
        <div className = "text-4xl font-palanquin font-bold">
          <span className = "text-coral-red">Special</span> Offer
        </div>

        <p className='mt-4 info-text'>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
        </p>
        <p className='mt-4 info-text'>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
        </p>

        <div className = "flex mt-10 flex-wrap gap-4">
          <Button label = "Shop Now" iconURL = {arrowRight}/>
          <Button
              label='Learn More'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-slate-gray'
        />
        </div>
      </div>
      
      <div className = "mt-10 flex justify-center">
        <img src = {offer} alt = "shoe" width = {773} height = {687}/>
      </div>
    </header>
   
  )
}

export default SpecialOffer