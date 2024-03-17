import Model from '../assets/images/Model1.jpg';
import leftarrow from '../assets/images/left-arrow.svg';
import rightarrow from '../assets/images/right-arrow.svg';
// import ImageHover from '../components/ImageHover';

const NewsFeed = () => {
  return (
    <div className="relative h-screen bg-black">
      

      {/* Content */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className='mr-10'> <a href=""><img src={leftarrow} alt="left arrow"/></a> </div>
        <div className="border-customs">
          <img 
            src={Model} 
            alt="picture of model" 
            className="circle" 
          />
        </div>
        <div className='ml-10'> <a href=""><img src={rightarrow} alt="right arrow"/></a> </div>
        <div className="flex justify-center items-center h-full relative z-10">
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;




