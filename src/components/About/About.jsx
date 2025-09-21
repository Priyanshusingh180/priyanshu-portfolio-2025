import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(() => {
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 35%"
      }
    })
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 35%"
      }
    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 35%"
      }
    })
    gsap.from(".aboutdetails ul",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 35%"
      }
    })
    gsap.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 35%"
      }
    })
  })

  return (
    <div id='about'>
        <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>

            <div className="circle"></div>
            <div className="line"></div>

            <div className="circle"></div>
            
          </div>
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>Name</span> : Priyanshu singh
                </li>
                 <li>
                  <span>Age</span> : 18 years
                </li>
                 <li>
                  <span>Gender</span> : Male 
                </li>
                <li>
                  <span>Language Known</span> : Hindi, English 
                </li>
              </ul>
            </div>
            <div className="Education">
              <h1>Education</h1>
              <ul>
                <li>
                  <span>Degree</span> : B-TECH 
                </li>
                 <li>
                  <span>Branch</span> : Computer Science
                </li>
                 <li>
                  <span>CGPA</span> : 8.12 
                </li>
                
              </ul>
            </div>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>
                   MERN STACK WEB DEVELOPER
                </li>
                 <li>
                   C++
                </li>
                 <li>
                   DSA 
                </li>
                
              </ul>
            </div>
          </div>
            
        </div>
        <div className="rightabout">
            <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
            <Card title="CPP" image={java}/>
            <Card title="DSA" image={dsa}/>
        </div>
    </div>
  )
}

export default About
