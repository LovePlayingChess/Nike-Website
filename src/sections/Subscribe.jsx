import {Button} from "../components"
const Subscribe = () => {
  return (
    <section className = "max-container flex justify-between items-center max-lg:flex-col gap-10">
      <div className='text-4xl marker:lg:max-w-md font-palanquin font-bold'>
        Sign Up for 
        <span className='text-coral-red'> Updates </span>& Newsletter
      </div>
      <div className = "lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border rounded-full">
        <input type = 'text' placeholder = 'ganeshve@nike.org' className = 'input'/>
        <div className = "flex max-sm:justify-end items-center max-sm:w-full">
          <Button label = "Shop Now" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe