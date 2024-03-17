import Background from '../assets/images/Background.jpg'
import '../../index.css';

function Splash() {
  return (
    
    <div
    style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    className='flex flex-row justify-center items-center h-screen'
    >
        <div className='flex flex-col items-center justify-center h-screen flex-1'>
            <h1 className="custom-text mb-8">
            <span className="bg-customRed to-customYellow text-transparent bg-clip-text">Love</span>? It's Found Here.
            </h1>
            <button className="w-352 bg-gradient-to-r from-customRed to-customYellow text-white font-bold py-2 px-10 rounded-full button-customs">Create Account</button>
            <button className="w-175 bg-white text-black font-bold py-2 px-10 rounded-full mt-5 button-customs">Log In</button>
        </div>
    </div>
  )
}
export default Splash

