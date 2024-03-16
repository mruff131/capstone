import info from '../assets/images/Info.svg'
import settings from '../assets/images/Settings.svg'
import '../../index.css';


const Navbar = () => {
    return (
      <nav className="navbar flex justify-between items-center py-4 px-8">
        {/* Text on the far left */}
        <div>
          <p className="bubble-logo">Bubble</p>
        </div>
        {/* Icons on the far right */}
        <div className="flex items-center">
        <a href="#"><img src={info} alt="info icon" className=" w-12 h-12 mr-4" /> </a>
        <a href="#"><img src={settings} alt="settings icon" className="w-12 h-12" /> </a>
      </div>
      </nav>
    );
  };

export default Navbar