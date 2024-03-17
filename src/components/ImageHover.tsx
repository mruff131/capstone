import '../../index.css';

import Model from '../assets/images/Model1.jpg';

const ImageHover = () => {
  return (
    <div className="model-container">
      <img src={Model} alt="picture of model" className="model-image" />
      <div className="button-container">
        <button>One</button>
        <button>Two</button>
      </div>
    </div>
  );
};

export default ImageHover;
