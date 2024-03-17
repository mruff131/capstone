import { useState, useEffect } from 'react';
import Model from '../assets/images/Model1.jpg';
import leftarrow from '../assets/images/left-arrow.svg';
import rightarrow from '../assets/images/right-arrow.svg';

const NewsFeed = () => {
  // State to store the current image URL and person's information
  const [imageUrl, setImageUrl] = useState(Model); // Initial image URL
  const [personInfo, setPersonInfo] = useState({ name: 'Drea', age: '23' });

  // history for back arrow
  const [imageHistory, setImageHistory] = useState<string[]>([]);
  const [personHistory, setPersonHistory] = useState<{ name: string, age: string }[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);


  


  // Function to fetch a new image URL and person's information from your API
  const fetchNewImageAndPerson = () => {
    const clientId = 'wtymvzZbnQ38d9WhVLCikp23NDRiEvUIx8-FH8HaLas';
    const apiUrl = `https://api.unsplash.com/search/photos?query=cute instragram model&count=30&client_id=${clientId}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response data to understand its structure
        let randomNumber = Math.floor(Math.random() * 9);
        const allImages = data.results[randomNumber];
        const newPersonUrl = allImages.urls.regular;
        const newPersonName = allImages.user.first_name; // pulled back from API
        const newPersonAge = Math.floor(Math.random() * 15) + 18; // Generate random age between 18 and 32

        
        setImageUrl(newPersonUrl); // Update the state with the new image URL
        setPersonInfo({ name: newPersonName, age: newPersonAge.toString() }); // Update the state with the new person's information
        
        // store history placeholder with the new person
        const placeholderImageUrl = newPersonUrl;
        setImageUrl(placeholderImageUrl)

        // Store current image URL and person's information in history
        setImageHistory(prev => [...prev, placeholderImageUrl]);
        setPersonHistory(prev => [...prev, { name: newPersonName, age: String(newPersonAge) }]);
        setHistoryIndex(prev => prev + 1);
      })

      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };


  // useEffect to fetch new image and person information when component mounts
  useEffect(() => {
    fetchNewImageAndPerson();
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

  // Function to handle the back arrow click
  const previousPerson = () => {
    if (historyIndex > 0) {
      const prevImageIndex = historyIndex - 1;
      setImageUrl(imageHistory[prevImageIndex]);
      setPersonInfo(personHistory[prevImageIndex]);
      setHistoryIndex(prevImageIndex);
    }
  };

  // Function to handle the next arrow click
  const nextPerson = () => {
    if (historyIndex < imageHistory.length - 1) {
      const nextImageIndex = historyIndex + 1;
      setImageUrl(imageHistory[nextImageIndex]);
      setPersonInfo(personHistory[nextImageIndex]);
      setHistoryIndex(nextImageIndex);
    } else {
      fetchNewImageAndPerson();
    }
  };





  return (
    <div className="relative h-screen bg-black">
      {/* Content */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className='mr-10'> <img src={leftarrow} alt="left arrow" onClick={previousPerson} style={{ cursor: 'pointer' }}/> </div>
        <div className="border-customs">
          <img 
            src={imageUrl} 
            alt="picture of model" 
            className="circle" 
          />
         <div style={{ textAlign: 'center', marginTop: '530px' }}> 
            <h1 style={{ color: 'white' }}>{personInfo.name}, {personInfo.age}</h1>
          </div>
        </div>
        <div className='ml-10'> <img src={rightarrow} alt="right arrow" onClick={nextPerson} style={{ cursor: 'pointer' }} /> </div>
        
      </div>
    </div>
  );
};

export default NewsFeed;
