const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img 
        src = {imgURL} 
        alt = "shoe image" 
        className='w-[282px] h-[282px]'
      />
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        <p>{name}</p>
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;