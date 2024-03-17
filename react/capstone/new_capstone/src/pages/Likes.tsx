import React from 'react';

const ImageWithText: React.FC<{ name: string; age: number; }> = ({ name, age }) => (
  <div style={{ textAlign: 'center', margin: '10px', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '10px' }}>
    <img src={`/api_images/${name}.jpg`} alt={name} style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover'}} className='img-customs' />
    <div>{name}, {age}</div>
  </div>
);

const Likes: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'black' }}>
      <h1 style={{ color: 'white' }}>Who You Liked</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <ImageWithText name="1" age={25} />
          <ImageWithText name="2" age={22} />
          <ImageWithText name="3" age={26} />
          <ImageWithText name="4" age={24} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <ImageWithText name="5" age={30} />
          <ImageWithText name="6" age={28} />
          <ImageWithText name="7" age={29} />
          <ImageWithText name="8" age={27} />
        </div>
      </div>
    </div>
  );
};

export default Likes;
