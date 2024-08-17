import {useState} from "react";
import {arrowRight} from "../assets/icons";
import {ShoeCard, Button} from "../components";
import {shoes, statistics} from "../constants";
import {bigShoe1} from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  
  return (
    <header className = "w-full flex xl:flex-row flex-col justify-center gap-10 max-container">
      <div className = "relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        
        <p className = "text-coral-red font-montserrat text-xl">Our Summer collections</p>

        <h1 className = "mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className = "">The New Arrival</span>
          <br />
          <span className = "text-coral-red mt-3">Nike</span> Shoes
        </h1>

        <p className = "font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        
        <Button label = 'Shop Now' iconURL={arrowRight} />
        
        <div className = "flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div>
              <p className = "text-4xl font-palanquin font-bold">{item.value}</p>
              <p className = "leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        
        <img 
          src = {bigShoeImg} 
          alt = "shoe" 
          width = {610} 
          height = {502}
          className='relative z-10' 
        />

        <div className = "flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((bigshoe) => (
            <div>
              <ShoeCard
                imgURL = {bigshoe} 
                changeBigShoeImage = {(shoe) => setBigShoeImg(shoe)} 
                bigShoeImg = {bigShoeImg}
                />
            </div>
          ))}
        </div>
        
      </div>
    </header>
  )
}

export default Hero

