import { Link } from 'react-router-dom';
import './homePage.css';
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  
  


  return (
    <div className="homepage">
      <img src='/orbital.png' alt='' className='orbital'/>
      <div className='left'>
        <h1>HOSNI AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Experience the power of AI-driven conversations, helping you stay organized, creative, and productive</h3>
        <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className='right'>
        <div className='imgContainer'>
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src='/bot.png' alt='' className='bot'/>
          <div className='chat'>
            <img src='/bot.png' alt=''/>
            <TypeAnimation
                sequence={[
                  "Bot : Hello! How can I assist you today?", 1000,
                  "Bot : I can help with coding, AI, and more!", 1000,
                  "Bot : Let's build something amazing together!", 1000
                ]}
                wrapper='span'
                speed={50}
                cursor={true}
                omitDeletionAnimation={true}
                repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src='/logo.png' alt=''/>
        <div className="links">
          <Link to= '/'>Terms of Services</Link>
          <span>|</span>
          <Link to= '/'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;