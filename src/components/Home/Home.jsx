import React from 'react'
import "./Home.css"
import man from "../../assets/photo.png"
import {TypingEffect} from "react-typing-effect"
import {useTypewriter, cursor} from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Home() {

  useGSAP(() => {
    let tl1=gsap.timeline()
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })


  const [text] = useTypewriter({
    words: [
      "WEB DEVELOPER",
      "SOFTWARE DEVELOPER", 
      "CODER",
      "FRONTEND DEVELOPER",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'm</div>
            <div className="line2">Priyanshu singh</div>
            <div className="line3">
                {text}
                {/* <TypingEffect
                  text={[
                    "WEB DEVELOPER",
                    "SOFTWARE DEVELOPER",
                    "CODER",
                    "FRONTEND DEVELOPER",
                    "BACKEND DEVELOPER",
                    "UI/UX DESIGNER"
                  ]}
                  speed={100}      // Typing speed (ms)
                  eraseSpeed={50}  // Erase speed (ms)
                  eraseDelay={1000} // Delay before erasing (ms)
                  typingDelay={500} // Delay before typing (ms)
                  cursor="_"       // Cursor symbol
                /> */}
            </div>
            <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt=''/>
      </div>
    </div>
  )
}

export default Home
